<template>
  <q-layout view="hHh lpR fFf">
    <q-header class="secondary-bg">
      <q-toolbar>
        <q-toolbar-title class="text-center text-bold" style="color: #A7131D;"> How To Buy Moon Pads </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer>
      <div class="q-mt-md text-caption text-center">Offered with 🤍 by Moon.</div>
    </q-footer>
    <q-page-container>
      <router-view />
      <q-page-sticky position="bottom-left" :offset="[5,10]">
        <q-fab
          icon="info"
          direction="right"
          color="primary"
          text-color="white"
          glossy
        ><q-fab-action
            external
            icon="img:/icons/WhatsApp.svg"
            href="https://api.whatsapp.com/send?phone=60182973819"         
            color="secondary"
        />
        <q-fab-action
          external
          icon="public"
          href="https://moonbyhosh.wixsite.com/moon"
          color="primary"
        />
        <q-fab-action
          external
          icon="img:/icons/ig-logo.svg"
          href="https://www.instagram.com/moonbyhosh/"
          color="secondary"
        />
        </q-fab>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script setup>


</script>