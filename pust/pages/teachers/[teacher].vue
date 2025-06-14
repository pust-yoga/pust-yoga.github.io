<script setup>
import { ref, onMounted } from 'vue';

const { $supabase } = useNuxtApp();
const route = useRoute();

const teacher = ref(null);
const hasPrevious = ref(false);
const hasNext = ref(false);

async function getTeacher() {
  const { data, error } = await $supabase
    .from('teacher')
    .select(`
      *,
      teacher_activity (
        *,
        activity (*)
      )
    `)
    .eq('id', route.params.teacher)
    .single();

  if (error) {
    console.error('Error fetching teacher:', error);
  } else {
    teacher.value = {
      ...data,
      activities: data.teacher_activity.map((ta) => ta.activity),
    };
    const currentId = parseInt(route.params.teacher);
    const prev = await $supabase.from('teacher').select('id').lt('id', currentId).order('id', { ascending: false }).limit(1);
    const next = await $supabase.from('teacher').select('id').gt('id', currentId).order('id', { ascending: true }).limit(1);
    hasPrevious.value = prev.data && prev.data.length > 0;
    hasNext.value = next.data && next.data.length > 0;
  }
}


onMounted(() => {
  getTeacher();
});

function navigateToTeacher(id) {
  const router = useRouter();
  router.push(`/teachers/${id}`);
}

function navigateToTeachers() {
  const router = useRouter();
  router.push('/teachers');
}

function navigateToPrevious() {
  const previousId = parseInt(route.params.teacher) - 1;
  if (previousId > 0) {
    navigateToTeacher(previousId);
  }
}

function navigateToNext() {
  const nextId = parseInt(route.params.teacher) + 1;
  navigateToTeacher(nextId);
}
</script>

<template>
  <div class="page-container">
    <h1 v-if="teacher" class="page-title">
      {{ teacher.firstname?.toUpperCase() || 'UNKNOWN' }}
    </h1>
    <div class="back-link">
      <button @click="navigateToTeachers" class="nav-btn-2">
            <svg
              class="arrow-icon-2"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M11.354 1.646a.5.5 0 0 1 0 .708L5.207 8l6.147 5.646a.5.5 0 0 1-.708.708l-6.5-6a.5.5 0 0 1 0-.708l6.5-6a.5.5 0 0 1 .708 0z"
              />
            </svg>
            <span class="nav-text-1">Back to Teachers</span>
          </button>
    </div>
    <div class="card-wrapper">
      <div class="card-container" v-if="teacher">
        <div class="card-content">
          <img :src="teacher.picture" alt="Teacher Picture" class="teacher-image" />
          <div class="teacher-info">
            <h2>Meet {{ teacher.firstname || 'Unknown' }}!</h2>
            <p>{{ teacher.CV || 'No CV available.' }}</p>
            <div class="contact-details">
              <div class="contact-phone">
                <img
                  class="icon" src="https://rrginxykskmhdqduxshx.supabase.co/storage/v1/object/public/images/icon-phone.png" alt="Phone icon" />
                <p class="contact-details">{{ teacher.phone || 'Not provided' }}</p>
              </div>
              <div class="contact-email">
                <img class="icon" src="https://rrginxykskmhdqduxshx.supabase.co/storage/v1/object/public/images/icon-email.png" alt="Email icon" />
                <p class="contact-details">{{ teacher.email || 'Not provided' }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="card-navigation">
          <div style="flex:1;display:flex;">
            <button v-if="hasPrevious" @click="navigateToPrevious" class="nav-btn">
              <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.207 8l6.147 5.646a.5.5 0 0 1-.708.708l-6.5-6a.5.5 0 0 1 0-.708l6.5-6a.5.5 0 0 1 .708 0z"/>
              </svg>
              <span class="nav-text-2">Previous Teacher</span>
            </button>
          </div>
          <div style="flex:1;display:flex;justify-content:flex-end;">
            <button v-if="hasNext" @click="navigateToNext" class="nav-btn">
              <span class="nav-text-2">Next Teacher</span>
              <svg class="arrow-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6.5 6a.5.5 0 0 1 0 .708l-6.5 6a.5.5 0 0 1-.708-.708L10.793 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div v-else>
        <p>Loading teacher information...</p>
      </div>
    </div>

  <div v-if="teacher" class="page-2-title">
     {{ teacher.firstname?.toUpperCase()+"'S CLASSES" || 'UNKNOWN' }}
  </div>
  <div v-if="teacher?.activities?.length" class="activity-grid">
    <div v-for="activity in teacher.activities" :key="activity.id" class="activity-card">
      <div class="image-container">
        <img :src="activity.picture" alt="Activity Image" class="activity-image" />
        <span
          class="expertise-level"
          :class="{
            advanced: activity.expertise_level === 'Advanced',
            intermediate: activity.expertise_level === 'Intermediate',
            beginner: activity.expertise_level === 'Beginner'
          }"
        >
          {{ activity.expertise_level.toUpperCase() }}
        </span>
      </div>
      <h3 class="activity-title">{{ activity.name }}</h3>
      <p class="activity-description">{{ activity.description }}</p>
      <div class="activity-date-container">
        <img
          src="https://rrginxykskmhdqduxshx.supabase.co/storage/v1/object/public/images//icon-calender.png"
          alt="Calendar icon"
          class="calendar-icon"
        />
        <p class="activity-date">{{ activity.date }}</p>
      </div>
    </div>
  </div>


  </div>
</template>

<style>
body {
  background-color: var(--background);
}
</style>

<style scoped>
.page-container {
  padding-top: 50px;
  padding-left: 50px;
  padding-right: 50px;
  padding-bottom: 100px;
}

.page-title {
  color: var(--dark-yellow, #271E0B);
  font-family: 'Inter', sans-serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 60px */
  letter-spacing: 2px;
}

.nav-text-1 {
  color: var(--darker-yellow, #625437);
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: 0.7px;
}

.page-2-title {
  padding-top: 100px;
  color: var(--dark-yellow, #271E0B);
  font-family: 'Inter', sans-serif;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 48px */
  letter-spacing: 1.6px;
}

.card-wrapper {
  display: flex;
  justify-content: center;
  width: 100%;
}

.card-container {
  padding: 50px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
}

.card-content {
  display: flex;
  gap: 75px;
  align-items: center;
}

.teacher-image {
  width: 462px;
  height: 527px;
  padding: 10px;
  gap: 10px; 
  border-radius: 16px;
}

.teacher-info {
  flex: 1;
}

.teacher-info h2 {
  height: 36px;
  color: var(--Header-on-white, var(--Header-on-white, #2E3A59));
  font-family: 'Inter', sans-serif;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 42px */
  letter-spacing: 1.4px;
}

.teacher-info p {
  color: var(--Text-on-white, #445277);
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 175%; /* 24.5px */
  letter-spacing: 0.7px;
}

.contact-details {
  color: var(--Header-on-white, var(--Header-on-white, #2E3A59));
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: 1.4px;
  display: flex;
  gap: 50px;
}

.nav-text-2 {
  color: var(--blue, #597ED1);
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.8px;
}

.contact-phone,
.contact-email {
  width: 40px;
  height: 40px;
  flex-shrink: 0;
}

.icon {
  width: 20px;
  height: 20px;
}

.card-navigation {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.nav-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  color: blue;
  background-color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.nav-btn-2 {
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: #FFF1D5E5;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 30px;
}

.arrow-icon-2 {
  width: 20px;
  height: 20px;
  flex-shrink: 0;
}

.arrow-icon {
  width: 40px;
  height: 40px;
}

.activity-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 50px;
  padding-top: 50px;
}

.activity-card {
  border-radius: 16px;
  background: #FFF;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.05);
  padding: 50px 70px;
  gap: 10px;
}

.image-container {
  display: flex;
  height: 479.72px;
  position: relative;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  align-self: stretch;
  border-radius: 8px;
}

.activity-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures image fills the square */
  border-radius: 10px;
}


.expertise-level {
  position: absolute;
  top: 10px;
  left: 10px;
  padding: 5px 21px;
  gap: 10px;
  border-radius: 8px;
  color: #FFF;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
}

.expertise-level.advanced {
  background-color: #DE5050; /* red */
}

.expertise-level.intermediate {
  background-color: #E0A13A; /* orange */
}

.expertise-level.beginner {
  background-color: #79BF54; /* green */
}


.activity-title {
  color: var(--Header-on-white, var(--Header-on-white, #2E3A59));
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%; /* 24px */
  letter-spacing: 0.8px;
  display: flex;
height: 42px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
align-self: stretch;
}

.activity-description {
  color: var(--Text-on-white, #445277);
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: 0.7px;
  height: 63px;
  flex-shrink: 0;
  align-self: stretch;
}

.activity-date {
  color: var(--Text-on-white, #445277);
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 21px */
  letter-spacing: 0.7px;
  display: flex;
  width: 178px;
  height: 31px;
  flex-direction: column;
  justify-content: center;
}

.activity-date-container {
  display: flex;
  height: 63px;
  padding: 10px 0px;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  align-self: stretch;
}

.calendar-icon {
  width: 25px;
  height: 25px;
}

</style>