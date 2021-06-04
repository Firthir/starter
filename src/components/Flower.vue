<template>
    <div :class="`flower ${color} ${poem.gsx$type.$t}`">
        <div class="verse">
            <p v-for="poem in poemArray" :key="poem.gsx$id">
                {{ poem }}
            </p>
        </div>
        <div class="shape"></div>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        poem: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
    },
    data() {
        return {
            color: '',
            poemArray: [],
        };
    },
    mounted() {
        this.lowerCase();
        this.poemToArray();
    },

    methods: {
        lowerCase() {
            this.color = this.poem.gsx$mood.$t.toLowerCase();
        },
        poemToArray() {
            this.poemArray = this.poem.gsx$verse.$t.split('/');
        },
    },
};
</script>

<style></style>
