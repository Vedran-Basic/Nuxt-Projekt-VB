<template>
  <div class="container">
    <div class="first">
      <h3>Ovaj title je tu da vas privuku naše ponude! </h3>
    </div>
    <div class="second">
      <h3>  Još jedan title da vas privuku naše ponude!</h3>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'start',
  }
</script>

<style>
  .container{
    display:flex;
    justify-content:center;
  }
  .first {
    align-self: flex-end;
    height: 30vh;
    text-align: center;
  }
  .second {
    height: 30vh;
    align-self: flex-start;
  }
</style>
