import React from "react";
export default function Dashhome(){
return(
    <div>
         <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-4 hgh1 s1">
                <i class="fa fa-users"></i>&nbsp;&nbsp;Users
                <div className="d1">88</div>
              </div>
              <div className="col-md-1"></div>
              <div className="col-md-4 hgh2 s1">
                <i class="fa fa-bitbucket"></i>&nbsp;&nbsp;Users
                <div className="d1">1000</div>
              </div>
              <div className="col-md-1"></div>
            </div>
            <div className="row" style={{ paddingTop: "100px" }}>
              <div className="col-md-1"></div>
              <div className="col-md-9 hgh3 s1">
                <i class="fa fa-gear fa-spin"></i>&nbsp;&nbsp;Settings
                <div className="d2">
                  <em>Change Settings</em>
                </div>
              </div>
              <div className="col-md-1"></div>
            </div>
    </div>
)
}