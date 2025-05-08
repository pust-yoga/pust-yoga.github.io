<script setup>
const { $supabase } = useNuxtApp()

const teachers = ref([])
async function getTeachers() {
    const { data } = await $supabase.from('teacher').select()
    teachers.value.push(...data)
}
onMounted(() => {
    getTeachers()
})
</script>


<template>
    <h1>MEET THE TEAM</h1>
    <ul>
        <li v-for="teacher in teachers" :key="teacher.id">
            {{ teacher.firstname + " " + teacher.lastname }}
        </li>
    </ul>
</template>