import { Fade } from "react-awesome-reveal";
import Title from "../common/title";

const index = () => {
  return (
    <div className="bg-rich-black mt-20 card text-center">
      <div className="w-full sm:w-7/12 mx-auto space-y-10">
        <Title title="Develop, Integrate, Observe" />
        <Fade direction="up">
          <p className="text-2xl">
            Streamline your approach to development throughout the entire
            Platform pipeline.
          </p>
        </Fade>
        <button className="btn">Get a Trial</button>
        <p className="text-gray-500 text-sm">
          {`By installing or using the software, you acknowledge and agree to be
        bound by the terms and conditions of the EULA. The software is provided
        "as is" without any warranties, express or implied, including but not
        limited to the warranties of merchantability, fitness for a particular
        purpose, and non-infringement.`}
        </p>
      </div>
    </div>
  );
};

export default index;
