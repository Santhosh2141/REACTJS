// if you see index file you can see all components are rendered on the root div. portals can be used to render stuff outside the root DOM. We use portals cuz when we need to add css to child components which are like alerts or tool tips this is helpful
import React from 'react';
import ReactDom from 'react-dom';
function Portals() {
  return ReactDom.createPortal(
    <div>Portals</div>
  , document.getElementById("portal-root"))
}

export default Portals