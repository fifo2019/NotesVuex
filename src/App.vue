<template>
  <div>
    <div class="wrapper">
<!--      <header></header>-->

      <div class="wrapper-content">
        <section class="container">

          <!-- warring message  -->
          <message v-if="getMessage" :message="getMessage" />

          <!-- form add note  -->
          <newNote />

          <!--  title   -->
          <div class="note-header">
            <h1>{{ title }}</h1>
  
            <!-- search -->
            <search
              :value="search"
              placeholder="Find your note"
              @search="search = $event"
            />
            
            <div class="icons">
              <svg :class="{ active: grid }" @click="grid = true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              <svg :class="{ active: !grid }" @click="grid = false" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3" y2="6"></line><line x1="3" y1="12" x2="3" y2="12"></line><line x1="3" y1="18" x2="3" y2="18"></line></svg>
            </div>
          </div>

          <!-- conclusion note on page  -->
          <notes
            :notes="notesFilter"
            :grid="grid"
          />

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
  import search from '@/components/Search.vue'

  export default {
    components: {
      message,
      newNote,
      notes,
      search
    },
    data() {
      return {
        title: 'Notes App',
        search: '',
        grid: true,
        notes: null
      }
    },
    created() {
      this.notes = this.$store.getters.getNotes
    },
    methods: {
    
    },
    computed: {
      notesFilter() {
        let array = this.notes,
          search = this.search

        if (!search) return array

        // Small
        search = search.trim().toLowerCase()

        // Filter
        array = array.filter(function (item) {
          if (item.title.toLowerCase().indexOf(search) !== -1) {
            return item
          }
        })

        // Error
        return array
      },
      getMessage() {
        return this.$store.getters.getMessage
      }
    },
  }
</script>

<style lang="scss" scoped>
  .note-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 30px 0 0 0;

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
