<template>
  <div>
    <h1>{{cityText}}</h1>
  </div>
</template>

<script>
  let apiKey = 'AIzaSyBZl79IC5fZ4aj3lQo4UCT8yuP6JwSUy0Q'
   export default {
        name: "zip-looker-upper",
        mounted: function(event) {
          var me = this;
          this.axios.get( "http://api.zippopotam.us/us/29401")
            .then(function response(res) {
              let city = res.data.places[0]['place name'];
              let state = res.data.places[0].state;
              let lat = res.data.places[0].latitude;
              let long = res.data.places[0].longitude;
              me.cityText = `${city}, ${state}`
            });
       },
     data () {
       return {
         cityText:""
       }
     },
    }
</script>

<style scoped>

</style>
