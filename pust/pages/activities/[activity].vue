<script setup>
import { useHead } from 'nuxt/app'

const { $supabase } = useNuxtApp()
const route = useRoute()

const activity = ref(null)
const hasPrevious = ref(false);
const hasNext = ref(false);

useHead(() => {
  return {
    title: activity.value?.name ? `${activity.value.name} | Pust Yoga` : 'Activity | Pust Yoga',
    meta: [
      {
        name: 'description',
        content: activity.value?.long_description || 'Discover this yoga activity at Pust Yoga Milano.'
      },
      {
        property: 'og:title',
        content: activity.value?.name ? `${activity.value.name} | Pust Yoga` : 'Activity | Pust Yoga'
      },
      {
        property: 'og:description',
        content: activity.value?.long_description || 'Discover this yoga activity at Pust Yoga Milano.'
      }
    ]
  }
})

async function getActivity() {
  const { data, error } = await $supabase
    .from('activity')
    .select(`
      *,
      teacher_activity (
        *,
        teacher (*)
      )
    `)
    .eq('id', route.params.activity)
    .single();

  if (error) {
    console.error('Error fetching activity:', error);
  } else {
    activity.value = {
      ...data,
      teachers: data.teacher_activity.map((ta) => ta.teacher),
    };
    const currentId = parseInt(route.params.activity);
    const prev = await $supabase.from('activity').select('id').lt('id', currentId).order('id', { ascending: false }).limit(1);
    const next = await $supabase.from('activity').select('id').gt('id', currentId).order('id', { ascending: true }).limit(1);
    hasPrevious.value = prev.data && prev.data.length > 0;
    hasNext.value = next.data && next.data.length > 0;
  }
}

onMounted(() => {
  getActivity()
})
function navigateToActivity(id) {
  const router = useRouter();
  router.push(`/activities/${id}`);
}
function navigateToActivities() {
  const router = useRouter();
  router.push('/activities');
}
function navigateToPrevious() {
  const previousId = parseInt(route.params.activity) - 1;
  if (previousId > 0) {
    navigateToActivity(previousId);
  }
}

function navigateToNext() {
  const nextId = parseInt(route.params.activity) + 1;
  navigateToActivity(nextId);
}

</script>


<template>
  <Breadcrumbs :label="activity ? activity.name : ' '" />
  <section v-if="activity">
    <h1>{{ activity.name }}</h1>
    <div class="back-link">
      <button @click="navigateToActivities" class="nav-btn-2">
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
        <span class="nav-text-1">Back to Activities</span>
      </button>
    </div>
    <div class="bigcard">
      <article>
        <img :src="activity.picture" loading="lazy" alt="Activity Picture">
        <div 
          :class="'activity-level ' + (
            activity.expertise_level === 'Beginner' ? ' beginner ' : 
            activity.expertise_level === 'Intermediate' ? ' intermediate ' : 
            activity.expertise_level === 'Advanced' ? ' advanced ' : ''
          )"
        >
          {{ activity.expertise_level }}
        </div>
        <div>
          <h2>{{ activity.title }}</h2>
          <p class="longDescription">{{ activity.long_description }}</p>
          <!-- <p>{{ activity.practical_information }}</p> -->
          <h3>Weekly time schedule:</h3>
          <div class="date">
            <img src="/calendar_icon.png" loading="lazy" alt=""> {{ activity.date }}
          </div>
        </div>
      </article>
      <div class="card-navigation">
        <div style="flex:1;display:flex;">
          <button v-if="hasPrevious" @click="navigateToPrevious" class="nav-btn">
            <img class="arrow-icon" src="https://rrginxykskmhdqduxshx.supabase.co/storage/v1/object/public/images//icon_arrow_left.png" />
            <span class="nav-text-2">Previous Activity</span>
          </button>
        </div>
        <div style="flex:1;display:flex;justify-content:flex-end;">
          <button v-if="hasNext" @click="navigateToNext" class="nav-btn">
            <span class="nav-text-2">Next Activity</span>
            <img class="arrow-icon" src="https://rrginxykskmhdqduxshx.supabase.co/storage/v1/object/public/images//icon_arrow_right.png" />
          </button>
        </div>
      </div>
    </div>

    <div v-if="activity" class="page-2-title">
      {{ "TAUGHT BY" }}
    </div>
    <div v-if="activity?.teachers.length" class="activity-grid">
      <NuxtLink
        v-for="teacher in activity.teachers"
        :key="teacher.id"
        class="activity-card card-hover"
        :to="`/teachers/${teacher.id}`"
      >
        <div class="image-container">
          <img :src="teacher.picture" alt="Teacher Image" loading="lazy" class="activity-image" />
        </div>
        <h3 class="activity-title">{{ teacher.firstname }}</h3>
        <p class="activity-description">{{ teacher.CV }}</p>
      </NuxtLink>
    </div>
  </section>
</template>

<style scoped>
section {
  padding: 50px 50px;
}

h1 {
  color: #271E0B;
  font-size: 40px;
  font-weight: 600;
  line-height: 150%; /* 60px */
  letter-spacing: 2px;
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
.nav-text-1 {
  color: var(--darker-yellow, #625437);
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 21px */
  letter-spacing: 0.7px;
}

.bigcard {
  margin-top: 20px;
  background-color: white;
  padding: 50px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.bigcard article {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 80px;
  position: relative;
}

.bigcard article > img {
  max-height: 500px;
  border-radius: 8px;
  aspect-ratio: 1024 / 1150;
  object-fit: cover;
}

h2 {
  color: #2E3A59;
  font-size: 28px;
  font-weight: 600;
  line-height: 150%; /* 42px */
  margin: 0;
}

.longDescription {
  white-space: pre-wrap;
  color: #445277;
  font-size: 14px;
  line-height: 175%; /* 24.5px */
  letter-spacing: 0.7px;
  margin: 30px 0;
}

h3 {
  color: #2E3A59;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 175%;
  letter-spacing: 0.7px;
  margin: 0;
}

.date {
  color: #445277;
  font-size: 14px;
  line-height: 150%; /* 21px */
  letter-spacing: 0.7px;
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px 0;
}
.date img {
  width: 25px;
}

.activity-level {
  position: absolute;
  top: 20px;
  left: 20px;
  color: white;
  padding: 5px 20px;
  border-radius: 8px;
  text-transform: uppercase;
}

.beginner {
  background-color: #79BF54;
}
.intermediate {
  background-color: #E0A13A;
}
.advanced {
  background-color: #DE5050;
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
.arrow-icon {
  width: 40px;
  height: 40px;
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
  text-decoration: none;
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
  flex-shrink: 0;
  align-self: stretch;
}
.activity-image {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Ensures image fills the square */
  border-radius: 10px;
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


@media screen and (max-width: 768px) {
  .page-container {
    padding: 20px;
  }

  .page-title,
  .page-2-title {
    font-size: 28px;
    text-align: center;
  }

  .card-content {
    flex-direction: column;
    gap: 20px;
  }

  .teacher-image {
    width: 100%;
    height: auto;
  }

  .contact-details {
    flex-direction: column;
    gap: 20px;
  }

  .card-container {
    padding: 30px 20px;
  }

  .card-navigation {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .nav-btn {
    width: 100%;
    justify-content: center;
  }

  .activity-grid {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .activity-card {
    padding: 30px 20px;
  }

  .activity-description,
  .activity-title {
    height: auto;
  }

  .activity-date {
    width: auto;
  }

  .arrow-icon {
    width: 24px;
    height: 24px;
  }

  .nav-text-2 {
    font-size: 14px;
  }

  .bigcard article {
    flex-direction: column;
    align-items: center;
  }
}

</style>