<template>
  <v-navigation-drawer
    :clipped="$vuetify.breakpoint.lgAndUp"
    v-model="drawer"
    fixed
    app

  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-avatar>
            <img src="https://randomuser.me/api/portraits/men/85.jpg" >
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title>John Leider</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list dense>
      <template v-for="item in items">
        <v-layout
          v-if="item.heading"
          :key="item.heading"
          row
          align-center
        >
          <v-flex xs6>
            <v-subheader v-if="item.heading">
              {{ item.heading }}
            </v-subheader>
          </v-flex>
          <v-flex xs6 class="text-xs-center">
            <a href="#!" class="body-2 black--text">EDIT</a>
          </v-flex>
        </v-layout>
        <v-list-group
          v-else-if="item.children"
          v-model="item.model"
          :key="item.text"
          :prepend-icon="item.model ? item.icon : item['icon-alt']"
          append-icon="keyboard_arrow_down"
        >
          <v-list-tile slot="activator">
            <v-list-tile-content>
              <v-list-tile-title>
                {{ item.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile
            v-for="(child, i) in item.children"
            :key="i"
            @click="redirect(child.action)"
          >
            <v-list-tile-action v-if="child.icon">
              <v-icon>{{ child.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>
                {{ child.text }}
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list-group>
        <v-list-tile v-else :key="item.text" @click="">
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              {{ item.text }}
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    drawer: {
      get () {
        return this.$store.state.drawer.show;
      },
      set (val) {
        return this.$store.commit('drawer/toggleDrawer', val);
      }
    }
  },
  data () {
      return {
        items: [
          { icon: 'home', text: 'Home' },
          {
            icon: 'category',
            'icon-alt': 'category',
            text: 'Category',
            model: false,
            children: [
              { icon: 'list', text: 'Show All Data', action: '/categories' }
            ]
          },
          // {
          //   icon: 'keyboard_arrow_up',
          //   'icon-alt': 'keyboard_arrow_down',
          //   text: 'More',
          //   model: false,
          //   children: [
          //     { text: 'Import' },
          //     { text: 'Export' },
          //     { text: 'Print' },
          //     { text: 'Undo changes' },
          //     { text: 'Other contacts' }
          //   ]
          // },
          { icon: 'settings', text: 'Settings' },
        ]
      }
    },
    methods: {
      redirect(route) {
        return this.$router.push(route);
      }
    }
}
</script>

<style lang="css">
</style>
