<template>
    <nav class="white">
      <div class="nav-wrapper">
        <router-link tag="a" active-class="active"
                     to="/myTests" exact>
          <a class="brand-logo left">
            <img alt="Logo" src="@/assets/logo.png"/>
          </a>
        </router-link>
        <ul id="nav-mobile" class="right">
          <router-link tag="li" active-class="active"
                       to="/profile" exact>
            <a href="#">
              <i class="material-icons black-text">account_box</i>
            </a>
          </router-link>
          <li>
            <a href="#" >
              <i class="material-icons black-text" v-on:click="logout">exit_to_app</i>
            </a>
          </li>
        </ul>
      </div>
    </nav>
</template>

<script>
export default {
  methods: {
    async logout() {
      let auth = JSON.parse(localStorage.getItem('user'));
      let headers = new Headers();
      headers.append('Accept', 'application/json');
      headers.append('Authorization', 'Basic ' + auth);
      let request = new Request("http://localhost:8081/logout", {
        method: 'GET',
        headers: headers,
        credentials: 'same-origin'
      });
      const res = await fetch(request);
      if (res.ok) {
        localStorage.removeItem('user');
        await this.$router.push('/login');
      }
    },
    // logout() {
    //
    //   this.$router.push('/login?message=logout');
    // }
  }
}
</script>
