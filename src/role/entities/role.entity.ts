import { BaseEntity } from 'src/base.entity';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Role extends BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', nullable: false, unique: true })
  name: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'varchar', nullable: false })
  type: string;

  @Column({ type: 'varchar', nullable: false })
  isActive: boolean;

  @Column({ type: 'varchar', nullable: false })
  isArchived: boolean;
}
