import MotionHoc from "./MotionHoc";

import './MyStyle.css';

import Calculator from "./Calculator";
const CalculatorDoc = () => {

  const onPanelChange = (value:Dayjs,mode:CalendarMode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };

  return(
    <div>
      <h1>Calculator</h1>
      <Calculator />
    </div>
  );
};

const calculator = MotionHoc(CalculatorDoc);

export default calculator;
