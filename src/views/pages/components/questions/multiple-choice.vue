<template>
  <div>
    <editor v-model="question" />

  </div>
</template>

<script>
import editor from "@/views/pages/components/editor";
export default {
  name: "multiple-choice",
  components: {
    editor
  },
  data: () => ({
    question: "",
    type: "",
    difficulty: "",
    points: ""
  })
};
</script>

<style scoped></style>
