// Country actions
export const GET_ALL_COUNTRIES = 'GET_ALL_COUNTRIES';
export const GET_COUNTRY_BY_ID = 'GET_COUNTRY_BY_ID';
export const GET_COUNTRY_BY_NAME = 'GET_COUNTRY_BY_NAME'; // Direct Backend Search

// Activity actions (Full CRUD)
export const CREATE_ACTIVITY = 'CREATE_ACTIVITY';
export const GET_ALL_ACTIVITIES = 'GET_ALL_ACTIVITIES';
export const GET_ACTIVITY_BY_ID = 'GET_ACTIVITY_BY_ID';
export const UPDATE_ACTIVITY = 'UPDATE_ACTIVITY';
export const DELETE_ACTIVITY = 'DELETE_ACTIVITY';

// Join table look up actions
export const GET_COUNTRY_IDS_BY_ACTIVITY_ID = 'GET_COUNTRY_IDS_BY_ACTIVITY_ID';
export const GET_ACTIVITY_IDS_BY_COUNTRY_ID = 'GET_ACTIVITY_IDS_BY_COUNTRY_ID';

// Filtering actions
export const FILTER_BY_CONTINENT = 'FILTER_BY_CONTINENT';
export const FILTER_BY_ACTIVITY = 'FILTER_BY_ACTIVITY';

// Sorting actions
export const SORT_BY_NAME = 'SORT_BY_NAME';
export const SORT_BY_POPULATION = 'SORT_BY_POPULATION';

// Clear filters
export const CLEAR_FILTERS = 'CLEAR_FILTERS';
export const CLEAR_SORTS = 'CLEAR_SORTS';
