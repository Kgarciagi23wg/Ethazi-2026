import React from "react";
import Klasifikazioa from "../components/Klasifikazioa.jsx";
function Laliga() {
    return (
        <div className="bg-black container-fluid p-0">
            <h1 className="container pt-5"><img src="/public/liga1.png" alt="" width="100" height="100" /></h1>
            
            <Klasifikazioa />
        </div>
    );
}
export default Laliga;