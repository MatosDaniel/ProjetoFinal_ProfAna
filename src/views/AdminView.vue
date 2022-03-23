<template>
  <header class="masthead">
    <div class="d-flex justify-content-center">
      <div class="text-center" style="margin-top: 7%">
        <h2 class="text-white-50 mx-auto mt-2 mb-5" style="font-size: 25pt">
          Página do Administrador
        </h2>
      </div>
    </div>
    <p class="text-white-50 minititles" style="margin-left: 5%">
      Adicionar um novo comentário:
    </p>
    <p class="text-white-50 addtext">Insira o título da mensagem</p>
    <input
      class="caixaTexto"
      type="text"
      name="texto"
      maxlength="300"
      size="100"
      v-model="titulo"
    />
    <p class="text-white-50 addtext" style="margin-top: 2%">
      Insira o texto que pretende que acompanhe a mensagem:
    </p>
    <textarea
      rows="6"
      cols="100"
      style="margin-left: 95px"
      v-model="texto"
    ></textarea>
    <p class="text-white-50 addtext" style="margin-top: 2%">
      Insira a imagem que pretende que acompanhe a mensagem:
    </p>
    <input
      class="caixaTexto"
      type="date"
      name="data"
      style="color: rgb(139, 139, 139)"
      v-model="data"
    />
    <br>
    <a class="btn btn-primary" style="margin-top: 2%; margin-left: 5%" @click="guardar()">
    Adicionar</a>
    <br />
    <a class="btn btn-primary" style="margin-top: 2%; margin-left: 43%"
      ><router-link to="/" class="nav-link" style="color: white"
        >Regressar ao início</router-link
      ></a
    >
  </header>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      titulo: "",
      texto: "",
      data: "",
    };
  },
  methods: {
    guardar() {
      axios
        .post("https://projeto1-63fcc-default-rtdb.firebaseio.com/.json", {
          titulo: this.titulo,
          texto: this.texto,
          data: this.data,
        })
        .then(
          (response) => (
            (this.articleId = response.data.id),
            console.log("res " + this.articleId),
            window.location.reload()
          )
        );
    },
  },
};
</script>