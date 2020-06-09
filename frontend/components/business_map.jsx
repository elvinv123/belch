import React from "react";
import MarkerManager from '../util/marker_manager'


class BusinessMap extends React.Component{

    componentDidMount() {
        // set the map to show SF
        // const mapOptions = {
        //     center: { lat: 37.7758, lng: -122.435 }, // this is SF
        //     zoom: 13
        // };

        // // wrap this.mapNode in a Google Map
        // this.map = new google.maps.Map(this.mapNode, mapOptions);
        // this.map = new google.maps.Map(mapDOMNode, mapOptions);
        // this.MarkerManager = new MarkerManager(this.map);

        const mapOptions = {
            center: { lat: this.props.business.latitude, lng: -this.props.business.longitude },
            zoom: 13,
            disableDefaultUI: true
        };
        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(this.mapNode, mapOptions);
        this.MarkerManager = new MarkerManager(this.map);
        this.MarkerManager.createMarkerFromBusiness(this.props.business)
    }

    componentDidUpdate() {


    }

    render(){
        return(
            <div id='map-container' ref={map => this.mapNode = map}>

            </div>
        )
    }
}

export default BusinessMap;