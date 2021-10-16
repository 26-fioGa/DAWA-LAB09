import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

    private heroes: Heroe[] = [{
            nombre: "Mercurio",
            bio: "Es el planeta más cercano al Sol y el más pequeño del sistema solar. Mercurio, como la Tierra, tiene un campo magnético interior, al contrario que Marte y Venus. Menos de la mitad de su superficie ha sido fotografiada por una nave espacial. Su nombre proviene debido a que Mercurio eera el rápido dios romano del comercio, este se corresponde con el griego Hermes, mensajero de los dioses.",
            img: "assets/img/mercurio.png",
            distanciaSol: "57.91 millones km",
            gravedad: "3.7 m/s²",
            duracionDia: "58d 15h 30min"
        },
        {
            nombre: "Venus",
            bio: "Venus está cubierto por una espesa atmósfera que gira rapidamente, formando un mundo abrasador, con temperaturas capaces de fundir el plomo y una presión atmosférica en la superficie 90 veces superior al de la Tierra. Los compuestos sulfurosos son abundantes en las nubes de Venus. La química corrosiva, densa y el movimiento de la atmósfera provocan una gran erosión en la superficie del planeta.",
            img: "assets/img/venus.png",
            distanciaSol: "108.2 millones km",
            gravedad: "8.87 m/s²",
            duracionDia: "116d 18h 0m"
        },
        {
            nombre: "Tierra",
            bio: "Es el quinto planeta más grande del sistema solar, y es el único conocido que seguramente tendrá agua líquida en su superficie. Es el hogar de millones de especies, incluidos los seres humanos y actualmente el único cuerpo astrónomico donde se conoce la existencia de la vida hasta ahora. Se estima que el planeta seguirá siendo capáz de sustentar vida durante otros 500 millones de años, ya que según las previsiones actuales, pasado ese tiempo la creciente luminosidad del sol terminará causando la extinsión de la biósfera.",
            img: "assets/img/tierra.png",
            distanciaSol: "149.6 millones km",
            gravedad: "9.81 m/s²",
            duracionDia: "23h 56m"
        },
        {
            nombre: "Marte",
            bio: "Marte es un planeta rocoso que tiene aproximadamente la mitad del tamño de la Tierra. Al igual que otros planetas, su superficie ha sido alterado por la actividad volcánica, impactos, movimientos tectónicos y efectos atmosféricos. Cuenta con dos satélites Fobos y Deimos, que probablemente son asteroides capturados por la gravedad marciana. Marte toma su nombre del dios romano de la guerra, por su color, rojo como la sangre. Otras civilizaciones también tuvieron en cuenta este color a la hora de darle un nombre al planeta.",
            img: "assets/img/mars.png",
            distanciaSol: "227.9 millones km",
            gravedad: "3.721 m/s²",
            duracionDia: "1d 0h 37m"
        },
        {
            nombre: "Júpiter",
            bio: "Es el planeta más masivo del sistema solar con 4 satélites grandes y muchas otras más pequeñas. En la profundidad de este planeta, la presión y la temperatura se incrementan notablemente, comprimiendo el hidrógeno hasta pasar al estado líquido. A la profundidad de un tercio de su radio el hidrógeno se convierte en métalico y conductor de electricidad, aquí es donde se genera el potente campo magnético de Júpiterl potenciado por la rápida rotación del planeta. Fue nombrado Zeus por los griegos y Júpiter por los romanos. Era la divinidad más importante de ambos panteones.",
            img: "assets/img/jupiter.png",
            distanciaSol: "778.5 millones km",
            gravedad: "24.79 m/s²",
            duracionDia: "9h 50m"
        },
        {
            nombre: "Saturno",
            bio: "A pesar de no ser el único que tiene un sistema de anillos, el de Saturno es el más grande y espectacular, siendo visible incluso desde la Tierra. Esta compuesto de hidrógeno y helio, su volumen es 765 veces más grande que el de la tierra. Posee vientos muy rápidos y estos junto al calor que proviene del centro del planeta provocan las bandas amarillas y doradas visibles en la atmósfera. Saturno toma su nombre del dios romano de la agricultura, es equivalente es el dios Cronos, padre de Zeus/Jupiter.",
            img: "assets/img/saturno.png",
            distanciaSol: "1.434 miles de millones km",
            gravedad: "10.44 m/s²",
            duracionDia: "10h 42m"
        },
        {
            nombre: "Urano",
            bio: "Fue el primer planeta descubierto con la ayuda de un telescopio. Es uno de los gigantes helados del sistema solar exterior. Toma su color azul del gas metano de su atmósfera, la luz del sol pasa a través de la atmósfera y es reflejada por sus nubes superiores, el gas metano absorbe la fracción roja de la luz visible resultando su color azul verdoso. Su descubridor , William Herschel, intentó sin éxito darle el nombre de Georgian Sidus, en honor al rey Jorge III, sin embargo se quedo como Urano, dios griego del cielo.",
            img: "assets/img/urano.png",
            distanciaSol: "2.871 miles de millones km",
            gravedad: "8.87 m/s²",
            duracionDia: "17h 14m"
        },
        {
            nombre: "Neptuno",
            bio: "Este fue el primer planeta localizado mediante predicciones matemáticas, en lugar de observaciones directas del cielo. Curiosamente, debido a la órbita elíptica del planeta enano, Plutón, este último se encuentra más cerca del sol que Neptuno durante 20 de cada 248 años. Su nombre, siguiendo con la tradición de nombres de deidades, fue nombrarlo Neptuno, dios del mar dentro del panteón romano.",
            img: "assets/img/neptuno.png",
            distanciaSol: "4.495 miles de millones km",
            gravedad: "11.15 m/s²",
            duracionDia: "16h 06m"
        }
    ];

    constructor() {
        console.log("Servicio listo para usar!!!");
    }


    getHeroes(): Heroe[] {
        return this.heroes;
    }

    getHeroe(idx: any) {
        return this.heroes[idx];
    }

    buscarHeroes(termino: string): Heroe[] {

        let heroesArr: Heroe[] = [];
        termino = termino.toLowerCase();

        for (let i = 0; i < this.heroes.length; i++) {

            let heroe = this.heroes[i];

            let nombre = heroe.nombre.toLowerCase();

            if (nombre.indexOf(termino) >= 0) {
                heroe.idx = i;
                heroesArr.push(heroe)
            }

        }

        return heroesArr;

    }


}


export interface Heroe {
    nombre: string;
    bio: string;
    img: string;
    distanciaSol: string;
    gravedad: string;
    duracionDia: string;
    idx ? : number;
};