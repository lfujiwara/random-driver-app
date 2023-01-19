export interface EditCustomerOperationRequest {
  id: number;
  name: string;
  phone?: string;
  responsibleId?: number;
}

export type EditCustomerOperationResponse = Promise<void>;

export interface EditCustomerOperation {
  execute: (
    request: EditCustomerOperationRequest,
  ) => EditCustomerOperationResponse;
}

export const EditCustomerOperation = Symbol('EditCustomerOperation');
