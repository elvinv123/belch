

export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }
    

    updateMarkers(businesses) {
        const businessesObj = {};

        Object.values(businesses).forEach(business => this.createMarkerFromBusiness(business))

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