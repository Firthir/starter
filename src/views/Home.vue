<template>
    <div>
        <h2>
            Daily Reflections
        </h2>
        <div class="reflections-background relative">
            <img class=" absolute top-0 left-20" :src="`${publicPath}images/reflections-background.jpg`" alt="" />
            <div class="particles"></div>
        </div>
        <hr />

        <h1 class="my-6">
            Nature provides me the inspiration to express, not only the nature of materials, but also the nature of beauty and inner reflection. This is the essence of my work.
        </h1>
        <div class="hidden">
            <div :class="`${startIt ? 'startIt' : ''} list-poems flex flex-wrap place-items-stretch`">
                <Card v-for="(poem, index) in poems" :key="poem.gsx$id" :poem="poem" :style="`--staggered: ${index}`" />
            </div>
            <span ref="target" />
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
const options = {
    root: null,
    threshold: 0,
};
export default {
    components: {
        Card,
    },
    data() {
        return {
            title: 'Poetry in Canberra, inspiration to express inner reflection',
            publicPath: process.env.BASE_URL,
            poemFilterKey: 'all',
            observer: null,
            startIt: false,
        };
    },
    computed: {
        poems() {
            return this.$store.state.poems;
        },
    },
    beforeMount() {
        this.$store.dispatch('getPoems');
    },
    mounted() {
        this.observer = new IntersectionObserver(this.callback, options);
        this.observer.observe(this.$refs.target);
        setTimeout(() => {
            this.addParticles();
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
        callback(entries) {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    this.startIt = true;
                }
            });
        },
        addParticles() {
            const flowers = [];
            let flowerIndex = 0;
            this.$store.state.poems.forEach(function(poem) {
                let flower = document.createElement('div');
                flower.classList.add(`flowerIndex-${flowerIndex}`);
                // let title = document.createTextNode();
                flower.innerHTML = `<div class="verse">${poem.gsx$verse.$t.replaceAll('/', '<br />')} </div>`;
                flower.style.left = `${Math.floor(Math.random() * 1000)}px`;
                flower.style.top = `${Math.floor(Math.random() * 150)}px`;
                flower.style.transform = `scale(${Math.random()})`;

                flowers.push(flower);
                document.querySelector('.particles').append(flower);
                flowerIndex++;
                flowerIndex = flowerIndex % 4;
            });

            // Keyframes
            flowers.forEach((el, i) => {
                let to = {
                    x: Math.random() * (i % 2 === 0 ? -11 : 10),
                    y: Math.random() * 10,
                };

                el.animate([{ transform: 'translate(50%, 50%)' }, { transform: `translate(${to.x}rem, ${to.y}rem)` }], {
                    duration: (Math.random() + 1) * 5000, // random duration
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

<style lang="css">
.reflections-background {
    overflow: hidden;
    padding: 40px;
}
.reflections-background img {
    height: auot;
    width: 100%;
    max-width: 800px;
}
.list-poems .card {
    display: none;
}
.startIt .card {
    display: block;
    animation-name: animateIn;
    animation-duration: 1350ms;
    animation-delay: calc(var(--staggered) * 100ms);
    animation-fill-mode: both;
    animation-timing-function: ease-in-out;
}
.particles {
    width: 100%;
    height: 800px;
    position: relative;
    text-align: center;
}
.flowerIndex-0,
.flowerIndex-1,
.flowerIndex-2,
.flowerIndex-3 {
    background-size: 50% !important;
    background-position: center center !important;
    background-repeat: no-repeat !important;
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 1;
}

.flowerIndex-0 {
    background: url(/images/flower.svg);
}
.flowerIndex-1 {
    background: url(/images/flower1.svg);
}
.flowerIndex-2 {
    background: url(/images/flower2.svg);
}
.flowerIndex-3 {
    background: url(/images/flower3.svg);
}

.verse {
    padding: 20px;
    width: 400px;
    visibility: hidden;
    opacity: 0;
    transition: all 0.4s ease-in-out;
    z-index: -1;
    position: relative;
}

.particles div:hover > .verse {
    padding: 20px;
    width: 400px;
    background: whitesmoke;
    border-radius: 10px;
    visibility: visible;
    opacity: 1;
    z-index: 2;
}

@keyframes animateIn {
    0% {
        opacity: 0;
        transform: scale(0.6) translateY(-8px);
    }
    100% {
        opacity: 1;
    }
}
</style>
