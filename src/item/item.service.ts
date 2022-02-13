import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { Item } from './entities/item.entity';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private itemsRepository: Repository<Item>,
  ) {}

  schema() {
    return this.itemsRepository.metadata.columns.map((column) => {
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
  async create(item: Item): Promise<InsertResult> {
    try {
      const newItem = this.itemsRepository.create(item);
      return this.itemsRepository.insert(newItem);
    } catch (error) {
      throw new Error(error);
    }
  }

  findAll(): Promise<Item[]> {
    return this.itemsRepository.find();
  }

  findOne(id: string): Promise<Item> {
    return this.itemsRepository.findOne(id);
  }

  updateOne(id: string, updateItemDto: Item): Promise<UpdateResult> {
    try {
      return this.itemsRepository.update(id, updateItemDto);
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: string): Promise<void> {
    await this.itemsRepository.delete(id);
  }
}
