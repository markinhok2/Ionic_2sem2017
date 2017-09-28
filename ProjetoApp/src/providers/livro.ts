import { Injectable } from '@angular/core';
import { ILivro } from "../interfaces/ILivro";

@Injectable()
export class LivroProvider {

  private livros: ILivro[] = [];

  constructor() {
    if (this.livros.length == 0)
      this.popularLivros();
  }

  popularLivros() {
    this.livros.push({ id: 1, titulo: "A sustentabilidade Ambiental", ano: 2017, img: "assets/capas/livro1.jpg", destaque: false });
    this.livros.push({ id: 2, titulo: "Complexidade e Sustentabilidade", ano: 2013, img: "assets/capas/livro2.jpg", destaque: false  });
    this.livros.push({ id: 3, titulo: "Cuidado e Sustentabilidade", ano: 2013, img: "assets/capas/livro3.jpg", destaque: false  });
    this.livros.push({ id: 4, titulo: "Educação e Sustentabilidade", ano: 2015, img: "assets/capas/livro4.jpg", destaque: false  });
    this.livros.push({ id: 5, titulo: "Minha Casa Sustentável", ano: 2010, img: "assets/capas/livro5.jpg", destaque: false  });
    this.livros.push({ id: 6, titulo: "O homem que salvou Nova York da falta de agua", ano: 2015, img: "assets/capas/livro6.jpg", destaque: false  });
    this.livros.push({ id: 7, titulo: "Os desafios da sustentabilidade", ano: 2007, img: "assets/capas/livro7.jpg", destaque: false  });
    this.livros.push({ id: 8, titulo: "Saúde, ambiente e sustentabilidade", ano: 2006, img: "assets/capas/livro8.jpg", destaque: false  });
    this.livros.push({ id: 9, titulo: "Sustentabilidade", ano: 2010, img: "assets/capas/livro9.jpg", destaque: false  });
    this.livros.push({ id: 10, titulo: "Sustentabilidade - a economia mais humana", ano: 2009, img: "assets/capas/livro10.jpg", destaque: false  });
  }

  getInstancia(): ILivro {
    return {
      id: this.getNextID(),
      titulo: "",
      ano: null,
      img: "",
      destaque: false 
    };
  }

  getLivros(): ILivro[] {
    return this.livros;
  }

  adicionarLivro(livro: ILivro) {
    this.livros.push(livro);
  }

  removerLivro(livro: ILivro) {
    let position = this.livros.findIndex((l: ILivro) => {
      return l.id == livro.id;
    });

    this.livros.splice(position, 1);
  }

  private getNextID(): number {
    let nextId = 0;

    if (this.livros.length > 0) {
      nextId = Math.max.apply(
        Math, this.livros.map(function (o) { return o.id; })
      );
    }

    return ++nextId;
  }

  alterarLivro(livro: ILivro) {

    let position = this.livros.findIndex((l: ILivro) => {
      return l.id == livro.id;
    })

    this.livros[position].titulo = livro.titulo;
    this.livros[position].ano = livro.ano;
    this.livros[position].img = livro.img;
    this.livros[position].destaque = livro.destaque;
  }
}
