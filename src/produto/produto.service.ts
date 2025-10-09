import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ProdutoEntity } from "./produto.entity";
import { Repository } from "typeorm";
import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";

@Injectable()
export class ProdutoService {
    constructor(
        @InjectRepository(ProdutoEntity)
        private readonly produtoRepository: Repository<ProdutoEntity>
    ) {}

    async criaProduto(produtoEntity: ProdutoEntity) {
        await this.produtoRepository.save(produtoEntity);
    }

    async listaProdutos() {
        return await this.produtoRepository.find();
    }

    async atualizaProduto(id: string, dadosProduto: AtualizaProdutoDTO) {
        await this.produtoRepository.update(id, dadosProduto);
    }

    async deletaProduto(id: string) {
        await this.produtoRepository.delete(id);
    }

}