// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      routes: await (async () => {
        const resTeacher = await fetch(
          `${process.env.SUPABASE_URL}/rest/v1/teacher?select=id`,
          {
            headers: {
              apikey: process.env.SUPABASE_KEY,
              Authorization: `Bearer ${process.env.SUPABASE_KEY}`,
            } as HeadersInit,
          },
        )
        const teachers = await resTeacher.json()
        const teacherIds = teachers.map((teacher: { id: string }) => teacher.id)
        const teacherRoutes = teacherIds.map((id: string) => `/teacher/${id}`)

        const resActivity = await fetch(
          `${process.env.SUPABASE_URL}/rest/v1/activity?select=id`,
          {
            headers: {
              apikey: process.env.SUPABASE_KEY,
              Authorization: `Bearer ${process.env.SUPABASE_KEY}`,
            } as HeadersInit,
          },
        )
        const activities = await resActivity.json()
        const activityIds = activities.map((activity: { id: string }) => activity.id)
        const activityRoutes = activityIds.map((id: string) => `/activity/${id}`)


        return [...teacherRoutes, ...activityRoutes]
      })(),
    },
  },
  app: {
    baseURL: '/',
  },
  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY
    }
  },
})
