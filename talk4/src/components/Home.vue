<template>
  <div class="container">
    <Button />
    <div class="cols">
      <div class="col col-1">
        <Map />
      </div>
      <div class="col col-2">
        <Info />
      </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button'
import Map from '@/components/Map'
import Info from '@/components/Info'
import {mapActions} from 'vuex'

export default {
  name: 'Home',
  mixins: [],
  extends: {},
  props: ['zipcode'],
  data () {
    return {}
  },
  computed: {},
  components: {Button, Map, Info},
  watch: {
    zipcode (value) {
      this.addZipcode(value)
    }
  },
  methods: {
    ...mapActions('map', ['addZipcode'])
  },
  beforeCreate () {},
  created () {
    this.addZipcode(this.zipcode)
  }
}
</script>

<style scoped>
  .cols{
    align-items: stretch;
    display: flex;
    height: 100vh;
  }

  .col{
    background: #2c3e50;
    width: 50%;
  }

  .col-2{
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
