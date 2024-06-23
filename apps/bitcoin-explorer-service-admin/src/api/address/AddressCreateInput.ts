import { WalletCreateNestedManyWithoutAddressesInput } from "./WalletCreateNestedManyWithoutAddressesInput";

export type AddressCreateInput = {
  address?: string | null;
  balance?: number | null;
  wallets?: WalletCreateNestedManyWithoutAddressesInput;
};
