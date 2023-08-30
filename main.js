class ReservaTurno {
    constructor() {
        this.reservas = {};
    }

    mostrarMensaje(mensaje) {
        alert(mensaje);
    }

    realizarReserva() {
        const nombre = prompt('Ingrese su nombre');
        const edad = parseInt(prompt('Ingrese su edad'));

        while (true) {
            const fecha = this.ingresarFecha();
            const horaDeReserva = this.ingresarHora();

            if (this.esHoraValida(horaDeReserva)) {
                const fechaHoraReserva = fecha.toISOString() + '-' + horaDeReserva;
                if (this.reservas[fechaHoraReserva]) {
                    this.mostrarMensaje('Este turno ya ha sido reservado');
                } else {
                    this.reservas[fechaHoraReserva] = { nombre, edad };
                    this.mostrarMensaje('Muchas gracias, lo esperamos el día ' + fecha.toLocaleDateString() + ' a las ' + horaDeReserva + ':00');
                }
            } else {
                this.mostrarMensaje('Hora ingresada no válida');
            }

            const realizarOtraReserva = confirm('¿Quiere realizar otra reserva?');
            if (!realizarOtraReserva) {
                break;
            }
        }
    }

    ingresarFecha() {
        let dia, mes;
        do {
            dia = parseInt(prompt('Indique el día (1-31)'));
        } while (dia < 1 || dia > 31);

        do {
            mes = parseInt(prompt('Indique el mes (1-12)'));
        } while (mes < 1 || mes > 12);

        return new Date(new Date().getFullYear(), mes - 1, dia);
    }

    ingresarHora() {
        const hora = parseInt(prompt('Indique la hora (9-18) para reservar su turno'));
        return hora;
    }

    esHoraValida(hora) {
        return hora >= 9 && hora <= 18;
    }
}

const simulador = new ReservaTurno();
simulador.mostrarMensaje('Bienvenido a Black Lemon');
simulador.realizarReserva();