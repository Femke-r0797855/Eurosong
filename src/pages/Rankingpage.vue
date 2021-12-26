<template>
    <div class="c-body">
        <!--<<button @click="goToPage('home')">
            Go to home
        </button>-->
        <h1 class="c-body-header">
            Ranking
        </h1>
        <p>
            Here you find the top songs
        </p>
        <div v-for="(song) in sortSong(songs)" :key="song.id">
            {{ song.artist.name }} - {{ song.title }} -  {{ song.points }}
            <iframe :src="song.spotify" width="100%" height="80" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
        </div>
    </div>
</template>

<script>
    // components
    import Ranks from "../components/Ranks.vue"

    //Export
    export default {
        name: "Rankingpage",
        data() {
            return {
                songs: []
            }
        },
        mounted() {//Moment dat dit laad dan doet die
            this.fetchSongs();
        },
        methods: {
            
            goToPage(page) {
                this.$emit("change-page", page);
            },
            fetchSongs() {
                // Get all songs
                const url = "http://webservies.be/eurosong/Songs";

                fetch(url)
                    .then((response) => {
                        return response.json();
                    })
                    .then((songs) => {
                        this.fetchArtists(songs);
                        songs.map((song)=> {
                            song.points = 0;
                            //console.log("SP: " + song.points);
                            console.log(song);
                            return song;
                        })
                        this.songs = songs;
                        this.fetchPoints(songs);
                    console.log(songs)
                    })

                    ;
                    
            },
            fetchArtists(songs) {
                // Get all artist
                const url = "http://webservies.be/eurosong/Artists";

                fetch(url)
                    .then((response) => {
                        // response is text, so convert to json
                        return response.json();
                    })
                    .then((artists) => {
                        // loop over array songs with forEach method
                        songs.map((song) => {
                            // find the artist in an array
                            const artist = artists.find((artist) => artist.id == song.artist);

                            // replace the id by the artist object
                            song.artist = artist;

                            // return the new object
                            return song;
                        });

                        // change data of songs, so everything will get rerenderd;
                        this.songs = songs;
                    });
            },
            fetchPoints(songs) {

                songs.map((song) => {

                    // Get all songs
                    const url = "http://webservies.be/eurosong/Songs/" + song.id + "/points";

                    fetch(url)
                        .then((response) => {
                            return response.json();
                        })
                        .then((resultpoints) => {
                            //this.fetchArtists(songs);
                            //console.log("POINTS: " + points);
                            song.points = resultpoints;
                        })                     
                        ;
                    return song;
                })

                this.songs = songs;
                    
            },            
            sortSong(arr) { //https://codepen.io/lgkonline/pen/dOebrw
                // Set slice() to avoid to generate an infinite loop!
                return arr.slice().sort(function(a, b) {
                    return b.points - a.points;
                    }
                )
                }
        }
    }
</script>