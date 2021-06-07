<template>
  <v-dialog v-model="dialog" max-width="500px">
    <template v-slot:activator="{ on, attrs }">
      <v-btn icon v-bind="attrs" v-on="on">
        <v-icon large>mdi-pen</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">Update Group</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-text-field
            v-model="newName"
            label="Group Name"
            @keyup.enter="editGroup"
          ></v-text-field>
        </v-container>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="editGroup">
          Update
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "editGroupDialog",
  props: ["oldName"],
  data() {
    return {
      dialog: null,
      newName: ""
    };
  },
  mounted() {
    this.newName = this.oldName;
  },
  methods: {
    open() {
      this.dialog = true;
    },
    close() {
      this.dialog = false;
    },
    editGroup() {
      this.dialog = false;
      if (this.newName.length > 3 && this.newName !== this.oldName) {
        console.log("Edit Group");
        this.$emit("groupUpdated", this.newName);
      }
      this.close();
    }
  }
};
</script>

<style scoped></style>
