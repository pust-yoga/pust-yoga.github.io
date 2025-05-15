<script setup>
const { $supabase } = useNuxtApp();

const teachers = ref([]);

async function getTeachers() {
  const { data } = await $supabase.from('teacher').select();
  teachers.value = data; 
}

onMounted(() => {
  getTeachers();
});
</script>

<template>
  <div class="page-container">
    <h1>MEET THE TEAM</h1>
    <div class="teachers">
      <NuxtLink v-for="teacher in teachers" :key="teacher.id" class="teacher-card" :to="'/teachers/' + teacher.id">
        <div>
          <img :src="teacher.picture" alt="Teacher Picture" class="teacher-image"/>
          <h2>{{ teacher.firstname}}</h2>
          <p class="teacher-cv">{{ teacher.CV }}</p>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  padding: 50px;
}

h1 {
  font-size: 40px;
  font-weight: 600;
  letter-spacing: 6px;
  margin-bottom: 60px;
  padding-left: 50px;
}

.teachers {
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: repeat(3, 1fr); 
  gap: 60px;
  justify-items: center;
  justify-content: center;
}

.teacher-card {
  background-color: white;
  padding: 40px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  text-decoration: none; /* counteract anchor tag */
  color: unset; /* counteract anchor tag */
}

.teacher-card h2,
.teacher-card p {
  width: 100%; 
  text-align: left; 
}
.teacher-card h2 {
  color: #2B2B65;
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
}
.teacher-card p {
  color: #2B2B65;
  font-size: 14px;
  line-height: 150%;
}

.teacher-image {
  width: 100%;
  height: auto;
  border-radius: 10px;
}

.teacher-cv {
  line-height: 1.5;
  font-size: 16px;
  color: #000;
}

@media (max-width: 768px) { /* Applies when screen width is ≤ 768px */
  .teachers {
    grid-template-columns: repeat(1, 1fr); /* Switch to 1 card per row */
    gap: 30px;
  }
}

</style>