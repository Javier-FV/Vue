<template>
  <div class="login">
    <h1 class="title">Login in</h1>
    <form action class="form" @submit.prevent="login">
      <label class="form-label" for="#usuario">Usuario:</label>
      <input
        v-model="user_in.username"
        class="form-input"
        type="usuario"
        id="usuario"
        required
        placeholder="Usuario"
      >
      <label class="form-label" for="#contrasena">Contraseña:</label>
      <input
        v-model="user_in.password"
        class="form-input"
        type="contrasena"
        id="contrasena"
        placeholder="Contraseña"
      >
      
      <!-- <p v-if="error" class="error">Has introducido mal el email o la contraseña.</p> -->
      <!-- <input class="form-submit" type="submit" value="Entrar"> -->
      <button class="form-submit" type="submit"> Entrar </button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Login',
  data: function (){
      return {
        user_in:{
          username: "",
          password: ""
        }
      }
  },

  methods:{
    login: function(){
      var self =this
      axios.post("https://sprint2ciclo3.herokuapp.com/users/user/auth/", self.user_in, {headers: {}})
      .then((result) => {
                    alert("Autenticación Exitosa");
                    self.$emit('log-in', self.user_in.username)
                })
    }
  }
  // created: function(){
  //     // this.username = this.$route.params.username
  //     let self = this
  //     axios.post("https://sprint2ciclo3.herokuapp.com/users/user/data/create/" + this.username)
  //         .then((result) => {
          
  //         // self.balance = result.data.balance
  //     })
  //     .catch((error) => {
  //         alert("ERROR Servidor");
  //     });
  // }
  // data: () => ({
  //   email: "",
  //   password: "",
  //   error: false
  // }),
  // methods: {
  //   login() {
  //     console.log(this.email);
  //     console.log(this.password);
  //   }
  // }
};
</script>

<style>
    .login {
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
}
.form-input {
  padding: 10px 15px;
  background: none;
  background-image: none;
  border: 1px solid white;
  color: white;
}
.form-submit {
  background: #1ab188;
  border: none;
  color: white;
  margin-top: 3rem;
  padding: 1rem 0;
  cursor: pointer;
}
</style>