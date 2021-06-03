<template>
<div>
  <editor @onChange="getQuestion" />
  <v-divider></v-divider>

  <v-card class="pa-4" tile>
    <v-row v-for="i in 5" :key="i">
      <v-col cols="12" md="5">
      <v-text-field outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="5">
        <v-text-field outlined></v-text-field>
      </v-col>
      <v-col cols="12" md="2">
        <v-text-field outlined type="number" min="1" value="1"></v-text-field>
      </v-col>
    </v-row>
  </v-card>

</div>
</template>

<script>
export default {
name: "matching",
  data:()=>({
    matches:[]
  })
}
</script>

<style scoped>

</style>
