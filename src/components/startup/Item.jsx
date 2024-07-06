import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <div className="bg-sheer-white rounded-3xl p-6 shadow-md text-white h-auto sm:h-72 relative">
      <Fade direction="up">
        <p className="text-2xl sm:text-3xl">{item.title}</p>
      </Fade>
      <p className="mt-5">{item.des}</p>
      <Link to={item.url} target="blank">
        <button className="btn static sm:absolute bottom-6 mt-5 sm:mt-0">
          Book here
        </button>
      </Link>
    </div>
  );
};

export default Item;
