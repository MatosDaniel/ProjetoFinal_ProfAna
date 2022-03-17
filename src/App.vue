<template>
  <!-- Navigation-->
        <nav class="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
            <div class="container px-4 px-lg-5">
                <router-link to="/" class="navbar-brand">Ana Marques</router-link>
                <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                    Menu
                    <i class="fas fa-bars"></i>
                </button>
                <div class="collapse navbar-collapse" id="navbarResponsive">
                    <ul class="navbar-nav ms-auto">
                        <li class="nav-item"><router-link to="/SignUp" class="nav-link">Registo</router-link></li>
                        <li class="nav-item"><router-link to="/Login" class="nav-link">Login</router-link></li>
                    </ul>
                </div>
            </div>
        </nav>
  <router-view/>
<!-- Contact-->
              <section class="contact-section bg-black">
                  <div class="container px-4 px-lg-5">
                      <div class="row gx-4 gx-lg-5">
                          <div class="col-md-4 mb-3 mb-md-0">
                              <div class="card py-4 h-100">
                                  <div class="card-body text-center">
                                      <i class="fas fa-map-marked-alt text-primary mb-2"></i>
                                      <h4 class="text-uppercase m-0">Localização</h4>
                                      <hr class="my-4 mx-auto" />
                                      <div class="small text-black-50">Lisboa e arredores</div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-4 mb-3 mb-md-0">
                              <div class="card py-4 h-100">
                                  <div class="card-body text-center">
                                      <i class="fas fa-envelope text-primary mb-2"></i>
                                      <h4 class="text-uppercase m-0">Email</h4>
                                      <hr class="my-4 mx-auto" />
                                      <div class="small text-black-50"><p>amarqueswork@gmail.com</p></div>
                                  </div>
                              </div>
                          </div>
                          <div class="col-md-4 mb-3 mb-md-0">
                              <div class="card py-4 h-100">
                                  <div class="card-body text-center">
                                      <i class="fas fa-mobile-alt text-primary mb-2"></i>
                                      <h4 class="text-uppercase m-0">Telemóvel</h4>
                                      <hr class="my-4 mx-auto" />
                                      <div class="small text-black-50">(+351) 96.....</div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div class="social d-flex justify-content-center">
                          <a class="mx-2" ><i class="fab fa-twitter"></i></a>
                          <a class="mx-2" ><i class="fab fa-facebook-f"></i></a>
                          <a class="mx-2" href="https://www.instagram.com/anamarquesmph/"><i class="fab fa-github"></i></a>
                      </div>
                  </div>
              </section>
  <footer class="footer bg-black small text-center text-white-50"><div class="container px-4 px-lg-5">Copyright &copy; Ana Marques 2022</div></footer>
</template>

<style>
@import "@/assets/css/styles.css";
</style>
