<template>
    <div>
        <div class="w-1/2 center my-2 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis commodi architecto esse, voluptas
            quaerat dolorem nemo maxime ad voluptatem quae inventore dignissimos eum reprehenderit possimus, laborum,
            repellendus facere eaque officia?
        </div>
        <select name="slex" id="">
            <option value=""></option>
            option
        </select>
        <transition-group class="container" tag="ul">
            <li v-for="n in list" :key="n" :class="`item item-${n}`">{{ n }}</li>
        </transition-group>
        <button @click="shuffleList">Shuffle!</button>
    </div>
</template>

<script>
import shuffle from 'lodash/shuffle';

export default {
    data() {
        return {
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
        };
    },

    methods: {
        shuffleList() {
            this.list = shuffle(this.list);
        },
    },
};
</script>
