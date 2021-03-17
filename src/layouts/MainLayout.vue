<template>
  <div>
    <NavBar/>
    <MenuBar/>
      <router-view/>
    <Footer/>
  </div>
</template>

<script>
import NavBar from '@/components/app/NavBar'
import MenuBar from '@/components/app/MenuBar'
import Footer from '@/components/app/Footer'

export default {
  name: 'main-layout',
  components: {
    NavBar, MenuBar, Footer
  }
}
</script>

