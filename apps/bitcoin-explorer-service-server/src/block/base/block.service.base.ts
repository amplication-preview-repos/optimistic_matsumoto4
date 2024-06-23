/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import {
  Prisma,
  Block as PrismaBlock,
  Transaction as PrismaTransaction,
} from "@prisma/client";

export class BlockServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(args: Omit<Prisma.BlockCountArgs, "select">): Promise<number> {
    return this.prisma.block.count(args);
  }

  async blocks(args: Prisma.BlockFindManyArgs): Promise<PrismaBlock[]> {
    return this.prisma.block.findMany(args);
  }
  async block(args: Prisma.BlockFindUniqueArgs): Promise<PrismaBlock | null> {
    return this.prisma.block.findUnique(args);
  }
  async createBlock(args: Prisma.BlockCreateArgs): Promise<PrismaBlock> {
    return this.prisma.block.create(args);
  }
  async updateBlock(args: Prisma.BlockUpdateArgs): Promise<PrismaBlock> {
    return this.prisma.block.update(args);
  }
  async deleteBlock(args: Prisma.BlockDeleteArgs): Promise<PrismaBlock> {
    return this.prisma.block.delete(args);
  }

  async findTransactions(
    parentId: string,
    args: Prisma.TransactionFindManyArgs
  ): Promise<PrismaTransaction[]> {
    return this.prisma.block
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .transactions(args);
  }
}