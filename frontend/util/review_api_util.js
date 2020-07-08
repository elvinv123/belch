export const createReview = (review) =>{
    debugger
    return $.ajax({ 
    url: "/api/reviews", 
    method: "POST", 
    data: {review},
    contentType: false,
    processData: false
    })
}