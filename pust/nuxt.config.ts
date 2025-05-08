// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  nitro: {
    preset: 'static',
    prerender: {
      routes: await (async () => {
        const res = await fetch(
          `${process.env.SUPABASE_URL}/rest/v1/teacher?select=id`,
          {
            headers: {
              apikey: process.env.SUPABASE_KEY,
              Authorization: `Bearer ${process.env.SUPABASE_KEY}`,
            } as HeadersInit,
          },
        )
        const teachers = await res.json()
        const teacherIds = teachers.map((teacher: { id: string }) => teacher.id)
        return teacherIds.map((id: string) => `/teacher/${id}`)
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
