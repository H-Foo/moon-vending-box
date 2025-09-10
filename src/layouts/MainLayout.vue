<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="secondary-bg">
      <q-toolbar>
        <q-toolbar-title class="text-center text-bold" style="color: #A7131D;"> How To Buy Moon Pads </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <q-list class="row">
        <EssentialLink v-for="link in linksList" :key="link.title" v-bind="link" />
      </q-list>
      <div class="q-mt-md text-caption text-center">Offered with 🤍 by Moon.</div>
    </q-footer>
    <q-page-container>
      <router-view />
      <q-page-sticky position="top-left" :offset="[5,10]">
        <q-btn href="https://api.whatsapp.com/send?phone=60182973819" 
          rounded
          unelevated
          size="md"
          color="primary"
          class="shadow-2">
          <img src="/icons/WhatsApp.svg" style="width: 15px; height: 15px;" />
        </q-btn>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script setup>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Check Our Store!',
    icon: 'shopping_cart',
    link: 'https://take.app/moonbyhosh',
  },
  {
    title: 'Stalk Our Page 🙈',
    icon: 'public',
    link: 'https://www.instagram.com/moonbyhosh/',
  }
]

</script>