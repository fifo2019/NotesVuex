<template>
  <div class="notes">
    <div class="note"
      :class="[note.priority, { full: !grid }]"
      v-for="(note, index) in notes"
      :key="index"
    >
      <div class="note-header">
  
        <p
          @click="changeNote(index, 'title')"
          v-show="!note.change.title"
        >
          {{ note.title }}
        </p>
        <input
          type="text"
          v-show="note.change.title"
          v-model="note.change.title"
          @keyup.enter="saveNote(index, 'title')"
          @keyup.esc="exitChangeNote(index, 'title')"
        >
        
        <p style="cursor: pointer" @click="removeNote(index)">x</p>
      </div>
      <div class="note-body">
        
        <p
          @click="changeNote(index, 'descr')"
          v-show="!note.change.descr"
        >
          {{ note.descr }}
        </p>
        <textarea
          v-model="note.change.descr"
          v-show="note.change.descr"
          @keyup.enter="saveNote(index, 'descr')"
          @keyup.esc="exitChangeNote(index, 'descr')"
        ></textarea>
        
        <span>{{ note.date }}</span>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "notes",
    props: {
      notes: {
        type: Array,
        required: true,
        default: []
      },
      grid: {
        type: Boolean,
        required: true,
        default: true
      }
    },
    methods: {
      removeNote(index) {
        this.$store.dispatch('removeNote', index)
      },
      changeNote(index, type) {
        this.$store.dispatch('changeNote', {index, type})
      },
      saveNote(index, type) {
        this.$store.dispatch('saveNote', {index, type})
      },
      exitChangeNote(index, type) {
        this.$store.dispatch('exitChangeNote', {index, type})
      },
    }
  }
</script>

<style lang="scss" scoped>
  .notes {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;
    padding: 40px 0;
  }
  
  .note {
    width: 46%;
    padding: 18px 20px;
    margin: 20px;
    background-color: #ffffff;
    transition: all .25s cubic-bezier(.02, .01, .47, 1);
    cursor: pointer;
    
    &:hover {
      box-shadow: 0 30px 30px rgba(0, 0, 0, .04);
      transform: translate(0, -6px);
      transition-delay: 0s !important;
    }
    
    &.full {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      
      p {
        margin-right: 16px;
        
        &.last-child {
          margin-right: 0;
        }
      }
    }
    
    &.standart {
      box-shadow: 0 30px 30px rgba(0, 0, 0, .04);
    }
    
    &.important {
      box-shadow: 0 0 30px rgb(255, 235, 59 / 61%);
    }
    
    &.critical {
      box-shadow: 0 0 30px #F44336;
    }
  }
  
  .note-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    p {
      font-size: 22px;
      color: #402caf;
    }
  }
  
  .note-body {
    p {
      margin: 20px 0;
    }
    
    span {
      font-size: 14px;
      color: #999999;
    }
  }
</style>