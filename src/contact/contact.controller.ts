import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ContactService } from './contact.service';
import { Contact } from './entities/contact.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('contact')
@UseGuards(AuthGuard('jwt'))
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
  create(@Body() contact: Contact, @Req() req: any) {
    contact.createdBy = req.user.id;
    return this.contactService.create(contact);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactService.findOne(id);
  }

  @Patch(':id')
  updateOne(
    @Param('id') id: string,
    @Body() updateContactDto: Contact,
    @Req() req: any,
  ) {
    updateContactDto.updatedBy = req.user.id;
    return this.contactService.updateOne({ id, updateContactDto });
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactService.remove(id);
  }
}
