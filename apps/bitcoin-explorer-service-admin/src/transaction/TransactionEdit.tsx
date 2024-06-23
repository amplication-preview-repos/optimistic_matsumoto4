import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
} from "react-admin";

import { BlockTitle } from "../block/BlockTitle";

export const TransactionEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
