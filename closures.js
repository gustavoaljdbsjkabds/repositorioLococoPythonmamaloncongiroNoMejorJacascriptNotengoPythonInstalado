const miContador = (()=>{
    let _contador = 0
    function incrementar (){
        return _contador++;
    }

    function decrementar(){
        return _contador--;
    }

    function valor(){
        return _contador;
    }

    return {
        incrementar: incrementar,
        decrementar: decrementar,
        valor: valor
    }
})();

for(let i = 1; i < 12; i++){
    miContador.incrementar()
}

console.log(miContador.valor());

for(let i = 1; i < 5; i++){
    miContador.decrementar()
}

console.log(miContador.valor());


/**
 * Funcion closure y clase
 */

function inventario (nombre){
    let _nombre = nombre;
    let _articulos = {}

    function add(nombre, cantidad){
        _articulos[nombre] = cantidad;
    }

    function borrar(nombre){
        delete _articulos[nombre];
    }

    function cantidad(nombre){
        return _articulos[nombre];
    }

    function nombre (){
        return _nombre;
    }

    return {
        add: add,
        borrar: borrar,
        cantidad: cantidad,
        nombre: nombre
    }
}

const libros = inventario("libros");
libros.add("Calculo", 3);
libros.cantidad("calculo");
libros.borrar("calculo");
libros.cantidad("calculo");
libros.nombre();


/**
 * Clase, esta forma de codificar se le llama Factory Pattern o Template Function
 */

function Inventario (nombre){
    this.nombre = nombre;
    this.articulos = [];

    this.add = (nombre, cantidad) =>{
        this.articulos[nombre] = cantidad;
    }

    this.borrar = (nombre) => {
        delete this.articulos[nombre];
    }

    this.cantidad = (nombre) => {
        return this.articulos[nombre];
    }

    this.getNombre = () => {
        return this.nombre;
    }
}

const Libros = new Inventario("Libros")
Libros.add("calculo", 3)
Libros.cantidad("calculo")
Libros.borrar("calculo")
Libros.borrar("calculo")
Libros.cantidad("calculo")
Libros.getNombre()

/**
 * los objetos ocupan espacion en memoria para variables y metodos
 * lo que los hace ineficientes
 * para solucionar esto se usa el objeto Prototype que permite a los objetos
 * de la misma clase compartir metodos
 */

function Inventario_p (nombre){
    this.nombre = nombre
    this.articulos = []
};

Inventario_p.prototype = {
    add: function(nombre, cantidad)  {
        this.articulos[nombre] = cantidad;
    },

    borrar: function(nombre) {
        delete this.articulos[nombre];
    },

    cantidad: function(nombre) {
        return this.articulos[nombre];
    },

    getNombre: function() {
        return this.nombre;
    }
};

var series = new Inventario_p("Series");
series.getNombre()
series.add("Seinfield", 10)
series.add("The Big Bang Theory", 11)
series.add("Dragon Ball", 4)
series.add("Friends", 5)
console.log(series.cantidad("Friends"))
console.log(series.cantidad("The Big Bang Theory"))
series.borrar("Friends")
console.log(series.cantidad("Friends"))