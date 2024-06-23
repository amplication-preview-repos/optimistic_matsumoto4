import { SortOrder } from "../../util/SortOrder";

export type BlockOrderByInput = {
  createdAt?: SortOrder;
  hash?: SortOrder;
  id?: SortOrder;
  nonce?: SortOrder;
  previousHash?: SortOrder;
  timestamp?: SortOrder;
  updatedAt?: SortOrder;
};
