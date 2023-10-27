import { useState } from "react";

const LikesUseState = (props) => {
  const [likes, setLikes] = useState(props.number);

  return (
    <>
      {console.log(useState())}
      <button
        onClick={() => {
          console.log(likes);
          setLikes(likes + 1);
        }}
      >
        {likes} Total likes
      </button>
    </>
  );
};
export default LikesUseState;
