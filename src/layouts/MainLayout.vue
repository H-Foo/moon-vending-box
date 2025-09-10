<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title style="align-items: center;"> Moon By Hosh </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-list>

        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
    </q-footer>

    <q-page-container>
      <router-view />
      <q-page-sticky position="bottom-right" :offset="[10,10]">
        <q-btn label="Facing issues? Let's Chat!">
          <img src="/icons/WhatsApp.svg" style="width: 20px; height: 20px;" />
        </q-btn>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Shop',
    caption: 'Get your bamboo pads here!',
    icon: 'shopping_cart',
    link: 'https://take.app/moonbyhosh',
  },
  {
    title: 'Socials',
    caption: 'Get to know us!',
    icon: 'favorite',
    link: 'https://www.instagram.com/moonbyhosh/',
  }
]

</script>