<template>
  <v-container fill-height>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="9" md="8" lg="6">
        <v-card>
          <v-card-title class="primary">
            <v-card-title class="white--text">
              <div class="text-xs-center">{{ $t("Login") }}</div>
            </v-card-title>
          </v-card-title>
          <v-card-text>
            <v-card-text class="pt-4">
              <v-form>
                <v-text-field
                  v-model="instructor.email"
                  type="email"
                  label="Email Address"
                  required
                ></v-text-field>
                <v-text-field
                  v-model="instructor.password"
                  type="password"
                  label="Password"
                  required
                ></v-text-field>
              </v-form>
            </v-card-text>
          </v-card-text>
          <v-card-actions>
            <v-btn block color="primary" dark @click="login">
              {{ $t("Login") }}
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
body {
  background: #666 !important;
}
</style>

<script>
export default {
  data() {
    return {
      instructor: {
        email: "ashraf6450@gmail.com",
        password: "123456"
      }
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("Instructor/login", this.instructor)
        .then(() => {
          this.$toast.success("Logged In Successfully", {
            position: "top-right"
          });
          setTimeout(() => {
            this.$router.push({ name: "dashboard" });
          });
        })
        .catch(error => {
          this.$toast.error(error.response.data.message, {
            position: "top-right"
          });
        });
    }
  },

  mounted() {}
};
</script>
