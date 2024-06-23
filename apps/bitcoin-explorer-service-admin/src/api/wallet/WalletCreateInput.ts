import { AddressWhereUniqueInput } from "../address/AddressWhereUniqueInput";

export type WalletCreateInput = {
  address?: AddressWhereUniqueInput | null;
  name?: string | null;
};
