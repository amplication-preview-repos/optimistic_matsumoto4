import { TransactionUpdateManyWithoutBlocksInput } from "./TransactionUpdateManyWithoutBlocksInput";

export type BlockUpdateInput = {
  hash?: string | null;
  nonce?: number | null;
  previousHash?: string | null;
  timestamp?: Date | null;
  transactions?: TransactionUpdateManyWithoutBlocksInput;
};
