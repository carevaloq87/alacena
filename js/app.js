

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

        }
    },
    mounted(){
        this.cargar_dataset()
    }

});
