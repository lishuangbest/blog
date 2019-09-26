<template>
  <div class="background">
    <div class="login-title">
      <h1>
        <strong>Login to my site</strong>
      </h1>
    </div>
    <div class="login-box">
      <p style="color: white;clear: both; margin-top: 20px; text-align: left;
    font-size: 15px;">
        Enter your username and
        password to log
        on:
      </p>
      <form action="/login" method="post" class="login-form">
        <div class="form-bottom">
          <label class="label-letter" for="username">username:</label>
          <input type="text" v-model="username" id="username" />
        </div>
        <div class="form-bottom">
          <label class="label-letter" for="password">password:</label>
          <input type="password" v-model="password" id="password" />
        </div>
        <button type="submit" class="btn">Sign in!</button>
      </form>
      <a class="register-font" href="/register">click here to register</a>
      <a class="forget-font" href="#">forget password？</a>
    </div>
    <div class="login-bottom">
      <h3 style="margin-bottom: 20px; margin-top: -10px; text-align: center; font-weight: 300">...or login with:</h3>
      <div class="social-login-buttons" style="padding-top: 20px;">
        <a class="btn btn-link-2" href="#">
          <i class="fa fa-facebook"></i> Facebook
        </a>
        <a class="btn btn-link-2" href="#">
          <i class="fa fa-twitter"></i> Twitter
        </a>
        <a class="btn btn-link-2" href="#">
          <i class="fa fa-google-plus"></i> Google Plus
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      username: '',
      password: '',
    };
  }
};
</script>
<style scoped>
input {
  height: 50px;
  margin: 0;
  padding: 0 20px;
  vertical-align: middle;
  background: #fff;
  border: 3px solid #fff;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 50px;
  color: #888;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
}
.background {
  background-image: url(../../public/img/wallhaven-4omlol.jpg);
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  position: fixed;
}
.login-title {
  top: 160px;
  right: 294px;
  position: absolute;
  color: white;
}
.login-box {
  background-color: darkgray;
  opacity: 1;
  border: 1px gray;
  right: 170px;
  top: 270px;
  position: absolute;
  padding: 30px 80px 50px 80px;
  background: rgba(30, 25, 34, 0.85);
  -moz-border-radius: 0 0 4px 4px;
  -webkit-border-radius: 0 0 4px 4px;
  border-radius: 15px 15px 15px 15px;
  text-align: center;
  color: white;
}

.form-bottom {
  margin-bottom: 15px;
}
.label-letter {
  margin-right: 40px;
}
.btn {
  height: 50px;
  margin: 0;
  width: 100%;
  padding: 0 20px;
  vertical-align: middle;
  background: #de615e;
  border: 0;
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  font-weight: 300;
  line-height: 50px;
  color: #fff;
  -moz-border-radius: 4px;
  -webkit-border-radius: 4px;
  border-radius: 4px;
  text-shadow: none;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  -o-transition: all 0.3s;
  -moz-transition: all 0.3s;
  -webkit-transition: all 0.3s;
  -ms-transition: all 0.3s;
  transition: all 0.3s;
}

.btn-link-2 {
    height: 50px;
    margin: 20px 5px;
    padding: 15px 20px 15px 20px;
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid #fff;
    font-size: 16px;
    font-weight: 300;
    line-height: 16px;
    color: #fff;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
}
.register-font {
  float: right;
  color: #4dbcff;
  font-size: 14px;
  margin-top: 5px;
}

.forget-font {
  float: left;
  color: #9d9d9d;
  font-size: 14px;
  margin-top: 5px;
}
.login-bottom {
  position: absolute;
  bottom: 270px;
  right: 220px;
  color: white;
}
.btn.focus, .btn:focus, .btn:hover{
    color: rgba(233, 227, 227, 0.651);
    background: rgba(233, 87, 87, 0.548);
    text-decoration: none;
}
.btn-link-2:hover,.btn-link-2:focus {
  border: 1px solid rgba(255, 255, 255, 0.336);
  background: rgb(233, 227, 227, 0);
}
a {
  text-decoration: none;
}
a, a:hover, a:focus {
    color: #4dbcff; 
    text-decoration: none; 
    -o-transition: all .3s;
    -moz-transition: all .3s;
    -webkit-transition: all .3s; 
    -ms-transition: all .3s;
    transition: all .3s; 
}
a:focus, a:hover {
    color: #23527c;
    text-decoration: none;
}
a:active, a:hover {
    outline: 0;
}
</style>