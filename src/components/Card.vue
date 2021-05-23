<template>
    <div class="w-1/3 drop-shadow-md p-10 border border-gray-100 rounded-xl m-10">
        <div class="verse">
            <p v-for="poem in poemArray" :key="poem.gsx$id">
                {{ poem }}
            </p>
        </div>
        <ul class="text-medium text-gray-300">
            <li class="type">{{ poem.gsx$type.$t }}</li>
        </ul>
        <hr />
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        poem: Object,
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
