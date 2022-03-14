<template>
  <PopupModel>
    <h2 class="text-xl text-black font-semibold">Create issue</h2>
    <p class="text-black antialiased font-semibold text-xs mt-5">Issue type</p>
    <select class="w-full border-2 py-1 px-2 mt-1 font-semibold">
      <option value="Task" class="font-semibold">Task</option>
      <option value="Issue" class="font-semibold">Issue</option>
    </select>
    <p class="text-black antialiased font-semibold text-xs">Start typing to get a list of possible matches.
    </p>
    <hr class="bg-gray-200 h-0.5 my-4"/>

    <p class="text-black antialiased font-semibold text-xs mt-5">Short Summery</p>
    <input type="text" class="w-full border-2 py-1 px-2 bg-gray-100 focus:bg-white my-1" />
    <p class="text-black antialiased font-semibold text-xs">Start typing to get a list of possible matches.
    </p>

    <p class="text-black antialiased font-semibold text-xs mt-5">Description</p>
    <editor
        :init="{
         height: 500,
         menubar: false,
         plugins: [
           'advlist autolink lists link image charmap print preview anchor',
           'searchreplace visualblocks code fullscreen',
           'insertdatetime media table paste code help wordcount'
         ],
         toolbar:
           'bold italic backcolor   \
           alignleft aligncenter alignright alignjustify | \
           bullist numlist outdent indent | removeformat | help'
       }"
    />


  </PopupModel>
</template>

<script>
import PopupModel from "@/components/popups/PopupModel";
import Editor from '@tinymce/tinymce-vue'

export default {
  name: "CreateIssue",
  components: {
    PopupModel,
    'editor': Editor,

  }

}
</script>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>