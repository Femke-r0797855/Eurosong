<template>
    <div class="c-body">
        <h1 class="c-body-header">
            Eurosong Festival
        </h1>

        <p>
            Het Eurovisiesongfestival 2022 zal de 66ste editie zijn van het Eurovisiesongfestival. Italië werd aangewezen als gastland nadat Måneskin het festival van 2021 won met Zitti e buoni. Het is de derde keer dat het Eurovisiesongfestival in Italië plaatsvindt. 
        </p>
        <!--<button @click="goToPage('game')">
            Show game
        </button>

        <button @click="goToPage('ranking')">
            Show ranking
        </button>-->
    </div>
</template>

<script>
    export default {
        name: "Homepage",
        methods: {
            goToPage(page) {
                this.$emit("change-page", page);
            }
        }
    }
</script>