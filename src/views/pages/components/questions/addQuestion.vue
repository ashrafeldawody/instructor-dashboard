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
          <v-col cols="12" md="6">
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

          <v-col cols="12" md="6">
            <treeselect
              v-model="selectedCategory"
              placeholder="Question Category"
              :searchable="true"
              :clearable="false"
              :options="categories"
              :disable-branch-nodes="true"
            />
          </v-col>
        </v-row>
        <component :is="optionComponent" />
      </form>
    </v-card-text>
  </v-card>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, maxLength, email } from "vuelidate/lib/validators";
import Treeselect from "@riophae/vue-treeselect";
import "@riophae/vue-treeselect/dist/vue-treeselect.css";

export default {
  name: "addQuestion",
  mixins: [validationMixin],
  components: {
    Treeselect
  },

  validations: {
    name: { required, maxLength: maxLength(10) },
    email: { required, email },
    select: { required },
    checkbox: {
      checked(val) {
        return val;
      }
    }
  },

  data: () => ({
    type: "Multiple Choice",
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
    selectedCategory: null
  }),

  computed: {
    optionComponent() {
      return () =>
        this.type != null
          ? import(
              `../questions/${this.type.replace(" ", "-").toLowerCase()}.vue`
            )
          : null;
    }
  },
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
