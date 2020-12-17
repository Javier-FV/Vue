<template>
  <div class="register">
    <h1 class="title">Registro</h1>
    <form action class="form" @submit.prevent="register">
      <label class="form-label" for="#usuario">Usuario:</label>
      <input
        v-model="usuario"
        class="form-input"
        type="usuario"
        id="usuario"
        required
        placeholder="Usuario"
      >
      <label class="form-label" for="#contrasena">Contraseña:</label>
      <input
        v-model="contrasena"
        class="form-input"
        type="contrasena"
        id="contrasena"
        placeholder="Contraseña"
      >
      <label class="form-label" for="#contrasena-repeat">Repite la contraseña:</label>
      <input
        v-model="contrasenaRepeat"
        class="form-input"
        type="contrasena"
        id="contrasena-repeat"
        placeholder="Contraseña"
      >
      <label class="form-label" for="#nombre">Nombre:</label>
      <input
        v-model="nombre"
        class="form-input"
        type="nombre"
        id="nombre"
        required
        placeholder="Nombre"
      >
      <label class="form-label" for="#apellido">Apellido:</label>
      <input
        v-model="apellido"
        class="form-input"
        type="apellido"
        id="apellido"
        required
        placeholder="Apellido"
      >
      <label class="form-label" for="#correo">Correo:</label>
      <input
        v-model="correo"
        class="form-input"
        type="correo"
        id="correo"
        required
        placeholder="Correo"
      >
      <label class="form-label" for="#ciudad">Ciudad:</label>
      <input
        v-model="ciudad"
        class="form-input"
        type="ciudad"
        id="ciudad"
        required
        placeholder="Ciudad"
      >
      <label class="form-label" for="#edad">Edad:</label>
      <input
        v-model="edad"
        class="form-input"
        type="edad"
        id="edad"
        required
        placeholder="Edad"
      >
      <label class="form-label" for="#estrato">Estrato:</label>
      <input
        v-model="estrato"
        class="form-input"
        type="estrato"
        id="estrato"
        required
        placeholder="Estrato"
      >
      <label class="form-label" for="#ocupacion">Ocupacion:</label>
      <input
        v-model="ocupacion"
        class="form-input"
        type="ocupacion"
        id="ocupacion"
        required
        placeholder="Ocupacion"
      >
      <label class="form-label" for="#estado_civil">Estado Civil:</label>
      <input
        v-model="estado_civil"
        class="form-input"
        type="estado_civil"
        id="estado_civil"
        required
        placeholder="Estado Civil"
      >
      <label class="form-label" for="#numero_hijos">Numero Hijos:</label>
      <input
        v-model="numero_hijos"
        class="form-input"
        type="numero_hijos"
        id="numero_hijos"
        required
        placeholder="Numero Hijos"
      >
      <input class="form-submit" type="submit" value="Registrarse">
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data: function (){
      return {
      usuario: "",
      contrasena: "",
      contrasenaRepeat: "",
      nombre: "",
      apellido: "",
      correo: "",
      ciudad: "",
      edad: "",
      estrato: "",
      ocuapacion: "",
      estado_civil: "",
      numero_hijos: ""
      }
  },
  created: function(){
      // this.username = this.$route.params.username
      let self = this
      axios.post("http://127.0.0.1:8000/users/user/data/create/" + this.usuario)
          .then((result) => {
        info = JSON.stringify(this.data)
      })
      .catch((error) => {
          alert("ERROR Servidor");
      });
  }
}
// export default {
//   data: () => ({
//     usuario: "",
//     contrasena: "",
//     contrasenaRepeat: ""
//   }),
//   methods: {
//     register() {
//       console.log(this.usuario);
//       console.log(this.contrasena);
//       console.log(this.contrasenaRepeat);
//     }
//   }
// };
</script>

<style>
.register {
  padding: 2rem;
}
.title {
  text-align: center;
}
.form {
  margin: 3rem auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 20%;
  min-width: 350px;
  max-width: 100%;
  background: rgba(19, 35, 47, 0.9);
  border-radius: 5px;
  padding: 40px;
  box-shadow: 0 4px 10px 4px rgba(0, 0, 0, 0.3);
}
.form-label {
  margin-top: 2rem;
  color: white;
  margin-bottom: 0.5rem;
  /* &:first-of-type {
    margin-top: 0rem;
  } */
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
  /* &:focus {
    outline: 0;
    border-color: #1ab188;
  } */
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
  /* transition: background 0.2s;
  &:hover {
     background: #0b9185;
   } */
}
.error {
  margin: 1rem 0 0;
  color: #ff4a96;
}
</style>