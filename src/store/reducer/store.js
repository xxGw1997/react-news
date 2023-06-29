import * as TYPES from '../action-types'
import _ from '@/utils'

let initial = {
  list: null,
}
export default function storeReducer(state = initial, action) {
  state = _.clone(state)
  switch (action.type) {
  }

  return state
}
