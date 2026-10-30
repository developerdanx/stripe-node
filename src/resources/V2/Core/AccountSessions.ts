// File generated from our OpenAPI spec

import {StripeResource} from '../../../StripeResource.js';
import {AccountSessionResource} from './AccountSessionResources.js';
import {RequestOptions, Response} from '../../../lib.js';

export class AccountSessionResource extends StripeResource {
  /**
   * Create an Account Session.
   * @throws Stripe.RateLimitError
   */
  create(
    params: V2.Core.AccountSessionCreateParams,
    options?: RequestOptions
  ): Promise<Response<AccountSessionResource>> {
    return this._makeRequest(
      'POST',
      '/v2/core/account_sessions',
      params,
      options
    ) as any;
  }
}
export namespace V2 {
  export namespace Core {
    export interface AccountSessionCreateParams {
      /**
       * The ID of the account to create an Account Session for.
       */
      account: string;

      /**
       * The embedded components to enable for this Account Session.
       */
      components: AccountSessionCreateParams.Components;

      /**
       * Permissions to grant across the enabled components.
       */
      scopes?: AccountSessionCreateParams.Scopes;
    }

    export namespace AccountSessionCreateParams {
      export interface Components {
        /**
         * Settings for the Account Management embedded component.
         */
        account_management?: Components.AccountManagement;

        /**
         * Settings for the Account Onboarding embedded component.
         */
        account_onboarding?: Components.AccountOnboarding;

        /**
         * Settings for the Agentic Commerce Settings embedded component.
         */
        agentic_commerce_settings?: Components.AgenticCommerceSettings;

        /**
         * Settings for the App Install embedded component.
         */
        app_install?: Components.AppInstall;

        /**
         * Settings for the App Viewport embedded component.
         */
        app_viewport?: Components.AppViewport;

        /**
         * Settings for the Balance Report embedded component.
         */
        balance_report?: Components.BalanceReport;

        /**
         * Settings for the Balances embedded component.
         */
        balances?: Components.Balances;

        /**
         * Settings for the Bills embedded component.
         */
        bills?: Components.Bills;

        /**
         * Settings for the Capital Financing embedded component.
         */
        capital_financing?: Components.CapitalFinancing;

        /**
         * Settings for the Capital Financing Application embedded component.
         */
        capital_financing_application?: Components.CapitalFinancingApplication;

        /**
         * Settings for the Capital Financing Promotion embedded component.
         */
        capital_financing_promotion?: Components.CapitalFinancingPromotion;

        /**
         * Settings for the Check Scanning embedded component.
         */
        check_scanning?: Components.CheckScanning;

        /**
         * Settings for the Disputes List embedded component.
         */
        disputes_list?: Components.DisputesList;

        /**
         * Settings for the Documents embedded component.
         */
        documents?: Components.Documents;

        /**
         * Settings for the Export Tax Transactions embedded component.
         */
        export_tax_transactions?: Components.ExportTaxTransactions;

        /**
         * Settings for the Financial Account Rewards embedded component.
         */
        financial_account_rewards?: Components.FinancialAccountRewards;

        /**
         * Settings for the Financial Accounts embedded component.
         */
        financial_accounts?: Components.FinancialAccounts;

        /**
         * Settings for the Financial Accounts Transactions embedded component.
         */
        financial_accounts_transactions?: Components.FinancialAccountsTransactions;

        /**
         * Settings for the Instant Payouts Promotion embedded component.
         */
        instant_payouts_promotion?: Components.InstantPayoutsPromotion;

        /**
         * Settings for the Invoice History embedded component.
         */
        invoice_history?: Components.InvoiceHistory;

        /**
         * Settings for the Issuing Card embedded component.
         */
        issuing_card?: Components.IssuingCard;

        /**
         * Settings for the Issuing Cards List embedded component.
         */
        issuing_cards_list?: Components.IssuingCardsList;

        /**
         * Settings for the Network Cost Passthrough Report embedded component.
         */
        network_cost_passthrough_report?: Components.NetworkCostPassthroughReport;

        /**
         * Settings for the Notification Banner embedded component.
         */
        notification_banner?: Components.NotificationBanner;

        /**
         * Settings for the Payment Details embedded component.
         */
        payment_details?: Components.PaymentDetails;

        /**
         * Settings for the Payment Disputes embedded component.
         */
        payment_disputes?: Components.PaymentDisputes;

        /**
         * Settings for the Payment Method Settings embedded component.
         */
        payment_method_settings?: Components.PaymentMethodSettings;

        /**
         * Settings for the Payments embedded component.
         */
        payments?: Components.Payments;

        /**
         * Settings for the Payout Details embedded component.
         */
        payout_details?: Components.PayoutDetails;

        /**
         * Settings for the Payout Reconciliation Report embedded component.
         */
        payout_reconciliation_report?: Components.PayoutReconciliationReport;

        /**
         * Settings for the Payouts embedded component.
         */
        payouts?: Components.Payouts;

        /**
         * Settings for the Payouts List embedded component.
         */
        payouts_list?: Components.PayoutsList;

        /**
         * Settings for the Product Tax Code Selector embedded component.
         */
        product_tax_code_selector?: Components.ProductTaxCodeSelector;

        /**
         * Settings for the Reporting Chart embedded component.
         */
        reporting_chart?: Components.ReportingChart;

        /**
         * Settings for the Tax Registrations embedded component.
         */
        tax_registrations?: Components.TaxRegistrations;

        /**
         * Settings for the Tax Settings embedded component.
         */
        tax_settings?: Components.TaxSettings;

        /**
         * Settings for the Tax Threshold Monitoring embedded component.
         */
        tax_threshold_monitoring?: Components.TaxThresholdMonitoring;

        /**
         * Settings for the Terminal Hardware Orders embedded component.
         */
        terminal_hardware_orders?: Components.TerminalHardwareOrders;

        /**
         * Settings for the Terminal Hardware Shop embedded component.
         */
        terminal_hardware_shop?: Components.TerminalHardwareShop;
      }

      export interface Scopes {
        /**
         * The Stripe App IDs allowed in the enabled app components.
         */
        allowed_stripe_app_ids?: Array<string>;

        /**
         * Whether to allow capturing payments.
         */
        capture_payments?: Scopes.CapturePayments;

        /**
         * Controls whether creating instant payouts is enabled, disabled, or determined by Dashboard rules.
         */
        create_instant_payouts?: Scopes.CreateInstantPayouts;

        /**
         * Whether to allow creating outbound payments.
         */
        create_outbound_payments?: Scopes.CreateOutboundPayments;

        /**
         * Whether to allow changing the payout schedule.
         */
        create_payout_schedule?: Scopes.CreatePayoutSchedule;

        /**
         * Whether to allow creating standard payouts.
         */
        create_standard_payouts?: Scopes.CreateStandardPayouts;

        /**
         * Whether to allow creating US paper checks on the application.
         */
        create_us_paper_check_on_application?: Scopes.CreateUsPaperCheckOnApplication;

        /**
         * Whether to disable Stripe user authentication in the enabled components.
         */
        disable_stripe_user_authentication?: Scopes.DisableStripeUserAuthentication;

        /**
         * Whether to allow managing bills.
         */
        manage_bills?: Scopes.ManageBills;

        /**
         * Whether to allow managing destination and on-behalf-of charges.
         */
        manage_destination_on_behalf_of_charges?: Scopes.ManageDestinationOnBehalfOfCharges;

        /**
         * Whether to allow managing Issuing cardholders.
         */
        manage_issuing_cardholders?: Scopes.ManageIssuingCardholders;

        /**
         * Whether to allow managing Issuing cards.
         */
        manage_issuing_cards?: Scopes.ManageIssuingCards;

        /**
         * Whether to allow managing Issuing disputes.
         */
        manage_issuing_disputes?: Scopes.ManageIssuingDisputes;

        /**
         * Whether to allow managing Issuing spending controls.
         */
        manage_issuing_spending_controls?: Scopes.ManageIssuingSpendingControls;

        /**
         * Whether to allow managing payment disputes.
         */
        manage_payment_disputes?: Scopes.ManagePaymentDisputes;

        /**
         * Whether to allow managing payout methods.
         */
        manage_payout_methods?: Scopes.ManagePayoutMethods;

        /**
         * Whether to allow refunding payments.
         */
        manage_refund_payments?: Scopes.ManageRefundPayments;

        /**
         * Whether to allow managing Smart Disputes.
         */
        manage_smart_disputes?: Scopes.ManageSmartDisputes;
      }

      export namespace Components {
        export interface AccountManagement {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface AccountOnboarding {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface AgenticCommerceSettings {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface AppInstall {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface AppViewport {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface BalanceReport {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface Balances {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface Bills {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface CapitalFinancing {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface CapitalFinancingApplication {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface CapitalFinancingPromotion {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface CheckScanning {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface DisputesList {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface Documents {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface ExportTaxTransactions {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface FinancialAccountRewards {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface FinancialAccounts {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface FinancialAccountsTransactions {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface InstantPayoutsPromotion {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface InvoiceHistory {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface IssuingCard {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface IssuingCardsList {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface NetworkCostPassthroughReport {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface NotificationBanner {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface PaymentDetails {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface PaymentDisputes {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface PaymentMethodSettings {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface Payments {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface PayoutDetails {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface PayoutReconciliationReport {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface Payouts {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface PayoutsList {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface ProductTaxCodeSelector {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface ReportingChart {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface TaxRegistrations {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface TaxSettings {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface TaxThresholdMonitoring {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface TerminalHardwareOrders {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }

        export interface TerminalHardwareShop {
          /**
           * Whether this embedded component is enabled.
           */
          enabled: boolean;
        }
      }

      export namespace Scopes {
        export type CapturePayments = 'disabled' | 'enabled';

        export type CreateInstantPayouts =
          | 'disabled'
          | 'enabled'
          | 'use_dashboard_rules';

        export type CreateOutboundPayments = 'disabled' | 'enabled';

        export type CreatePayoutSchedule = 'disabled' | 'enabled';

        export type CreateStandardPayouts = 'disabled' | 'enabled';

        export type CreateUsPaperCheckOnApplication = 'disabled' | 'enabled';

        export type DisableStripeUserAuthentication = 'disabled' | 'enabled';

        export type ManageBills = 'disabled' | 'enabled';

        export type ManageDestinationOnBehalfOfCharges = 'disabled' | 'enabled';

        export type ManageIssuingCardholders = 'disabled' | 'enabled';

        export type ManageIssuingCards = 'disabled' | 'enabled';

        export type ManageIssuingDisputes = 'disabled' | 'enabled';

        export type ManageIssuingSpendingControls = 'disabled' | 'enabled';

        export type ManagePaymentDisputes = 'disabled' | 'enabled';

        export type ManagePayoutMethods = 'disabled' | 'enabled';

        export type ManageRefundPayments = 'disabled' | 'enabled';

        export type ManageSmartDisputes = 'disabled' | 'enabled';
      }
    }
  }
}
