//Ejercicio 1 
//Funciones constructoras

import { Tarea, TareaClass } from "./helpers/ejercicio1";

const tarea1 = new Tarea("Aprender javaScrpt");
const tarea2 = new Tarea("Aprender React");

tarea1.info();
tarea1.toggleCompletada();
tarea1.info();
tarea2.info();



//con clases

const tarea1Clases = new TareaClass("Aprender javaScrpt");
const tarea2Clases = new TareaClass("Aprender React");

tarea1Clases.info();
tarea1Clases.toggleCompletada();
tarea1Clases.info();
tarea2Clases.info();

