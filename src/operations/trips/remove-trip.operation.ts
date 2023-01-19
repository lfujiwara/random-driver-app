export interface RemoveTripOperationRequest {
  id: number;
}

export type RemoveTripOperationResponse = Promise<void>;

export interface RemoveTripOperation {
  execute: (request: RemoveTripOperationRequest) => RemoveTripOperationResponse;
}

export const RemoveTripOperation = Symbol('RemoveTripOperation');
