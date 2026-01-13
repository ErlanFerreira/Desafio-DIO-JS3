class heroi {
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    atacar() {
        let ataque;

    if (this.tipo === "mago"){
        ataque = "magia";
    }
    else if (this.tipo ==="guerreiro"){
        ataque = "espada";
    }
    else if (this.tipo ==="monge"){
        ataque = "artes marciais";
    }
    else if(this.tipo ==="ninja"){
        ataque = "shuriken";
    }
    else{
        "não atacou";
    }

    console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}.`);

    }
}

const Harry = new heroi ("harry potter", 20, "mago");
const Hemam = new heroi ("hemam", 30, "guerreiro");
const Aang = new heroi ("Aang", 16, "monge");
const Scorpion = new heroi ("Scorpion", 28, "ninja");

Harry.atacar();
Hemam.atacar();
Aang.atacar();
Scorpion.atacar();