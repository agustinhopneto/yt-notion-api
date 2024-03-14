import { notion, DATABASE_ID } from '../config/notion.js'

export async function create(rawData) {
  const data = JSON.parse(rawData)
  
  console.log(data)
}