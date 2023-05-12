//creo las variables con las horas, minutos y segundos.
let temporizadorHoras = horas;
let temporizadorMinutos = minutos;
let temporizadorSegundos = segundos; 
let temporizador = (temporizadorHoras, temporizadorMinutos, temporizadorSegundos);
//creo una clase.
class temporizadorFuncional {
    constructor(horas, minutos, segundos) {
        this.horas = horas;
        this.minutos = minutos;
        this.segundos = segundos;
    }
}

//boy a conectar los botones de play y pausa usando los "ID".
const play = document.getElementById("play");
const stop = document.getElementById("stop");