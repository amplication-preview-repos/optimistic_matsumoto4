import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { TransactionList } from "./transaction/TransactionList";
import { TransactionCreate } from "./transaction/TransactionCreate";
import { TransactionEdit } from "./transaction/TransactionEdit";
import { TransactionShow } from "./transaction/TransactionShow";
import { AddressList } from "./address/AddressList";
import { AddressCreate } from "./address/AddressCreate";
import { AddressEdit } from "./address/AddressEdit";
import { AddressShow } from "./address/AddressShow";
import { BlockList } from "./block/BlockList";
import { BlockCreate } from "./block/BlockCreate";
import { BlockEdit } from "./block/BlockEdit";
import { BlockShow } from "./block/BlockShow";
import { WalletList } from "./wallet/WalletList";
import { WalletCreate } from "./wallet/WalletCreate";
import { WalletEdit } from "./wallet/WalletEdit";
import { WalletShow } from "./wallet/WalletShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Bitcoin Explorer Service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Transaction"
          list={TransactionList}
          edit={TransactionEdit}
          create={TransactionCreate}
          show={TransactionShow}
        />
        <Resource
          name="Address"
          list={AddressList}
          edit={AddressEdit}
          create={AddressCreate}
          show={AddressShow}
        />
        <Resource
          name="Block"
          list={BlockList}
          edit={BlockEdit}
          create={BlockCreate}
          show={BlockShow}
        />
        <Resource
          name="Wallet"
          list={WalletList}
          edit={WalletEdit}
          create={WalletCreate}
          show={WalletShow}
        />
      </Admin>
    </div>
  );
};

export default App;
