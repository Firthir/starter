<template>
    <div>
        <h2>
            Daily Reflections
        </h2>
        <div class="reflections-background relative">
            <img class="absolute top-0 left-20" :src="`${publicPath}images/reflections-background.jpg`" alt="" />
            <div class="flowers">
                <flower
                    v-for="(poem, index) in poems"
                    :key="poem.gsx$id"
                    :poem="poem"
                    :style="`left: ${floorRandom(1000)}px; --staggered: ${index};  top: ${floorRandom(300)}px; transform: sacle(${random()});`"
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
            flowers: [],
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
            this.flowers = document.querySelectorAll('.flowers');
            let halfway = this.flowers.length / 2;
            this.flowers.forEach((el, i) => {
                let to = {
                    x: Math.random() * (i % 2 === 0 ? -11 : 10),
                    y: Math.random() * 10,
                };
                if (i === halfway) {
                    el.classList.add('activate');
                }
                el.animate([{ transform: 'translate(0, 0)' }, { transform: `translate(${to.x}rem, ${to.y}rem)` }], {
                    duration: (Math.random() + 1) * 10000, // random duration
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
