import parse from "html-react-parser";
import { useCallback, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import ButtonArrow from "../common/buttons/ButtonArrow";
import Title from "../common/title";
import CheckBoxItem from "./CheckBoxItem";
import InputCard from "./InputCard";
import InputItem from "./InputItem";
import ProgressBar from "./ProgressBar";

const Calculator = () => {
  const { t } = useTranslation();
  const calculator = t("calculator", { returnObjects: true });

  const [progressWithUs, setProgressWithUs] = useState(0);
  const [progressWithOutUs, setProgressWithOutUs] = useState(0);
  const [progressWithUsValue, setProgressWithUsValue] = useState(0);
  const [progressWithOutUsValue, setProgressWithOutUsValue] = useState(0);
  const [allItems, setAllItems] = useState([]);

  useEffect(() => {
    const calculator = t("calculator", { returnObjects: true });
    setAllItems(calculator.items);
  }, [t]);

  const checkHandler = (id) => {
    const temp = [...allItems];
    const findIndex = temp.findIndex((el) => el.id === id);
    temp[findIndex].isChecked = temp[findIndex].isChecked ? false : true;
    setAllItems(temp);
  };

  const onChangeHandler = (event, id) => {
    const temp = [...allItems];
    const findIndex = temp.findIndex((el) => el.id === id);
    temp[findIndex].value = event.target.value > 0 && event.target.value;
    setAllItems(temp);
  };

  const withUsCalculator = useCallback(() => {
    const temp = [...allItems];
    let checkCount = 0;
    const minValue = 30000;
    temp.forEach((el) => {
      if (el.isChecked) {
        checkCount++;
      }
    });
    if (checkCount === 0) {
      setProgressWithUsValue(0);
      setProgressWithUs(0);
    } else {
      setProgressWithUsValue(minValue + checkCount * 5000 - 5000);
      setProgressWithUs(checkCount * 20);
    }
  }, [allItems]);

  const withOutUsCalculator = useCallback(() => {
    const temp = [...allItems];
    const maxValue = 400000;
    let value = 1;
    let values = 1;
    temp.forEach((el) => {
      if (el.placeholder) {
        if (el.id === 7) {
          value = el.value / 52;
        } else {
          values *= el.value;
        }
      }
    });
    const currentValue = Math.round(value * values);
    if (currentValue <= maxValue) {
      setProgressWithOutUsValue(currentValue);
      setProgressWithOutUs((currentValue / maxValue) * 100);
    } else {
      setProgressWithOutUsValue(maxValue);
      setProgressWithOutUs(100);
    }
  }, [allItems]);

  useEffect(() => {
    withUsCalculator();
    withOutUsCalculator();
  }, [withUsCalculator, withOutUsCalculator, calculator]);

  return (
    <div className={`card relative overflow-hidden`}>
      <div
        style={{
          backgroundImage: `url(/images/hero-bg.png)`,
        }}
        className="absolute inset-0 opacity-10"
      ></div>
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `linear-gradient(341deg, rgba(0, 0, 0, 0), #000)`,
        }}
      ></div>
      <img
        src="/images/blurred-circle-tiny.png"
        className="w-[60vw] h-[60vw] mix-blend-overlay block absolute"
      />
      <div className="relative">
        <div className="flex flex-col-reverse lg:flex-row justify-evenly items-end gap-10">
          <div className="w-full lg:w-4/12 text-center">
            <div className="flex gap-10 items-end justify-center">
              <div className="space-y-5">
                <p className="text-green-600">{progressWithUsValue}$</p>
                <ProgressBar progressHeight={progressWithUs} />
                <p className="text-white font-semibold text-lg">
                  {calculator.chart.wu}
                </p>
              </div>
              <div className="space-y-5">
                <p className="text-red-600">{progressWithOutUsValue}$</p>
                <ProgressBar progressHeight={progressWithOutUs} />
                <p className="text-white font-semibold text-lg">
                  {calculator.chart.wou}
                </p>
              </div>
            </div>
            <div className="mt-10">
              <p className="text-2xl text-white tracking-widest font-semibold leading-normal">
                {(progressWithOutUsValue / progressWithUsValue).toFixed(1)}x{" "}
                {calculator.chart.calculate[0]} <br />
                {allItems.length &&
                  ((allItems[6].value * allItems[7].value) / 4).toFixed(1)}
                x {parse(calculator.chart.calculate[1])}
              </p>
              <small>{calculator.chart.des}</small>
            </div>
          </div>
          <div className="w-full lg:w-4/12">
            <Title title={calculator.title} />
            {allItems.map((item) => (
              <InputCard key={item.id} item={item.item} bg={item.bg}>
                {item.placeholder ? (
                  <InputItem
                    id={item.id}
                    value={item.value}
                    placeholder={item.placeholder}
                    onChangeHandler={onChangeHandler}
                  />
                ) : (
                  <CheckBoxItem
                    id={item.id}
                    isChecked={item.isChecked}
                    checkHandler={checkHandler}
                  />
                )}
              </InputCard>
            ))}
          </div>
        </div>
        <Link to="pricing" spy={true} smooth={true}>
          <ButtonArrow title={calculator.btn} />
        </Link>
      </div>
    </div>
  );
};

export default Calculator;
