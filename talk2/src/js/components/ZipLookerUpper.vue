<template>
  <div>
    <div align="center">
      <gmap-map
        :center="center"
        :zoom="10"
        style="width: 500px; height: 300px">
        <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          :clickable="true"
          :draggable="true"
          @click="center=m.position"
        ></gmap-marker>
      </gmap-map>
    </div>
    <h1>{{cityText}}</h1>
    <form class="search-form">
      <input
        type="text"
        placeholder="Enter zip code..."
        class="search-input"
        v-model="zip"
        v-on:keyup.enter="onEnterClick"/>
    </form>

  </div>
</template>

<script>
   export default {
        name: "zip-looker-upper",
        mounted: function(event) {
          this.updateMap();
       },
     data () {
       return {
         cityText:"",
         zip: "29464",
         center: {lat: 10.0, lng: 10.0},
         markers: [{
           position: {lat: 10.0, lng: 10.0}
         }]
       }
     },
     methods: {
       onEnterClick() {
         this.updateMap();
       },
       updateMap() {
         var me = this;
         this.axios.get("http://api.zippopotam.us/us/" + me.zip)
           .then(function response(res) {
             let city = res.data.places[0]['place name'];
             let state = res.data.places[0].state;
             let lat = parseFloat(res.data.places[0].latitude);
             let long = parseFloat(res.data.places[0].longitude);
             me.center = {lat: lat, lng: long};
             me.markers = [{position:{lat: lat, lng: long}}];
             me.cityText = `${city}, ${state}`
           });
       }
     }
   }

</script>

<style scoped>

</style>
