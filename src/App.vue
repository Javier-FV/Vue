<template>
  <div>
    <div class="header">
      <h1>MisFinanzas</h1>
      <nav>
        <button v-on:click="init" v-if="is_auth" > Inicio </button>
        <!-- <button v-on:click="getBalance" v-if="is_auth" > Ingresos </button> -->
        <button v-on:click="getappingresos" v-if="is_auth" > Ingresos </button>
        <button v-on:click="getEgresos" v-if="is_auth" > Egresos </button>
        <button v-if="is_auth" > Resumen </button>
        <button v-if="is_auth" > Estimación </button>
        <button v-if="is_auth" >Cerrar Sesión</button>
      </nav>
    </div>
    <div class="main-component">
      <router-view></router-view>
    </div>
    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div>
  </div>
</template>


<script>
export default {
  name: 'App',
  components: {},
  data: function(){
    return {
      is_auth: localStorage.getItem('isAuth') || false
    }
  },
  methods: {
     init: function(){
      if(this.$route.name != "login"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "login", params:{ username: username }})
      }
      
    },
    getBalance: function(){
      if(this.$route.name != "user_balance"){
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "user_balance", params:{ username: username }})
      }
    },
    getEgresos: function(){
      console.log(this.$route.name)
      if (this.$route.name != "egresos") {
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "egresos", params:{ username: username }})
      }
    },
    getIngresos: function(){
      console.log(this.$route.name)
      if (this.$route.name != "ingresos") {
        let username = localStorage.getItem("current_username")
        this.$router.push({name: "ingresos", params:{ username: username }})
      }
    },
  },
  beforeCreate: function(){
    localStorage.setItem('current_username', 'camilo24')
    localStorage.setItem('isAuth', true)
  }
}
</script>

<style>
  body{
    margin: 0 0 0 0;
  }
  .header{
    margin: 0%;
    padding: 0;
    width: 100%;
    height: 10vh;
    min-height: 100px;
    background-color:  rgba(19, 35, 47, 0.9) ;
    color:#E5E7E9 ;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .header h1{
    width: 20%;
    text-align: center;
  }
  .header nav {
    height: 100%;
    width: 45%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 20px;
  }
  .header nav button{
    color: #E5E7E9;
    background: #1ab188;
    border: 1px solid #E5E7E9;
    border-radius: 5px;
    padding: 10px 20px;
  }
  .header nav button:hover{
    color: #1ab188;
    background: #E5E7E9;
    border: 1px solid #E5E7E9;
  }
  footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 2.5rem;            /* Footer height */
  }
  .footer h2{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .main-component {
    padding-top: 10px;
    width: 70%;
    margin-left: 15%;
    /* height: 25px; */
    padding-bottom: 2.5rem;
  }
</style>
