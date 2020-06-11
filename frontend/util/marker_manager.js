

export default class MarkerManager {
    constructor(map) {
        this.map = map;
        this.markers = {};
    }
    //...

    updateMarkers(businesses) {
        const businessesObj = {};
        // businesses.values.forEach(business => businessesObj[business.id] = business);

        // businesses
        //     .filter(business => !this.markers[business.id])
        //     .forEach(newbusiness => this.createMarkerFromBusiness(newbusiness))

        // Object.keys(this.markers)
        //     .filter(businessId => !businessesObj[businessId])
        //     .forEach((businessId) => this.removeMarker(this.markers[businessId])) 

        Object.values(businesses).forEach(business => this.createMarkerFromBusiness(business))

        

        // for (i = 0; i < markers.length; i++) {
        //     var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        //     bounds.extend(position);
        //     marker = new google.maps.Marker({
        //         position: position,
        //         map: map,
        //         title: markers[i][0]
        //     });
        // }

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