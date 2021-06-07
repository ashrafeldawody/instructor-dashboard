<template>
  <v-card class="mx-auto" outlined>
    <v-toolbar flat>
      <v-toolbar-title>Groups</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" max-width="500px">
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
              <v-text-field
                v-model="newGroupName"
                label="Group Name"
              ></v-text-field>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="blue darken-1" text>
              Cancel
            </v-btn>
            <v-btn color="blue darken-1" text @click="addGroup">
              Add
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>
    <v-list-item-content>
      <v-list subheader two-line>
        <v-list-item
          v-for="group in groups"
          :key="group.name"
          link
          :to="{ name: 'group', params: { id: group.id } }"
        >
          <v-list-item-avatar>
            <v-icon class="blue" dark>mdi-account-multiple</v-icon>
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title v-text="group.name"></v-list-item-title>
            <v-list-item-subtitle
              v-text="group.members + ' Members'"
            ></v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action>
            <v-icon color="grey lighten-1">mdi-information</v-icon>
          </v-list-item-action>
        </v-list-item>
      </v-list>
    </v-list-item-content>
    <v-card-actions> </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "groups",
  data: () => ({
    dialog: null,
    newGroupName: "",
    groups: [
      {
        id: 1,
        name: "CS Group",
        members: 14
      },
      {
        id: 2,
        name: "IS Group",
        members: 18
      }
    ]
  }),
  methods: {
    addGroup() {
      console.log(this.newGroupName);
      this.$nextTick(() => {
        this.newGroupName = "";
        this.dialog = false;
      });
    }
  }
};
</script>

<style scoped></style>
