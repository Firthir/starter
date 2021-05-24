<template>
    <div>
        <h1>
            Nature provides me the inspiration to express, not only the nature of materials, but also the nature of beauty and inner reflection. This is the essence of my work.
        </h1>
        <hr />
        <h2>
            Daily Reflections
        </h2>
        <div class="flex flex-wrap place-items-stretch">
            <Card v-for="poem in poems" :key="poem.gsx$id" :poem="poem" />
        </div>
    </div>
</template>

<script>
// import axios from 'axios';
import Card from '@/components/Card.vue';

export default {
    components: {
        Card,
    },
    data() {
        return {
            title: 'Poetry in Canberra, inspiration to express inner reflection',
            // poems: null,
        };
    },
    computed: {
        poems() {
            return this.$store.state.poems;
        },
    },
    mounted() {
        this.$store.dispatch('getPoems');
        // this.getPoems();
    },
    metaInfo() {
        return {
            title: `${this.title} - Jeffrey Frith`,
            // meta: [
            //     { name: 'description', content: 'Connect and follow ' + this.userData.name + ' on Epiloge - ' + this.userData.tagline},
            //     { property: 'og:title', content: this.userData.name + ' - Epiloge'},
            //     { property: 'og:site_name', content: 'Epiloge'},
            //     { property: 'og:description', content: 'Connect and follow ' + this.userData.name + ' on Epiloge - ' + this.userData.tagline},
            //     {property: 'og:type', content: 'profile'},
            //     {property: 'og:url', content: 'https://epiloge.com/@' + this.userData.username},
            //     {property: 'og:image', content: this.aws_url + '/users/' + this.userData.profileurl + '-main.jpg' }
            // ]
        };
    },
    methods: {
        // async getPoems() {
        //     const gsheet_url = 'https://spreadsheets.google.com/feeds/list/11Ij6ozLqyHr9DWnvI8RtR0zpbOhWb2XdrsvcmrWD4Jc/1/public/values?alt=json';
        //     try {
        //         const response = await axios.get(gsheet_url);
        //         console.log(response.data.feed.entry);
        //         this.poems = response.data.feed.entry.reverse();
        //     } catch (error) {
        //         console.error(error);
        //     }
        // },
    },
};
</script>

<style lang="css"></style>
