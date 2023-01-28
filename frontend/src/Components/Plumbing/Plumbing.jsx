import React from "react";
import "./_Plumbing.scss";
import { useContext } from "react";
import { mainContext } from "./../../Context/Context";
const Plumbing = () => {
  const { data, search,delData } = useContext(mainContext);
  return (
    <div className="allPlumbing">
      <div className="container-fluid">
        <div className="row">
          {data &&
            data
              .filter((item) => {
                return search.trim().toUpperCase()===""
                  ? item
                  : item.name.toLowerCase().includes(search.toLowerCase());
              })
              .map((e, index) => (
                <div className="col-4 card" key={index}>
                  <div className="cardImage">
                    <img src={e.url} alt="" />
                  </div>
                  <article>
                    <h3>{e.name}</h3>
                    <p>{e.description}</p>
                    <h3>{e.price}</h3>
                    <button onClick={()=>delData(e._id)}>Delete</button>
                  </article>
                </div>
              ))}
        </div>
      </div>
    </div>
  );
};

export default Plumbing;
