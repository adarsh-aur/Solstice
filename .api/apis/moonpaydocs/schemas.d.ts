declare const DeleteV3SellTransactionsExtTransactionid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly examples: readonly ["123"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid Sell transaction ID.";
                };
            };
            readonly required: readonly ["transactionId"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "409": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const DeleteV3SellTransactionsTransactionid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly transactionId: {
                    readonly type: "string";
                    readonly examples: readonly ["123"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid Sell transaction ID.";
                };
            };
            readonly required: readonly ["transactionId"];
        }];
    };
    readonly response: {
        readonly "204": {
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "409": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1CustomersCustomerid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly customerId: {
                    readonly type: "string";
                    readonly examples: readonly ["123"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid customer ID.";
                };
            };
            readonly required: readonly ["customerId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly object: {
                    readonly type: "string";
                    readonly description: "The response object (to be documented).";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1CustomersExtCustomerid: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly customerId: {
                    readonly type: "string";
                    readonly examples: readonly ["123"];
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                    readonly description: "A valid external customer ID.";
                };
            };
            readonly required: readonly ["customerId"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly object: {
                    readonly type: "string";
                    readonly description: "The response object (to be documented).";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV1Transactions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly query: {
                    readonly type: "object";
                    readonly properties: {
                        readonly externalTransactionId: {
                            readonly type: "string";
                            readonly description: "An identifier associated with a transaction, provided by you.";
                            readonly examples: readonly ["123"];
                        };
                        readonly customerId: {
                            readonly type: "string";
                            readonly description: "Unique identifier for a customer.";
                            readonly examples: readonly ["123"];
                        };
                        readonly externalCustomerId: {
                            readonly type: "string";
                            readonly description: "An identifier associated with a customer, provided by you. `customerId` filter takes precedence over `externalCustomerId`.";
                            readonly examples: readonly ["123"];
                        };
                        readonly startDate: {
                            readonly type: "string";
                            readonly description: "The earliest date on which transactions should have been made. Format is YYYY-MM-DD.";
                            readonly examples: readonly ["2023-07-01"];
                        };
                        readonly endDate: {
                            readonly type: "string";
                            readonly description: "The most recent date on which transactions should have been made. Format is YYYY-MM-DD.";
                            readonly examples: readonly ["2023-07-31"];
                        };
                        readonly limit: {
                            readonly type: "integer";
                            readonly description: "A positive integer representing the maximum number of transaction objects to be returned. Default is <span class=\"value\">10</span>, minimum is <span class=\"value\">1</span> and maximum is <span class=\"value\">50</span>.";
                            readonly examples: readonly [20];
                        };
                        readonly offset: {
                            readonly type: "integer";
                            readonly description: "A positive integer representing the number of transaction objects to skip before returning the list. An offset of <span class=\"value\">1</span> means the list will start with the second-newest transaction.";
                            readonly examples: readonly [1];
                        };
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["query"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly object: {
                    readonly type: "string";
                    readonly description: "The response object (to be documented).";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
declare const GetV3SellTransactions: {
    readonly metadata: {
        readonly allOf: readonly [{
            readonly type: "object";
            readonly properties: {
                readonly query: {
                    readonly type: "object";
                    readonly properties: {
                        readonly externalTransactionId: {
                            readonly type: "string";
                            readonly description: "An identifier associated with a transaction, provided by you.";
                            readonly examples: readonly ["123"];
                        };
                        readonly customerId: {
                            readonly type: "string";
                            readonly description: "Unique identifier for a customer.";
                            readonly examples: readonly ["123"];
                        };
                        readonly externalCustomerId: {
                            readonly type: "string";
                            readonly description: "An identifier associated with a customer, provided by you. `customerId` filter takes precedence over `externalCustomerId`.";
                            readonly examples: readonly ["123"];
                        };
                        readonly startDate: {
                            readonly type: "string";
                            readonly description: "The earliest date on which transactions should have been made. Format is YYYY-MM-DD.";
                            readonly examples: readonly ["2023-07-01"];
                        };
                        readonly endDate: {
                            readonly type: "string";
                            readonly description: "The most recent date on which transactions should have been made. Format is YYYY-MM-DD.";
                            readonly examples: readonly ["2023-07-31"];
                        };
                        readonly limit: {
                            readonly type: "integer";
                            readonly description: "A positive integer representing the maximum number of transaction objects to be returned. Default is <span class=\"value\">10</span>, minimum is <span class=\"value\">1</span> and maximum is <span class=\"value\">50</span>.";
                            readonly examples: readonly [20];
                        };
                        readonly offset: {
                            readonly type: "integer";
                            readonly description: "A positive integer representing the number of transaction objects to skip before returning the list. An offset of <span class=\"value\">1</span> means the list will start with the second-newest transaction.";
                            readonly examples: readonly [1];
                        };
                    };
                    readonly $schema: "http://json-schema.org/draft-04/schema#";
                };
            };
            readonly required: readonly ["query"];
        }];
    };
    readonly response: {
        readonly "200": {
            readonly type: "object";
            readonly properties: {
                readonly object: {
                    readonly type: "string";
                    readonly description: "The response object (to be documented).";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
        readonly "401": {
            readonly type: "object";
            readonly properties: {
                readonly message: {
                    readonly type: "string";
                    readonly description: "A descriptive error message.";
                };
                readonly type: {
                    readonly type: "string";
                    readonly description: "An error type.";
                };
            };
            readonly $schema: "http://json-schema.org/draft-04/schema#";
        };
    };
};
export { DeleteV3SellTransactionsExtTransactionid, DeleteV3SellTransactionsTransactionid, GetV1CustomersCustomerid, GetV1CustomersExtCustomerid, GetV1Transactions, GetV3SellTransactions };
