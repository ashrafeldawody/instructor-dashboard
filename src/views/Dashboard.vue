<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" color="indigo darken-3" dark app>
      <v-list>
        <v-list-item link>
          <v-list-item-content>
            <v-list-item-title class="title">
              Dr. Ashraf Eldawody
            </v-list-item-title>
            <v-list-item-subtitle>ashraf6450@gmail.com</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item link :to="{ name: 'groups' }">
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Groups</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'questions' }">
          <v-list-item-icon>
            <v-icon>mdi-help</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Questions Bank</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'tests' }">
          <v-list-item-icon>
            <v-icon>mdi-pencil-box-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Tests</v-list-item-title>
        </v-list-item>
        <v-list-item link :to="{ name: 'results' }">
          <v-list-item-icon>
            <v-icon>mdi-chart-bar</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Results</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </v-app-bar>
    <v-main class="ma-0 pa-0">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      drawer: null
    };
  }
};
</script>

<style scoped>
.v-navigation-drawer {
  height: 100vh;
}
</style>
