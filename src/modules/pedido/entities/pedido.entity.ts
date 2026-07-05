import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Cliente } from '../../cliente/entities/cliente.entity';
import { PedidoProducto } from './pedidoproducto.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'date' })
  fecha: Date;

  @Column({ type: 'varchar', length: 50, default: 'pendiente' })
  estado: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  observaciones: string;

  @ManyToOne(() => Cliente, (cliente) => cliente.pedidos)
  @JoinColumn({ name: 'clienteId' })
  cliente: Cliente;

  @OneToMany(() => PedidoProducto, (pp) => pp.pedido)
  pedidoProductos: PedidoProducto[];
}