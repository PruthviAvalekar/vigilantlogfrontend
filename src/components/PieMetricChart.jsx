import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
ChartJS.register(ArcElement, Tooltip);

export default function PieMetricChart({ labels, values, colors }) {
  const data = {
    labels,
    datasets: [
      {
        data: values,
        backgroundColor: colors,
        borderColor: colors.map((c) => c.replace("0.4", "1")),
        borderWidth: 2,
      },
    ],
  };

  const options = {
    plugins: {
      legend: { display: false },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="w-36 h-36">
      <Pie data={data} options={options} />
    </div>
  );
}

// import { Pie } from "react-chartjs-2";
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
// ChartJS.register(ArcElement, Tooltip, Legend);

// export default function PieMetricChart({ labels, values }) {
//   const data = {
//     labels,
//     datasets: [
//       {
//         data: values,
//         backgroundColor: [
//           "rgba(59, 130, 246, 0.4)", // blue
//           "rgba(16, 185, 129, 0.4)", // green
//           "rgba(234, 179, 8, 0.4)", // yellow
//           "rgba(239, 68, 68, 0.4)", // red
//         ],
//         borderColor: [
//           "rgba(59, 130, 246, 1)",
//           "rgba(16, 185, 129, 1)",
//           "rgba(234, 179, 8, 1)",
//           "rgba(239, 68, 68, 1)",
//         ],
//         borderWidth: 2,
//       },
//     ],
//   };

//   return (
//     <div className="w-40 h-40 mx-auto">
//       <Pie data={data} />
//     </div>
//   );
// }
