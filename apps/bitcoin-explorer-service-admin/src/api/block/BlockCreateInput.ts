import { TransactionCreateNestedManyWithoutBlocksInput } from "./TransactionCreateNestedManyWithoutBlocksInput";

export type BlockCreateInput = {
  hash?: string | null;
  nonce?: number | null;
  previousHash?: string | null;
  timestamp?: Date | null;
  transactions?: TransactionCreateNestedManyWithoutBlocksInput;
};
