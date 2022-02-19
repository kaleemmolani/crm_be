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
import { ItemService } from './item.service';
import { Item } from './entities/item.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('item')
@UseGuards(AuthGuard('jwt'))
export class ItemController {
  constructor(private readonly itemService: ItemService) {}

  @Get('/schema')
  getSchema() {
    return this.itemService.schema();
  }

  @Get()
  findAll() {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.itemService.findOne(id);
  }

  @Post()
  create(@Body() item: Item, @Req() req: any) {
    item.createdBy = req.user.id;
    return this.itemService.create(item);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateItemDto: Item,
    @Req() req: any,
  ) {
    updateItemDto.updatedBy = req.user.id;
    return this.itemService.updateOne(id, updateItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.itemService.remove(id);
  }
}
