import { Entity, PrimaryGeneratedColumn, Column, OneToOne, ManyToMany, JoinTable } from 'typeorm';
import { Persona } from '../../persona/entities/persona.entity';
import { Role } from '../../role/entities/role.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  name: string;

  @Column({ type: 'varchar', length: 100, unique: true })
  mail: string;

  @Column({ type: 'varchar' })
  password: string;

  @OneToOne(() => Persona, (persona) => persona.user)
  persona: Persona;

  @ManyToMany(() => Role, (role) => role.users)
  @JoinTable()
  roles: Role[];
}