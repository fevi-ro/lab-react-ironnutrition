import React, { useState } from "react";

function FoodBox(props) {
    const { name, calories, image, id } = props;
  
    const [ count, setCount ] = useState(1);



    const handleAddButton = event => setCount(event.target.value);

return (
<div className="box">
  <article className="media">
    <div className="media-left">
      <figure className="image is-64x64">
        <img src={image} alt={name} />
      </figure>
    </div>
    <div className="media-content">
      <div className="content">
        <p>
          <strong>{name}</strong> <br />
          <small>{calories} cal</small>
        </p>
      </div>
    </div>
    <div className="media-right">
      <div className="field has-addons">
        <div className="control">
          <input className="input" type="number" name="quantity" value={count} onChange={handleAddButton} />
        </div>
        <div className="control">
        <button className="button is-info"onClick={() => handleAddButton(id)} >
                    +
                  </button>
        </div>
      </div>
    </div>
  </article>
</div>    
)
}



export default FoodBox 