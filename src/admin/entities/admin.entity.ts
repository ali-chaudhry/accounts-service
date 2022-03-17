import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Entity('Admin')
@Index('admin_id_unique', ['id'], {
  unique: true,
  where: 'deleted=true',
})
export class Admin {
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
