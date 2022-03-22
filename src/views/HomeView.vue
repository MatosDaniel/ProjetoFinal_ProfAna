<template>
  <div id="app">
    <header class="masthead">
      <div
        class="
          container
          px-4 px-lg-5
          d-flex
          h-100
          align-items-center
          justify-content-center
        "
      >
        <div class="d-flex justify-content-center">
          <div class="text-center">
            <h1 class="mx-auto my-0 text-uppercase">Olá!</h1>
            <h2 class="text-white-50 mx-auto mt-2 mb-5">
              Obrigada por me vires visitar e conhecer! Aproveita e descobre
              aquilo que faço e adoro!
            </h2>
            <!-- ao clicar remete para uma descrição da pessoa mais a baixo na pagina -->
            <a class="btn btn-primary" @click="goto('bora')">Bora lá!</a>
          </div>
        </div>
      </div>
    </header>
    <!-- About-->
    <section class="about-section text-center" ref="bora">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
          <div class="col-lg-8">
            <h2 class="text-white mb-4">Sobre mim</h2>
            <p class="text-white-50">
              Sou fotógrafa e a minha paixão por fotografia começou muito cedo,
              O que me fez tirar a minha licenciatura em Fotografia no IADE em
              2014. O gosto por fotografar eventos, espetáculos e marcas sempre
              esteve presente. Sempre gostei de fotografar em várias vertentes e
              áreas, mas o gosto por fotografar pessoas foi ficando cada vez
              maior, principalmente quando comecei a capturar sorrisos e
              lágrimas felizes em casamentos. O gosto pela fotografia de cinema
              também cresceu com o Mestrado que fiz em Cinema, na Universidade
              Lusófona de Lisboa em 2018.
            </p>
          </div>
        </div>
        <img
          class="img-fluid"
          src="../assets/img/Ana.png"
          alt="Foto Ana"
          style="height: 250pt; margin-bottom: 20pt"
        />
      </div>
    </section>
    <!-- Projects-->
    <section class="projects-section bg-light" id="projects">
      <div class="container px-4 px-lg-5">
        <!-- Featured Project Row-->
        <div class="col-xl-12 col-lg-5" style="float: center">
          <div
            class="featured-text text-center text-lg-left"
            style="margin-bottom: 10pt"
          >
            <h4>Casamentos</h4>
            <p class="text-black-50 mb-0">
              Uma das minhas principais paixões é fotografar casamentos,
              descobre algumas das minhas fotos destes eventos
            </p>
          </div>
        </div>
        <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
          <div
            id="carouselExampleIndicators"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  class="d-block w-100"
                  src="../assets/img/casamento1.jpg"
                  alt="First slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="../assets/img/casamento2.jpg"
                  alt="Second slide"
                />
              </div>
              <div class="carousel-item">
                <img
                  class="d-block w-100"
                  src="../assets/img/casamento3.jpg"
                  alt="Third slide"
                />
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
        </div>
        <!-- Project One Row-->
        <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
          <div class="col-lg-6">
            <img class="img-fluid" src="../assets/img/gelato.jpeg" alt="..." />
          </div>
          <div class="col-lg-6">
            <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                <div
                  class="project-text w-100 my-auto text-center text-lg-left"
                >
                  <h4 class="text-white">
                    Festival Luso Brasileiro De Comédia
                  </h4>
                  <p class="mb-0 text-white-50">
                    Tive o prazer de fotografar o Festival Luso Brasileiro de
                    Comédia, com a participação de vários comediantes de renome
                    a nível.
                  </p>
                  <hr class="d-none d-lg-block mb-0 ms-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Project Two Row-->
        <div class="row gx-0 justify-content-center">
          <div class="col-lg-6">
            <img class="img-fluid" src="../assets/img/comedia.jpg" alt="..." />
          </div>
          <div class="col-lg-6 order-lg-first">
            <div class="bg-black text-center h-100 project">
              <div class="d-flex h-100">
                <div
                  class="project-text w-100 my-auto text-center text-lg-right"
                >
                  <h4 class="text-white">Gelatria - PIZPIRETO</h4>
                  <p class="mb-0 text-white-50">
                    Sessão fotográfica que fiz com a gelataria PIZPIRETO. Tive o
                    prazer de fotografar durante alguns meses esta gelataria tão
                    simpática.
                  </p>
                  <hr class="d-none d-lg-block mb-0 me-0" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Admin -->
    <!-- Signup-->
    <section class="signup-section" id="signup">
      <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5">
          <div class="col-md-10 col-lg-8 mx-auto text-center">
            <i class="far fa-paper-plane fa-2x mb-2 text-white"></i>
            <h2 class="text-white mb-5">
              Inscreve-te e recebe as minhas novidades!
            </h2>
            <!-- * * * * * * * * * * * * * * *-->
            <!-- * * SB Forms Contact Form * *-->
            <!-- * * * * * * * * * * * * * * *-->
            <!-- This form is pre-integrated with SB Forms.-->
            <!-- To make this form functional, sign up at-->
            <!-- https://startbootstrap.com/solution/contact-forms-->
            <!-- to get an API token!-->
            <form
              class="form-signup"
              id="contactForm"
              data-sb-form-api-token="API_TOKEN"
            >
              <!-- Email address input-->
              <div class="row input-group-newsletter">
                <div class="col">
                  <input
                    class="form-control"
                    id="emailAddress"
                    type="email"
                    placeholder="Insere o teu email..."
                    aria-label="Enter email address..."
                    data-sb-validations="required,email"
                  />
                </div>
                <div class="col-auto">
                  <button
                    class="btn btn-primary disabled"
                    id="submitButton"
                    type="submit"
                  >
                    Bora lá!
                  </button>
                </div>
              </div>
              <div
                class="invalid-feedback mt-2"
                data-sb-feedback="emailAddress:required"
              >
                An email is required.
              </div>
              <div
                class="invalid-feedback mt-2"
                data-sb-feedback="emailAddress:email"
              >
                Email is not valid.
              </div>
              <!-- Submit success message-->
              <!---->
              <!-- This is what your users will see when the form-->
              <!-- has successfully submitted-->
              <div class="d-none" id="submitSuccessMessage">
                <div class="text-center mb-3 mt-2 text-white">
                  <div class="fw-bolder">Email submission successful!</div>
                </div>
              </div>
              <!-- Submit error message-->
              <!---->
              <!-- This is what your users will see when there is-->
              <!-- an error submitting the form-->
              <div class="d-none" id="submitErrorMessage">
                <div class="text-center text-danger mb-3 mt-2">
                  Error sending message!
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "get-request-async-await",
  data() {
    return {
      titulo: null,
      texto: null,
    };
  },
  async created() {
    const response = await axios.get(
      "https://projeto1-63fcc-default-rtdb.firebaseio.com/.json"
    );
    this.titulo = response.data;
    this.texto = response.data
  },

  el: "#app",
  methods: {
    goto(refName) {
      var element = this.$refs[refName];
      console.log(element);
      var top = element.offsetTop;
      window.scrollTo(0, top);
    },
  },
};
</script>
