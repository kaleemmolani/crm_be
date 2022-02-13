import { Contact } from '../../contact/entities/contact.entity';
import { Entity, Column, OneToMany } from 'typeorm';
import { BaseEntity } from '../../base.entity';
import { ApiProperty } from '@nestjs/swagger';
export enum Industry {
  Accounting = 'Accounting',
  Advertising = 'Advertising',
  Agriculture = 'Agriculture',
  Apparel = 'Apparel',
  Auto = 'Auto',
  Banks = 'Banks',
  Biotechnology = 'Biotechnology',
  Broadcasting = 'Broadcasting',
  BusinessServices = 'Business Services',
  Chemicals = 'Chemicals',
  ComputerHardware = 'Computer Hardware',
  ComputerSoftware = 'Computer Software',
  Construction = 'Construction',
  ConsumerElectronics = 'Consumer Electronics',
  ConsumerGoods = 'Consumer Goods',
  Cosmetics = 'Cosmetics',
  Defense = 'Defense',
  Education = 'Education',
  Electronics = 'Electronics',
  Energy = 'Energy',
  Entertainment = 'Entertainment',
  EnvironmentalServices = 'Environmental Services',
  Farming = 'Farming',
  Finance = 'Finance',
  Food = 'Food',
  FoodBeverage = 'Food Beverage',
  Gambling = 'Gambling',
  Glass = 'Glass',
  HealthCare = 'Health Care',
  Hospitality = 'Hospitality',
  Insurance = 'Insurance',
  Machinery = 'Machinery',
  Manufacturing = 'Manufacturing',
  Media = 'Media',
  Medical = 'Medical',
  NonprofitOrganizations = 'Nonprofit Organizations',
  OilGas = 'Oil & Gas',
  Pharmaceuticals = 'Pharmaceuticals',
  Publishing = 'Publishing',
  RealEstate = 'Real Estate',
  Restaurants = 'Restaurants',
  Retail = 'Retail',
  Transportation = 'Transportation',
  Utilities = 'Utilities',
  Other = 'Other',
}
export class Address {
  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  street: string; // street of the address
  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  street2: string; // street of the address
  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  city: string; // city of the address
  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  state: string; // state of the address
  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  zip: string; // zip of the address
  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  country: string; // country of the address
  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  countrycode: string; // countrycode of the address
}

export class Phone {
  @ApiProperty()
  @Column({ type: 'integer', nullable: true })
  countryCode: number; // code of the phone
  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  number: string; // phone of the phone
}

export enum NumberRating {
  One = '1',
  Two = '2',
  Three = '3',
  Four = '4',
  Five = '5',
}
export enum Salutation {
  Mr = 'Mr',
  Mrs = 'Mrs',
  Ms = 'Ms',
  Dr = 'Dr',
  Prof = 'Prof',
  Other = 'Other',
}

@Entity({ name: 'account' })
export class Account extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  AccountNumber: string; // name of the account

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  AccountSource: string; // source of the account

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  AccountType: string; // type of the account

  @ApiProperty()
  @Column({ type: 'integer', nullable: true })
  AnnualRevenue: number; // annual revenue of the account

  @ApiProperty({ type: () => Address })
  @Column(() => Address)
  BillingAddress: Address; // billing address of the account

  @ApiProperty({ type: () => Address })
  @Column(() => Address)
  ShippingAddress: Address; // shipping address of the account

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  Description: string; // description of the account

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  Owner: string; // owner of the account

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  fax: string; // fax of the account

  @ApiProperty()
  @Column({ type: 'boolean', nullable: true })
  HasOptedOutOfEmail: boolean; // hasoptedoutofemail of the account

  @ApiProperty()
  @Column({ type: 'enum', enum: Industry, nullable: true })
  Industry: Industry; // industry of the account

  @ApiProperty()
  @Column({ type: 'boolean', nullable: true })
  IsConverted: boolean; // isconverted of the account

  @ApiProperty()
  @Column({ type: 'boolean', nullable: true })
  IsPartner: boolean; // ispartner of the account

  @ApiProperty()
  @Column({ type: 'boolean', nullable: true })
  IsPersonAccount: boolean; // ispersonaccount of the account

  @ApiProperty()
  @Column({ type: 'date', nullable: true })
  LastActivityDate: Date; // lastactivitydate of the account

  @ApiProperty({ description: 'Name of Account', default: 'kaleem molani' })
  @Column({ type: 'varchar', length: 255, nullable: true })
  Name: string; // name of the account

  @ApiProperty()
  @Column({ type: 'integer', nullable: true })
  NumberOfEmployees: number; // numberofemployees of the account

  @ApiProperty({ type: () => Phone })
  @Column(() => Phone)
  Phone: Phone; // photourl of the account

  @ApiProperty()
  @Column({ type: 'enum', enum: NumberRating, nullable: true })
  Rating: NumberRating; // rating of the account

  @ApiProperty()
  @Column({ type: 'enum', enum: Salutation, nullable: true })
  Salutation: string; // type of the account

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: true })
  Website: string; // website of the account

  @ApiProperty()
  @OneToMany(() => Contact, (account) => account.account)
  contacts: Contact[];
}
