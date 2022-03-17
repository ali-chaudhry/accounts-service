import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Supplier')
@Index('Supplier_id_UNIUQE', ['id'], {
  unique: true,
  where: 'deleted=true',
})
export class Supplier {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'text', nullable: true })
  firstName: string;

  @Column({ type: 'text', nullable: true })
  lastName: string;

  @Column({ type: 'text', nullable: true })
  email: string;

  @Column({ type: 'text', nullable: true })
  password: string;

  @Column({ type: 'boolean', nullable: false, default: false })
  deleted: boolean;
}
