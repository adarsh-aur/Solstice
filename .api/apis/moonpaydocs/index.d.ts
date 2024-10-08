import type * as types from './types';
import type { ConfigOptions, FetchResponse } from 'api/dist/core';
import Oas from 'oas';
import APICore from 'api/dist/core';
declare class SDK {
    spec: Oas;
    core: APICore;
    constructor();
    /**
     * Optionally configure various options that the SDK allows.
     *
     * @param config Object of supported SDK options and toggles.
     * @param config.timeout Override the default `fetch` request timeout of 30 seconds. This number
     * should be represented in milliseconds.
     */
    config(config: ConfigOptions): void;
    /**
     * If the API you're using requires authentication you can supply the required credentials
     * through this method and the library will magically determine how they should be used
     * within your API request.
     *
     * With the exception of OpenID and MutualTLS, it supports all forms of authentication
     * supported by the OpenAPI specification.
     *
     * @example <caption>HTTP Basic auth</caption>
     * sdk.auth('username', 'password');
     *
     * @example <caption>Bearer tokens (HTTP or OAuth 2)</caption>
     * sdk.auth('myBearerToken');
     *
     * @example <caption>API Keys</caption>
     * sdk.auth('myApiKey');
     *
     * @see {@link https://spec.openapis.org/oas/v3.0.3#fixed-fields-22}
     * @see {@link https://spec.openapis.org/oas/v3.1.0#fixed-fields-22}
     * @param values Your auth credentials for the API; can specify up to two strings or numbers.
     */
    auth(...values: string[] | number[]): this;
    /**
     * If the API you're using offers alternate server URLs, and server variables, you can tell
     * the SDK which one to use with this method. To use it you can supply either one of the
     * server URLs that are contained within the OpenAPI definition (along with any server
     * variables), or you can pass it a fully qualified URL to use (that may or may not exist
     * within the OpenAPI definition).
     *
     * @example <caption>Server URL with server variables</caption>
     * sdk.server('https://{region}.api.example.com/{basePath}', {
     *   name: 'eu',
     *   basePath: 'v14',
     * });
     *
     * @example <caption>Fully qualified server URL</caption>
     * sdk.server('https://eu.api.example.com/v14');
     *
     * @param url Server URL
     * @param variables An object of variables to replace into the server URL.
     */
    server(url: string, variables?: {}): void;
    /**
     * Returns an array of successful Buy transactions which fulfill criteria supplied in the
     * query parameters. Each entry in the array is a separate transaction object. Transactions
     * will be listed from newest to oldest.
     *
     * @summary List Buy transactions
     * @throws FetchError<401, types.GetV1TransactionsResponse401> Unauthorized
     */
    getV1Transactions(metadata: types.GetV1TransactionsMetadataParam): Promise<FetchResponse<200, types.GetV1TransactionsResponse200>>;
    /**
     * Returns very basic information about a customer based on their MoonPay ID. For you to be
     * able to retrieve a customer, they must have at least one session initiated with your
     * `Api-Key`.
     *
     * @summary Get customer
     * @throws FetchError<401, types.GetV1CustomersCustomeridResponse401> Unauthorized
     */
    getV1CustomersCustomerid(metadata: types.GetV1CustomersCustomeridMetadataParam): Promise<FetchResponse<200, types.GetV1CustomersCustomeridResponse200>>;
    /**
     * Returns very basic information about a customer based on their external customer ID. For
     * you to be able to retrieve a customer, they must have at least one session initiated
     * with your `API-Key`. Please note that this endpoint returns an array of objects because
     * we cannot ensure the uniqueness of the external customer ID.
     *
     * @summary Get customer by external ID
     * @throws FetchError<401, types.GetV1CustomersExtCustomeridResponse401> Unauthorized
     */
    getV1CustomersExtCustomerid(metadata: types.GetV1CustomersExtCustomeridMetadataParam): Promise<FetchResponse<200, types.GetV1CustomersExtCustomeridResponse200>>;
    /**
     * Returns an array of successful Sell transactions which fulfill criteria supplied in the
     * query parameters. Each entry in the array is a separate transaction object. Transactions
     * will be listed from newest to oldest. This call will return an error if `customerId` is
     * not supplied in the query parameters.
     *
     * @summary List Sell transactions
     * @throws FetchError<401, types.GetV3SellTransactionsResponse401> Unauthorized
     */
    getV3Sell_transactions(metadata: types.GetV3SellTransactionsMetadataParam): Promise<FetchResponse<200, types.GetV3SellTransactionsResponse200>>;
    /**
     * Cancels a sell transaction. This endpoint will return HTTP status <span
     * class="value">204 No Content</span> if the sell transaction was successfully canceled.
     * If sell transaction could not be canceled (e.g. because it has already been completed)
     * it will return HTTP status <span class="value">409 Conflict</span>.
     *
     * @summary Cancel Sell transaction
     * @throws FetchError<401, types.DeleteV3SellTransactionsTransactionidResponse401> Unauthorized
     * @throws FetchError<409, types.DeleteV3SellTransactionsTransactionidResponse409> Conflict
     */
    deleteV3Sell_transactionsTransactionid(metadata: types.DeleteV3SellTransactionsTransactionidMetadataParam): Promise<FetchResponse<204, types.DeleteV3SellTransactionsTransactionidResponse204>>;
    /**
     * Cancels a sell transaction based on their external transaction ID. This endpoint will
     * return HTTP status <span class="value">204 No Content</span> if the sell transaction was
     * successfully canceled. If sell transaction could not be canceled (e.g. because it has
     * already been completed) it will return HTTP status <span class="value">409
     * Conflict</span>.
     *
     * @summary Cancel Sell transaction by external ID
     * @throws FetchError<401, types.DeleteV3SellTransactionsExtTransactionidResponse401> Unauthorized
     * @throws FetchError<409, types.DeleteV3SellTransactionsExtTransactionidResponse409> Conflict
     */
    deleteV3Sell_transactionsExtTransactionid(metadata: types.DeleteV3SellTransactionsExtTransactionidMetadataParam): Promise<FetchResponse<204, types.DeleteV3SellTransactionsExtTransactionidResponse204>>;
}
declare const createSDK: SDK;
export = createSDK;
