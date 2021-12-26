<template>
    <nav class="c-nav">
        <ul class="c-ul">
            <li class="c-li" @click="goToPage('home')">Home</li>
            <li class="c-li" @click="goToPage('game')" >Show game</li>
            <li class="c-li" @click="goToPage('ranking')">Show Ranking</li>
        </ul>
    </nav>
</template>

<script>
  export default {
    name: 'Navigation',
    methods:{goToPage(page) {
      this.$emit("change-page", page)
    }}
    }
</script>
<!--        <ul class="c-nav-list">
            <li class="c-nav-list-item" v-for="(link, index) in links" v-bind:key="index">
                <a v-bind:href="link.linkUrl" v-bind:target="link.target">
                    {{ link.linkText }}
                </a>
            </li>
        </ul>--->