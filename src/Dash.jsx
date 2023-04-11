import { React, useState } from "react";
import { Link,Outlet, useParams } from "react-router-dom";
export default function Dashboard() {
  var params = useParams();
  return (
    <div>
      <div className="row">
        <div className="col-md-2">
          <div class="sidebar bg-dark text-white">
            <Link class="active" to="">
              Home
            </Link>
            <a href="#news">News</a>
            <Link to={`add/`}>Add Product</Link>
            <a href="#about">View Product</a>
          </div>
        </div>
        <div className="col-md-10">
          <div className="row bg-dark">
            <div className="col-md-5 fo">
              Welcome {params.name}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <img src="/avatar.png" height={50} width={55} />
            </div>

            <div className="col-md-3"></div>
            <div className="col-md-4 fo">
              <Link to="/logout">
                <button className="btn btn-warning">LogOut</button>
              </Link>
            </div>
          </div>
          <div className="row" style={{ paddingTop: "30px" }}>
           <Outlet/>
          </div>
        </div>
      </div>
    </div>
  );
}
