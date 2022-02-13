import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { BaseEntity } from '../../base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn('uuid') id: string;
  @ApiProperty()
  @Column({ type: 'varchar', nullable: false, unique: true })
  username: string;
  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  password: string;
  @ApiProperty()
  @Column({ type: 'varchar', nullable: false })
  email: string;
  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password = await bcrypt.hash(this.password, 10);
  }
  @ApiProperty()
  @Column({ type: 'boolean', nullable: false, default: false })
  isAdmin: boolean;
}
