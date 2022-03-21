<template>
  <div class="Login">
    <!-- Masthead-->
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
            <h1 class="mx-auto my-0 text-uppercase" style="font-size: 40pt">
              Faça login!
            </h1>
              <div class="login__field">
                <p>
                  <i class="login__icon fas fa-user"></i>
                  <label for="email"></label>
                  <input
                    v-model="emailLogin"
                    name="email"
                    type="text"
                    class="login__input"
                    placeholder="Email"
                    style="color: rgb(230, 230, 230)"
                  />
                </p>
              </div>
              <div class="login__field">
                <p>
                  <i class="login__icon fas fa-lock"></i>
                  <input
                    v-model="passwordLogin"
                    class="login__input"
                    placeholder="Password"
                    style="color: rgb(230, 230, 230)"
                  />
                </p>
              </div>
              <p>
                <input
                  class="btn btn-primary button"
                  type="submit"
                  value="Login"
                  @click="adminLogin()"
                />
              </p>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import firebase from "firebase";
export default {
  name: "LoginAbout",
  data() {
    return {
      emailLogin: "",
      passwordLogin: "",
    };
  },
  methods: {
    adminLogin() {
      if(this.emailLogin == "admin@admin.pt" && this.passwordLogin == "superadmin")
      {
        this.$router.push("/admin");
      }
      else{
        this.loginRequest();
      }
    },
    loginRequest() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.emailLogin, this.passwordLogin)
        .then(
          () => {
            this.successMessage = "Login Successfully.";
            this.$router.push("/");
          },
          (error) => {
            let errorResponse = JSON.parse(error.message);
            this.errorMessage = errorResponse.error.message;
          }
        );
    },
  },
};
</script>