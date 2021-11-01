new Vue ({
    el: '#container-main',
    data:{
        productos: [
            {nombre: 'Malteada', ingrediente: 'Leche,Azúcar', tam:'G', precio: 16, vigencia: 'SI'},
            {nombre: 'Piñada', ingrediente: 'Agua,Piña', tam:'Ch', precio: 10, vigencia: 'NO'},
            {nombre: 'Naranjada', ingrediente: 'Agua,Naranja', tam:'Ch', precio: 8, vigencia: 'SI'},
        ],
        ingredienteNuevo: '',
        nombreNuevo: '',
        tamNuevo: '',
        precioNuevo: 0,
        vigenciaNuevo: '',
        filtrarNombre: '',
        rangoPrecio: 0,
        misProductos: [],
        cantidad: 0,
    },
    methods: {
        agregarProducto(){
            this.productos.push({nombre:this.nombreNuevo,ingrediente:this.ingredienteNuevo,tam:this.tamNuevo,precio:this.precioNuevo,vigencia:this.vigenciaNuevo});
            this.nombreNuevo='';
            this.ingredienteNuevo='';
            this.tamNuevo='';
            this.precioNuevo=0;
        },
        comprar(prod){
            this.misProductos.push({nombreCarrito:prod.nombre,cantidadCarrito:this.cantidad,totalCarrito:(prod.precio*this.cantidad)});
            this.cantidad=0;
        }
    },
    computed: {
        productosPorPrecio(){
            return this.productos.filter((prod) => prod.precio >= this.rangoPrecio);
        },
        productosPorNombre(){
            return this.productos.filter((prod) => prod.nombre.includes(this.filtrarNombre));
        }
    }
});