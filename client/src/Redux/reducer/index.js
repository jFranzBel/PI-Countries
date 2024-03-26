import { combineReducers } from 'redux';
import * as actionTypes from '../action-types/actionTypes';

// Country reducer
const countryReducer = (state = { countries: [], country: {}, detail: {} }, action) => {
     switch (action.type) {
          case actionTypes.GET_ALL_COUNTRIES:
               return { ...state, countries: action.payload };
          case actionTypes.GET_COUNTRY_BY_ID:
               return { ...state, detail: action.payload };
          case actionTypes.GET_COUNTRY_BY_NAME:
               return { ...state, country: action.payload };
          default:
               return state;
     }
};

// Activity reducer
const activityReducer = (state = {}, action) => {
     switch (action.type) {
          case actionTypes.CREATE_ACTIVITY:
               return { ...state, createdActivity: action.payload };
          case actionTypes.GET_ALL_ACTIVITIES:
               return { ...state, activities: action.payload };
          case actionTypes.GET_ACTIVITY_BY_ID:
               return { ...state, activity: action.payload };
          case actionTypes.UPDATE_ACTIVITY:
               return { ...state, updatedActivity: action.payload };
          case actionTypes.DELETE_ACTIVITY:
               return { ...state, deletedActivityId: action.payload };
          case actionTypes.GET_COUNTRY_IDS_BY_ACTIVITY_ID:
               return { ...state, countryIdsByActivityId: action.payload };
          case actionTypes.GET_ACTIVITY_IDS_BY_COUNTRY_ID:
               return { ...state, activityIdsByCountryId: action.payload };
          default:
               return state;
     }
};

// Join Table look up reducer
const joinTableReducer = (state = {}, action) => {
     switch (action.type) {
          case actionTypes.GET_COUNTRY_IDS_BY_ACTIVITY_ID:
               return { ...state, countryIds: action.payload };
          case actionTypes.GET_ACTIVITY_IDS_BY_COUNTRY_ID:
               return { ...state, activityIds: action.payload };
          default:
               return state;
     }
};

// Filter reducer and states
const filterInitialState = {
     continentFilter: null,
     activityFilter: null,
};

const filterReducer = (state = filterInitialState, action) => {
     let newState;
     switch (action.type) {
          case actionTypes.FILTER_BY_CONTINENT:
               newState = { ...state, continentFilter: action.payload };
               console.log('New state after FILTER_BY_CONTINENT:', newState);
               return newState;
          case actionTypes.FILTER_BY_ACTIVITY:
               return { ...state, activityFilter: action.payload };
          case actionTypes.CLEAR_FILTERS:
               return filterInitialState;
          default:
               return state;
     }
};

// Sorting reducer
const sortingReducer = (state = { nameSort: null, popSort: null }, action) => {
     switch (action.type) {
          case actionTypes.SORT_BY_NAME:
               return { ...state, nameSort: action.payload, popSort: null };
          case actionTypes.SORT_BY_POPULATION:
               return { ...state, popSort: action.payload, nameSort: null };
          case actionTypes.CLEAR_SORTS:
               return { nameSort: null, popSort: null };
          default:
               return state;
     }
};

// Reducer Combiner
const rootReducer = combineReducers({
     country: countryReducer,
     activity: activityReducer,
     joinTable: joinTableReducer,
     filters: filterReducer,
     sorts: sortingReducer,
});

export default rootReducer;
