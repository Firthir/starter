<template>
    <div>
        <h1>
            Nature provides me the inspiration to express, not only the nature of materials, but also the nature of beauty and inner reflection. This is the essence of my work.
        </h1>

        <hr />
        <div class="reflections-background relative">
            <img class=" absolute top-0 left-20" :src="`${publicPath}/images/reflections-background.jpg`" alt="" />
            <div class="particles"></div>
        </div>
        <hr />
        <h2>
            Daily Reflections
        </h2>

        <div :class="`${startIt ? 'startIt' : ''} list-poems flex flex-wrap place-items-stretch`">
            <Card v-for="(poem, index) in poems" :key="poem.gsx$id" :poem="poem" :style="`--staggered: ${index}`" />
        </div>
        <span ref="target" />
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
        // this.getPoems();
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
            // Some random colors
            const colors = ['#3CC157', '#2AA7FF', '#1B1B1B', '#FCBC0F', '#F85F36'];

            // const numBalls = this.poems.length;
            const balls = [];
            this.$store.state.poems.forEach(function(poem) {
                let ball = document.createElement('div');
                ball.classList.add('ball');
                let title = document.createTextNode(poem.gsx$type.$t);
                ball.appendChild(title);
                ball.style.background = colors[Math.floor(Math.random() * colors.length)];
                ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
                ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
                ball.style.transform = `scale(${Math.random()})`;
                ball.style.width = `${Math.random()}em`;
                ball.style.height = ball.style.width;
                balls.push(ball);
                document.querySelector('.particles').append(ball);
            });

            // Keyframes
            balls.forEach((el, i) => {
                let to = {
                    x: Math.random() * (i % 2 === 0 ? -11 : 11),
                    y: Math.random() * 12,
                };

                el.animate([{ transform: 'translate(0, 0)' }, { transform: `translate(${to.x}rem, ${to.y}rem)` }], {
                    duration: (Math.random() + 1) * 4000, // random duration
                    direction: 'alternate',
                    fill: 'both',
                    iterations: Infinity,
                    easing: 'ease-in-out',
                });
            });
        },
    },
};
</script>

<style lang="css">
.reflections-background img {
    height: 800px;
    width: auto;
    background-size: cover;
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
    height: 600px;
    position: relative;
}
.ball {
    position: absolute;
    border-radius: 100%;
    opacity: 0.7;
}

.ball:hover {
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
