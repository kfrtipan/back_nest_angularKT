import { config } from "dotenv";
import { DataSource } from "typeorm";

// Importaciones explícitas de todas tus entidades
import { Categoria } from "./src/modules/categoria/entities/categoria.entity";
import { Cliente } from "./src/modules/cliente/entities/cliente.entity";
import { Pedido } from "./src/modules/pedido/entities/pedido.entity";
import { PedidoProducto } from "./src/modules/pedido/entities/pedidoproducto.entity";
import { Persona } from "./src/modules/persona/entities/persona.entity";
import { Producto } from "./src/modules/producto/entities/producto.entity";
import { Role } from "./src/modules/role/entities/role.entity";
import { User } from "./src/modules/users/entities/user.entity";

const env = process.env.NODE_ENV || 'development';

config({
    override: true,
    path: `.env.${env}`,
    debug: true
});

export default new DataSource({
    type: 'postgres',
    host: process.env.HOST,
    port: +(process.env.PORT ?? 5432),
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    entities: [
        Categoria,
        Cliente,
        Pedido,
        PedidoProducto,
        Persona,
        Producto,
        Role,
        User
    ],
    migrations: ["src/database/migrations/*.ts"]
});