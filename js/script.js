
let vida = 100;
let pociones = 3;
const limiteUsoPocion = 50; 
const limiteMaxVida = 100;

console.log(`--- Inicio del juego ---`);
console.log(`Vida inicial: ${vida} | Pociones disponibles: ${pociones}`);

const intervalo = setInterval(() => {
    vida -= 15;

    if (vida < 0) vida = 0;

    console.log(`\nEl jugador recibio dano! Vida actual: ${vida}`);

    if(vida < limiteUsoPocion && pociones > 0){
        pociones --;
        vida += 30;

        if (vida > limiteMaxVida) {
      vida = limiteMaxVida;
    }

    console.log(` Pocion utilizada Se recuperaron 30 pts. Vida actual: ${vida} | Pociones restantes: ${pociones}`);
  }
    
  if (vida <= 0) {
    console.log("\nEl jugador ha muerto (Vida = 0).");
    clearInterval(intervalo);

}
}, 2000);


//Organizar bolsa

const pokedex = [
  { nombre: "Pokeball", cantidad: 5, tipo: "Normal" },
  { nombre: "Repel", cantidad: 3, tipo: "Normal" },
  { nombre: "Quick Attack", cantidad: 2, tipo: "TM" },
  { nombre: "Surf", cantidad: 3, tipo: "TM" },
  { nombre: "Soda Pop", cantidad: 10, tipo: "Consumable" }
];

function organizarBolsa(bolsa) {
  // Limpiar posibles elementos nulos o undefined del arreglo
  const bolsaLimpia = bolsa.filter(item => item !== undefined && item !== null);

  // Dividir en arreglos por tipo
  const normales = bolsaLimpia.filter(item => item.tipo === "Normal");
  const tms = bolsaLimpia.filter(item => item.tipo === "TM");
  const consumibles = bolsaLimpia.filter(item => item.tipo === "Consumable");

  // Función auxiliar para ordenar de mayor a menor por cantidad
  const ordenarPorCantidad = (arr) => arr.sort((a, b) => b.cantidad - a.cantidad);

  console.log("=== ELEMENTOS TIPO NORMAL ===");
  console.table(ordenarPorCantidad(normales));

  console.log("=== ELEMENTOS TIPO TM ===");
  console.table(ordenarPorCantidad(tms));

  console.log("=== ELEMENTOS TIPO CONSUMABLE ===");
  console.table(ordenarPorCantidad(consumibles));
}

// Ejecución de la función
organizarBolsa(pokedex);


//Batalla pokemon


const pikachu = {
  nombre: "Pikachu",
  tipo: "Electrico",
  ataque: "Impacto",
  dmg: 20,
  vida: 50,
  defensa: 10
};

const bulbasaur = {
  nombre: "Bulbasaur",
  tipo: "Planta",
  ataque: "Placaje",
  dmg: 15,
  vida: 50,
  defensa: 10
};

console.log(pikachu.nombre + " se enfrenta a " + bulbasaur.nombre);

console.log(pikachu, bulbasaur);

function atacar(atacante, defensor){
  console.log(atacante.nombre + " usa el ataque " + atacante.ataque + " contra " + defensor.nombre);


const dmgReal = atacante.dmg - defensor.defensa;
const dmgCalculado = dmgReal > 0 ? dmgReal : 0;
if(dmgReal < 0){
  dmgReal = 0
}

defensor.vida -= dmgCalculado;
  if (defensor.vida < 0) defensor.vida = 0;

  console.log(`Ataque hace ${atacante.dmg} puntos de dmg
${defensor.nombre} nego ${defensor.defensa} puntos de dmg`)
  console.log(`Ataque hizo ${dmgCalculado} puntos de dmg`); 
  console.log(`Vida restante de ${defensor.nombre} es ${defensor.vida}`);
}
  atacar(pikachu, bulbasaur);
  atacar(bulbasaur, pikachu);