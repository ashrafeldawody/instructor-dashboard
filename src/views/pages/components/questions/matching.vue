<template>
  <div>
    <editor @onChange="getQuestion" />
    <v-divider></v-divider>

    <v-card class="pa-4" tile>
      <v-row>
        <v-col cols="12" md="5">
          <v-text-field
            v-model="match"
            outlined
            label="Match"
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="5">
          <v-text-field
            v-model="clue"
            outlined
            label="Clue"
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="1">
          <v-text-field
            v-model="points"
            outlined
            label="Points"
            type="number"
            min="1"
            value="1"
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="1">
          <v-btn color="light-green darken-4" dark @click="appendMatch"
            >Add</v-btn
          >
        </v-col>
      </v-row>
      <v-list-item v-for="(match, index) in matches" :key="index">
        <v-row>
          <v-col cols="12" md="5">
            <v-chip color="light-blue darken-1" dark>{{ match.match }}</v-chip>
          </v-col>
          <v-col cols="12" md="1"> </v-col>
          <v-col cols="12" md="5">
            <v-chip color="light-blue darken-1" dark>{{ match.clue }}</v-chip>
          </v-col>
          <v-col cols="12" md="1">
            <v-chip color="light-green darken-4" dark
              >+{{ match.points }} Points</v-chip
            >
          </v-col>
        </v-row>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "matching",
  data: () => ({
    match: "",
    clue: "",
    points: 0,
    matches: [
      {
        match: "match1",
        clue: "clue1",
        points: 20
      }
    ]
  }),
  methods: {
    appendMatch() {
      console.log({ match: this.match, clue: this.clue, points: this.points });
      this.matches.append({
        match: this.match,
        clue: this.clue,
        points: this.points
      });
    }
  }
};
</script>

<style scoped></style>
