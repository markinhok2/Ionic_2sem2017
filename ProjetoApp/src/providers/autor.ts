import { Injectable } from '@angular/core';
import { IAutor } from "../interfaces/IAutor";

@Injectable()
export class AutorProvider {

  private autores: IAutor[] = [];

  constructor() {
    if (this.autores.length == 0)
      this.popularAutores();
  }

  popularAutores() {
    this.autores.push({ id: 1, nome: "José de Alencar", img: "assets/autores/Autor1.jpg" });
    this.autores.push({ id: 2, nome: "José Sarney", img: "assets/autores/Autor2.jpg" });
    this.autores.push({ id: 3, nome: "André de Leones", img: "assets/autores/Autor3.jpg" });
    this.autores.push({ id: 4, nome: "Paulo Coelho", img: "assets/autores/Autor4.jpg" });
    this.autores.push({ id: 5, nome: "Tony Bellotto", img: "assets/autores/Autor5.jpg" });
    this.autores.push({ id: 6, nome: "Ana Beatriz Barbosa Silva", img: "assets/autores/Autor6.jpg" });
    this.autores.push({ id: 7, nome: "Lya Luft", img: "assets/autores/Autor7.jpg" });
    this.autores.push({ id: 8, nome: "Jô Soares", img: "assets/autores/Autor8.jpg" });
    this.autores.push({ id: 9, nome: "Jorge Amado", img: "assets/autores/Autor9.jpg" });
    this.autores.push({ id: 10, nome: "Fernando Gabeira", img: "assets/autores/Autor10.jpg" });
    this.autores.push({ id: 11, nome: "Eros Grau", img: "assets/autores/Autor11.jpg" });
    this.autores.push({ id: 12, nome: "Clarice Lispector", img: "assets/autores/Autor12.jpg" });
    this.autores.push({ id: 13, nome: "José Mauro de Vasconcelos", img: "assets/autores/Autor13.jpg" });
  }

  getInstancia(): IAutor {
    return {
      id: this.getNextID(),
      nome: "",
      img: "assets/images/user.png"
    };
  }

  getAutores(): IAutor[] {
    return this.autores;
  }

  adicionarAutore(autor: IAutor) {
    this.autores.push(autor);
  }

  removerAutor(autor: IAutor) {
    let position = this.autores.findIndex((u: IAutor) => {
      return u.id == autor.id;
    });

    this.autores.splice(position, 1);
  }

  private getNextID(): number {
    let nextId = 0;

    if (this.autores.length > 0) {
      nextId = Math.max.apply(
        Math, this.autores.map(function (o) { return o.id; })
      );
    }

    return ++nextId;
  }

  alterarAutor(autor: IAutor) {
    let position = this.autores.findIndex((u: IAutor) => {
      return u.id == autor.id;
    })

    this.autores[position].nome = autor.nome;
    this.autores[position].img = autor.img;
  }
}
