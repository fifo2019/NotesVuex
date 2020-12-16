<template>
  <div class="message">
    <p>Message component - {{ message }}</p>
  </div>
</template>


<script>
  export default {
    name: "message",
    props: {
      message: {
        type: String, // Number, Array, Object, Boolean
        required: true,
        default: 'default message'
      }
    }
  }
</script>

<style lang="scss" scoped>
  p {
    color: red;
  }

  .message {
    text-align: center;
  }
</style>