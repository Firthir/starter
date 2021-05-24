<template>
    <div :class="`w-1/3 drop-shadow-md p-10 border-${color}-100 border-2 rounded-xl m-10`">
        <div class="verse pb-10">
            <p v-for="poem in poemArray" :key="poem.gsx$id">
                {{ poem }}
            </p>
        </div>

        <div class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">{{ poem.gsx$type.$t }}</div>
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
