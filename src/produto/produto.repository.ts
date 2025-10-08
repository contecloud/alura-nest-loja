import { Injectable } from "@nestjs/common";
import { ProdutoEntity } from "./produto.entity";

@Injectable()
export class ProdutoRepository {
    private Produtos: ProdutoEntity[] = [];

    async salvar(Produto: ProdutoEntity) {
        this.Produtos.push(Produto);
    }

    async listar() {
        console.log(this.Produtos)
        return this.Produtos;
    }

    private buscaPorId(id: string){
        const Produto = this.Produtos.find(
            ProdutoSalvo => ProdutoSalvo.id === id
        );

        if (!Produto) {
            throw new Error ("Usuário não existe");
        }

        return Produto;
    }

    async atualiza(id: string, dadosDeAtualizacao: Partial<ProdutoEntity>) {
        const Produto = this.buscaPorId(id);

        Object.entries(dadosDeAtualizacao).forEach(([chave,valor]) => {
            if (chave === "id") {
                return;
            }

            Produto[chave] = valor;
        });

        return Produto;
    }

    async remove(id: string) {
        const Produto = this.buscaPorId(id);

        this.Produtos = this.Produtos.filter(
            ProdutoSalvo => ProdutoSalvo.id !== id
        )

        return Produto;
    }
}