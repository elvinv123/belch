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
        if(this.props.business){
            const mapOptions = {
                center: { lat: this.props.business.latitude, lng: this.props.business.longitude },
                zoom: 12,
                disableDefaultUI: true
            };
            this.map = new google.maps.Map(this.mapNode, mapOptions);
            this.MarkerManager = new MarkerManager(this.map);

        
    
            this.MarkerManager.createMarkerFromBusiness(this.props.business)
        }else{
            const mapOptions = {
                center: { lat: 40.7128, lng: -74.0060 },
                zoom: 11,
                disableDefaultUI: true
            };
            this.map = new google.maps.Map(this.mapNode, mapOptions);
            this.MarkerManager = new MarkerManager(this.map);
    
            this.MarkerManager.updateMarkers(this.props.businesses)
        }
    }

    mapId(){
        if (this.props.business) {
            return 'map-container';
        } else {
            return 'map-container-search';
        }
    }

    render(){
        return(
            <div id={this.mapId()} ref={map => this.mapNode = map}>

            </div>
        )
    }
}

export default BusinessMap;