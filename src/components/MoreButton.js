import React, {useState} from "react";


function MoreButton({props}) {
  const [newSushi, setNewSushi] = useState([]);

  return <button onClick={() => setNewSushi(newSushi)}>More sushi!</button>;
}

export default MoreButton;
