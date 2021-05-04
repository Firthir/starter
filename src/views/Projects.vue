<template>
  <div>
    <h2>Nested routes</h2>
    <ul class="menu menu--vertical">
      <router-link
        class="menu__item"
        tag="li"
        active-class="menu__item--active"
        to="/parent/1"
        ><a>Child 1</a></router-link
      >
      <router-link
        class="menu__item"
        tag="li"
        active-class="menu__item--active"
        to="/parent/2"
        ><a>Child 2</a></router-link
      >
      <router-link
        class="menu__item"
        tag="li"
        active-class="menu__item--active"
        to="/parent/3"
        ><a>Child 3</a></router-link
      >
    </ul>
    <div class="child-wrapper">
      <transition :name="transitionName">
        <router-view class="child-view" :key="$route.path"></router-view>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      transitionName: "slide-up"
    };
  },
  beforeRouteUpdate(to, from, next) {
    console.log(to);
    this.transitionName =
      to.params.child < from.params.child ? "slide-down" : "slide-up";
    next();
  }
};
</script>
