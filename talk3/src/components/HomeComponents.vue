<template>
    <div class="home">
        <section id="search-bar" class="section">
            <div class="columns">
                <div class="column">
                    <h3 class="title is-3">
                        Search for any location to add a marker.
                    </h3>
                    <form class="control" v-on:submit="findAddress">
                        <div class="field">
                            <input class="input" type="text" v-model="query" />
                        </div>
                        <div class="field">
                            <awesome-button 
                                :value="buttonLabel" 
                                :color="buttonColor"
                                :bgColor="btnBg"/>
                        </div>
                    </form>
                </div> 
                <div class="column">
                </div>           
            </div>
        </section>
        <section id="map" class="section">
            <div class="card map-container">
                <div class="card-content map-container is-paddingless">
                    <gmap-map
                        ref="map"
                        :center="center"
                        :zoom="1.5"
                        style="width: 100%; height: 100%;">
                        <gmap-marker
                            :key="index"
                            v-for="(m, index) in markers"
                            :position="m.position"
                            :clickable="true"
                            :draggable="true"
                            @click="center=m.position">
                        </gmap-marker>
                    </gmap-map>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
    import axios from 'axios';
    import AwesomeButton from './AwesomeButton'

    const gMapsUrl = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    const gMapsKey = "AIzaSyBDe3_waT6h0oZqhYWAajHSbG8NbBS2f7c";
    const proxy = "https://cors-anywhere.herokuapp.com/"

    export default {
        name: 'HomeComponents',
        components: {
            'awesome-button': AwesomeButton
        },
        data () {
            return {
                query: '',
                center: {lat: 0, lng: 0},
                markers: [],
                buttonLabel: 'Hello!',
                buttonColor: 'white',
                btnBg: 'green'
            }
        },
        methods: {
            findAddress(event) {
                event.preventDefault();
                const self = this;

                axios.get(gMapsUrl + self.query + "&key=" + gMapsKey)
                        .then(function response(response) {
                            console.log(response);
                            let data = response.data.results[0];
                            let len = response.data.results[0].address_components.length;
                            let coords = data.geometry.location;
                            let country = data.address_components[len - 1].long_name;
                            let lat = parseFloat(coords.lat);
                            let lng = parseFloat(coords.lng);
                            self.markers.push({position:{lat: lat, lng: lng}});
                            self.updateCharts(country);
                        });
            }
        }
    }
</script>


<style scoped>
    .map-container {
        width: 100%;
        height: 700px;
    }

    .vue-map-container, .vue-map-container .vue-map {
        width: 100%;
        height: 100%;
    }
</style>
