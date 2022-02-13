import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './entities/contact.entity';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Get('/schema')
  getSchema() {
    return this.contactService.schema();
  }

  @Get()
  findAll() {
    return this.contactService.findAll();
  }

  @Post()
  create(@Body() contact: Contact) {
    return this.contactService.create(contact);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(id);
  }

  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() updateContactDto: Contact) {
    return this.contactService.updateOne({ id, updateContactDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactService.remove(id);
  }
}
