import { EVENTS_FETCHED } from '../actions/events'

export default (state = null, {type, events}) => {
  switch(type) {
    case EVENTS_FETCHED:
      return events;
    default : return state
  }
}