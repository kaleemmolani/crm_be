import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { Contact } from './entities/contact.entity';

type ContactUpdate = {
  id: string;
  updateContactDto: Contact;
};

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private contactRepository: Repository<Contact>,
  ) {}
  schema() {
    return this.contactRepository.metadata.columns.map((column) => {
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
  create(contact: Contact): Promise<InsertResult> {
    try {
      const newContact = this.contactRepository.create(contact);
      return this.contactRepository.insert(newContact);
    } catch (error) {
      throw new Error(error);
    }
  }

  findAll(): Promise<Contact[]> {
    return this.contactRepository.find();
  }

  findOne(id: string): Promise<Contact> {
    return this.contactRepository.findOne(id);
  }

  updateOne({ id, updateContactDto }: ContactUpdate): Promise<UpdateResult> {
    try {
      return this.contactRepository.update(id, updateContactDto);
    } catch (error) {
      throw new Error(error);
    }
  }

  async remove(id: string): Promise<void> {
    await this.contactRepository.delete(id);
  }
}
