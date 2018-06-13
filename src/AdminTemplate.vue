<template>
  <v-app id="inspire">
    <NavigationDrawer />
    <Toolbar />
    <v-content>
      <v-container fluid fill-height>
        <!-- <v-layout justify-center align-center> -->
        <v-layout>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>
    <!-- <Form/> -->
    <notifications group="notification" position="bottom right"/>
  </v-app>
</template>

<script>
  import NavigationDrawer from './components/NavigationDrawer.vue';
  import Toolbar from './components/Toolbar.vue';
  import FormBoilerplate from './components/FormBoilerplate.vue';
  export default {
    data: () => ({

    }),
    components: {
      NavigationDrawer,
      Toolbar,
      Form: FormBoilerplate
    },
    props: {
      source: String
    }
  }
</script>
