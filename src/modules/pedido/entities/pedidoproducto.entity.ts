import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Pedido } from './pedido.entity';
import { Producto } from '../../producto/entities/producto.entity';

@Entity()
export class PedidoProducto {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Pedido, (pedido) => pedido.pedidoProductos)
  @JoinColumn({ name: 'pedidoId' })
  pedido: Pedido;

  @ManyToOne(() => Producto, (producto) => producto.pedidoProductos)
  @JoinColumn({ name: 'productoId' })
  producto: Producto;

  @Column({ type: 'int' })
  cantidad: number;
}