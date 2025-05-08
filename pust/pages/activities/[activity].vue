<script setup>
const { $supabase } = useNuxtApp()
const route = useRoute()

const activity = ref(null)
async function getActivity() {
    const { data } = await $supabase
        .from('activity')
        .select()
        .eq('id', route.params.activity)
        .single()
    activity.value = data
}
onMounted(() => {
    getActivity()
})
</script>


<template>
    <div v-if="activity">
        <h1>{{ activity.name }}</h1>
        <p>{{ activity.description }}</p>
    </div>
</template>