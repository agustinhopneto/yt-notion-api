import { notion, DATABASE_ID } from '../config/notion.js'

export async function list() {
  const result = await notion.databases.query({
    database_id: DATABASE_ID
  })

  console.log(JSON.stringify(result, null, 2))
}