import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';
import { randomUUID } from 'crypto';
import { UsuarioService } from './usuario.service';

@Controller('/usuarios')
export class UsuarioController {

  constructor(
    private usuarioRepository: UsuarioRepository,
    private usuarioService: UsuarioService
  ) {}

  @Post()
  async criaUsuario(@Body() dadosUsuario: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();

    usuarioEntity.id = randomUUID();
    usuarioEntity.email = dadosUsuario.email;
    usuarioEntity.nome = dadosUsuario.nome;
    usuarioEntity.senha = dadosUsuario.senha;

    this.usuarioService.criaUsuario(usuarioEntity);
    return { 
      id: usuarioEntity.id,
      message: "Usuário criado com sucesso."
     };
  }

  @Get()
  async listaUsuarios() {
    const usuarioSalvos =  await this.usuarioService.listaUsuarios();
    return usuarioSalvos;
  }

  @Put("/:id")
  async atualizaUsuario(@Param("id") id: string, @Body() dadosParaAtualizar: AtualizaUsuarioDTO) {
    const usuarioAtualizado = await this.usuarioService.atualizaUsuario(id, dadosParaAtualizar);
    return {
      usuario: usuarioAtualizado,
      message: "Usuário atualizado com sucesso."
    }
  }

  @Delete("/:id")
  async removeUsuario(@Param("id") id: string) {
    const usuarioRemovido = await this.usuarioService.deletaUsuario(id);

    return {
      usuario: usuarioRemovido,
      message: "Usuário removido com sucesso."
    }
  }
}
