import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

class CaracteristicaProduto {
  nome: string;
  descricao: string;
}

class ImagemProduto {
  url: string;
  descricao: string;
}

@Entity({ name: "produtos" })
export class ProdutoEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ name: "usuario_id", length: 100, nullable: false })
  usuarioId: string;
  @Column({ name: "usuario_id", length: 100, nullable: false })
  nome: string;
  @Column({ name: "usuario_id", length: 100, nullable: false })
  valor: number;
  @Column({ name: "usuario_id", length: 100, nullable: false })
  quantidade: number;
  descricao: string;
  categoria: string;
  caracteristicas: CaracteristicaProduto[];
  imagens: ImagemProduto[];
}
