import { Block } from "../block/Block";

export type Transaction = {
  amount: number | null;
  block?: Block | null;
  createdAt: Date;
  fromAddress: string | null;
  hash: string | null;
  id: string;
  timestamp: Date | null;
  toAddress: string | null;
  updatedAt: Date;
};
