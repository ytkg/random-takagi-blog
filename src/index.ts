import { Hono } from 'hono'

interface Env {
  DB: D1Database
}

type Article = {
  id: number
  title: string
  link: string
}

const app = new Hono<{ Bindings: Env }>()

app.get('/', async (c) => {
  const article = await c.env.DB.prepare(
    `select * from articles order by random()`
  ).first<Article>()

  return c.redirect(article.link)
})

export default app
