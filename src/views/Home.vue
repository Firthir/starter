<template>
    <div class="relative">
        <div class="reflections-background relative">
            <img class="" :src="`${publicPath}images/reflections-background.jpg`" alt="" />
            <div class="intro w-1/4 absolute top-0 left-0 ">
                <h1 class="text-2xl">
                    Daily Reflections
                </h1>
                <p class="text-xs">Interact with the falling flowers.</p>
                <p class="text-xs">Take your time and enjoy the space.</p>
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

        <h2 class="my-6">
            Nature provides me the inspiration to express, not only the nature of materials, but also the nature of beauty and inner reflection. This is the essence of my work.
        </h2>
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
        setTimeout(() => {
            this.wind();
        }, 1500);
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
            let halfway = Math.floor(this.flowerGroup.length / 2);
            this.flowerGroup.forEach((el, i) => {
                let to = {
                    x: this.floorRandom(i % 2 === 0 ? -40 - -(4 * i) : -15 - -(2 * i)),
                    y: Math.random() * 20,
                };
                if (i === halfway) {
                    setTimeout(() => {
                        el.classList.add('hovered');
                    }, 10000);
                    setTimeout(() => {
                        el.classList.remove('hovered');
                    }, 11000);
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
