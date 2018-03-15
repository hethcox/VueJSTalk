<template lang="html">
  <Mapbox :access-token="key" :map-options="options" @map-init="initialize" @map-load="draw"></Mapbox>
</template>

<script>
import Mapbox from 'mapbox-gl-vue'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {mapGetters, mapActions} from 'vuex'

import Geocoder from '@/services/geocode'

export default {
  name: 'Map',
  mixins: [],
  extends: {},
  props: {},
  data () {
    return {
      map: {},
      key: 'pk.eyJ1Ijoic291dGgtcGhpbCIsImEiOiJjaXpoZXF6OWYwMWplMndxazNnc245NDNpIn0.C1NpgIG1F3BzlxGTW-Ucuw',
      options: {
        style: 'mapbox://styles/mapbox/light-v9',
        center: [-96, 37.8],
        zoom: 3
      }
    }
  },
  computed: {
    ...mapGetters('map', ['zipcode'])
  },
  components: {
    Mapbox
  },
  watch: {
    zipcode (value) {
      this.draw()
    }
  },
  methods: {
    ...mapActions('map', ['addLocation']),

    initialize (map) {
      this.map = map
    },

    draw () {
      if (this.zipcode) {
        const coordinates = this.geocode()

        coordinates.then((response) => {
          if (response) {
            const location = response.data.features[0]
            this.addLocation(location.place_name)
            new mapboxgl.Marker().setLngLat(location.geometry.coordinates).addTo(this.map)
          }
        })
      }      
    },

    geocode () {
      const geocoder = new Geocoder(this.key)

      return geocoder.fetch(this.zipcode, {
        'country': 'US'
      })
    }
  },
  beforeCreate () {},
  mounted () {}
}
</script>

<style lang="css" scoped>
  #map {
    width: 100%;
    height: 100%;
  }
</style>
