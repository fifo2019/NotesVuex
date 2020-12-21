<template>
  <div class="new-note">
    <label>Title
      <input v-model="note.title" type="text">
    </label>
    <label>Description
      <textarea v-model="note.descr"></textarea>
    </label>
  
    <h2>Priority</h2>
    <div class="priority-wrp">
      <label v-for="item in priorities">{{ item | firstLetterToUpper }}
        <input
          type="radio"
          v-model="note.priority"
          :value="item"
        >
      </label>
    </div>
    
    <button class="btn btnPrimary" @click="addNote">New note</button>
  </div>
</template>

<script>
  export default {
    name: "newNote",
    data() {
      return {
        note: {
          title: '',
          descr: '',
          priority: 'standart'
        },
        priorities: null
      }
    },
    created() {
      this.priorities = this.$store.getters.getPriority
    },
    filters: {
      firstLetterToUpper: function (value) {
        return value[0].toUpperCase() + value.slice(1)
      }
    },
    methods: {
      addNote() {
 
        if (this.checkTitle() === false) return false

        this.$store.dispatch('addNote', this.note)
        
        this.resetNote()
      },
      checkTitle() {
        if (this.note.title.trim() === '') {
          let textMessage = 'title can`t blank'
          this.$store.dispatch('setMessage', textMessage)
          return false
        }
      },
      resetNote() {
        this.note.title = ''
        this.note.descr = ''
        this.note.priority = 'standart'

        this.$store.dispatch('removeMessage')
      }
    },
  }
</script>

<style lang="scss" scoped>
  .new-note {
    text-align: center;
  }

  .priority-wrp {
    display: flex;
    justify-content: space-around;
    margin: 20px;
  
    & label {
      cursor: pointer;
    }
  }
</style>