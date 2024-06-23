import { SortOrder } from "../../util/SortOrder";

export type TransactionOrderByInput = {
  amount?: SortOrder;
  blockId?: SortOrder;
  createdAt?: SortOrder;
  fromAddress?: SortOrder;
  hash?: SortOrder;
  id?: SortOrder;
  timestamp?: SortOrder;
  toAddress?: SortOrder;
  updatedAt?: SortOrder;
};
