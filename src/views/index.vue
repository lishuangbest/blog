<template>
  <div class="background">
    <div class="login-box">
      <form action="/#" method="post" class="login-form">
        <input type="text" v-model="username" />
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {};
  }
};
</script>
<style scoped>
.background {
  background-image: url(../../public/img/wallhaven-4omlol.jpg);
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
}

.login-box {
  border: 1px gray;
  width: 300px;
  height: 600px;
  right: 60px;
  top: 200px;
  position: absolute;
}
.login-form {
    padding: 40px, 60px;
}
</style>
