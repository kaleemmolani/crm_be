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
import { AccountService } from './account.service';
import { Account } from './entities/account.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('account')
@UseGuards(AuthGuard('jwt'))
export class AccountController {
  constructor(private readonly accountService: AccountService) {}

  @Post()
  create(@Body() createAccountDto: Account, @Req() req: any) {
    createAccountDto.createdBy = req.user.id;
    return this.accountService.create(createAccountDto);
  }

  @Get('/schema')
  getSchema() {
    return this.accountService.schema();
  }

  @Get()
  findAll() {
    return this.accountService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    console.log(id);
    return this.accountService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAccountDto: Account,
    @Req() req: any,
  ) {
    console.log(updateAccountDto);
    updateAccountDto.updatedBy = req.user.id;
    return this.accountService.update(id, updateAccountDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accountService.remove(id);
  }
}
