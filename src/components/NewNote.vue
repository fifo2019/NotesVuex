<template>
  <div class="new-note">
    <label>Title
      <input v-model="note.title" type="text">
    </label>
    <label>Description
      <textarea v-model="note.descr"></textarea>
    </label>
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
  export default {
    name: "newNote",
    props: {
      note: {
        type: Object, // Number, Array, Object, Boolean
        required: true,
        default: {
          title: '',
          descr: ''
        }
      }
    },
    methods: {
      addNote() {
        this.$emit('addNote', this.note)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .new-note {
    text-align: center;
  }
</style>