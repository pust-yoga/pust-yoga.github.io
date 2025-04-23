<script setup>
const { $supabase } = useNuxtApp()

const activities = ref([])
async function getActivities() {
  const { data } = await $supabase.from('activity').select()
  activities.value.push(...data.map((item) => item.name))
}
onMounted(() => {
  getActivities()
})
</script>


<template>
  <h1>About Pust Yoga</h1>
  <h2>Our activities:</h2>
  <ul>
      <li v-for="activity in activities" :key="activity">{{ activity }}</li>
  </ul>
</template>