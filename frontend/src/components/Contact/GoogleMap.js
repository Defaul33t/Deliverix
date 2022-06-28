import React from "react";

import GoogleMapReact from "google-map-react";

const GoogleMap = () => {
  return (
    <div className="-mb-40 w-full h-80">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBPge8gF5mZiHql6BDU21hyDTUp725cXMs" }}
        defaultCenter={{ lat: 48.16454881958788, lng: 17.050815720928803 }}
        defaultZoom={18}
      ></GoogleMapReact>
    </div>
  );
};

export default GoogleMap;
