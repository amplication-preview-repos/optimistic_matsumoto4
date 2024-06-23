import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { BlockWhereUniqueInput } from "../block/BlockWhereUniqueInput";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type TransactionWhereInput = {
  amount?: FloatNullableFilter;
  block?: BlockWhereUniqueInput;
  fromAddress?: StringNullableFilter;
  hash?: StringNullableFilter;
  id?: StringFilter;
  timestamp?: DateTimeNullableFilter;
  toAddress?: StringNullableFilter;
};
