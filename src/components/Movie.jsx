import React from "react";

function Movie (props) {
const {
Title: title,
Year: year,
imbID: id,
Type: type,
Poster: poster 
} = props
return   <div className="row">
<div className="col s12 m7">
  <div className="card">
    <div className="card-image">
      <img src={poster}/>
      <span className="card-title">{title}</span>
    </div>
    <div className="card-content">
      <p>{type} {year}.</p>
    </div>

  </div>
</div>
</div>
}

export {Movie}