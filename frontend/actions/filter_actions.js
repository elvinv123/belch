import { fetchBusinesses } from './business_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';

// export const changeFilter = (filter, value) => ({
//     type: UPDATE_FILTER,
//     filter,
//     value
// });

// export const updateFilter = (filter, value) => (dispatch, getState) => {
//     dispatch(changeFilter(filter, value));
//     return fetchBusinesses(filters)(dispatch);
//     // return fetchBusinesses(getState().ui.filters)(dispatch);
// };

export const fetchBusinesses = (filters) => dispatch => (
    BusinessAPIUtil.fetchBusinesses(filters)
        .then(businesses => dispatch(receiveBusinesses(businesses))
 ))