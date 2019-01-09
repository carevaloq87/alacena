

var app = new Vue({
    el: '#alacena',
    data: {
        niveles: [],
        texto: 'descrip',
        tipo_productos: [],
        producto_nuevo: {
            "id": 1,
            "nombre": "",
            "fecha_vencimiento": "",
            "status": 0,
            "tipo_producto": 0,
            "nivel_id": 0
        },
        productos: [],
        productos_a_mostrar: [],
        filtro_actual: -1,
        url_niveles: './dataset/nivel.json',
        url_productos: './dataset/productos.json',
        url_tipo_productos: './dataset/tipo_producto.json'
    },
    methods: {
        cargar_dataset: function () {
            let self = this;
            self.traer_niveles();
            self.traer_tipos_producto();
            self.traer_productos();
        },
        traer_niveles: function () {
            let self = this;
            axios.get(self.url_niveles)
                .then(function (response) {
                    self.niveles = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        traer_tipos_producto: function () {
            let self = this;
            axios.get(self.url_tipo_productos)
                .then(function (response) {
                    console.log(response);
                    self.tipo_productos = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        traer_productos: function () {
            let self = this;
            axios.get(self.url_productos)
                .then(function (response) {
                    console.log(response);
                    self.productos_a_mostrar = self.productos = response.data;
                    
                })
                .catch(function (error) {
                    console.log(error);
                });
        },
        nombre_tipo_producto_por_id: function (id) {
            let self = this;
            return self.iterar_obj(self.tipo_productos, id);
        },
        nombre_status_por_id: function (id) {
            let nombre_status = 'Activo';
            if (id < 1) {
                nombre_status = 'Inactivo';
            }
            return nombre_status;
        },
        nombre_nivel_por_id: function (id) {
            let self = this;
            return self.iterar_obj(self.niveles, id);
        },
        iterar_obj: function (objetos, id) {
            let nombre = '';
            objetos.forEach( objeto => (objeto.id == id ? nombre = objeto.nombre : '') );
            return nombre;
        },
        agregar_producto: function() {
            let pn = Object.assign({}, this.producto_nuevo);
            this.productos_a_mostrar.push(pn);
        },
        borrar_producto: function(id) {
            this. productos_a_mostrar = this.productos = this.productos.filter(function(prod) {
                if(prod.id != id){
                    return prod;
                }
            });
        },
        filtro_activos: function() {
            this.filtro_actual++;
            console.log(this.filtro_actual);
            this.productos_a_mostrar = this.productos_a_mostrar.filter(function(prod) {
                console.log(prod);
                if(parseInt(prod.status) == parseInt(this.filtro_actual)){ 
                    return prod;
                }
            });

            if(this.filtro_actual >= 1){
                this.filtro_actual = -1;
            }

        },
        limpiar_filtros: function() {
            this.productos_a_mostrar = this.productos;
        }
    },
    computed: {},
    mounted(){
        this.cargar_dataset()
    }

});
