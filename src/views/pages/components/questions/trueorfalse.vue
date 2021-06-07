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
    </v-row>

    <editor label="Question" />
    <v-divider></v-divider>
    <v-item-group>
      <v-container>
        <v-row>
          <v-col cols="12" md="6">
            <div>
              <v-card
                :color="answer ? 'green' : ''"
                class="d-flex align-center"
                dark
                height="200"
                @click="toggle(true)"
              >
                <div class="text-h2 flex-grow-1 text-center">
                  True
                </div>
              </v-card>
            </div>
          </v-col>
          <v-col cols="12" md="6">
            <div>
              <v-card
                :color="!answer ? 'green' : 'gray'"
                class="d-flex align-center"
                dark
                height="200"
                @click="toggle(false)"
              >
                <div class="text-h2 flex-grow-1 text-center">
                  False
                </div>
              </v-card>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>
  </div>
</template>

<script>
import editor from "@/views/pages/components/editor";

export default {
  name: "trueorfalse",
  components: { editor },
  data: () => ({
    question: "",
    points: "",
    answer: true
  }),
  methods: {
    toggle(ans) {
      this.answer = ans;
    },
    onEnter() {
      console.log("good bopy");
    }
  }
};
</script>

<style scoped></style>
