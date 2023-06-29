import * as TYPES from '../action-types'
import _ from '@/utils'

let initial = {
  info: null,
}
export default function baseReducer(state = initial, action) {
  state = _.clone(state)
  switch (action.type) {
  }

  return state
}
