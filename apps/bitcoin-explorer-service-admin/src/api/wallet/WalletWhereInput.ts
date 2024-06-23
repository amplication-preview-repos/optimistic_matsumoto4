import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type WalletWhereInput = {
  address?: AddressWhereUniqueInput;
  id?: StringFilter;
  name?: StringNullableFilter;
};
