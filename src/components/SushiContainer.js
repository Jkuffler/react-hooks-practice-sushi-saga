import React from "react";
import Sushi from "./Sushi";
import MoreButton from "./MoreButton";

function SushiContainer({sushi}) {
  const eachSushi = sushi.map((sushi) => 
          <Sushi 
          key={sushi.id}
          image={sushi.img_url}
          name={sushi.name}
          price={sushi.price}/>)

  return (
    <div className="belt">
      {eachSushi}

      <MoreButton 
      key={sushi.id}
      image={sushi.img_url}
      name={sushi.name}
      price={sushi.price}
      />
    </div>
  );
}

export default SushiContainer;
