

var app = new Vue({
    el: '#alacena',
    data: {
        niveles: [],
        tipo_productos: [],
        productos: [],
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
                    self.productos = response.data;
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
        }
    },
    computed: {},
    mounted(){
        this.cargar_dataset()
    }

});
