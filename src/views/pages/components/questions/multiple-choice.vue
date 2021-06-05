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

    <editor @onChange="getQuestion" placeholder="Question..." />
    <v-divider></v-divider>

    <v-card class="pa-4" tile>
      <v-card-title>Add Answer</v-card-title>
      <editor @onChange="getAnswer" />
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
        v-for="answer in answers"
        :key="answer.id"
        @click="toggleAnswer(answer.id)"
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
          <v-btn icon @click="removeAnswer(answer.id)">
            <v-icon color="red lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
    </v-card>
  </div>
</template>

<script>
import editor from "@/views/pages/components/editor";
import { _ } from "vue-underscore";

export default {
  name: "multiple-choice",
  components: {
    editor
  },
  data: () => ({
    question: "",
    points: "",
    answer: {
      id: 1,
      answer: "",
      isCorrect: false
    },
    answers: []
  }),
  methods: {
    removeAnswer(id) {
      this.answers.splice(
        _.indexOf(this.answers, _.findWhere(this.answers, { id: id })),
        1
      );
    },
    toggleAnswer(id) {
      _.findWhere(this.answers, { id: id }).isCorrect = !_.findWhere(
        this.answers,
        { id: id }
      ).isCorrect;
    },
    addAnswer() {
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
