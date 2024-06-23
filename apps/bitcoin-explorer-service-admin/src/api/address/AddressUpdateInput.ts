import { WalletUpdateManyWithoutAddressesInput } from "./WalletUpdateManyWithoutAddressesInput";

export type AddressUpdateInput = {
  address?: string | null;
  balance?: number | null;
  wallets?: WalletUpdateManyWithoutAddressesInput;
};
