import { Transaction } from "../transaction/Transaction";

export type Block = {
  createdAt: Date;
  hash: string | null;
  id: string;
  nonce: number | null;
  previousHash: string | null;
  timestamp: Date | null;
  transactions?: Array<Transaction>;
  updatedAt: Date;
};
