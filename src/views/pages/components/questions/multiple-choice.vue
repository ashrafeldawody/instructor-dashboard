<template>
  <div>
    <editor @onChange="getQuestion" />
    <v-divider></v-divider>

    <v-card class="pa-12" tile>
      <v-list-item
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

        <v-list-item-content v-html="answer.answer"/>
        <v-list-item-action>
          <v-btn icon @click="removeAnswer(answer.id)">
            <v-icon color="red lighten-1">mdi-delete</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
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
    answers: [
      {
        id: 1,
        answer: "",
        isCorrect: true
      },
      {
        id: 2,
        answer: "ANS2",
        isCorrect: false
      },
      {
        id: 3,
        answer: "ANS3",
        isCorrect: false
      }
    ]
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
/deep/ img{
  max-height: 300px;
}
/deep/ .v-list-item__content{
  max-height: 350px;
}
</style>
