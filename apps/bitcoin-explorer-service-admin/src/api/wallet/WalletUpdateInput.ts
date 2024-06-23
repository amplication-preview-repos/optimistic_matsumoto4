import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type WalletUpdateInput = {
  address?: AddressWhereUniqueInput | null;
  name?: string | null;
};
