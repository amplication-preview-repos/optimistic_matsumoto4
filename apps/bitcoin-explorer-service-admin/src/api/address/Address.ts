import { Wallet } from "../wallet/Wallet";

export type Address = {
  address: string | null;
  balance: number | null;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  wallets?: Array<Wallet>;
};
