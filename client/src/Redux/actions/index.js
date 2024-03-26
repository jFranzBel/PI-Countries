import axios from 'axios';
import * as actionTypes from '../action-types/actionTypes';

const API_BASE_URL = 'http://localhost:3001';

// Country actions
export const getAllCountries = () => async (dispatch) => {
     try {
          const response = await axios.get(`${API_BASE_URL}/countries`);
          dispatch({ type: actionTypes.GET_ALL_COUNTRIES, payload: response.data });
     } catch (error) {
          console.error(error);
     }
};

export const getCountryById = (id) => async (dispatch) => {
     try {
          const response = await axios.get(`${API_BASE_URL}/countries/${id}`);
          dispatch({ type: actionTypes.GET_COUNTRY_BY_ID, payload: response.data });
     } catch (error) {
          console.error(error);
     }
};

export const getCountryByName = (name) => async (dispatch) => {
     try {
          const response = await axios.get(`${API_BASE_URL}/countries/name/${name}`);
          dispatch({ type: actionTypes.GET_COUNTRY_BY_NAME, payload: response.data });
     } catch (error) {
          console.error(error);
     }
};

// Activity actions
export const createActivity = (activityData) => async (dispatch) => {
     try {
          const response = await axios.post(`${API_BASE_URL}/activities`, activityData);
          dispatch({ type: actionTypes.CREATE_ACTIVITY, payload: response.data });
     } catch (error) {
          console.error(error);
     }
};

export const getAllActivities = () => async (dispatch) => {
     try {
          const response = await axios.get(`${API_BASE_URL}/activities`);
          dispatch({ type: actionTypes.GET_ALL_ACTIVITIES, payload: response.data });
     } catch (error) {
          console.error(error);
     }
};

export const getActivityById = (id) => async (dispatch) => {
     try {
          const response = await axios.get(`${API_BASE_URL}/activities/${id}`);
          dispatch({ type: actionTypes.GET_ACTIVITY_BY_ID, payload: response.data });
     } catch (error) {
          console.error(error);
     }
};

export const updateActivity = (id, activityData) => async (dispatch) => {
     try {
          const response = await axios.put(`${API_BASE_URL}/activities/${id}`, activityData);
          dispatch({ type: actionTypes.UPDATE_ACTIVITY, payload: response.data });
     } catch (error) {
          console.error(error);
     }
};

export const deleteActivity = (id) => async (dispatch) => {
     try {
          await axios.delete(`${API_BASE_URL}/activities/${id}`);
          dispatch({ type: actionTypes.DELETE_ACTIVITY, payload: id });
     } catch (error) {
          console.error(error);
     }
};

// Join Table lookup actions
export const getCountryIdsByActivityId = (activityId) => async (dispatch) => {
     try {
          const response = await axios.get(`${API_BASE_URL}/activity-country/${activityId}`);
          dispatch({ type: actionTypes.GET_COUNTRY_IDS_BY_ACTIVITY_ID, payload: response.data });
     } catch (error) {
          console.error(error);
     }
};

export const getActivityIdsByCountryId = (countryId) => async (dispatch) => {
     try {
          const response = await axios.get(`${API_BASE_URL}/country-activity/${countryId}`);
          dispatch({ type: actionTypes.GET_ACTIVITY_IDS_BY_COUNTRY_ID, payload: response.data });
     } catch (error) {
          console.error(error);
     }
};

// Filter actions
export const filterByContinent = (continent) => (dispatch) => {
     console.log(continent);
     dispatch({ type: actionTypes.FILTER_BY_CONTINENT, payload: continent });
};

export const filterByActivity = (activity) => (dispatch) => {
     dispatch({ type: actionTypes.FILTER_BY_ACTIVITY, payload: activity });
};

// Sorting actions
export const sortByName = (order) => (dispatch) => {
     dispatch({ type: actionTypes.SORT_BY_NAME, payload: order });
};

export const sortByPopulation = (order) => (dispatch) => {
     dispatch({ type: actionTypes.SORT_BY_POPULATION, payload: order });
};

// Clear filters and Sorts
export const clearFilters = () => (dispatch) => {
     dispatch({ type: actionTypes.CLEAR_FILTERS, });
};

export const clearSorts = () => (dispatch) => {
     dispatch({ type: actionTypes.CLEAR_SORTS, });
};