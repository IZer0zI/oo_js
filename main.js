function Pokemon(nome, tipo, especie) {
    this.nome = nome;
    this.tipo = tipo;
    this.especie = especie;
}

function Evolucao2(nome) {
    this.nome = nome;

    Pokemon.call(this, nome,"Grass Poison", "Seed Pokémon");
}

function Evolucao3(nome) {
    this.nome = nome;

    Pokemon.call(this, nome,"Grass Poison", "Seed Pokémon");
}

const pokemon1 = new Pokemon("Bulbasaur", "Grass Poison", "Seed Pokémon");
const evolucaoPokemon3 = new Evolucao3("Venusaur");
const evolucaoPokemon2 = new Evolucao2("Ivysaur");

console.log(pokemon1);
console.log(evolucaoPokemon2);
console.log(evolucaoPokemon3);
