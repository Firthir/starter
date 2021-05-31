<template>
    <div>
        <div class="w-1/2 center my-2 mx-auto">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis commodi architecto esse, voluptas quaerat dolorem nemo maxime ad voluptatem quae inventore dignissimos eum reprehenderit possimus, laborum, repellendus facere eaque officia?
        </div>
        <select name="slex" id="">
            <option value=""></option>
            option
        </select>
        <transition-group class="container" tag="ul">
            <li v-for="n in list" :key="n" :class="`item item-${n}`">{{ n }}</li>
        </transition-group>
        <button @click="shuffleList">Shuffle!</button>

        <div id="watch-example">
            <p>
                Ask a yes/no question:
                <input v-model="question" />
            </p>
            <p>{{ answer }}</p>
        </div>
    </div>
</template>

<script>
import shuffle from 'lodash/shuffle';
import _ from 'lodash';
import axios from 'axios';

export default {
    data() {
        return {
            list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
            question: '',
            answer: 'I cannot give you an answer until you ask a question!',
        };
    },
    watch: {
        // whenever question changes, this function will run
        question: function() {
            // question: function(newQuestion, oldQuestion) {
            this.answer = 'Waiting for you to stop typing...';
            this.debouncedGetAnswer();
        },
    },
    created() {
        // _.debounce is a function provided by lodash to limit how
        // often a particularly expensive operation can be run.
        // In this case, we want to limit how often we access
        // yesno.wtf/api, waiting until the user has completely
        // finished typing before making the ajax request. To learn
        // more about the _.debounce function (and its cousin
        // _.throttle), visit: https://lodash.com/docs#debounce
        this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
    },
    methods: {
        shuffleList() {
            this.list = shuffle(this.list);
        },
        getAnswer() {
            if (this.question.indexOf('?') === -1) {
                this.answer = 'Questions usually contain a question mark. ;-)';
                return;
            }
            this.answer = 'Thinking...';
            var vm = this;
            axios
                .get('https://yesno.wtf/api')
                .then(function(response) {
                    vm.answer = _.capitalize(response.data.answer);
                })
                .catch(function(error) {
                    vm.answer = 'Error! Could not reach the API. ' + error;
                });
        },
    },
};
</script>
