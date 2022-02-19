import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { Account } from './entities/account.entity';

@Injectable()
export class AccountService {
  constructor(
    @InjectRepository(Account)
    private accountRepository: Repository<Account>,
  ) {}

  schema() {
    return this.accountRepository.metadata.columns.map((column) => {
      const schema = {
        propertyName: column.embeddedMetadata?.propertyName
          ? column.embeddedMetadata?.propertyName + column.propertyName
          : column.propertyName,
        type: column.type,
        enum: column.enum,
        isNullable: column.isNullable,
        isComposite: column.embeddedMetadata?.propertyName ? true : false,
        CompositeParent: column.embeddedMetadata?.propertyName,
      };
      return schema;
    });
  }
  create(createAccountDto: Account): Promise<InsertResult> {
    try {
      const newAccount = this.accountRepository.create(createAccountDto);
      return this.accountRepository.insert(newAccount);
    } catch (error) {
      throw new Error(error);
    }
  }

  findAll(): Promise<Account[]> {
    return this.accountRepository.find();
  }

  findOne(id: string): Promise<Account> {
    return this.accountRepository.findOne(id);
  }

  update(id: string, updateAccountDto: Account): Promise<UpdateResult> {
    try {
      console.log(updateAccountDto);
      return this.accountRepository.update(id, updateAccountDto);
    } catch (error) {
      throw new Error(error);
    }
  }

  remove(id: string): Promise<DeleteResult> {
    return this.accountRepository.delete(id);
  }
}
