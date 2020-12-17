<template>
    <div id="Egresos">
        <table class="centered">
            <thead>
                <th>Descripción</th>
                <th>Frecuencia</th>
                <th>Valor</th>
                <th>Fecha de vencimiento</th>
                <th>Estado</th>
                <th>Categoria</th>
                <th>Fecha de lanzamiento</th>
                <th>Fecha de pago</th>
                <th>Acciones</th>
            </thead>
            <tbody>
                <tr v-for="item in egresos" :key="item.Idegresos">
                    <td>{{ item.observaciones }}</td>
                    <td>{{ item.frecuencia }}</td>
                    <td>{{ item.importe }}</td>
                    <td>{{ item.fecha_de_vencimiento }}</td>
                    <td>{{ item.estado }}</td>
                    <td>{{ item.categoría }}</td>
                    <td>{{ item.fecha_lanzamiento }}</td>
                    <td>{{ item.fecha_pago }}</td>
                    <td style="width:150px;">
                        <button class="btn primary">Editar</button>
                        <button class="btn danger">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "Egresos",
        data:function(){
            return {
                username: "",
                egresos: {}
            }
        },
        created: function(){
            this.username = this.$route.params.username
            let self = this
            axios.get("http://127.0.0.1:8000/egresos/" + this.username)
                .then((result) => {
                    self.egresos = result.data
                    console.log(self.egresos)
            })
            .catch((error) => {
                alert("ERROR Servidor");
            });
        }
    }
</script>

<style>
    table {
        padding-top: 5;
        width: 100%;
        border-collapse: collapse;
    }
    table, td, th{
        border: 1px solid black;
    }
    .danger {
        color: #E5E7E9;
        background: #df4759;
    }

    .primary {
        color: #E5E7E9;
        background: #0275d8;
        
    }
    .btn {
        border: 1px solid #df4759;
        border-radius: 5px;
        padding: 10px 10px;
    }
</style>