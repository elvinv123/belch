export const fetchBusiness = (businessId) => {
    return $.ajax({
        method: 'GET',
        url: `/api/businesses/${businessId}`
    })
};