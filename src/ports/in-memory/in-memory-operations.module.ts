import { Module } from '@nestjs/common';
import { AddCustomerInMemoryOperation } from 'src/operations-impl/customers/add-customer.in-memory.operation';
import { RemoveCustomerInMemoryOperation } from 'src/operations-impl/customers/remove-customer.in-memory.operation';
import { AddTripInMemoryOperation } from 'src/operations-impl/trips/add-trip.in-memory.operation';
import { RemoveTripInMemoryOperation } from 'src/operations-impl/trips/remove-trip.in-memory.operation';
import { AddCustomerOperation } from 'src/operations/customers/add-customer.operation';
import { RemoveCustomerOperation } from 'src/operations/customers/remove-customer.operation';
import { AddTripOperation } from 'src/operations/trips/add-trip.operation';
import { RemoveTripOperation } from 'src/operations/trips/remove-trip.operation';
import { InMemoryEntityPorts } from './in-memory-entities.port';

const customers = [];
const trips = [];

@Module({
  providers: [
    {
      provide: InMemoryEntityPorts.customers,
      useValue: customers,
    },
    {
      provide: InMemoryEntityPorts.trips,
      useValue: trips,
    },
    {
      provide: AddCustomerOperation,
      useClass: AddCustomerInMemoryOperation,
    },
    {
      provide: RemoveCustomerOperation,
      useClass: RemoveCustomerInMemoryOperation,
    },
    {
      provide: AddTripOperation,
      useClass: AddTripInMemoryOperation,
    },
    {
      provide: RemoveTripOperation,
      useClass: RemoveTripInMemoryOperation,
    },
  ],
  exports: [
    AddCustomerOperation,
    RemoveCustomerOperation,
    AddTripOperation,
    RemoveTripOperation,
    ...Object.values(InMemoryEntityPorts),
  ],
})
export class InMemoryOperationsModule {}
