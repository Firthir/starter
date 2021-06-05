<template>
    <div>
        <canvas ref="alpha"></canvas>
    </div>
</template>

<script>
export default {
    name: 'Alpha',
    data() {
        return {
            windowHeight: window.innerHeight,
        };
    },
    mounted() {
        this.createAlpha();
    },
    methods: {
        createAlpha() {
            /*VARIABLES*/
            const canvas = this.$refs['alpha'];
            canvas.width = 140;
            canvas.height = this.windowHeight + 200;
            const ctx = canvas.getContext('2d');
            // /*Modify options here*/
            // //possible characters that will appear
            const characterList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
            // //stocks possible character attributes
            const layers = {
                n: 5, //number of layers
                letters: [50, 35, 25, 15, 10], //letters per layer (starting from the deepest layer)
                coef: [0.1, 0.2, 0.4, 0.6, 0.8], //how much the letters move from the mouse (starting from the deepest layer)
                size: [16, 22, 36, 40, 46], //font size of the letters (starting from the deepest layer)
                color: ['#c0a27a', '#c0a27ab0', '#c0a27a69', '#c0a27a2b', '#c0a27ac7'], //color of the letters (starting from the deepest layer)
                font: 'Brush Script Std', //font family (of every layer)
            };
            // /*End of options*/
            let characters = [];
            let mouseX = 140 / 4;
            let mouseY = 0;
            let rnd = {
                btwn: function(min, max) {
                    return Math.floor(Math.random() * (max - min) + min);
                },
                choose: function(list) {
                    return list[rnd.btwn(0, list.length)];
                },
            };
            // /*LETTER DRAWING*/
            function drawLetter(char) {
                ctx.font = char.size + 'px ' + char.font;
                ctx.fillStyle = char.color;
                var x = char.posX + (mouseX - canvas.width / 2) * char.coef;
                var y = char.posY + (mouseY - canvas.height * 2) * char.coef;
                ctx.fillText(char.char, x, y);
            }
            // /*ANIMATION*/
            document.onmousemove = function(ev) {
                mouseX = ev.pageX - canvas.offsetLeft;
                mouseY = ev.pageY - canvas.offsetTop;
                if (window.requestAnimationFrame) {
                    requestAnimationFrame(update);
                } else {
                    update();
                }
            };
            function update() {
                clear();
                render();
            }
            function clear() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            }
            function render() {
                for (var i = 0; i < characters.length; i++) {
                    drawLetter(characters[i]);
                }
            }
            // /*INITIALIZE*/
            function createLetters() {
                for (var i = 0; i < layers.n; i++) {
                    for (var j = 0; j < layers.letters[i]; j++) {
                        var character = rnd.choose(characterList);
                        var x = rnd.btwn(0, canvas.width);
                        var y = rnd.btwn(0, canvas.height);
                        characters.push({
                            char: character,
                            font: layers.font,
                            size: layers.size[i],
                            color: layers.color[i],
                            layer: i,
                            coef: layers.coef[i],
                            posX: x,
                            posY: y,
                        });
                    }
                }
            }
            createLetters();
            update();
        },
    },
};
</script>

<style></style>
