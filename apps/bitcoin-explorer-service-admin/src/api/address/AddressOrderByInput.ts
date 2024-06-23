import { SortOrder } from "../../util/SortOrder";

export type AddressOrderByInput = {
  address?: SortOrder;
  balance?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
};
