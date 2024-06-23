import { StringNullableFilter } from "../../util/StringNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { WalletListRelationFilter } from "../wallet/WalletListRelationFilter";

export type AddressWhereInput = {
  address?: StringNullableFilter;
  balance?: FloatNullableFilter;
  id?: StringFilter;
  wallets?: WalletListRelationFilter;
};
