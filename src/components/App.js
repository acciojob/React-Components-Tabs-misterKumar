import React from "react";
import Tabs from "./Tabs";

const App=()=>{
    return(
        <div>
           {/*  <div className="tabs">
                <div className="tab" id="Home-Tab">Home</div>
                <div className="tab" id="About-Tab">About</div>
                <div className="tab" id="Features-Tab">Features</div>
            </div> */}
            <Tabs />
            <div className="viewport">Pages Go Here</div>
        </div>
    )
}

export default App