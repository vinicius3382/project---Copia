<template>
  

<div >
    <!-- retirei o premvent e acontece a mesma coisa;-->
    <form @submit.prevent="login()"><!-- quando tiver um evento submit vai chamar a  função  login-->
            <h1>Login</h1>
            <div>
              <input type="text" placeholder="digite o email" v-model="email"> <!-- faz a atualização em duas direções 
            atualiza o data e gera um efeito nos elemtos que utilizam o emial;-->
            </div>
            <div>
                <input type="password" placeholder="Digite a senha" v-model="password">
                <p><span>{{password}}</span></p>
            </div>

                     
            <button type="submit">Entrar</button>
        </form>

</div>

</template>

<script>
/* eslint-disable */
import {http} from '../services/config'



export default {

    data () {
        return {
            email:"eve.holt@reqres.in",
            password:"cityslicka"
        }
    },
   methods:{

    login (){
       // retirei o body 
        http.post('https://reqres.in/api/login', {
           
                email: this.email,
                password: this.password
            
           
        }).then((response) => {
            console.log(response.data)
            
        }).catch((error) => {
            console.log(error)
        })

    }

    
   },


   
}
</script>

<style>

</style>