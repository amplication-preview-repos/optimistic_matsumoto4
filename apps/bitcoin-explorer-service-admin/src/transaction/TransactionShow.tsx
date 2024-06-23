import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import { BLOCK_TITLE_FIELD } from "../block/BlockTitle";

export const TransactionShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="amount" source="amount" />
        <ReferenceField label="block" source="block.id" reference="Block">
          <TextField source={BLOCK_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="fromAddress" source="fromAddress" />
        <TextField label="hash" source="hash" />
        <TextField label="ID" source="id" />
        <TextField label="timestamp" source="timestamp" />
        <TextField label="toAddress" source="toAddress" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
