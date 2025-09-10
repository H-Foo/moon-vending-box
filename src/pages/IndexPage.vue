<template>
  <q-page padding>
    <div >
      <p h1> 1. Go to {link} to make payment. </p>
      <p> 2. Enter your payment Id following the format: {Merchant Reference No}-{eWallet Ref No}. </p>
      <p> 3. Step 3</p>
    </div>

    <div class="q-pa-md">
      <q-btn href="https://payment.tngdigital.com.my/sc/bDLnQ3XzN4" label="Pay with Ewallet" clickable>
        <img src="/icons/tng_logo.svg" style="width:20px; height: 20px;"/>
      </q-btn>
    </div>

    <div class="row q-mb-lg">
    <q-input 
    dense
    v-model="userInput"
    placeholder="Enter your payment Id here"
    mask="NNNNNNNN-######"
    class="col">
      <template v-slot:append>
        <q-btn flat @click="submit()">
        <q-icon name="arrow_right"/>
        </q-btn>
      </template>
    </q-input>
  </div>

  </q-page>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import  { useRoute } from 'vue-router'


const boxLocation = ref('')
const userInput = ref('')
const route = useRoute()


onMounted(() => {
  const locParam = route.query.loc
  if (locParam){
    boxLocation.value = locParam
  }
})

function submit(){
  const paymentId = `${boxLocation.value} ${userInput.value}`;
  console.log(`submitted ${paymentId}.`);
}

</script>