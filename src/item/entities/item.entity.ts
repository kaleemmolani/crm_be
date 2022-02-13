import { Entity, Column } from 'typeorm';
import { BaseEntity } from '../../base.entity';
import { ApiProperty } from '@nestjs/swagger';

@Entity({ name: 'item' })
export class Item extends BaseEntity {
  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string; // name of the item

  @ApiProperty()
  @Column({ type: 'varchar', length: 2550, nullable: false })
  description: string; // description of the item

  @ApiProperty()
  @Column({ type: 'integer', nullable: false })
  price: number; // price of the item

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  image: string; // image of the item

  @ApiProperty()
  @Column({ type: 'varchar', length: 255, nullable: false })
  brand: string; // brand of the item
}
