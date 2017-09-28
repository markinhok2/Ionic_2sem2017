import { Injectable } from '@angular/core';
import { IUsuario } from "../interfaces/IUsuario";

@Injectable()
export class UsuarioProvider {

  private usuarios: IUsuario[] = [];

  constructor() {
    if (this.usuarios.length == 0)
      this.popularUsuarios();
  }

  popularUsuarios() {
    this.usuarios.push({id : 1, nome : "Marcos Aurélio", username : "marcos.aurelio", senha : "mudar@123", img : "assets/images/Marcos.jpg" });
    this.usuarios.push({id : 2, nome : "Gabriel Montanher", username : "gabriel.montanher", senha : "mudar@123", img : "assets/images/Gabriel.jpg" });
    this.usuarios.push({id : 3, nome : "Regiane Noronha", username : "regiane.noronha", senha : "mudar@123", img : "assets/images/Regiane.jpg" });
  }

  getInstancia() : IUsuario {
    return {
      id : this.getNextID(),
      nome : "",
      username : "",
      senha : "",
      img : "assets/images/user.png"
    };
  }

  getUsuarios() : IUsuario[] {
    return this.usuarios;
  }

  adicionarUsuario(usuario:IUsuario) {
    this.usuarios.push(usuario);
  }

  removerUsuario(usuario:IUsuario) {
    let position = this.usuarios.findIndex((u:IUsuario) => {
      return u.id == usuario.id;
    });

    this.usuarios.splice(position, 1);
  }

  private getNextID() : number{
    let nextId = 0;

    if (this.usuarios.length > 0)
    {
      nextId = Math.max.apply(
        Math,this.usuarios.map(function(o){return o.id;})
      );
    }

    return ++nextId;
  }

  alterarUsuario(usuario:IUsuario){
    let position = this.usuarios.findIndex((u:IUsuario) => {
      return u.id == usuario.id;
    })
        
    this.usuarios[position].nome = usuario.nome;
    this.usuarios[position].username = usuario.username;
    this.usuarios[position].senha = usuario.senha;
    this.usuarios[position].img = usuario.img;
  }
}
