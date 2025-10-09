import { Module } from "@nestjs/common";
import { UsuarioRepository } from "./usuario.repository";
import { UsuarioController } from "./usuario.controller";
import { EmailEhUnicoValidator } from "./validacao/emailEhUnico.validator";
import { TypeOrmModule } from "@nestjs/typeorm";
import { UsuarioEntity } from "./usuario.entity";
import { UsuarioService } from "./usuario.service";

@Module({
    imports: [TypeOrmModule.forFeature([UsuarioEntity])],
    controllers: [UsuarioController],
    providers: [UsuarioService, UsuarioRepository, EmailEhUnicoValidator]
})

export class UsuarioModule {}