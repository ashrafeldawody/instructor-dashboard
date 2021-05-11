<template>
  <v-card>
    <v-card-title>
      Question Bank
    </v-card-title>
    <v-card-subtitle>
      <v-row>
        <v-col cols="12" sm="4">
          <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            dense
            label="Search"
            outlined
          >
          </v-text-field>
        </v-col>
        <v-col cols="12" sm="4">
          <v-select
            :items="dcategories"
            dense
            @change="selectCategory"
            label="Categories"
            outlined
          ></v-select>
        </v-col>
        <v-col>
          <v-row justify="space-around">
            <v-menu rounded offset-y>
              <template v-slot:activator="{ attrs, on }">
                <v-btn v-bind="attrs" v-on="on" color="green" dark>
                  Add Question
                </v-btn>
              </template>

              <v-list>
                <v-list-item link>
                  <v-list-item-title
                    v-text="'Multiple Choice'"
                  ></v-list-item-title>
                  <v-list-item-icon>
                    <v-icon right>mdi-check-box-multiple-outline</v-icon>
                  </v-list-item-icon>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-title v-text="'Complete'"></v-list-item-title>
                  <v-list-item-icon>
                    <v-icon right>mdi-upload</v-icon>
                  </v-list-item-icon>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-title
                    v-text="'True or False'"
                  ></v-list-item-title>
                  <v-list-item-icon>
                    <v-icon right>mdi-close</v-icon>
                  </v-list-item-icon>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-title v-text="'Matching'"></v-list-item-title>
                  <v-list-item-icon>
                    <v-icon right>mdi-arrow-left-right-bold</v-icon>
                  </v-list-item-icon>
                </v-list-item>
                <v-list-item link>
                  <v-list-item-title
                    v-text="'Import Questions'"
                  ></v-list-item-title>
                  <v-list-item-icon>
                    <v-icon right>mdi-upload</v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </v-list>
            </v-menu>
          </v-row>
        </v-col>
      </v-row>
    </v-card-subtitle>
    <v-data-table
      :headers="headers"
      :items="questions"
      :loading="loading"
      :options.sync="options"
      :search="search"
      :custom-filter="dcategories"
      class="elevation-2"
    >
      <template v-slot:item.difficulty="{ item }">
        <v-chip
          :color="
            item.difficulty == 'Hard'
              ? 'red'
              : item.difficulty == 'Moderate'
              ? 'warning'
              : 'success'
          "
          dark
        >
          {{ item.difficulty }}
        </v-chip>
      </template>

      <template v-slot:item.question="{ item }">
        <p class="font-weight-medium">{{ item.question }}</p>
      </template>

      <template v-slot:item.type="{ item }">
        <p class="font-weight-bold">{{ item.type }}</p>
      </template>

      <template v-slot:item.category="{ item }">
        <p class="font-weight-bold">{{ item.category }}</p>
      </template>

      <template v-slot:item.actions="{ item }">
        <v-flex class="d-flex">
          <v-btn class="mr-2" icon>
            <v-icon>mdi-eye</v-icon>
          </v-btn>

          <v-btn
            :to="{ path: 'question/' + item.id + '/update' }"
            class="mr-2"
            icon
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn class="mr-2" icon>
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-flex>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
export default {
  name: "questions",
  data() {
    return {
      dialog: false,
      category: "",
      dialogDelete: false,
      editedQuestion: {
        id: -1,
        question: "",
        category: "",
        type: "",
        difficulty: ""
      },
      defaultQuestion: {
        id: -1,
        question: "",
        category: "",
        type: "",
        difficulty: ""
      },

      search: "",
      questions: [
        {
          id: 1,
          question:
            "You can align goals with individual assessment questions to help",
          category: "Expert System",
          type: "Multiple Choice",
          difficulty: "Hard"
        },
        {
          id: 2,
          question: "Frozen Yogurt",
          category: "Stupid systems",
          type: "Multiple Choice",
          difficulty: "Easy"
        },
        {
          id: 3,
          question: "Frozen Yogurt",
          category: "Expert System",
          type: "Multiple Choice",
          difficulty: "Moderate"
        },
        {
          id: 4,
          question: "Frozen Yogurt",
          category: "Expert System",
          type: "Multiple Choice",
          difficulty: "Hard"
        },
        {
          id: 5,
          question: "Frozen Yogurt",
          category: "Expert System",
          type: "Multiple Choice",
          difficulty: "Hard"
        },
        {
          id: 6,
          question: "Frozen Yogurt",
          category: "Expert System",
          type: "Multiple Choice",
          difficulty: "Hard"
        },
        {
          id: 7,
          question: "Frozen Yogurt",
          category: "Expert System",
          type: "Multiple Choice",
          difficulty: "Hard"
        }
      ],
      loading: false,
      options: {},
      headers: [
        { text: "Question", value: "question" },
        {
          text: "Category",
          value: "category",
          filter: value => {
            if (this.category == value || !this.category) return true;
            else return false;
          }
        },
        { text: "Type", value: "type" },
        { text: "Difficulty", value: "difficulty" },
        { text: "Actions", value: "actions", sortable: false }
      ]
    };
  },
  computed: {
    dcategories: function() {
      return this.$_.keys(
        this.$_.countBy(this.questions, function(questions) {
          return questions.category;
        })
      );
    }
  },
  methods: {
    selectCategory(val) {
      this.category = val;
    },
    getDataFromApi() {
      // this.loading = true;
      // this.getQuestions().then(data => {
      //   this.questions = data.items;
      //   this.totalQuestions = data.total;
      //   this.loading = false;
      // });
    }
  }
};
</script>

<style scoped></style>
