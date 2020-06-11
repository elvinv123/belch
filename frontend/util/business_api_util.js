export const fetchBusinesses = data => {
    return $.ajax({
        method: 'GET',
        url: `/api/businesses/`,
        // added below
        data
    })
};

export const fetchBusiness = (businessId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/businesses/${businessId}`
    })
};