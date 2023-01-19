import { Inject } from '@nestjs/common';
import { Customer } from 'src/models/customer';
import {
  RemoveCustomerOperation,
  RemoveCustomerOperationRequest,
  RemoveCustomerOperationResponse,
} from 'src/operations/customers/remove-customer.operation';
import { InMemoryEntityPorts } from 'src/ports/in-memory/in-memory-entities.port';

export class RemoveCustomerInMemoryOperation
  implements RemoveCustomerOperation
{
  constructor(
    @Inject(InMemoryEntityPorts.customers)
    private readonly customers: Customer[],
  ) {}

  execute = async (
    request: RemoveCustomerOperationRequest,
  ): RemoveCustomerOperationResponse => {
    const customerIndex = this.customers.findIndex(
      (customer) => customer.id === request.id,
    );

    if (customerIndex === -1) {
      throw new Error('Customer not found');
    }

    this.customers.splice(customerIndex, 1);

    return Promise.resolve();
  };
}
