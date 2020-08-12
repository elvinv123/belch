import { fetchBusinesses } from './business_actions'

export const UPDATE_FILTER = 'UPDATE_FILTER';

export const fetchBusinesses = (filters) => dispatch => (
    BusinessAPIUtil.fetchBusinesses(filters)
        .then(businesses => dispatch(receiveBusinesses(businesses))
 ))