<script setup>
const { $supabase } = useNuxtApp();

const teachers = ref([]);

async function getTeachers() {
    const { data } = await $supabase.from('teacher').select();
    teachers.value = data; // Direct assignment to avoid unnecessary array mutations
}

onMounted(() => {
    getTeachers();
});
</script>

<template>
    <div class="page-container">
        <h1>MEET THE TEAM</h1>
        <div class="teacher-grid">
            <div v-for="teacher in teachers" :key="teacher.id" class="teacher-card">
                <img :src="teacher.picture" alt="Teacher Picture" class="teacher-image">
                <h2>{{ teacher.firstname + " " + teacher.lastname }}</h2>
                <p class="teacher-cv">{{ teacher.CV }}</p>
                <!-- <NuxtLink :to="'/teachers/' + teacher.id" class="view-profile">View Profile</NuxtLink> -->
            </div>
        </div>
    </div>
</template>

<style>
body {
    background-color: var(--background);
    font-family: Inter, Arial, sans-serif;
}
</style>

<style scoped>
.page-container {
    padding: 40px;
    text-align: left;
}

h1 {
    font-size: 40px;
    font-weight: 600;
    letter-spacing: 6px;
    margin-bottom: 20px;
}

.teacher-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr); /* Makes it responsive */
    gap: 20px;
    justify-content: center;
    padding-left: 100px;
    padding-right: 100px;
}

.teacher-card {
    width: 75%;
    background-color: white;
    padding: 20px;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.teacher-image {
    width: 100%;
    max-width: 250px;
    border-radius: 10px;
    margin-bottom: 10px;
}

.teacher-cv {
    line-height: 1.5;
    font-size: 16px;
    color: #000000;
}

.view-profile {
    display: inline-block;
    margin-top: 10px;
    padding: 8px 16px;
    background-color: var(--blue);
    color: white;
    text-decoration: none;
    border-radius: 5px;
}

.view-profile:hover {
    background-color: darken(var(--blue), 10%);
}
</style>