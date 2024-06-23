import { Address } from "../address/Address";

export type Wallet = {
  address?: Address | null;
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
};
