<script setup>
defineProps({
  activity: {
    type: Object,
    required: true
  },
  simple: {
    type: Boolean,
    default: false
  }
})
</script>

<template>
  <NuxtLink class="activity-card card-hover" :class="{simple: simple}" :to="'/activities/' + activity.id">
    <div>
      <img :src="activity.picture" alt="Activity Picture" class="activity-image"/>
      <h2>{{ activity.name}}</h2>
      <p class="activity-description">{{ activity.description }}</p>

      <div 
        :class="'activity-level ' + (
          activity.expertise_level === 'Beginner' ? ' beginner ' : 
          activity.expertise_level === 'Intermediate' ? ' intermediate ' : 
          activity.expertise_level === 'Advanced' ? ' advanced ' : ''
        )"
      >
        {{ activity.expertise_level }}
      </div>
      <div v-if="!simple" class="activity-date">
        <img src="/calendar_icon.png" alt=""> {{ activity.date }}
      </div>
    </div>
  </NuxtLink>
</template>

<style scoped>
.activity-card {
  background: white;
  padding: 50px 50px 80px 50px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 250px;
  text-decoration: none; /* counteract anchor tag */
  color: unset; /* counteract anchor tag */
  position: relative;
  gap: 10px;
}
.activity-card.simple {
  padding: 30px 20px;
  border: none;
}

.activity-card h2,
.activity-card p {
  width: 100%; 
  text-align: left; 
}
.activity-card h2 {
  font-size: 16px;
  font-weight: 600;
  line-height: 150%;
  color: #2E3A59;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}
.activity-card p {
  color: #2B2B65;
  font-size: 14px;
  line-height: 150%;
}

.activity-image {
  width: 100%;
  aspect-ratio: 1024 / 1150;
  
  object-fit: cover;
  border-radius: 8px;
}

.activity-description {
  font-size: 14px;
  color: #445277;
  line-height: 150%; /* 21px */
}

.activity-level {
  position: absolute;
  top: 60px;
  left: 60px;
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

.activity-date {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: #445277;
  line-height: 150%;
  position: absolute;
  bottom: 40px;
}
.activity-date img {
  width: 25px;
}

</style>