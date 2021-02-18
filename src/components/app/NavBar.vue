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
        <router-link tag="li" active-class="active"
                     to="/login" exact>
          <a href="#">
            <i class="material-icons black-text">exit_to_app</i>
          </a>
        </router-link>
      </ul>
    </div>
  </nav>
</template>
