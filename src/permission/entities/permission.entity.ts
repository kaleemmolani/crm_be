import { BaseEntity } from 'src/base.entity';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { Action } from '../../shared/utils';

export class Permission extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  name: string;

  @Column({ type: 'enum', enum: Action, nullable: false })
  action: string;

  @Column({ type: 'varchar', nullable: false })
  objectid: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'varchar', nullable: false })
  condition: string;
}
