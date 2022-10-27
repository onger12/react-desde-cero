
export const usContext = (clave, nombre, edad, rango = 'Capitán') => {
    //Simulaciónde un fetch a una API que haría la busqueda de un heroe a partir de la clave
    const bool = Math.random() < 0.5;
    if(bool)
        {
            return {
                meta: {
                    found: 'ok',
                    time: 0.2234
                },
                data: {
                    nombreClave: clave,
                    anios: edad,
                    latlng: {
                        lat: 14.1232,
                        lng: -12.3232
                    },
                    comics: {
                        bla: 'bla bla bla'
                    }
                }
            }
        }else
        {
            return {
                meta: {
                    found: 'throw',
                    time: null
                },
                data: {}
            }
        }


}
