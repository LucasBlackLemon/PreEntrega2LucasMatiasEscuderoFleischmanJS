
// class ReservaTurno {
//     constructor() {
//         this.nombre = '';
//         this.edad = 0;
//         this.reservas = JSON.parse(localStorage.getItem('reservas')) || {};
//     }

//     mostrarMensaje(mensaje) {
//         alert(mensaje);
//     }

//     getHorarioDisponible(horaReserva, mesSeleccionado) {
//         const fechaInicio = new Date(2023, mesSeleccionado - 1, 1);
//         const ultimoDiaMes = new Date(2023, mesSeleccionado, 0).getDate();
//         const fechaFin = new Date(2023, mesSeleccionado - 1, ultimoDiaMes);

//         const horarioDisponible = [];
//         const fechasDisponibles = this.getFechasDisponibles(horaReserva, fechaInicio, fechaFin);

//         fechasDisponibles.forEach((fecha) => {
//             horarioDisponible.push(fecha.toLocaleDateString());
//         });

//         return horarioDisponible;
//     }

//     getFechasDisponibles(horaReserva, fechaInicio, fechaFin) {
//         return this.getRangoFechas(fechaInicio, fechaFin).filter((fecha) => {
//             const fechaHoraReserva = fecha.toISOString().split('T')[0] + '-' + horaReserva;
//             return !this.reservas[fechaHoraReserva];
//         });
//     }

//     getRangoFechas(fechaInicio, fechaFin) {
//         const fechas = [];
//         const fecha = new Date(fechaInicio);
//         while (fecha <= fechaFin) {
//             fechas.push(new Date(fecha));
//             fecha.setDate(fecha.getDate() + 1);
//         }
//         return fechas;
//     }

//     realizarReserva() {
//         const form = document.querySelector('form');
//         this.nombre = document.getElementById('name');
//         this.edad = document.getElementById('age');

//         form.addEventListener('submit', (event) => {
//             event.preventDefault();

//             this.nombre = this.nombre.value;
//             this.edad = parseInt(this.edad.value);
//             const horaDeReserva = document.getElementById('horario').value;
//             const fechaSeleccionada = document.querySelector('.calendario2 input[type="date"]').value;

//             if (horaDeReserva && fechaSeleccionada) {
//                 const fecha = new Date(fechaSeleccionada);
//                 if (horaDeReserva >= '09:00' && horaDeReserva <= '18:00') {
//                     const fechaHoraReserva = fecha.toISOString().split('T')[0] + '-' + horaDeReserva;
//                     if (this.reservas[fechaHoraReserva]) {
//                         Swal.fire({
//                             icon: 'error',
//                             title: 'Intente nuevamente',
//                             text: 'Este turno ya ha sido reservado. Por favor, elige otra fecha u hora.',
//                         });
//                     } else {
//                         this.reservas[fechaHoraReserva] = {
//                             nombre: this.nombre,
//                             edad: this.edad,
//                         };
//                         localStorage.setItem('reservas', JSON.stringify(this.reservas));
//                         this.nombre = '';
//                         this.edad = 0;
//                         document.getElementById('horario').value = '';
//                         document.querySelector('.calendario2 input[type="date"]').value = '';
//                         Swal.fire('Reserva realizada!', `Muchas gracias, lo esperamos el día ${fecha.toLocaleDateString()} a las ${horaDeReserva}`, 'success');
//                     }
//                 } else {
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Intente nuevamente',
//                         text: 'Hora ingresada no válida. El horario debe estar entre 09:00 y 18:00.',
//                     });
//                 }
//             } else {
//                 Swal.fire('Por favor, completa todos los campos del formulario.');
//             }
//         });
//     }
// }

// const simulador = new ReservaTurno();

// simulador.realizarReserva();

// document.querySelector('.botonConsulta').addEventListener('click', function () {
//     const horaReserva = document.querySelector('#horarioC').value;
//     const mesSeleccionado = document.querySelector('#month').value;

//     if (horaReserva && mesSeleccionado) {
//         const diasDisponibles = simulador.getHorarioDisponible(horaReserva, mesSeleccionado);
//         const listaDias = document.querySelector('#diasDisponibles');
//         listaDias.innerHTML = '';

//         if (diasDisponibles.length > 0) {
//             diasDisponibles.forEach((dia) => {
//                 const listItem = document.createElement('li');
//                 listItem.textContent = dia;
//                 listaDias.appendChild(listItem);
//             })
//             Swal.fire(diasDisponibles);
//         } else {
//             listaDias.textContent = 'No hay días disponibles en ese horario para el mes seleccionado.';
//         }
//     }
// });

// class ReservaTurno {
//     constructor() {
//         this.nombre = '';
//         this.edad = 0;
//         this.reservas = JSON.parse(localStorage.getItem('reservas')) || {};
//     }

//     mostrarMensaje(mensaje) {
//         alert(mensaje);
//     }

//     getHorarioDisponible(horaReserva, mesSeleccionado) {
//         // Obtiene el año y el mes del mes seleccionado
//         const [year, month] = mesSeleccionado.split('-');
//         const fechaInicio = new Date(year, month - 1, 1); // Resta 1 porque los meses van de 0 a 11
//         const fechaFin = new Date(year, month, 0); // El día 0 es el último día del mes anterior

//         const horarioDisponible = [];

//         const horaInicio = parseInt(horaReserva.split(':')[0]);

//         for (let dia = 1; dia <= fechaFin.getDate(); dia++) {
//             const fecha = new Date(year, month - 1, dia, horaInicio, 0);
//             const fechaHoraReserva = fecha.toISOString().split('T')[0] + '-' + horaReserva;

//             if (!this.reservas[fechaHoraReserva]) {
//                 horarioDisponible.push(fecha.toLocaleDateString());
//             }
//         }

//         return horarioDisponible;
//     }

//     realizarReserva() {
//         const form = document.querySelector('form');
//         this.nombre = document.getElementById('name');
//         this.edad = document.getElementById('age');

//         form.addEventListener('submit', (event) => {
//             event.preventDefault();

//             this.nombre = this.nombre.value;
//             this.edad = parseInt(this.edad.value);
//             const horaDeReserva = document.getElementById('horario').value;
//             const fechaSeleccionada = document.querySelector('.calendario2 input[type="date"]').value;

//             if (horaDeReserva && fechaSeleccionada) {
//                 const fecha = new Date(fechaSeleccionada);
//                 const horaInicio = parseInt(horaDeReserva.split(':')[0]);

//                 if (horaInicio >= 9 && horaInicio <= 18) {
//                     const fechaHoraReserva = fecha.toISOString().split('T')[0] + '-' + horaDeReserva;
//                     if (this.reservas[fechaHoraReserva]) {
//                         Swal.fire({
//                             icon: 'error',
//                             title: 'Intente nuevamente',
//                             text: 'Este turno ya ha sido reservado. Por favor, elige otra fecha u hora.',
//                         });
//                     } else {
//                         this.reservas[fechaHoraReserva] = {
//                             nombre: this.nombre,
//                             edad: this.edad,
//                         };
//                         localStorage.setItem('reservas', JSON.stringify(this.reservas));
//                         this.nombre = '';
//                         this.edad = 0;
//                         document.getElementById('horario').value = '';
//                         document.querySelector('.calendario2 input[type="date"]').value = '';
//                         Swal.fire('Reserva realizada!', `Muchas gracias, lo esperamos el día ${fecha.toLocaleDateString()} a las ${horaDeReserva}`, 'success');
//                     }
//                 } else {
//                     Swal.fire({
//                         icon: 'error',
//                         title: 'Intente nuevamente',
//                         text: 'Hora ingresada no válida. El horario debe estar entre 09:00 y 18:00.',
//                     });
//                 }
//             } else {
//                 Swal.fire('Por favor, completa todos los campos del formulario.');
//             }
//         });
//     }
// }

// const simulador = new ReservaTurno();
// simulador.mostrarMensaje('Bienvenido a Black Lemon');
// simulador.realizarReserva();

// // Evento para consultar días disponibles
// document.querySelector('.botonConsulta').addEventListener('click', function () {
//     const horaReserva = document.querySelector('#horarioC').value;
//     const mesSeleccionado = document.querySelector('#month').value;

//     if (horaReserva && mesSeleccionado) {
//         const diasDisponibles = simulador.getHorarioDisponible(horaReserva, mesSeleccionado);
//         const listaDias = document.querySelector('#diasDisponibles');
//         listaDias.innerHTML = '';

//         if (diasDisponibles.length > 0) {
//             diasDisponibles.forEach((dia) => {
//                 const listItem = document.createElement('li');
//                 listItem.textContent = dia;
//                 listaDias.appendChild(listItem);
//             });
//         } else {
//             listaDias.textContent = 'No hay días disponibles en ese horario para el mes seleccionado.';
//         }
//     } else {
//         Swal.fire('Por favor, completa todos los campos del formulario de consulta.');
//     }
// });




class ReservaTurno {
    constructor() {
        this.nombre = '';
        this.edad = 0;
        this.reservas = JSON.parse(localStorage.getItem('reservas')) || {};
    }

    mostrarMensaje(mensaje) {
        alert(mensaje);
    }

    getHorarioDisponible(horaReserva, mesSeleccionado) {
        const [year, month] = mesSeleccionado.split('-');
        const fechaInicio = new Date(year, month - 1, 1); // Resta 1 porque los meses van de 0 a 11
        const fechaFin = new Date(year, month, 0); // El día 0 es el último día del mes anterior

        const horarioDisponible = [];

        const horaInicio = parseInt(horaReserva.split(':')[0]);

        for (let dia = 1; dia <= fechaFin.getDate(); dia++) {
            const fecha = new Date(year, month - 1, dia, horaInicio, 0);
            const fechaHoraReserva = fecha.toISOString().split('T')[0] + '-' + horaReserva;

            if (!this.reservas[fechaHoraReserva]) {
                horarioDisponible.push(fecha.getDate());
            }
        }

        return horarioDisponible;
    }

    realizarReserva() {
        const form = document.querySelector('form');
        this.nombre = document.getElementById('name');
        this.edad = document.getElementById('age');

        form.addEventListener('submit', (event) => {
            event.preventDefault();

            this.nombre = this.nombre.value;
            this.edad = parseInt(this.edad.value);
            const horaDeReserva = document.getElementById('horario').value;
            const fechaSeleccionada = document.querySelector('.calendario2 input[type="date"]').value;

            if (horaDeReserva && fechaSeleccionada) {
                const fecha = new Date(fechaSeleccionada);
                const horaInicio = parseInt(horaDeReserva.split(':')[0]);

                if (horaInicio >= 9 && horaInicio <= 18) {
                    const fechaHoraReserva = fecha.toISOString().split('T')[0] + '-' + horaDeReserva;
                    if (this.reservas[fechaHoraReserva]) {
                        Swal.fire({
                            icon: 'error',
                            title: 'Intente nuevamente',
                            text: 'Este turno ya ha sido reservado. Por favor, elige otra fecha u hora.',
                        });
                    } else {
                        this.reservas[fechaHoraReserva] = {
                            nombre: this.nombre,
                            edad: this.edad,
                        };
                        localStorage.setItem('reservas', JSON.stringify(this.reservas));
                        this.nombre = '';
                        this.edad = 0;
                        document.getElementById('horario').value = '';
                        document.querySelector('.calendario2 input[type="date"]').value = '';
                        Swal.fire(
                        'Reserva realizada!', 
                        `Muchas gracias, lo esperamos el día ${fecha.toLocaleDateString()} a las ${horaDeReserva}`, 
                        'success');
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Intente nuevamente',
                        text: 'Hora ingresada no válida. El horario debe estar entre 09:00 y 18:00.',
                    });
                }
            } else {
                Swal.fire('Por favor, completa todos los campos del formulario.');
            }
        });
    }
}

const simulador = new ReservaTurno();
simulador.realizarReserva();

document.querySelector('.botonConsulta').addEventListener('click', function () {
    const horaReserva = document.querySelector('#horarioC').value;
    const mesSeleccionado = document.querySelector('#month').value;

    if (horaReserva && mesSeleccionado) {
        const diasDisponibles = simulador.getHorarioDisponible(horaReserva, mesSeleccionado);
        const listaDias = document.querySelector('#diasDisponibles');

        if (diasDisponibles.length > 0) {
            const mensaje = `Días disponibles: ${diasDisponibles.join(', ')}`;
            Swal.fire('Días Disponibles', mensaje, 'info');
        } else {
            Swal.fire('Días Disponibles', 'No hay días disponibles en ese horario para el mes seleccionado.', 'info');
        }
    } 
});