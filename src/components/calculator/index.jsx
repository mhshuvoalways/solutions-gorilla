import { useCallback, useEffect, useState } from "react";
import Title from "../common/title";
import CheckBoxItem from "./CheckBoxItem";
import InputCard from "./InputCard";
import InputItem from "./InputItem";
import ProgressBar from "./ProgressBar";

const items = [
  {
    id: 1,
    item: "Developer Plane",
    bg: true,
    isChecked: true,
  },
  {
    id: 2,
    item: "Integration & Delivery Plane",
    bg: false,
    isChecked: true,
  },
  {
    id: 3,
    item: "Monitoring and Logging Plane",
    bg: true,
    isChecked: true,
  },
  {
    id: 4,
    item: "Security Plane",
    bg: false,
    isChecked: true,
  },
  {
    id: 5,
    item: "Service Plane",
    bg: true,
    isChecked: true,
  },
  {
    id: 6,
    item: "Avg. Engineer Salary / year",
    bg: false,
    value: 150000,
    placeholder: 150000,
  },
  {
    id: 7,
    item: "Estimated time in weeks to build it yourself?",
    bg: true,
    value: 20,
    placeholder: 20,
  },
  {
    id: 8,
    item: "How many Resources assigned full time to built yourself?",
    bg: false,
    value: 4,
    placeholder: 4,
  },
];

const Calculator = () => {
  const [progressWithUs, setProgressWithUs] = useState(100);
  const [progressWithOutUs, setProgressWithOutUs] = useState(50);
  const [progressWithUsValue, setProgressWithUsValue] = useState(0);
  const [progressWithOutUsValue, setProgressWithOutUsValue] = useState(230769);
  const [allItems, setAllItems] = useState(items);

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
    temp.forEach((el) => {
      if (el.isChecked) {
        checkCount++;
      }
    });
    if (checkCount === 0) {
      setProgressWithUsValue(0);
      setProgressWithUs(0);
    } else {
      setProgressWithUsValue(30000 + checkCount * 5000 - 5000);
      checkCount * 20;
    }
  }, [allItems]);

  const withOutUsCalculator = useCallback(() => {
    const temp = [...allItems];
    let value = 0;
    let values = 1;
    const maxValue = 640000;
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
    setProgressWithOutUsValue(currentValue);
    setProgressWithOutUs((currentValue / maxValue) * 100);
  }, [allItems]);

  useEffect(() => {
    withUsCalculator();
    withOutUsCalculator();
  }, [withUsCalculator, withOutUsCalculator]);

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
      <div className="relative flex flex-col-reverse lg:flex-row justify-evenly items-end gap-10">
        <div className="w-full lg:w-4/12 text-center">
          <div className="flex gap-10 items-end justify-center">
            <div className="space-y-5">
              <p className="text-green-600">{progressWithUsValue}$</p>
              <ProgressBar progressHeight={progressWithUs} />
              <p className="text-white font-semibold text-lg">With us</p>
            </div>
            <div className="space-y-5">
              <p className="text-red-600">{progressWithOutUsValue}$</p>
              <ProgressBar progressHeight={progressWithOutUs} />
              <p className="text-white font-semibold text-lg">Without us</p>
            </div>
          </div>
          <div className="mt-10">
            <p className="text-2xl text-white tracking-widest font-semibold leading-normal">
              4.6x less expensive and <br />
              5.0x shorter to build if <br />
              you build with us!
            </p>
            <small>
              The Gorilla Solutions TCO Calculator is an estimation tool only.
              Results are approximate and should not be solely relied upon for
              decision-making. Gorilla Solutions assumes no legal liability for
              the accuracy of the calculations or their impact on your business
              decisions.
            </small>
          </div>
        </div>
        <div className="w-full lg:w-4/12">
          <Title title="TCO Calculator" />
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
    </div>
  );
};

export default Calculator;
