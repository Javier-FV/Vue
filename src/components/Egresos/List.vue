<template>
    <div id="Egresos" class="fullsize">
        <div class="fullsize">
            <button @click="showCrer" class="btn right success">Crear</button>
        </div>
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
                    <td>{{ item.categoria }}</td>
                    <td>{{ item.fecha_lanzamiento }}</td>
                    <td>{{ item.fecha_pago }}</td>
                    <td style="width:150px; text-align: center; vertical-align: middle;">
                        <button @click="showActualizar(item)" class="btn primary">Editar</button>
                        <button v-on:click="borrar(item.Idegresos)" class="btn danger">Eliminar</button>
                    </td>
                </tr>
            </tbody>
        </table>
        <modal
            v-show="isModalVisible"
            @close="closeModal"
            :editMode="editMode"
            :egreso="egreso"
            @save="save($event)"
            @update="update($event)"
        />
    </div>
</template>

<script>
    import Modal from "./components/Modal";
    import axios from 'axios';
    export default {
        name: "Egresos",
        data:function(){
            return {
                username: "",
                egresos: {},
                egreso: {
                    descripcion: '',
                    frecuencia: '',
                    importe: 0,
                    fecha_de_vencimiento: new Date().toISOString(),
                    estado: '',
                    categoria: '',
                    fecha_lanzamiento: new Date().toISOString(),
                    fecha_pago: new Date().toISOString(),
                    observaciones: ''
                },
                isModalVisible: false,
                editMode: true,
            }
        },
        components: {
            Modal
        },
        methods: {
            closeModal: function() {
                this.editMode = false;
                this.isModalVisible = false;
            },
            get_list: function() {
                this.username = this.$route.params.username
                let self = this
                axios.get("https://sprint2ciclo3.herokuapp.com/egresos/" + this.username)
                // axios.get("http://localhost:8000/egresos/" + this.username)
                    .then((result) => {
                        self.egresos = result.data
                })
                .catch((error) => {
                    alert("ERROR Servidor");
                });
            },
            borrar: function(id){
                axios.delete("https://sprint2ciclo3.herokuapp.com/egresos/" + id)
                // axios.delete("http://localhost:8000/egresos/" + id)
                    .then((result) => {
                        alert("Registro #" + result.data + " borrado satisfactoriamente");
                        this.get_list();
                    }
                ).catch((error) => {
                    alert('Se generó un error al eliminar el registro')
                });
            },
            showActualizar: function(item) {
                this.egreso = item;
                this.editMode = true;
                this.isModalVisible = true;
            },
            showCrer: function() {
                this.resetEgreso();
                this.editMode = false;
                this.isModalVisible = true;
            },
            save: function(data) {
                data.username = this.username;
                data.Idegresos = 0;
                
                axios.post("https://sprint2ciclo3.herokuapp.com/egresos", data)
                // axios.post("http://localhost:8000/egresos", data)
                    .then((result) => {
                        alert("Registro Creado satisfactoriamente");
                        this.get_list();
                        this.resetEgreso();
                    }
                ).catch((error) => {
                    alert('Se generó un error al crear el registro')
                });
            },
            update: function(data){
                axios.put("https://sprint2ciclo3.herokuapp.com/egresos/" + data.Idegresos, data)
                // axios.put("http://localhost:8000/egresos/" + data.Idegresos, data)
                    .then((result) => {
                        alert("Registro actualizado satisfactoriamente");
                        this.get_list();
                        this.resetEgreso();
                    }
                ).catch((error) => {
                    alert('Se generó un error al actualizar el registro')
                });
            },
            resetEgreso: function(){
                this.egreso = {
                    descripcion: '',
                    frecuencia: '',
                    importe: 0,
                    fecha_de_vencimiento: new Date().toISOString(),
                    estado: '',
                    categoria: '',
                    fecha_lanzamiento: new Date().toISOString(),
                    fecha_pago: new Date().toISOString(),
                    observaciones: ''
                };
                
                this.editMode = false;
                this.isModalVisible = false;
            }
        },
        created: function(){
            this.username = this.$route.params.username;
            this.get_list();
        }
    }
</script>

<style>
    .overflow-hidden {
        overflow: hidden;
    }
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
        background: #dc3545;
    }
    .primary {
        color: #E5E7E9;
        background: #007bff;
    }
    .success {
        color: #e5e7e9;
        background: #28a745;
    }
    .btn {
        border: 1px solid #df4759;
        border-radius: 5px;
        padding: 10px 10px;
    }
    .right {
        position: relative;
        float: right;
    }
    .fullsize{
        width:850px; /* or whatever width you want. */
        max-width:850px; /* or whatever width you want. */
        display: inline-block;
    }
    tr:nth-child(even) {background-color: #f2f2f2;}
</style>