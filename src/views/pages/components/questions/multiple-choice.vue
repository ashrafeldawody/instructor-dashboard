<template>
  <div>
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field
          label="Points"
          outlined
          dense
          type="number"
          min="1"
          value="1"
        ></v-text-field>
      </v-col>
      <v-col cols="12" md="4"></v-col>
      <v-col cols="12" md="4"></v-col>
    </v-row>

    <editor @onChange="getQuestion" label="Question" />
    <v-divider></v-divider>

    <v-card class="pa-4" tile>
      <editor @onChange="getAnswer" label="Add Answer" />
      <v-row>
        <v-col cols="12" md="6">
          <v-checkbox v-model="answer.isCorrect" label="Correct"></v-checkbox>
        </v-col>
        <v-col cols="12" md="6" class="text-right">
          <v-btn color="green" class="ma-2 white--text" @click="addAnswer">
            <v-icon left dark>
              mdi-plus
            </v-icon>
            Add
          </v-btn>
        </v-col>
      </v-row>

      <v-list-item
        class="mb-6"
        v-for="(answer, index) in answers"
        :key="index"
        @click="toggleAnswer(index)"
        :class="answer.isCorrect ? 'green lighten-5' : ''"
      >
        <v-list-item-action>
          <v-checkbox
            :input-value="answer.isCorrect"
            color="green"
          ></v-checkbox>
        </v-list-item-action>

        <v-list-item-content v-html="answer.answer" />
        <v-list-item-action>
          <v-btn icon @click="removeAnswer(index)">
            <v-icon color="red lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import editor from "@/views/pages/components/editor";

export default {
  name: "multiple-choice",
  components: {
    editor
  },
  data: () => ({
    question: "",
    points: "",
    answer: {
      answer: "",
      isCorrect: false
    },
    answers: []
  }),
  methods: {
    removeAnswer(index) {
      this.answers.splice(index, 1);
    },
    toggleAnswer(index) {
      this.answers[index].isCorrect = !this.answers[index].isCorrect;
    },
    addAnswer() {
      if (this.answer.answer.length < 1) {
        return this.$toast.open({
          message: "You Can't add an empty Answer!",
          type: "error"
        });
      }
      if (this.answerExist()) {
        return this.$toast.open({
          message: "Answer already exists!",
          type: "error"
        });
      }
      this.answers.push({
        id: Math.random(),
        answer: this.answer.answer,
        isCorrect: this.answer.isCorrect
      });
    },
    getQuestion(question) {
      this.question = question;
    },
    getAnswer(answer) {
      this.answer.answer = answer;
    },
    answerExist() {
      let obj = this.answers.find(
        o => o.answer.toLowerCase() === this.answer.answer.toLowerCase()
      );
      if (obj) return true;
      return false;
    },
    resetAnswer() {
      this.answer.answer = "";
    }
  }
};
</script>

<style scoped>
/deep/ img {
  max-height: 300px;
}
/deep/ .v-list-item__content {
  max-height: 350px;
}
</style>
