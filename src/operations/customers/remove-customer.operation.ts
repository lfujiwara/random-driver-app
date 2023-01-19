export interface RemoveCustomerOperationRequest {
  id: number;
}

export type RemoveCustomerOperationResponse = Promise<void>;

export interface RemoveCustomerOperation {
  execute: (
    request: RemoveCustomerOperationRequest,
  ) => RemoveCustomerOperationResponse;
}

export const RemoveCustomerOperation = Symbol('RemoveCustomerOperation');
