import { Module } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { UsuarioController } from "./usuario.controller";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository]
})

export class UsuarioModule {}