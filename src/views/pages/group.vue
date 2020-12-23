<template>
  <v-card class="mx-auto">
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">
          Groups
        </div>
        <v-list-item-title class="headline mb-1">
          {{ group.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ group.created }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar class="mt-12">
        <v-btn class="ma-2" large text icon color="blue darken-2">
          <v-icon>mdi-pen</v-icon>
        </v-btn>
      </v-list-item-avatar>
      <v-list-item-avatar class="mt-12">
        <v-btn
          class="ma-2"
          large
          text
          icon
          color="red darken-2"
          @click="deleteGroup"
        >
          <v-icon>mdi-delete</v-icon>
        </v-btn>
      </v-list-item-avatar>
    </v-list-item>

    <v-card-text>
      <v-toolbar flat>
        <v-toolbar-title>Groups</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-dialog v-model="addMemberDialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon x-large>mdi-plus-circle-outline</v-icon>
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">Create New Group</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-textarea
                  v-model="newStudentIDs"
                  label="Group Name"
                ></v-textarea>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text>
                Cancel
              </v-btn>
              <v-btn color="blue darken-1" text @click="addMemberToGroup">
                Add
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-data-table
        :headers="headers"
        :items="users"
        :items-per-page="10"
        class="elevation-1"
      >
        <template v-slot:item.actions="{ item }">
          <v-icon small @click="deleteUserFromGroup(item)">
            mdi-delete
          </v-icon>
        </template>
      </v-data-table>
    </v-card-text>
    <v-card-actions> </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "group",
  data: () => ({
    addMemberDialog: null,
    newStudentIDs: "",
    group: {
      id: 1,
      name: "CS Group",
      created: "16th Oct 2018",
      members: 14
    },
    headers: [
      { text: "Academic ID", value: "academic_id" },
      { text: "Name", value: "name" },
      { text: "Joined", value: "joined" },
      { text: "Delete", value: "actions", sortable: false }
    ],
    users: [
      {
        id: 1,
        academic_id: 201709091,
        name: "Ashraf Eldawody",
        joined: "12 Oct 2019"
      },
      {
        id: 2,
        academic_id: 201709092,
        name: "Ahmed Eldawody",
        joined: "15 Oct 2019"
      },
      {
        id: 3,
        academic_id: 201709093,
        name: "Ashraf Elsoaly",
        joined: "13 Oct 2019"
      }
    ]
  }),

  methods: {
    addMemberToGroup() {
      console.log("addMemberToGroup");
    },
    deleteGroup() {
      this.$confirm({
        title: "Are you sure?",
        message: "Are you sure you want to delete this group?",
        button: {
          no: "No",
          yes: "Yes"
        },
        callback: confirm => {
          if (confirm) {
            console.log(this.group.id);
          }
        }
      });
    },
    deleteUserFromGroup(user) {
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
            let editedIndex = this.users.indexOf(user);
            this.users.splice(editedIndex, 1);
          }
        }
      });
    }
  }
};
</script>

<style scoped></style>
