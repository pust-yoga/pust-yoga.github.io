<script setup>

const route = useRoute()
const segments = computed(() => route.path.split('/').filter(Boolean))

defineProps({
  label: {
    type: String,
    default: null,
    required: false
  }
})

</script>

<template>
    <ul class="breadcrumbs">
        <li v-for="(segment, index) in segments" :key="index">
            <img src="/chevron-right.svg" alt="">
            <NuxtLink :to="'/' + segments.slice(0, index + 1).join('/')">{{ index === segments.length - 1 && label ? label : segment }}</NuxtLink>
            <!-- <span v-if="index < segments.length - 1"> / </span> -->
        </li>
    </ul>
    <div :class="route.path==='/' ? '' : 'breadcrumbs-margin'"></div>
</template>

<style scoped>
.breadcrumbs {
    list-style: none;
    padding: 0 50px;
    margin: 0;
    display: flex;
    background-color: white;
    gap: 10px;

    /* Fixing position */
    position: fixed;
    width: 100%;
    z-index: 1000;
    top: var(--header-height);
    left: 0;
}
.breadcrumbs li {
    display: flex;
    align-items: center;
    font-size: 14px;
    gap: 10px;
    height: var(--breadcrumb-height);
}
.breadcrumbs li:last-child {
    font-weight: bold;
}

.breadcrumbs a {
    color: #667085;

    /* Text 14/Normal/Medium */
    font-family: Mulish, Inter;
    font-size: inherit;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 21px */
    text-decoration: none;
    text-transform: capitalize;
}

.breadcrumbs li:last-child a {
    color: #597ED1;
}

.breadcrumbs-margin {
    height: var(--breadcrumb-height);
}

</style>