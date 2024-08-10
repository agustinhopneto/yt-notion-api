import { notion, DATABASE_ID } from '../config/notion.js'

export async function create(rawData) {
  const data = JSON.parse(rawData)

  await notion.pages.create({
    parent: {
      type: 'database_id',
      database_id: DATABASE_ID
    },
    properties: {
      Nome: {
        type: 'title',
        title: [
          {
            type: 'text',
            text: {
              content: data.name
            }
          }
        ]
      },
      Valor: {
        type: 'number',
        number: data.amount
      },
      Origem: {
        type: 'select',
        select: {
          name: data.origin
        }
      },
      Data: {
        type: 'date',
        date: {
          start: data.date
        }
      }
    }
  })
  
  console.log(data)
}