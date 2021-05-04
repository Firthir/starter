<template lang="html">
  <div class="component-wrapper">
    <div class="container">
      <div class="page">
        <div class="text">Scroll for cascading text effects!</div>
      </div>
      <div class="page">
        <div
          class="owText text text--flipping"
          data-scroll="out"
          data-splitting=""
        >
          Jeffrey Frith
        </div>
      </div>
      <div class="page">
        <div class="text text--random" data-scroll="out" data-splitting="">
          Random
        </div>
      </div>
      <div class="page">
        <div class="text text--enter" data-scroll="out" data-splitting="">
          Enter
        </div>
      </div>
      <div class="page">
        <div class="text text--swapsies" data-scroll="out" data-splitting="">
          Swapsies
        </div>
      </div>
      <div class="page">
        <div class="text text--fading" data-scroll="out" data-splitting="">
          Fading
        </div>
      </div>
      <div class="page">
        <div class="text text--flipping" data-scroll="out" data-splitting="">
          Flipping
        </div>
      </div>
      <div class="page">
        <div class="text text--slide" data-scroll="out" data-splitting="">
          Slide
        </div>
      </div>
      <div class="page">
        <div class="text text--karaoke" data-scroll="out" data-splitting="">
          Karaoke
        </div>
      </div>
      <div class="page">
        <div class="text text--spinning" data-scroll="out" data-splitting="">
          Spinning
        </div>
      </div>
      <div class="page">
        <div class="text text--filling" data-scroll="out" data-splitting="">
          Filling
        </div>
      </div>
      <div class="page">
        <div class="text text--blocks" data-scroll="out" data-splitting="">
          Jeffrey Frith
        </div>
      </div>
      <div class="page">
        <div class="text text--scaling" data-scroll="out" data-splitting="">
          Scaling
        </div>
      </div>
      <div class="page">
        <div class="text text--turning" data-scroll="out" data-splitting="">
          Turning
        </div>
      </div>
      <div class="page">
        <div class="text text--folding" data-scroll="out" data-splitting="">
          Folding
        </div>
      </div>
      <div class="page">
        <div class="text text--bulge" data-scroll="out" data-splitting="">
          Bulge
        </div>
      </div>
      <div class="page">
        <div class="text text--tumbling" data-scroll="out" data-splitting="">
          Tumbling
        </div>
      </div>
      <div class="page">
        <div class="text text--rolling" data-scroll="out" data-splitting="">
          Rolling
        </div>
      </div>
      <div class="page">
        <div class="text text--perspective" data-scroll="out" data-splitting="">
          Perspective
        </div>
      </div>
      <div class="page">
        <div class="text text--zipping" data-scroll="out" data-splitting="">
          Zipping
        </div>
      </div>
      <div class="page">
        <div class="text text--swinging" data-scroll="out" data-splitting="">
          Swinging
        </div>
      </div>
      <div class="page">
        <div class="text text--bubbling" data-scroll="out" data-splitting="">
          Bubbling
        </div>
      </div>
      <div class="page">
        <div class="text text--blowing" data-scroll="out" data-splitting="">
          Blowing
        </div>
      </div>
      <div class="page">
        <div class="text text--meeting" data-scroll="out" data-splitting="">
          Meeting
        </div>
      </div>
      <div class="page">
        <div class="text text--conveyor" data-scroll="out" data-splitting="">
          Conveyor
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Splitting from "splitting";
import ScrollOut from "scroll-out";
export default {
  components: {
    // Splitting
  },
  mounted() {
    console.log("New component mounted.");
    Splitting();
    ScrollOut({
      targets: ".word",
      scrollingElement: ".container"
    });
  }
};
</script>

<style lang="css">
.owText {
  text-align: center;
  -webkit-text-stroke: 2px white;
  position: relative;
  text-transform: uppercase;
  color: #252527;
  font-size: 14vw;
  transform: scale(0.5);
  letter-spacing: 1.2vw;
  font-weight: 700;
  text-shadow: 0 1px 0 #4a4a4e, -1px -1px 0 #4a4a4e,
    /*main 3d shadow*/ -1px 0px 0 #343437, -2px 1px 0 #343437,
    -3px 2px 0 #313134, -4px 3px 0 #2f2f31, -5px 4px 0 #2c2c2f,
    -6px 5px 0 #2a2a2c, -7px 6px 0 #27272a, -8px 7px 0 #252527,
    -9px 8px 0 #232324, -10px 9px 0 #202022, -11px 10px 0 #1e1e1f,
    -12px 11px 0 #1b1b1d, -13px 12px 0 #19191a, -14px 13px 0 #161617,
    -15px 14px 0 #141415, -16px 15px 0 #111112, /*top right*/ 0 -1px 1px white,
    0 -2px 0px white, /*bottom left corner*/ -15px 14px 0px white,
    -16px 15px 0px white, -17px 16px 0px white, -18px 17px 0px white,
    -2px -1px 0 white, -3px 0px 0 white, /*top left corner*/ -19px 15px 0 white,
    -18px 14px 0 white, -17px 13px 0 white, -16px 12px 0 white,
    -15px 11px 0 white, -14px 10px 0 white, -13px 9px 0 white, -12px 8px 0 white,
    -11px 7px 0 white, -10px 6px 0 white, -9px 5px 0 white, -8px 4px 0 white,
    -7px 3px 0 white, -6px 2px 0 white, -5px 1px 0 white, -4px 0px 0 white,
    /*lower right / (upper right side for capital T like H etc letters. */ 0px
      2px 0px white,
    -1px 3px 0px white, -2px 4px 0px white, -3px 5px 0px white,
    -4px 6px 0px white, -5px 7px 0px white, -6px 8px 0px white,
    -7px 9px 0px white, -8px 10px 0px white, -9px 11px 0px white,
    -10px 12px 0px white, -11px 13px 0px white, -12px 14px 0px white,
    -13px 15px 0px white, -14px 16px 0px white, -15px 17px 0px white;
}
body {
  font-family: "Lato", sans-serif;
  background: #111;
  min-height: 100vh;
  overflow-x: hidden;
}
.page {
  height: 100vh;
  width: 100vw;
  scroll-snap-align: center;
  font-size: calc(var(--font-size) * 1px);
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.container {
  height: 100vh;
  overflow: auto;
  overflow-x: hidden;
  -ms-scroll-snap-type: y mandatory;
  scroll-snap-type: y mandatory;
}
.page {
  color: #fff;
  font-size: 3rem;
  text-align: center;
}
@media (min-width: 768px) {
  .page {
    font-size: 3rem;
  }
}
.page:nth-child(n) {
  background: #7e05d7;
}
.page:nth-child(2n) {
  background: #f21e56;
}
.page:nth-child(3n) {
  background: #bd04a9;
}
.page .char {
  display: inline-block;
  -webkit-animation-delay: calc(0.25s + var(--char-index) * 0.1s);
  animation-delay: calc(0.25s + var(--char-index) * 0.1s);
  transition: all 0.25s calc(0.25s + var(--char-index) * 0.1s);
}
.text--enter [data-scroll="out"] .char {
  opacity: 0;
  transform: translate(0, -150%);
}
.text--enter .char {
  opacity: 1;
  transform: translate(0, 0);
}
.text--random [data-scroll="out"] .char:nth-of-type(1) {
  transform: translateX(-161%) translateY(30%);
}
.text--random [data-scroll="out"] .char:nth-of-type(2) {
  transform: translateX(-239%) translateY(34%);
}
.text--random [data-scroll="out"] .char:nth-of-type(3) {
  transform: translateX(228%) translateY(174%);
}
.text--random [data-scroll="out"] .char:nth-of-type(4) {
  transform: translateX(-207%) translateY(120%);
}
.text--random [data-scroll="out"] .char:nth-of-type(5) {
  transform: translateX(-233%) translateY(-129%);
}
.text--random [data-scroll="out"] .char:nth-of-type(6) {
  transform: translateX(172%) translateY(232%);
}
.text--swapsies [data-scroll="in"] .char:nth-of-type(odd),
.text--swapsies [data-scroll="out"] .char:nth-of-type(odd) {
  transform: translateX(100%);
}
.text--swapsies [data-scroll="in"] .char:nth-of-type(even),
.text--swapsies [data-scroll="out"] .char:nth-of-type(even) {
  transform: translateX(-100%);
}
.text--swapsies [data-scroll="in"] .char {
  -webkit-animation-duration: 0.5s;
  animation-duration: 0.5s;
  -webkit-animation-fill-mode: forwards;
  animation-fill-mode: forwards;
}
.text--swapsies [data-scroll="in"] .char:nth-of-type(odd) {
  -webkit-animation-name: swap-left;
  animation-name: swap-left;
}
.text--swapsies [data-scroll="in"] .char:nth-of-type(even) {
  -webkit-animation-name: swap-right;
  animation-name: swap-right;
}
@-webkit-keyframes swap-right {
  25% {
    transform: translateX(-100%) translateY(-100%);
  }
  75% {
    transform: translateX(0) translateY(-100%);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}
@keyframes swap-right {
  25% {
    transform: translateX(-100%) translateY(-100%);
  }
  75% {
    transform: translateX(0) translateY(-100%);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}
@-webkit-keyframes swap-left {
  25% {
    transform: translateX(100%) translateY(100%);
  }
  75% {
    transform: translateX(0) translateY(100%);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}
@keyframes swap-left {
  25% {
    transform: translateX(100%) translateY(100%);
  }
  75% {
    transform: translateX(0) translateY(100%);
  }
  100% {
    transform: translateX(0) translateY(0);
  }
}
.text--fading [data-scroll="out"] .char {
  opacity: 0;
}
.text--flipping [data-scroll="out"] .char {
  transform: rotateY(180deg);
}
.text--slide .char {
  transition-delay: calc((var(--char-total) - var(--char-index)) * 0.1s);
}
.text--slide [data-scroll="out"] .char {
  opacity: 0;
  transform: translate(-300%, 0) skewX(20deg);
}
.text--karaoke .char {
  color: rgba(255, 255, 255, 0.15);
  transition-duration: 0.1s;
}
.text--karaoke .char:after {
  color: #fff;
  visibility: visible;
}
.text--karaoke [data-scroll="in"] .char:after {
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}
.text--karaoke [data-scroll="out"] .char:after {
  -webkit-clip-path: inset(0 100% 0 0);
  clip-path: inset(0 100% 0 0);
}
.text--filling .char {
  color: rgba(255, 255, 255, 0.15);
}
.text--filling .char:after {
  color: #fff;
  visibility: visible;
}
.text--filling [data-scroll="in"] .char:after {
  -webkit-clip-path: inset(0 0 0 0);
  clip-path: inset(0 0 0 0);
}
.text--filling [data-scroll="out"] .char:after {
  -webkit-clip-path: inset(100% 0 0 0);
  clip-path: inset(100% 0 0 0);
}
.text--blocks [data-scroll="out"] .char {
  visibility: hidden;
}
.text--blocks [data-scroll="in"] {
  overflow: hidden;
  position: relative;
}
.text--blocks [data-scroll="in"] .char {
  transition-delay: 0.5s;
}
.text--blocks [data-scroll="in"]:after {
  content: "";
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: #fff;
  -webkit-animation: block 0.5s 0.25s both;
  animation: block 0.5s 0.25s both;
}
@-webkit-keyframes block {
  0% {
    transform: translate(-110%, 0);
  }
  45%,
  55% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(110%, 0);
  }
}
@keyframes block {
  0% {
    transform: translate(-110%, 0);
  }
  45%,
  55% {
    transform: translate(0, 0);
  }
  100% {
    transform: translate(110%, 0);
  }
}
.text--scaling [data-scroll="out"] .char {
  transform: scale(0);
}
.text--turning [data-scroll="out"] .char {
  transform: rotateY(90deg);
}
.text--folding [data-scroll="out"] .char {
  transform: rotateX(90deg);
  transform-origin: bottom;
}
.text--bulge [data-scroll="in"] .char {
  -webkit-animation-name: bulge;
  animation-name: bulge;
  -webkit-animation-duration: 0.25s;
  animation-duration: 0.25s;
}
@-webkit-keyframes bulge {
  50% {
    transform: scale(1.5);
  }
}
@keyframes bulge {
  50% {
    transform: scale(1.5);
  }
}
.text--perspective {
  perspective: 1000px;
}
.text--perspective .char {
  transition: transform 0.25s calc(0.25s + var(--char-index) * 0.1s),
    opacity 0.05s calc(0.25s + var(--char-index) * 0.1s);
}
.text--perspective [data-scroll="out"] .char {
  opacity: 0;
  transform: translate3d(-25px, -20px, -800px);
}
.text--zipping .char {
  transition: transform 0.25s calc(0.25s + var(--char-index) * 0.1s),
    opacity 0.05s calc(0.25s + var(--char-index) * 0.1s);
}
.text--zipping [data-scroll="out"] .char {
  opacity: 0;
}
.text--zipping [data-scroll="out"] .char:nth-of-type(odd) {
  transform: translate(0, -100%);
}
.text--zipping [data-scroll="out"] .char:nth-of-type(even) {
  transform: translate(0, 100%);
}
.text--spinning [data-scroll="out"] .char {
  transform: rotateY(-360deg);
}
.text--tumbling .char {
  transition-delay: calc((var(--char-total) - var(--char-index)) * 0.1s);
}
.text--tumbling [data-scroll="out"] .char {
  opacity: 0;
  transform: translate(-300%, -50%) rotate(1080deg) scale(0);
}
.text--bubbling .char {
  transition-timing-function: cubic-bezier(0.75, -2, 0.75, 2);
}
.text--bubbling .char:nth-of-type(1) {
  transition-delay: 0.2s;
}
.text--bubbling .char:nth-of-type(2) {
  transition-delay: 0.3s;
}
.text--bubbling .char:nth-of-type(3) {
  transition-delay: 0.4s;
}
.text--bubbling .char:nth-of-type(4) {
  transition-delay: 0.5s;
}
.text--bubbling .char:nth-of-type(5) {
  transition-delay: 0.4s;
}
.text--bubbling .char:nth-of-type(6) {
  transition-delay: 0.3s;
}
.text--bubbling .char:nth-of-type(7) {
  transition-delay: 0.7s;
}
.text--bubbling .char:nth-of-type(8) {
  transition-delay: 0.7s;
}
.text--bubbling [data-scroll="out"] .char {
  transform: scale(0.5);
}
.text--swinging .char {
  transform-origin: calc((var(--char-total) - var(--char-index)) * 100%) -100%;
  transition-delay: calc((var(--char-total) - var(--char-index)) * 0.1s);
}
.text--swinging [data-scroll="out"] .char {
  opacity: 0;
  transform: rotate(90deg);
}
.text--rolling .char {
  transition: transform 1s, opacity 0.2s;
  transition-delay: calc((var(--char-total) - var(--char-index)) * 0.1s);
}
.text--rolling [data-scroll="out"] .char {
  opacity: 0;
  transform: translate(-500%, 0) scale(0) rotate(-1440deg);
}
.text--blowing .char {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
  transform-origin: left bottom;
  -webkit-animation-delay: calc(var(--char-index) * 0.025s);
  animation-delay: calc(var(--char-index) * 0.025s);
}
.text--blowing [data-scroll="in"] .char {
  -webkit-animation-name: blowing;
  animation-name: blowing;
}
@-webkit-keyframes blowing {
  50%,
  60%,
  70% {
    transform: skewX(-35deg);
  }
  55%,
  65%,
  75% {
    transform: skewX(-40deg);
  }
}
@keyframes blowing {
  50%,
  60%,
  70% {
    transform: skewX(-35deg);
  }
  55%,
  65%,
  75% {
    transform: skewX(-40deg);
  }
}
.text--meeting .char {
  transition-delay: calc((var(--char-total) - var(--char-index)) * 0.1s);
}
.text--meeting .char:nth-of-type(even) {
  transform-origin: top right;
}
.text--meeting .char:nth-of-type(odd) {
  transform-origin: bottom left;
}
.text--meeting [data-scroll="out"] .char {
  transform: rotate(180deg);
}
.text--conveyor [data-scroll="in"] .char {
  transform-origin: left bottom;
  -webkit-animation: convey 1s both linear;
  animation: convey 1s both linear;
  -webkit-animation-delay: calc(
    (var(--char-total) - var(--char-index)) * 0.15s
  );
  animation-delay: calc((var(--char-total) - var(--char-index)) * 0.15s);
  transition: none;
}
@-webkit-keyframes convey {
  0% {
    transform: translate(
        calc(
          (var(--char-total) - (var(--char-total) - var(--char-index))) * -100%
        ),
        0
      )
      rotate(-180deg)
      translate(calc((var(--char-total) - var(--char-index)) * -100%), 0);
  }
  40% {
    transform: translate(
        calc(
          (var(--char-total) - (var(--char-total) - var(--char-index))) * -100%
        ),
        0
      )
      rotate(-180deg) translate(0, 0);
  }
  50% {
    transform: translate(
        calc(
          (var(--char-total) - (var(--char-total) - var(--char-index))) * -100%
        ),
        0
      )
      rotate(0deg) translate(0, 0);
  }
  100% {
    transform: translate(0, 0) rotate(0deg) translate(0, 0);
  }
}
@keyframes convey {
  0% {
    transform: translate(
        calc(
          (var(--char-total) - (var(--char-total) - var(--char-index))) * -100%
        ),
        0
      )
      rotate(-180deg)
      translate(calc((var(--char-total) - var(--char-index)) * -100%), 0);
  }
  40% {
    transform: translate(
        calc(
          (var(--char-total) - (var(--char-total) - var(--char-index))) * -100%
        ),
        0
      )
      rotate(-180deg) translate(0, 0);
  }
  50% {
    transform: translate(
        calc(
          (var(--char-total) - (var(--char-total) - var(--char-index))) * -100%
        ),
        0
      )
      rotate(0deg) translate(0, 0);
  }
  100% {
    transform: translate(0, 0) rotate(0deg) translate(0, 0);
  }
}
</style>
