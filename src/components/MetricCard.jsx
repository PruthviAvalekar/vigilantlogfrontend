import PieMetricChart from "./PieMetricChart";

export default function MetricCard({ title, entry }) {
  if (!entry) return null;

  const labels = Object.keys(entry.confidence);
  const values = Object.values(entry.confidence);

  const colors = [
    "rgba(59, 130, 246, 0.4)", // blue
    "rgba(16, 185, 129, 0.4)", // green
    "rgba(234, 179, 8, 0.4)", // yellow (only used if 3rd value exists)
    "rgba(239, 68, 68, 0.4)", // red (4th value)
  ].slice(0, values.length);

  return (
    <div className="bg-white rounded-2xl shadow-md p-8 border border-gray-100 hover:shadow-lg transition duration-200">
      {/* Title */}
      <h3 className="text-xl font-bold text-gray-800 mb-6">{title}</h3>

      <div className="flex items-center justify-between gap-6">
        {/* Left: Prediction + summary + legend */}
        <div className="flex flex-col flex-1 space-y-3">
          {/* Prediction */}
          <div>
            <p className="text-gray-600 text-sm">Prediction:</p>
            <p className="text-lg font-semibold text-blue-600">
              {entry.prediction}
            </p>
          </div>

          {/* Summary */}
          <p className="text-gray-500 text-sm leading-relaxed max-w-[260px]">
            {entry.analysis?.summary}
          </p>

          {/* CUSTOM LEGEND */}
          <div className="space-y-1">
            {labels.map((label, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <div
                  className="w-3 h-3 rounded-sm"
                  style={{ backgroundColor: colors[index] }}
                ></div>
                <span className="text-gray-600">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Chart */}
        <div className="flex items-center justify-center">
          <PieMetricChart labels={labels} values={values} colors={colors} />
        </div>
      </div>
    </div>
  );
}

// import PieMetricChart from "./PieMetricChart";

// export default function MetricCard({ title, entry }) {
//   const confidenceLabels = entry ? Object.keys(entry?.confidence) : [];
//   const confidenceValues = entry ? Object.values(entry?.confidence) : [];

//   return (
//     <div className="bg-white rounded-2xl shadow-md p-7 m-10 border border-gray-100 hover:shadow-lg transition-all duration-200">
//       <h3 className="text-xl font-semibold text-gray-800 mb-4">{title}</h3>

//       <div className="flex items-center justify-between gap-6">
//         <div className="flex-1">
//           <p className="text-gray-600 mb-1">Prediction:</p>
//           <p className="text-lg font-bold text-blue-600">{entry?.prediction}</p>
//           <p className="text-gray-500 mt-3 leading-relaxed text-sm">
//             {entry?.analysis?.summary}
//           </p>
//         </div>

//         <div className="w-48 h-48 flex items-center justify-center">
//           <PieMetricChart
//             labels={Object.keys(entry.confidence)}
//             values={Object.values(entry.confidence)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// import ProgressBar from "./ProgressBar";
// import "../styles/dashboard.css";

// export default function MetricCard({ title, main, sub, color, confidences }) {
//   return (
//     <div className="metric-card">
//       <div className="metric-top">
//         <div className="metric-title">{title}</div>
//         <div className="metric-main" style={{ color: color ?? "#0ea5a4" }}>
//           {main}
//         </div>
//       </div>

//       {sub && <div className="metric-sub muted">{sub}</div>}

//       {/* Render confidence progress bars */}
//       {confidences && (
//         <div className="progress-group">
//           {Object.entries(confidences).map(([key, val]) => (
//             <ProgressBar
//               key={key}
//               label={key.replaceAll("_", " ")}
//               value={val}
//               color={color}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
