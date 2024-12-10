import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const SessionsByCountry = () => {
  const data = [
    { country: "United States", percentage: 35 },
    { country: "Canada", percentage: 26 },
    { country: "France", percentage: 18 },
    { country: "Italy", percentage: 14 },
    { country: "Australia", percentage: 10 },
    { country: "India", percentage: 7 },
  ];

  // GeoJSON URL for the world map
  const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

  return (
    <div className=" p-6 max-w-2xl mx-auto bg-[#FAEBD7] rounded-lg shadow-md">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Sessions by country
        </h2>
        <button className="text-sm text-gray-600 border border-gray-300 px-2 py-1 rounded-lg hover:bg-gray-100">
          Last 7 days
        </button>
      </div>

      {/* World Map */}
      <div className="relative  h-64 rounded-md mb-6">
        <ComposableMap
          projectionConfig={{
            scale: 140, // Adjust zoom level
            center: [0, 20], // Shift the map's center to reduce the flat bottom
          }}
          style={{ height: "200%", width: "100%", marginTop: "-150" }} // Ensures map fills the container
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: { fill: "#d1e8ff", stroke: "#fff" },
                    hover: { fill: "#a5d8ff", stroke: "#666" },
                    pressed: { fill: "#0056b3", stroke: "#fff" },
                  }}
                />
              ))
            }
          </Geographies>
        </ComposableMap>
      </div>

      {/* Country Stats */}
      <div className="mt-[200px]">
        {data.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between mb-3 hover:bg-gray-100 p-2 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-4 h-4 rounded-full ${
                  index === 0
                    ? "bg-red-500"
                    : index === 1
                    ? "bg-red-300"
                    : index === 2
                    ? "bg-blue-500"
                    : index === 3
                    ? "bg-green-500"
                    : index === 4
                    ? "bg-yellow-500"
                    : "bg-purple-500"
                }`}
              ></div>
              <p className="text-sm text-gray-700">{item.country}</p>
            </div>
            <div className="flex-1 mx-3">
              <div className="w-full bg-gray-200 h-2 rounded-full">
                <div
                  className="h-2 rounded-full"
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor:
                      index === 0
                        ? "#ff6b6b"
                        : index === 1
                        ? "#ffa07a"
                        : index === 2
                        ? "#4682b4"
                        : index === 3
                        ? "#32cd32"
                        : index === 4
                        ? "#ffd700"
                        : "#9370db",
                  }}
                ></div>
              </div>
            </div>
            <p className="text-sm text-gray-700">{item.percentage}%</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SessionsByCountry;
