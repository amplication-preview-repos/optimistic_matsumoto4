import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  ReferenceField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { BLOCK_TITLE_FIELD } from "../block/BlockTitle";

export const TransactionList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Transactions"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
