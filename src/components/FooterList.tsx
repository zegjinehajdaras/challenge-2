
import React from "react";

interface ListProps{
    header:string;
    list:[];
}

const FooterList = (props:ListProps)=>{
    return(
        <div className="col-sm-3 footer">
        <h2>{props.header}</h2>
        <ul>
          {props.list.map((item, index) => (
            <li className="list-unstyled"  key={index}> <a className="text-decoration-none  text-dark"  href="#">{item}</a></li>
          ))}
        </ul>
      </div>
    )
}
export default FooterList