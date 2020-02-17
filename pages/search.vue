<template>
  <div class="container">
    <div class="table-data">
      <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return{
        url:'home',
        homes:[],
        headers:[],
        localPagination:{
          page:1,
          searchText:''
        },
        pagination:{}
      }
    },
    created(){
      this.getData()
    },
    methods: {
      async getData(){
          if (!this.url) return

          try {
            const { page, searchText } = this.localPagination

            const baseUrl = 'http://homehapp-api.jsteam.gaussx.com/api/'

            const response = await this.$axios.get(baseUrl + this.url, {
              params: {
                page,
                searchText,
                sortBy,
                sortOrder,
                elastic: 1
              }
            })
            const { data, pagination } = response.data.data
            console.log({data, pagination})
            if (data.length) {
              const keys = Object.keys(data[0])
              const headers = []
              keys.forEach(k => {
                console.log(typeof data[0][k])
                if (typeof data[0][k] !== 'object') {
                  headers.push({
                    value: k,
                    text: startCase(k)
                  })
                }
              })
              this.headers = headers
            }

            this.homes.splice(0, this.homes.length, ...data)
            this.pagination = pagination
          } catch (err) {
            console.error(err)
          }
        }
      }
    }
</script>
<style scoped>
  .container {
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
  .table-data{
    display:block;
  }
</style>