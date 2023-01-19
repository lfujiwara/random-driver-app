import { Inject } from '@nestjs/common';
import { Trip } from 'src/models/trip';
import {
  RemoveTripOperation,
  RemoveTripOperationRequest,
} from 'src/operations/trips/remove-trip.operation';
import { InMemoryEntityPorts } from 'src/ports/in-memory/in-memory-entities.port';

export class RemoveTripInMemoryOperation implements RemoveTripOperation {
  constructor(
    @Inject(InMemoryEntityPorts.trips)
    private readonly trips: Trip[],
  ) {}

  execute = async (request: RemoveTripOperationRequest) => {
    const tripIndex = this.trips.findIndex((trip) => trip.id === request.id);

    if (tripIndex === -1) {
      throw new Error('Trip not found');
    }

    this.trips.splice(tripIndex, 1);

    return Promise.resolve();
  };
}
