<template>
  <q-page padding class="gradient-background">
    <div class="q-pa-md flex flex-center">
    <div style="max-width: 600px; width: 100%;">
      
      <!-- Step 1 -->
      <q-card class="q-pa-md q-mb-sm bg-grey-2 text-dark rounded-xl">
        <div> Tap the payment button to open <img src="/icons/tng_logo.svg" style="width:15px; height: 15px;"/> app and pay.</div>
      </q-card>

      <div class="flex flex-center q-mb-sm">
        <q-icon name="keyboard_double_arrow_down" size="20px" color="primary" />
      </div>

      <!-- Step 3 -->
      <q-card class="q-pa-md q-mb-sm bg-grey-2 text-dark rounded-borders">
        <div> Note down your payment ID - Merchant Ref No. and <strong>last 6 digits</strong> of your eWallet Ref No. </div>
        <q-card>
          <q-img src="/icons/merchant-ref.jpeg"></q-img> 
        </q-card>
        <div class="q-pa-md"></div>
        <q-card>
          <q-img src="/icons/wallet-ref.jpeg"></q-img>
        </q-card>

      </q-card>

      <div class="flex flex-center q-mb-md">
        <q-icon name="keyboard_double_arrow_down" size="20px" color="primary" />
      </div>

      <!-- Step 4 -->
      <q-card class="q-pa-md q-mb-sm bg-grey-2 text-dark rounded-borders">
        <div> Submit your payment ID <strong>here</strong> and get the passcode. 🙏 Please 🙏 lock the box after use -- Your honesty keeps us going.</div>
      </q-card>

      <div class="flex flex-center q-mb-sm">
        <q-icon name="keyboard_double_arrow_down" size="20px" color="primary" />
      </div>

      <!-- Step 5 -->
      <q-card class="q-pa-md q-mb-md bg-grey-2 text-dark rounded-borders">
        <div> Got Questions? We're here to help! Thank you for trying Moon pads 💝</div>
      </q-card>

    </div>
  </div>

    <q-separator class="tineLine"/>
    <div class="q-pa-md flex justify-center">
      <q-btn href="https://payment.tngdigital.com.my/sc/bDLnQ3XzN4" 
        label="Pay Here" clickable
        rounded
        size="lg"
        color="primary"
        class="shadow-6"
        >
        <div class="q-pa-sm"></div>
        <img src="/icons/tng_logo.svg" style="width:25px; height: 25px;"/>
      </q-btn>
    </div>

    <div class="q-pa-sm" style="max-width: 400px;">
      <label class="text-subtitle2 q-mb-xs text-white">Payment ID</label>
    <q-input 
      dense
      filled
      v-model="userInput"
      placeholder="Enter your payment Id here"
      mask="NNNNNNNN-######"
      class="col secondary-bg">
      <template v-slot:append>
        <q-btn color="primary" round dense flat @click="submit()" aria-label="Submit payment id">
        <q-icon name="arrow_right"/>
        </q-btn>
      </template>
    </q-input>


    <q-banner v-if="apiResponse"
    class="q-mt-md"
    dense
    color="primary"
    text-color="white"
    icon="info"
    rounded
  >
    {{ apiResponse }}
  </q-banner>
  </div>

  <div class="q-mt-lg q-pa-lg q-mb-lg"></div>

  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import  { useRoute } from 'vue-router'
import { GetPin } from 'src/boot/backend-api'


const boxLocation = ref('')
const userInput = ref('')
const apiResponse = ref('')
const loading = ref('false')

const route = useRoute()


onMounted(() => {
  const locParam = route.query.area
  if (locParam){
    boxLocation.value = locParam
  }
})

async function submit(){
  loading.value = true
  apiResponse.value = ''
  const paymentId = `${boxLocation.value} ${userInput.value}`;
  console.log(`submitted ${paymentId}.`);

  try {
      const response = await GetPin(paymentId)
      apiResponse.value = response

  } catch (error){
    apiResponse.value = error.message || 'What just happened?';
    console.error(error)
  } finally {
    loading.value = false
  }
}


</script>