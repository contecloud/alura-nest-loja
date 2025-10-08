import { Module } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { UsuarioController } from "./usuario.controller";
import { EmailEhUnicoValidator } from "./validacao/emailEhUnico.validator";

@Module({
    controllers: [UsuarioController],
    providers: [UsuarioRepository, EmailEhUnicoValidator]
})

export class UsuarioModule {}