<template>
  <div class="registo">
    <div class id="page-top">
        <!-- Masthead-->
        <header class="masthead">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div class="d-flex justify-content-center">
                    <!--<form action="index.html" method="post" onsubmit="return registerFunction()">-->
                        <div class="text-center">
                            <h1 class="mx-auto my-0 text-uppercase " style="font-size: 40pt">Registar</h1>
                            <div class="login__field">
                                <i class="login__icon fas fa-user"></i>
                                <input v-model="email" type="text" class="login__input" placeholder="Email" style="color: rgb(230, 230, 230)" >
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input v-model="password" type="password" class="login__input" placeholder="Password" style="color: rgb(230, 230, 230)">
                            </div>
                            <div class="login__field">
                                <i class="login__icon fas fa-lock"></i>
                                <input v-model="passwordRe" type="password" class="login__input" placeholder="Confirmar Password" style="color: rgb(230, 230, 230)">
                            </div>
                            <p v-if="erro == true" style="color:red">Os dados inseridos estão incorrectos. <br> Nota: a Password necessita de  pelo menos 6 digitos </p>
                            <h2 class="text-white-50 mx-auto mt-2 mb-5">Ao clicares em registar estás a aceitar todos os Termos de Serviço</h2>
                            <input class="btn btn-primary button" type="submit" value="Registar" @click="registar()">
                        </div>
                    <!--</form>-->
                </div>
            </div>
        </header>
        </div>  
      </div>   
</template>

<script>
import firebase from "firebase";
export default {
  name: "SignupAbout",
  data() {
    return {
      email: "",
      password: "",
      passwordRe: "",
      erro: false,
    };
  },

  methods: {
    registar() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then((userCredential) => {
          // Signed in
          var user = userCredential.user;
          console.log(user);
          this.$router.push('/');
          // ...
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode);
          console.log(errorMessage);
          this.erro = true;
          // ..
        });
    },
  },
  signupRequest() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.email, this.password)
      .then(
        () => {
          this.successMessage = "Register Successfully.";
        },
        (error) => {
          let errorResponse = JSON.parse(error.message);
          this.errorMessage = errorResponse.error.message;
        }
      );
  },

  // serve para confirmar se as pass inseridas são iguais.
  confirm() {
    if (this.password == this.passwordRe) {
      this.signupRequest();
    } else {
      alert("As passwords não são iguais");
    }
  },
};
</script>

