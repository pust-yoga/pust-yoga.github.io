<script setup>
const { $supabase } = useNuxtApp()
const route = useRoute()

const teacher = ref(null)
async function getTeacher() {
    const { data } = await $supabase
        .from('teacher')
        .select()
        .eq('id', route.params.teacher)
        .single()
    teacher.value = data
}
onMounted(() => {
    getTeacher()
})
</script>


<template>
    <div v-if="teacher">
        <h1>{{ teacher.firstname + " " + teacher.lastname }}</h1>
        <p>{{ teacher.CV }}</p>
    </div>
</template>