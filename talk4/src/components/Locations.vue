<template lang="html">
  <ul class="locations" v-if="locations.length > 0">
    <li v-for="(item, index) in locations" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Locations',
  mixins: [],
  extends: {},
  props: [],
  data () {
    return {}
  },
  computed: {
    ...mapGetters('map', ['locations'])
  },
  components: {},
  watch: {},
  methods: {},
  beforeCreate () {},
  mounted () {}
}
</script>

<style lang="css" scoped>
  .locations{
    font-size: 18px;
    list-style: none;
    margin-top: 10px;
  }

  .locations li:nth-child(1) {
    opacity: 1;
  }

  .locations li:nth-child(2) {
    opacity: .6;
  }

  .locations li:nth-child(3) {
    opacity: .4;
  }

  .locations li:nth-child(4) {
    opacity: .2;
  }

  .locations li:nth-child(4) {
    opacity: .05;
  }

  .locations li {
    opacity: .025;
  }
</style>
