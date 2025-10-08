import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from '@nestjs/common';
import { UsuarioRepository } from './usuario.repository';
import { CriaUsuarioDTO } from './dto/CriaUsuario.dto';
import { UsuarioEntity } from './usuario.entity';
import { v4 as uuid } from 'uuid';
import { ListaUsuarioDTO } from './dto/ListaUsuario.dto';
import { AtualizaUsuarioDTO } from './dto/AtualizaUsuario.dto';

@Controller('/usuarios')
export class UsuarioController {

  constructor(private usuarioRepository: UsuarioRepository) {}

  @Post()
  async criaUsuario(@Body() dadosUsuario: CriaUsuarioDTO) {
    const usuarioEntity = new UsuarioEntity();

    usuarioEntity.id = uuid();
    usuarioEntity.email = dadosUsuario.email;
    usuarioEntity.nome = dadosUsuario.nome;
    usuarioEntity.senha = dadosUsuario.senha;

    this.usuarioRepository.salvar(usuarioEntity);
    return { 
      id: usuarioEntity.id,
      message: "Usuário criado com sucesso."
     };
  }

  @Get()
  async listaUsuarios() {
    const usuarioSalvos =  await this.usuarioRepository.listar();
    const listaUsuarios = usuarioSalvos.map(
      usuario => new ListaUsuarioDTO(
        usuario.id,
        usuario.nome
      )
    );
    return listaUsuarios;
  }

  @Put("/:id")
  async atualizaUsuario(@Param("id") id: string, @Body() dadosParaAtualizar: AtualizaUsuarioDTO) {
    const usuarioAtualizado = await this.usuarioRepository.atualiza(id, dadosParaAtualizar);
    return {
      usuario: usuarioAtualizado,
      message: "Usuário atualizado com sucesso."
    }
  }

  @Delete("/:id")
  async removeUsuario(@Param("id") id: string) {
    const usuarioRemovido = await this.usuarioRepository.remove(id);

    return {
      usuario: usuarioRemovido,
      message: "Usuário removido com sucesso."
    }
  }
}

