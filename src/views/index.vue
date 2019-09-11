<template>
  <div class="background" :style="backgroundImg">
    <div>
      <form action="/#" method="post">
        <input type="text" v-model="username">

      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      backgroundImg: {
        backgroundImage:
          "url(" + require("../../public/img/wallhaven-4omlol.jpg") + ")",
        backgroundRepeat: "no-repeat",
        height: "100%",
        width: "100%",
        top: "0",
        left: "0",
      }
    };
  }
};
</script>
<style scoped>
.background {
  position: fixed;
}
</style>
