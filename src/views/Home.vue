<template>
    <div class="relative">
        <div class="reflections-background relative">
            <img class="" :src="`${publicPath}images/reflections-background.jpg`" alt="" />
            <div class="intro w-1/4 absolute top-0 left-0 ">
                <h2>
                    Daily Reflections
                </h2>
                <p>Reflecting on ourselves and our environments is a healthy and adaptive practice, interact with the floating flowers.</p>
                <p>Take your time and enjoy the space.</p>
            </div>
            <div class="flowers">
                <flower
                    v-for="(poem, index) in poems"
                    :key="poem.gsx$id"
                    :poem="poem"
                    :style="`left: ${floorRandom(350)}px; --staggered: ${index};  top: ${floorRandom(200)}px; transform: sacle(${random()});`"
                    :index="index"
                    :class="`group-${index % 4}`"
                    @mouseover.native="addClass"
                    @mouseout.native="removeClass"
                />
            </div>
        </div>
        <hr />

        <h1 class="my-6">
            Nature provides me the inspiration to express, not only the nature of materials, but also the nature of beauty and inner reflection. This is the essence of my work.
        </h1>
    </div>
</template>

<script>
import Flower from '@/components/Flower.vue';

export default {
    components: {
        Flower,
    },
    data() {
        return {
            title: 'Poetry in Canberra, inspiration to express inner reflection',
            publicPath: null,
            flowerGroup: [],
            isHovering: false,
        };
    },
    computed: {
        poems() {
            return this.$store.state.poems;
        },
    },
    beforeMount() {
        this.$store.dispatch('getPoems');
        this.publicPath = process.env.BASE_URL;
    },
    mounted() {
        this.wind();
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
        floorRandom(times) {
            return Math.floor(Math.random() * times);
        },
        random() {
            return Math.random();
        },
        addClass(e) {
            e.target.parentElement.classList.add('hovered');
            this.isHovering = true;
            if (e.x > 800) {
                e.target.parentElement.classList.add('right-side');
            } else {
                e.target.parentElement.classList.add('left-side');
            }
        },
        removeClass(e) {
            e.target.parentElement.classList.remove('hovered');
            this.isHovering = false;
        },

        wind() {
            this.flowerGroup = document.querySelectorAll('.flower');
            let halfway = this.flowerGroup.length / 2;
            this.flowerGroup.forEach((el, i) => {
                console.log('hi');
                console.log(halfway);
                let to = {
                    x: this.floorRandom(i > halfway ? -11 - (-2 - i) : 11 + (2 + i)),
                    y: Math.random() * 16,
                };
                console.log(to.x);
                console.log(to.y);
                if (i === halfway) {
                    el.classList.add('activate');
                }
                el.animate([{ transform: 'translate(0, 0)' }, { transform: `translate(${to.x}rem, ${to.y}rem)` }], {
                    duration: (Math.random() + 2) * 5000, // random duration
                    direction: 'alternate',
                    fill: 'both',
                    iterations: 1,
                    easing: 'ease-in-out',
                });
            });
        },
    },
};
</script>
