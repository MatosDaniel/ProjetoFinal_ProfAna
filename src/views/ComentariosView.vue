<template>
<body id="page-top">
        <!-- Masthead-->
        <section class="masthead">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                        <h1 class="mx-auto my-0 text-uppercase">Reviews</h1>
                    </div>
                </div>
            </div>
        </section>
        <section class="text-center comentarios">
                <div v-for="(item, id) in comentarios" :key="id" class="align-items-center justify-content-center" style="color: white">
                    <div class="titulo-comentario"> {{item.titulo}}</div>
                    <div class="texto-comentario"> {{item.texto}}</div>
                    <div class="data-comentario"> {{item.data}}</div>
                    <div>___________________________________________</div>
                    <br>
                </div>
        </section>
    </body>
</template>

<script>
import axios from "axios";

export default {
  name: "get-request-async-await",
  data() {
    return {
      comentarios: null,
    };
  },
  async created() {
    const response = await axios.get(
      "https://projeto1-63fcc-default-rtdb.firebaseio.com/.json"
    );
    this.comentarios = response.data;
  },
  };
</script>