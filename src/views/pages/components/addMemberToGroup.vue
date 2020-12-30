<template>
  <v-toolbar flat>
    <v-toolbar-title class="headline">Members</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-dialog v-model="dialog" max-width="500px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark v-bind="attrs" v-on="on">
          Add Students
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Add Student to group</span>
        </v-card-title>

        <v-card-text>
          <v-container>
            <v-textarea v-model="newStudentIDs" label="Student ID"></v-textarea>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="toggle">
            Cancel
          </v-btn>
          <v-btn color="blue darken-1" text @click="addMemberToGroup">
            Add
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-toolbar>
</template>

<script>
export default {
  name: "addMemberToGroup",
  props: ["groupID"],
  data: () => ({
    dialog: null,
    newStudentIDs: ""
  }),
  methods: {
    toggle() {
      this.dialog = !this.dialog;
    },
    addMemberToGroup() {
      this.toggle();
      this.$emit('added')
    }
  }
};
</script>

<style scoped></style>
