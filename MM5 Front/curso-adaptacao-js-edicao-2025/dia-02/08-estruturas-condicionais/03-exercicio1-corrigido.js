/* Constantes de animais */
const ANIMAL_COMPANHEIRO = "Companheira(o)";
const ANIMAL_ASTUTO = "Astuta(o)";
const ANIMAL_GUARDIAO = "Guardiã(o)";
const ANIMAL_FEROZ = "Feroz";
const ANIMAL_DESCONHECIDO = "Desconhecida(o)";
    
/* Constantes de cores */
const COR_FLAMEJANTE = "Flamejante";
const COR_SABEDORIA = "Sábia(o)";
const COR_SILVESTRE = "Silvestre";
const COR_RADIANTE = "Radiante";
const COR_MISTERIOSA = "Misteriosa(o)";

/* Constantes de aventuras */
const AVENTURA_EXPLORAR = "Pront(a)o para aventuras!";
const AVENTURA_DESCANSAR = "Tranquila(o) e serena(o)!";
const AVENTURA_CRIAR = "Criativa(o) e engenhosa(o)!";
const AVENTURA_COMPETIR = "Audaciosa(o) e competitiva(o)!";
const AVENTURA_DESTEMIDA = "Destemida(o) em qualquer jornada!";

let animalUsuario = "DRAGÃO"; 
let corUsuario = "vermelho";  
let aventuraUsuario = "competir";

animalUsuario = animalUsuario.toLowerCase();
corUsuario = corUsuario.toLowerCase();
aventuraUsuario = aventuraUsuario.toLowerCase();

let animalEscolhido;
if (animalUsuario === "cão") {
    animalEscolhido = ANIMAL_COMPANHEIRO;
} else if (animalUsuario === "gato") {
    animalEscolhido = ANIMAL_ASTUTO;
} else if (animalUsuario === "coruja") {
    animalEscolhido = ANIMAL_GUARDIAO;
} else if (animalUsuario === "dragão") {
    animalEscolhido = ANIMAL_FEROZ;
} else {
    animalEscolhido = ANIMAL_DESCONHECIDO;
}

let corEscolhida;
if (corUsuario === "vermelho") {
    corEscolhida = COR_FLAMEJANTE;
} else if (corUsuario === "azul") {
    corEscolhida = COR_SABEDORIA;
} else if (corUsuario === "verde") {
    corEscolhida = COR_SILVESTRE;
} else if (corUsuario === "amarelo") {
    corEscolhida = COR_RADIANTE;
} else {
    corEscolhida = COR_MISTERIOSA;
}

let aventuraEscolhida;
switch (aventuraUsuario) {
    case "explorar":
        aventuraEscolhida = AVENTURA_EXPLORAR;
        break;
    case "descansar":
        aventuraEscolhida = AVENTURA_DESCANSAR;
        break;
    case "criar":
        aventuraEscolhida = AVENTURA_CRIAR;
        break;
    case "competir":
        aventuraEscolhida = AVENTURA_COMPETIR;
        break;
    default:
        aventuraEscolhida = AVENTURA_DESTEMIDA;
        break;
}

console.log(`\nSeu avatar é: ${animalEscolhido} ${corEscolhida} - ${aventuraEscolhida}`);
