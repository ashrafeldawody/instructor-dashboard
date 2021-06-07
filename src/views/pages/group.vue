<template>
  <v-card class="mx-auto">
    <v-list-item three-line>
      <v-list-item-content>
        <router-link
          class="overline mb-4 text-decoration-none"
          :to="{ name: 'groups' }"
        >
          Groups
        </router-link>
        <v-list-item-title class="headline mb-1">
          {{ group.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ group.created }}</v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-avatar class="mt-12">
        <edit-group-dialog
          :oldName="group.name"
          @groupUpdated="groupUpdated"
        ></edit-group-dialog>
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
          <v-icon large>mdi-delete</v-icon>
        </v-btn>
      </v-list-item-avatar>
    </v-list-item>
    <v-card-text>
      <add-member-to-group
        :groupID="group.id"
        @added="fetchGroup"
      ></add-member-to-group>
      <list-of-group-members :members="members"></list-of-group-members>
    </v-card-text>
    <v-card-actions> </v-card-actions>
  </v-card>
</template>

<script>
import EditGroupDialog from "@/views/pages/components/editGroupDialog";
import AddMemberToGroup from "@/views/pages/components/addMemberToGroup";
import ListOfGroupMembers from "@/views/pages/components/listOfGroupMembers";
export default {
  name: "group",
  components: { ListOfGroupMembers, AddMemberToGroup, EditGroupDialog },
  data: () => ({
    addMemberDialog: null,
    newStudentIDs: "",
    group: {
      id: 1,
      name: "CS Group",
      created: "16th Oct 2018",
      members: 14
    },
    members: [
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
    fetchGroup() {
      console.log("get group");
    },
    addMemberToGroup() {
      console.log("addMemberToGroup");
      this.addMemberDialog = false;
    },
    groupUpdated(e) {
      this.group.name = e;
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
    }
  }
};
</script>

<style scoped></style>
