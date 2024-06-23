import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { BLOCK_TITLE_FIELD } from "./BlockTitle";

export const BlockShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="hash" source="hash" />
        <TextField label="ID" source="id" />
        <TextField label="nonce" source="nonce" />
        <TextField label="previousHash" source="previousHash" />
        <TextField label="timestamp" source="timestamp" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="Transaction"
          target="blockId"
          label="Transactions"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
