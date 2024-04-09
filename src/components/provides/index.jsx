import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslation } from "react-i18next";
import { Element } from "react-scroll";
import Title from "../common/title";
import Description from "./Description";
import MainMenus from "./MainMenus";
import SliderComponent from "./Slider";

const Provides = () => {
  const { t } = useTranslation();
  const provides = t("provides", { returnObjects: true });

  const [selectItem, setSelectItem] = useState(provides.items[4]);

  return (
    <Element name="provides" className="mt-28 card bg-rich-black">
      <Title title={provides.title} className={"text-center"} />
      <div className="mt-20 mx-auto flex flex-wrap justify-center gap-5 lg:gap-20 relative">
        <div className="w-full lg:w-4/12 space-y-5">
          {provides.items.map((item, index) => (
            <MainMenus
              setSelectItem={setSelectItem}
              item={item}
              key={index}
              selectItem={selectItem}
            />
          ))}
        </div>
        <div className="w-full lg:w-6/12">
          <Fade key={selectItem.id}>
            <Description selectItem={selectItem} />
            <SliderComponent selectItem={selectItem} />
          </Fade>
        </div>
      </div>
    </Element>
  );
};

export default Provides;
