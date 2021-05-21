<template>
  <v-card class="mx-auto">
    <v-card-text>
      <p class="display-1 text--primary">
        Create New Question
      </p>
    </v-card-text>
    <v-card-text>
      <form>
        <v-row>
          <v-col cols="12" md="4">
            <v-combobox
              v-model="type"
              label="Question Type"
              :items="[
                'Multiple Choice',
                'True or False',
                'Complete',
                'Matching'
              ]"
              dense
              outlined
            ></v-combobox>
          </v-col>

          <v-col cols="12" md="4">
            <treeselect
              v-model="selectedCategory"
              placeholder="Question Category"
              :searchable="true"
              :clearable="false"
              :options="categories"
              :disable-branch-nodes="true"
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-combobox
              v-model="difficultyLevel"
              label="Difficulty Level"
              :items="['Easy', 'Moderate', 'Hard']"
              dense
              outlined
            ></v-combobox>
          </v-col>
        </v-row>
        <multiple-choice v-if="type === 'Multiple Choice'" />
        <complete v-if="type === 'Complete'" />
        <matching v-if="type === 'Matching'" />
        <trueorfalse v-if="type === 'True or False'" />
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";
import MultipleChoice from "@/views/pages/components/questions/multiple-choice";
import Complete from "@/views/pages/components/questions/complete";
import Matching from "@/views/pages/components/questions/matching";
import Trueorfalse from "@/views/pages/components/questions/trueorfalse";

export default {
  name: "addQuestion",
  components: {
    Trueorfalse,
    Matching,
    Complete,
    MultipleChoice,
    Treeselect
  },

  data: () => ({
    type: "Multiple Choice",
    difficultyLevel: "Moderate",
    categories: [
      {
        id: 1,
        label: "AI",
        children: [
          {
            id: 2,
            label: "Expert Systems"
          },
          {
            id: 3,
            label: "Neural networks"
          },
          {
            id: 4,
            label: "Python"
          }
        ]
      }
    ],
    selectedCategory: null,
    optionComponent: null
  }),

  methods: {}
};
</script>

<style>
.ql-editor {
  min-height: 200px;
}
.vue-treeselect__control {
  height: 41px;
  font-size: large;
}
.vue-treeselect__placeholder {
}
.vue-treeselect div,
.vue-treeselect span {
  box-sizing: border-box;
  color: #4a4a4a;
  font-size: large;
}
</style>
