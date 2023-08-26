<!-- <template>
    <div class="login">
      <div class="col-6 mx-auto">
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">Username</label>
          <input type="text" v-model="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
          {{ username }}
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">Password</label>
          <input type="password" v-model="password" class="form-control" id="exampleInputPassword1">
        </div>
        <button type="submit" @click="submit()" class="btn btn-primary">Submit</button>
      </form>
    </div>
    </div>
  </template>
  
<script>
export default {
      data() {
        return{
              username : '',
              password : ''
          }
      },
      methods : {
        submit(e) {
          console.log(this.username)
          console.log(this.password)
          e.preventDefault();

          if (!this.username.length) {
            alert('Fill username')
          }
          if (!this.password.length) {
            alert("Fill Password")
          }

          const  requestOptions = {
            method: "POST", // *GET, POST, PUT, DELETE, etc.
            Headers : {
              "Content-type" : "application/json",
              "Access-Control-Allow-Origin" : "*"
            },
            body: JSON.stringify({ username : this.username  , password : this.password })
          }

          fetch('http://127.0.0.1:8000/api/token/', requestOptions)
          .then(result => result.json())
          .then(data => {
            console.log(data)
          })

        }
      }
}
</script> -->

<template>
  <div class="login">
    <div class="col-6 mx-auto">
      <form @submit.prevent="submit">
        <div class="mb-3">
          <label for="usernameInput" class="form-label">Username</label>
          <input
            type="text"
            v-model="username"
            class="form-control"
            id="usernameInput"
            aria-describedby="emailHelp"
          />
        </div>
        <div class="mb-3">
          <label for="passwordInput" class="form-label">Password</label>
          <input
            type="password"
            v-model="password"
            class="form-control"
            id="passwordInput"
          />
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    submit(e) {
      if (!this.username.trim()) {
        alert('Please fill in the username.');
        return;
      }
      if (!this.password.trim()) {
        alert('Please fill in the password.');
        return;
      }
      e.preventDefault();

      const requestOptions = {
        method : 'POST',
        headers: {
          'Content-Type': 'application/json',
          
        },
        body: JSON.stringify({ username: this.username, password: this.password }),
      };

      fetch('http://localhost:8000/api/token/', requestOptions)
      .then((response) => response.json())
      .then((data) => {
        console.log(data.access)
        localStorage.setItem("token", data.access);
        window.location.href= '/'
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    },
  },
};
</script>
