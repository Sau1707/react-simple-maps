import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const markers = [
  { name: "New York", coordinates: [-74.006, 40.7128] },
  { name: "London", coordinates: [-0.1276, 51.5072] },
  { name: "Tokyo", coordinates: [139.6917, 35.6895] },
];

function App() {
  return (
    <main>
      <h1>react-simple-maps + Vite</h1>
      <p>This is a minimal docs sample using react-simple-maps in a Vite app.</p>
      <ComposableMap projectionConfig={{ scale: 140 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="#f5f4f6"
                stroke="#d6d6da"
              />
            ))
          }
        </Geographies>
        {markers.map(({ name, coordinates }) => (
          <Marker key={name} coordinates={coordinates}>
            <circle r={3} fill="#0070f3" />
            <text y={-10} textAnchor="middle" className="marker-label">
              {name}
            </text>
          </Marker>
        ))}
      </ComposableMap>
    </main>
  );
}

export default App;
