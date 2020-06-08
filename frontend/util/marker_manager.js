

export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }
    //...

    updateMarkers(businesses) {
        const businessesObj = {};
        businesses.forEach(business => businessesObj[business.id] = business);

        businesses
            .filter(business => !this.markers[business.id])
            .forEach(newbusiness => this.createMarkerFromBusiness(newbusiness))

        // Object.keys(this.markers)
        //     .filter(businessId => !businessesObj[businessId])
        //     .forEach((businessId) => this.removeMarker(this.markers[businessId]))  
    }

    createMarkerFromBusiness(business) {
        const position = new google.maps.LatLng(business.latitude, business.longitude);
        const marker = new google.maps.Marker({
            position,
            map: this.map,
            businessId: business.id
        });
        return marker;
    }
}