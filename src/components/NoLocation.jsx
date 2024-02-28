import React from "react";

// Component for displaying when the user refuse to let the app access his/her location
function NoLocation() {
  return (
    <div className="NoLocation">
      <div>
        <h6>No location was detected </h6>
        <p>(Reload the page please)</p>
      </div>
    </div>
  );
}

export default NoLocation;
