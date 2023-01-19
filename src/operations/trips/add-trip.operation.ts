export interface AddTripOperationRequest {
  origin: string;
  destination: string;
  distance: number;
  fare: number;
  customerIds: number[];
}

export type AddTripOperationResponse = Promise<number>;

export interface AddTripOperation {
  execute: (request: AddTripOperationRequest) => AddTripOperationResponse;
}

export const AddTripOperation = Symbol('AddTripOperation');
