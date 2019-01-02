

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
            axios.get(self.url_niveles)
                .then(function (response) {
                    console.log(response);
                    self.niveles = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
            axios.get(self.url_tipo_productos)
                .then(function (response) {
                    console.log(response);
                    self.tipo_productos = response.data;
                })
                .catch(function (error) {
                    console.log(error);
                });
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
            for (let index = 0; index < self.tipo_productos.length; index++) {
                if (self.tipo_productos[index].id == id) {
                    return self.tipo_productos[index].nombre;
                }
            }
        },
        nombre_status_por_id: function (id) {
            let nombre_status = 'activo';
            if (id < 1) {
                nombre_status = 'inactivo';
            }
            return nombre_status;
        },
        nombre_nivel_por_id: function (id) {
            let self = this;
            for (let index = 0; index < self.niveles.length; index++) {
                if (self.niveles[index].id == id) {
                    return self.niveles[index].nombre;
                }
            }
        }
    },
    mounted(){
        this.cargar_dataset()
    }

});
