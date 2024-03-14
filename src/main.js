import { list } from './services/list.js'

const method = process.argv.at(2)

switch(method) {
  case 'create': {
    console.log('create')
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