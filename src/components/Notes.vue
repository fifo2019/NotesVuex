<template>
  <div class="notes">
    <div class="note" :class="{ full: !grid }" v-for="(note, index) in notes" :key="index">
      <div class="note-header">
        <p>{{ note.title }}</p>
        <p style="cursor: pointer" @click="removeNote(index)">x</p>
      </div>
      <div class="note-body">
        <p>{{ note.descr }}</p>
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
        type: Array, // Number, Array, Object, Boolean
        required: true,
        default: []
      },
      grid: {
        type: Boolean, // Number, Array, Object, Boolean
        required: true,
        default: true
      }
    },
    methods: {
      removeNote(index) {
        console.log(`Note id - ${index} removed`)
        this.$emit('remove', index)
      }
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