<template lang="html">
  <Mapbox :access-token="key" :map-options="options" @map-init="initialize" @map-load="draw"></Mapbox>
</template>

<script>
import Mapbox from 'mapbox-gl-vue'
import Geo from 'mapbox-geocoding'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {mapGetters, mapActions} from 'vuex'

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
      const coordinates = this.geocode()

      coordinates.then((coordinates) => {
        new mapboxgl.Marker().setLngLat(coordinates).addTo(this.map)
      })
    },

    geocode () {
      Geo.setAccessToken(this.key)

      return new Promise((resolve, reject) => {
        Geo.geocode('mapbox.places', this.zipcode, (err, data) => {
          if (!err) {
            const location = data.features[0]
            this.addLocation(location.place_name)
            resolve(location.geometry.coordinates)
          }
        })
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
