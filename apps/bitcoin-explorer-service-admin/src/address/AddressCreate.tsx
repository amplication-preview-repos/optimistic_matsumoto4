import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  NumberInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { WalletTitle } from "../wallet/WalletTitle";

export const AddressCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="address" source="address" />
        <NumberInput label="balance" source="balance" />
        <ReferenceArrayInput
          source="wallets"
          reference="Wallet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={WalletTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
