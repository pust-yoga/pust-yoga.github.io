<!-- <script setup>
const { $supabase } = useNuxtApp()

const activities = ref([])
async function getActivities() {
    const { data } = await $supabase.from('activity').select()
    activities.value.push(...data)
}
onMounted(() => {
    getActivities()
})
</script> -->

<template>
    <h1>ALL ACTIVITIES</h1>
    <ul>
        <!-- <li v-for="activity in activities" :key="activity.id">
            {{ activity.name }}
        </li> -->
    </ul>
</template>