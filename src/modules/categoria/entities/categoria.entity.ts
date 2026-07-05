import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Producto } from '../../producto/entities/producto.entity';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  nombre: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  detalle: string;

  @OneToMany(() => Producto, (producto) => producto.categoria)
  productos: Producto[];
}