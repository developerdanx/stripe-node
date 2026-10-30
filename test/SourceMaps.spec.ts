import * as childProcess from 'child_process';
import * as fs from 'fs';
import * as os from 'os';
import * as path from 'path';
import {expect} from 'chai';

describe('package source maps', () => {
  const root = path.resolve(__dirname, '..');
  let publishedFiles: Set<string>;

  before(function() {
    this.timeout(15000);
    const cache = fs.mkdtempSync(path.join(os.tmpdir(), 'stripe-pack-'));
    try {
      const [pack] = JSON.parse(
        childProcess.execSync('npm pack --dry-run --ignore-scripts --json', {
          cwd: root,
          encoding: 'utf8',
          env: {
            ...process.env,
            npm_config_cache: cache,
            npm_config_update_notifier: 'false',
          },
          timeout: 10000,
        })
      );
      publishedFiles = new Set(
        pack.files.map((file: {path: string}) => file.path)
      );
    } finally {
      fs.rmSync(cache, {recursive: true, force: true});
    }
  });

  for (const format of ['cjs', 'esm']) {
    it(`resolves the sources in published ${format} maps`, function() {
      // npm test builds only CJS; just test and CI build both formats.
      if (format === 'esm' && !fs.existsSync(path.join(root, format))) {
        this.skip();
      }

      const filenames = [...publishedFiles].filter(
        (filename) =>
          filename.startsWith(`${format}/`) && filename.endsWith('.js.map')
      );
      expect(filenames).not.to.be.empty;

      for (const filename of filenames) {
        const map = JSON.parse(
          fs.readFileSync(path.join(root, filename), 'utf8')
        );
        map.sources.forEach((source: string, index: number) => {
          if (typeof map.sourcesContent?.[index] === 'string') {
            return;
          }
          const sourcePath = path.posix.normalize(
            path.posix.join(
              path.posix.dirname(filename),
              map.sourceRoot || '',
              source
            )
          );
          expect(
            publishedFiles.has(sourcePath),
            `${filename}: ${source}`
          ).to.equal(true);
        });
      }
    });
  }
});
