import { Column, Entity, PrimaryGeneratedColumn, ManyToOne, OneToMany, JoinColumn } from 'typeorm';
import { Categoria } from '../../categoria/entities/categoria.entity';
import { PedidoProducto } from '../../pedido/entities/pedidoproducto.entity';

@Entity()
export class Producto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 200 })
  nombre: string;

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  precio: number;

  @Column({ type: 'int', default: 0 })
  stock: number;

  @Column({ type: 'varchar', length: 500, nullable: true })
  image: string;

  @Column({ type: 'varchar', length: 500, nullable: true })
  descripcion: string;

  @Column({ type: 'varchar', length: 50, default: 'activo' })
  estado: string;

  @ManyToOne(() => Categoria, (categoria) => categoria.productos)
  @JoinColumn({ name: 'categoriaId' })
  categoria: Categoria;

  @OneToMany(() => PedidoProducto, (pp) => pp.producto)
  pedidoProductos: PedidoProducto[];
}