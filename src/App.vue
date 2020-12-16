<template>
  <div>
    <div class="wrapper">
<!--      <header></header>-->

      <div class="wrapper-content">
        <section class="container">

          <!-- warring message  -->
          <message v-if="message" :message="message" />

          <!-- form add note  -->
          <newNote :note="note" @addNote="addNote" />

          <!--  title   -->
          <div class="note-header">
            <h1>{{ title }}</h1>
            <div class="icons">
              <svg :class="{ active: grid }" @click="grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{ active: !grid }" @click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>

          <!-- conclusion note on page  -->
          <notes :notes="notes" :grid="grid" @remove="removeNote" />

        </section>
      </div>

<!--      <footer></footer>-->
    </div>
  </div>
</template>

<script>
  import message from '@/components/Message.vue'
  import newNote from '@/components/NewNote.vue'
  import notes from '@/components/Notes.vue'

  export default {
    components: {
      message,
      newNote,
      notes
    },
    data() {
      return {
        title: 'Notes App',
        message: null,
        grid: true,
        note: {
          title: '',
          descr: ''
        },
        notes: [
          {
            title: 'First Note',
            descr: 'DEscription for first note',
            date: new Date(Date.now()).toLocaleString()
          },
          {
            title: 'Second Note',
            descr: 'DEscription for second note',
            date: new Date(Date.now()).toLocaleString()
          },
          {
            title: 'Third Note',
            descr: 'DEscription for third note',
            date: new Date(Date.now()).toLocaleString()
          }
        ]
      }
    },
    methods: {
      addNote() {
        let {title, descr} = this.note

        if (title === '') {
          this.message = 'title can`t blank'
          return false
        }

        this.notes.push({
          title,
          descr,
          date: new Date(Date.now()).toLocaleString()
        })

        this.message = null
        this.note.title = ''
        this.note.descr = ''
      },
      removeNote(index) {
        this.notes.splice(index, 1)
      }
    }
  }
</script>

<style lang="scss" scoped>
  .note-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    h1 {
      font-size: 32px;
    }

    p {
      font-size: 22px;
      color: #402caf;
    }

    svg {
      margin-right: 12px;
      color: #999999;
      cursor: pointer;
      &.active {
        color: #402caf;
      }
      &.last-child {
        margin-right: 0;
      }
    }
  }
</style>
