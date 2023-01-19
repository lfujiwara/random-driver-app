import { Inject } from '@nestjs/common';
import { Customer } from 'src/models/customer';
import { Trip } from 'src/models/trip';
import {
  AddTripOperation,
  AddTripOperationRequest,
  AddTripOperationResponse,
} from 'src/operations/trips/add-trip.operation';
import { InMemoryEntityPorts } from 'src/ports/in-memory/in-memory-entities.port';

export class AddTripInMemoryOperation implements AddTripOperation {
  constructor(
    @Inject(InMemoryEntityPorts.trips)
    private readonly trips: Trip[],
    @Inject(InMemoryEntityPorts.customers)
    private readonly customers: Customer[],
  ) {}

  execute = async (
    request: AddTripOperationRequest,
  ): AddTripOperationResponse => {
    const id = this.trips.length + 1;
    const trip: Trip = {
      id,
      origin: request.origin,
      destination: request.destination,
      distance: request.distance,
      fare: request.fare,
      customers: request.customerIds.map((customerId) =>
        this.customers.find((customer) => customer.id === customerId),
      ),
    };
    this.trips.push(trip);
    return id;
  };
}
