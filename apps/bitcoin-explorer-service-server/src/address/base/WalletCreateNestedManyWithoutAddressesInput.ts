/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { WalletWhereUniqueInput } from "../../wallet/base/WalletWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class WalletCreateNestedManyWithoutAddressesInput {
  @Field(() => [WalletWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [WalletWhereUniqueInput],
  })
  connect?: Array<WalletWhereUniqueInput>;
}

export { WalletCreateNestedManyWithoutAddressesInput as WalletCreateNestedManyWithoutAddressesInput };