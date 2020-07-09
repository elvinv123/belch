export const createReview = (review) =>{
    return $.ajax({ 
    url: "/api/reviews", 
    method: "POST", 
    data: review,
    contentType: false,
    processData: false
    })
}