import React, {Component} from 'react';
import { Map, GoogleApiWrapper, Marker} from 'google-maps-react';

export class MapContainer extends Component {
    render() {
      const mapStyles = {
        width: '50%',
        height: '50%',
      };
      const mapLocation = {
        lat: `${this.props.lat}`,
        lng: `${this.props.long}`
      }
      return (
          <Map
            google={this.props.google}
            zoom={20}
            initialCenter={mapLocation}
            style={mapStyles}
          >
            <Marker position={mapLocation} />
          </Map>
      );
    }
  }

  export default GoogleApiWrapper({
    apiKey: 'AIzaSyDzWFE3J0YVNCJtSSDnxUuYCJ6816AVNMo'
  })(MapContainer);
  