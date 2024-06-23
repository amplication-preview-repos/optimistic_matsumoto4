import { BlockWhereUniqueInput } from "../block/BlockWhereUniqueInput";

export type TransactionUpdateInput = {
  amount?: number | null;
  block?: BlockWhereUniqueInput | null;
  fromAddress?: string | null;
  hash?: string | null;
  timestamp?: Date | null;
  toAddress?: string | null;
};
