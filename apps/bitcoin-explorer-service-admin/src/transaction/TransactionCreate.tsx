import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { BlockTitle } from "../block/BlockTitle";

export const TransactionCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="amount" source="amount" />
        <ReferenceInput source="block.id" reference="Block" label="block">
          <SelectInput optionText={BlockTitle} />
        </ReferenceInput>
        <TextInput label="fromAddress" source="fromAddress" />
        <TextInput label="hash" source="hash" />
        <DateTimeInput label="timestamp" source="timestamp" />
        <TextInput label="toAddress" source="toAddress" />
      </SimpleForm>
    </Create>
  );
};
