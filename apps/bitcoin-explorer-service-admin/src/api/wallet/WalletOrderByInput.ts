import { SortOrder } from "../../util/SortOrder";

export type WalletOrderByInput = {
  addressId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  updatedAt?: SortOrder;
};
