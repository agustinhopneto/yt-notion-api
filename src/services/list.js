import { notion, DATABASE_ID } from '../config/notion.js'

export async function list() {
  const response = await notion.databases.query({
    database_id: DATABASE_ID
  })

  const expenses = []

  for (const result of response.results) {
    const { Nome, Valor, Origem, Data } = result.properties

    const name = Nome.title.at(0)?.text.content

    if (!name) {
      continue
    }

    const expense = {
      name,
      amount: Valor.number ?? undefined,
      origin: Origem.select?.name,
      date: new Date(Data.date?.start)
    }

    expenses.push(expense)
  }

  console.log(expenses)
}