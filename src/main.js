import { create } from './services/create.js'
import { list } from './services/list.js'

const method = process.argv.at(2)

switch(method) {
  case 'create': {
    create(process.argv.at(3))
    break
  }
  case 'list': {
    list()
    break
  }
  default: {
    console.error('Method not found.')
  }
}