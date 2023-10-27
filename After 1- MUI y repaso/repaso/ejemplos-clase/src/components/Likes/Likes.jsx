
const Likes = (props) => {
  let likes = props.number;
  return (
    <button
      onClick={() => {
        console.log(likes);
        likes++;
      }}
    >
      {likes} Total likes
    </button>
  );
};
export default Likes;
