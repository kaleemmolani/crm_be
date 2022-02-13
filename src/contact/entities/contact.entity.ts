import { Account } from '../../account/entities/account.entity';
import { Entity, Column, ManyToOne } from 'typeorm';
import { BaseEntity } from '../../base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'contact' })
export class Contact extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  firstname: string; // firstname of the contact

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  lastname: string; // lastname of the contact

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  email: string; // email of the contact

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  phone: string; // phone of the contact

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  address: string; // address of the contact

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  city: string; // city of the contact

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  state: string; // state of the contact

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  zip: string; // zip of the contact

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  country: string; // country of the contact

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  company: string; // company of the contact

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  job: string; // job of the contact

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  website: string; // website of the contact

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  facebook: string; // facebook of the contact

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  twitter: string; // twitter of the contact

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  instagram: string; // instagram of the contact

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  linkedin: string; // linkedin of the contact

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  youtube: string; // youtube of the contact

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  google: string; // google of the contact

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  notes: string; // notes of the contact

  @ManyToOne(() => Account, (account) => account.contacts)
  account: Account; // account of the contact
}
