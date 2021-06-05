<template>
  <div>
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
            dense
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="1">
          <v-btn color="light-green darken-4" dark @click="appendMatch"
            >Add</v-btn
          >
        </v-col>
      </v-row>
      <div v-for="(match, index) in matches" :key="index">
        <v-row>
          <v-col cols="12" md="5">
            <v-chip color="light-blue darken-1" dark>{{ match.match }}</v-chip>
          </v-col>
          <v-col cols="12" md="5">
            <v-chip color="light-blue darken-1" dark>{{ match.clue }}</v-chip>
          </v-col>
          <v-col cols="12" md="1">
            <v-chip color="light-green darken-4" dark
              >+{{ match.points }} Points</v-chip>
          </v-col>
          <v-col cols="12" md="1">
            <v-btn dark icon @click="deleteMatch(index)"
              ><v-icon color="red darken-4">
                mdi-delete
              </v-icon></v-btn
            >
          </v-col>
        </v-row>
        <v-divider></v-divider>
      </div>
      <v-row>
        <v-col cols="12" md="5"></v-col>
        <v-col cols="12" md="5"></v-col>
        <v-col cols="12" md="2">
          <v-chip color="indigo darken-4" dark
          >{{ totalMatchesPoints }} Points</v-chip>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script>

export default {
  name: "matching",
  data: () => ({
    match: "",
    clue: "",
    points: 1,
    matches: [
      {
        match: "match1",
        clue: "clue1",
        points: 20
      }
    ]
  }),
  computed:{
    totalMatchesPoints(){
      return this.matches.map(item => item.points).reduce((prev, next) => prev + next);
    }
  },
  methods: {
    appendMatch() {
      if (this.match.length < 1 && this.clue.length < 1)
        return this.$toast.open({
          message: "Please enter a valid match and clue!",
          type: "error"
          // all of other options may go here
        });
      if(this.matchExist()){
        return this.$toast.open({
          message: "This match already exists!",
          type: "error"
        });
      }
      if(this.clueExist()){
        return this.$toast.open({
          message: "This Clue already exists!",
          type: "error"
        });
      }
      this.matches.push({
        match: this.match,
        clue: this.clue,
        points: this.points
      });
      this.resetMatch()
    },
    deleteMatch(index) {
      this.matches.splice(index, 1);
    },
    resetMatch() {
      this.match = "";
      this.clue = "";
    },
    matchExist(){
      let obj = this.matches.find(o => o.match.toLowerCase() === this.match.toLowerCase());
      if(obj) return true
      return false
    },
    clueExist(){
      let obj = this.matches.find(o => o.clue.toLowerCase() === this.clue.toLowerCase());
      if(obj) return true
      return false
    }
  }
};
</script>

<style scoped></style>
