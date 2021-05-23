<template>
    <div>
        <h1>
            Nature provides me the inspiration to express, not only the nature of materials, but also the nature of beauty and inner reflection. This is the essence of my work.
        </h1>
        <hr />
        <h1>
            Reflections
        </h1>
        <div class="flex flex-wrap place-items-stretch">
            <Card v-for="poem in poems" :key="poem.gsx$id" :poem="poem" />
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import Card from '@/components/Card.vue';

export default {
    components: {
        Card,
    },
    data() {
        return {
            poems: null,
        };
    },
    mounted() {
        this.getPoems();
    },
    methods: {
        async getPoems() {
            const gsheet_url = 'https://spreadsheets.google.com/feeds/list/11Ij6ozLqyHr9DWnvI8RtR0zpbOhWb2XdrsvcmrWD4Jc/1/public/values?alt=json';
            try {
                const response = await axios.get(gsheet_url);
                console.log(response);
                this.poems = response.data.feed.entry;
            } catch (error) {
                console.error(error);
            }
        },
        calculatePoemCount() {
            for (let i = 0; i < this.poems.length; i++) {
                this.imageCounter++;
            }
        },
    },
};
</script>

<style lang="css"></style>
