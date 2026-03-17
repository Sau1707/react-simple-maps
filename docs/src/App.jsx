import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const examples = [
  {
    href: "/annotation",
    title: "Basic annotation",
    description:
      "This example shows how to add a basic annotation using the react-simple-maps <Annotation /> component.",
  },
  {
    href: "/markers",
    title: "Basic markers",
    description:
      "This example shows how to add basic markers to a map. To see an example of how to add custom SVG markers, see the custom markers example.",
  },
];

function LandingPage() {
  return (
    <main>
      <h1>react-simple-maps docs examples</h1>
      <p>Explore examples to learn how to build maps and add custom layers.</p>
      <section className="card-grid" aria-label="Examples">
        {examples.map((example) => (
          <a key={example.href} className="card" href={example.href}>
            <h2>{example.title}</h2>
            <p>{example.description}</p>
          </a>
        ))}
      </section>
    </main>
  );
}

function AnnotationPage() {
  return (
    <main>
      <a className="back-link" href="/">
        ← Back to examples
      </a>
      <h1>Basic annotation</h1>
      <p>
        This example shows how to add a basic annotation using the react-simple-maps
        {" "}
        <code>{"<Annotation />"}</code>
        {" "}
        component.
      </p>
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
        <Annotation
          subject={[-74.006, 40.7128]}
          dx={30}
          dy={-30}
          connectorProps={{
            stroke: "#4f46e5",
            strokeWidth: 2,
            strokeLinecap: "round",
          }}
        >
          <text x="4" fontSize={12} alignmentBaseline="middle" fill="#312e81">
            New York
          </text>
        </Annotation>
      </ComposableMap>
    </main>
  );
}

function MarkersPage() {
  return (
    <main>
      <a className="back-link" href="/">
        ← Back to examples
      </a>
      <h1>Basic markers</h1>
      <p>
        This example shows how to add basic markers to a map. To see an example
        of how to add custom SVG markers, see the custom markers example.
      </p>
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
        <Marker coordinates={[-74.006, 40.7128]}>
          <circle r={6} fill="#4f46e5" stroke="#fff" strokeWidth={2} />
          <text textAnchor="middle" y={-12} style={{ fill: "#312e81", fontSize: "12px" }}>
            New York
          </text>
        </Marker>
        <Marker coordinates={[2.3522, 48.8566]}>
          <circle r={6} fill="#4f46e5" stroke="#fff" strokeWidth={2} />
          <text textAnchor="middle" y={-12} style={{ fill: "#312e81", fontSize: "12px" }}>
            Paris
          </text>
        </Marker>
        <Marker coordinates={[139.6917, 35.6895]}>
          <circle r={6} fill="#4f46e5" stroke="#fff" strokeWidth={2} />
          <text textAnchor="middle" y={-12} style={{ fill: "#312e81", fontSize: "12px" }}>
            Tokyo
          </text>
        </Marker>
      </ComposableMap>
    </main>
  );
}

function App() {
  const pathname = window.location.pathname;

  if (pathname === "/annotation") {
    return <AnnotationPage />;
  }

  if (pathname === "/markers") {
    return <MarkersPage />;
  }

  return <LandingPage />;
}

export default App;
