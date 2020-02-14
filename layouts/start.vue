<template>
  <div>
    <div class="header">
      <h1> Kućalo hr </h1>
      <h3>  Nađi svoje mjesto pod suncem! </h3>
      <div>
        <nuxt-link to="/search"><button class="my-button"> Nađi odmah </button> </nuxt-link>
      </div>
      </div>

    <nuxt />
  </div>
</template>


<script>
  export default {

  }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: 95vh;
    background-image: linear-gradient( to bottom, rgba(255,255,255,0.3), rgba(255,255,255,1)), url('/city.png');
    background-position: top;
    background-size: cover;
    margin: 0 2% 0 2%;
  }
</style>
