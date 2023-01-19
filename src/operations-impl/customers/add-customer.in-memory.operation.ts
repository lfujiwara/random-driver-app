import { Inject } from '@nestjs/common';
import { Customer } from 'src/models/customer';
import {
  AddCustomerOperation,
  AddCustomerOperationRequest,
} from 'src/operations/customers/add-customer.operation';
import { InMemoryEntityPorts } from 'src/ports/in-memory/in-memory-entities.port';

export class AddCustomerInMemoryOperation implements AddCustomerOperation {
  constructor(
    @Inject(InMemoryEntityPorts.customers)
    private readonly customers: Customer[],
  ) {}

  execute = async (request: AddCustomerOperationRequest) => {
    const id = this.customers.length + 1;
    this.customers.push({
      id,
      name: request.name,
      phone: request.phone,
      responsible: this.customers.find(
        (customer) => customer.id === request.responsibleId,
      ),
    });

    console.log(this.customers);
    return id;
  };
}
