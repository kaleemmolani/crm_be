/* eslint-disable prettier/prettier */
import {
  PrimaryGeneratedColumn,
  Column,
  UpdateDateColumn,
  CreateDateColumn,
} from 'typeorm';
export abstract class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'boolean', default: true })
  isActive: boolean;

  @Column({ type: 'boolean', default: false })
  isArchived: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime: Date;

  @Column({ type: 'varchar', length: 300, nullable: true })
  lastChangedBy: string;
  
  @Column({ type: 'varchar', length: 300, nullable: true })
  internalComment: string | null;

  @Column({type: 'uuid', nullable: true })
  createdBy: string;

  @Column({type: 'uuid', nullable: true })
  updatedBy: string;

}
