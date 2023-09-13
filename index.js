
class ReservaTurno {
    constructor() {
        this.nombre = '';
        this.edad = 0;
        this.reservas = JSON.parse(localStorage.getItem('reservas')) || {};
    }

    mostrarMensaje(mensaje) {
        alert(mensaje);
    }

    realizarReserva() {
        this.nombre = document.getElementById('name').value;
        this.edad = parseInt(document.getElementById('age').value);

        const botonesDias = document.querySelectorAll('.calendario button');

        function ClickDia(event) {
            const diaSeleccionado = event.target.innerText;
            const fecha = new Date(2023, 8, diaSeleccionado);
            const horaDeReserva = parseInt(document.getElementById('horario').value);

            if (horaDeReserva >= 9 && horaDeReserva <= 18) {
                const fechaHoraReserva = fecha.toISOString() + '-' + horaDeReserva;
                if (this.reservas[fechaHoraReserva]) {
                    this.mostrarMensaje('Este turno ya ha sido reservado, por favor intente con otro horario o fecha');
                } else {
                    this.reservas[fechaHoraReserva] = {
                        nombre: this.nombre,
                        edad: this.edad
                    };
                    localStorage.setItem('reservas', JSON.stringify(this.reservas));
                    this.mostrarMensaje('Muchas gracias, lo esperamos el día ' + fecha.toLocaleDateString() + ' a las ' + horaDeReserva + ':00');
                }
            } else {
                this.mostrarMensaje('Hora ingresada no válida');
            }
        }

        botonesDias.forEach((boton) => {
            boton.addEventListener('click', ClickDia.bind(this));
        });
    }
}

const simulador = new ReservaTurno();
simulador.realizarReserva();