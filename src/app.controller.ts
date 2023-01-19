import { Controller, Get, Inject, Param, ParseIntPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { Customer } from './models/customer';
import { AddCustomerOperation } from './operations/customers/add-customer.operation';
import { InMemoryEntityPorts } from './ports/in-memory/in-memory-entities.port';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    @Inject(AddCustomerOperation)
    private readonly addCustomer: AddCustomerOperation,
    @Inject(InMemoryEntityPorts.customers)
    private readonly customers: Customer[],
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('add-customer')
  async addCustomerHandler(): Promise<void> {
    await this.addCustomer.execute({
      name: 'John Doe',
      phone: '123456789',
    });
  }

  @Get('get-customer/:id')
  async getCustomerHandler(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<Customer> {
    const customer = this.customers.find((customer) => customer.id === id);
    return customer;
  }
}
