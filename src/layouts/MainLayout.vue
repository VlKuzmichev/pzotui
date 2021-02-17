<template>
  <div>
      <nav class="white">
        <div class="nav-wrapper">
          <a href="#" class="brand-logo left">
            <img height="27" src="@/assets/logo.png"/>
          </a>
          <ul id="nav-mobile" class="right">
            <li>
              <a href="#" hint>
                <i class="material-icons black-text">account_box</i>
              </a>
            </li>
            <li>
              <a href="#">
                <i class="material-icons black-text">exit_to_app</i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <div>
        <router-view/>
      </div>
    <footer class="red page-footer">
      <div class="footer-copyright">
        <div class="container">
          © 2021 Могочинский региональный центр связи.
          <a class="grey-text text-lighten-4 right" href="#!">Администратор системы</a>
        </div>
      </div>
    </footer>
  </div>
</template>


