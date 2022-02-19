import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AccountModule } from './account/account.module';
import { ContactModule } from './contact/contact.module';
import { ItemModule } from './item/item.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CaslModule } from './casl/casl.module';
import { AuthMiddleware } from 'middleware/Auth.middleware';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { RolePermissionModule } from './role-permission/role-permission.module';
@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AccountModule,
    ContactModule,
    ItemModule,
    AuthModule,
    UsersModule,
    CaslModule,
    RoleModule,
    PermissionModule,
    RolePermissionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private connection: Connection) {}
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthMiddleware).forRoutes('*');
  }
}
