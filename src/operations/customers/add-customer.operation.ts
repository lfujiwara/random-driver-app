import { Customer } from 'src/models/customer';

export interface AddCustomerOperationRequest {
  name: string;
  phone?: string;
  responsibleId?: number;
}

export type AddCustomerOperationResponse = Promise<Customer['id']>;

export interface AddCustomerOperation {
  execute: (
    request: AddCustomerOperationRequest,
  ) => AddCustomerOperationResponse;
}

export const AddCustomerOperation = Symbol('AddCustomerOperation');
