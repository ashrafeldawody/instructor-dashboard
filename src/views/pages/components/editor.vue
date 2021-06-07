<template>
  <v-card>
    <v-card-title>{{ label }}</v-card-title>
    <v-card-text>
      <quill-editor
        ref="questionEditor"
        v-model="content"
        class="quill-editor"
        @change="$emit('onChange', content)"
        :options="editorOptions"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.snow.css";
import Quill from "quill";
import ImageUploader from "quill-image-uploader/src/quill.imageUploader";
Quill.register("modules/imageUploader", ImageUploader);

export default {
  name: "editor",
  components: {
    quillEditor
  },
  props: ["label"],
  data: () => ({
    content: "",
    editorOptions: {
      modules: {
        toolbar: [
          [{ font: [] }, { size: [] }],
          ["bold", "italic", "underline", "strike"],
          [{ color: [] }, { background: [] }],
          [{ script: "super" }, { script: "sub" }],
          [{ header: "1" }, { header: "2" }, "blockquote", "code-block"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" }
          ],
          ["direction", { align: [] }],
          ["link", "image", "video", "formula"],
          ["clean"]
        ],

        imageUploader: {
          upload: file => {
            return new Promise((resolve, reject) => {
              const formData = new FormData();
              formData.append("image", file);

              fetch(
                "https://api.imgbb.com/1/upload?key=14f350d76c9064811e46f92b98acf996",
                {
                  method: "POST",
                  body: formData
                }
              )
                .then(response => response.json())
                .then(result => {
                  console.log(result);
                  resolve(result.data.url);
                })
                .catch(error => {
                  reject("Upload failed");
                  console.error("Error:", error);
                });
            });
          }
        }
      }
    }
  })
};
</script>

<style scoped></style>
