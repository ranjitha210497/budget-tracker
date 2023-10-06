import { useEffect, useState } from "react";
import {
  donutDefaultData,
  expenseTypes,
  reactDonutChartBackgroundColor,
} from "../../constants";
import DonutChart from "react-donut-chart";

import "./DonutChart.scss";

const reactDonutChartdata = expenseTypes.map((type, id) => ({
  label: type,
  value: 10 * id,
  color: reactDonutChartBackgroundColor[id],
}));

const reactDonutChartInnerRadius = 0.5;
const reactDonutChartSelectedOffset = 0.04;
let reactDonutChartStrokeColor = "#FFFFFF";
// const reactDonutChartOnMouseEnter = (item) => {
//   let color = reactDonutChartdata.find((q) => q.label === item.label).color;
//   reactDonutChartStrokeColor = color;
// };

const ExpensesDonut = ({ expenses }) => {
  const [barData, setBarData] = useState(reactDonutChartdata);

  useEffect(() => {
    setBarData(
      expenseTypes.map((type, id) => ({
        label: type,
        value: expenses[type].total,
        color: reactDonutChartBackgroundColor[id],
      }))
    );
  }, [expenses]);

  return (
    <DonutChart
      width={500}
      //   onMouseEnter={(item) => reactDonutChartOnMouseEnter(item)}
      strokeColor={reactDonutChartStrokeColor}
      data={[donutDefaultData, ...barData]}
      colors={[donutDefaultData.color, ...reactDonutChartBackgroundColor]}
      innerRadius={reactDonutChartInnerRadius}
      selectedOffset={reactDonutChartSelectedOffset}
    />
  );
};

export default ExpensesDonut;
