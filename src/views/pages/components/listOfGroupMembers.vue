<template>
  <v-list subheader two-line>
    <v-list-item v-for="student in members" :key="student.title">
      <v-list-item-avatar>
        <v-icon :class="getRandomColor()" dark>
          {{ student.name.charAt(0) }}
        </v-icon>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title v-text="student.name"></v-list-item-title>

        <v-list-item-subtitle
          v-text="student.academic_id"
        ></v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-action>
        <v-btn icon>
          <v-icon small @click="deleteUserFromGroup(student)">
            mdi-delete
          </v-icon>
        </v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  name: "listOfGroupMembers",
  props: ["members"],
  methods: {
    getRandomColor() {
      let colors = [
        "pink accent-4",
        "blue darken-4",
        "indigo darken-4",
        "deep-purple darken-4",
        "light-blue accent-4",
        "orange darken-4",
        "blue-grey darken-4",
        "deep-orange accent-4",
        "brown darken-4"
      ];
      return colors[Math.floor(Math.random() * colors.length)]
    },
    deleteUserFromGroup(member) {
      this.$confirm({
        title: "Are you sure?",
        message: "Are you sure you want to delete this student from group?",
        button: {
          no: "No",
          yes: "Yes"
        },
        callback: confirm => {
          if (confirm) {
            console.log("remove user from group api");
            let editedIndex = this.members.indexOf(member);
            this.members.splice(editedIndex, 1);
          }
        }
      });
    }
  }
};
</script>

<style scoped></style>
