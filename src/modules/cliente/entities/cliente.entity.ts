import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Pedido } from '../../pedido/entities/pedido.entity';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  nombre_completo: string;

  @Column({ type: 'varchar', length: 20, unique: true })
  dni: string;

  @Column({ type: 'varchar', length: 20 })
  telefono: string;

  @OneToMany(() => Pedido, (pedido) => pedido.cliente)
  pedidos: Pedido[];
}