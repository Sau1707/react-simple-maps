import { useEffect, useState } from "react";
import { PatternLines } from "@visx/pattern";
import {
  Annotation,
  ComposableMap,
  Geographies,
  Geography,
  Graticule,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";

const geoUrl =
  "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const examples = [
  {
    href: "#/world",
    title: "Basic world map",
    description:
      "This example illustrates the easiest way to display a world map based on a custom topojson file. You can replace the map file with any valid topojson file.",
  },
  {
    href: "#/annotation",
    title: "Basic annotation",
    description:
      "This example shows how to add a basic annotation using the react-simple-maps <Annotation /> component.",
  },
  {
    href: "#/markers",
    title: "Basic markers",
    description:
      "This example shows how to add basic markers to a map. To see an example of how to add custom SVG markers, see the custom markers example.",
  },
  {
    href: "#/graticule",
    title: "Europe map with graticule",
    description:
      "This example shows how to use react-simple-maps to make a map of Europe with graticule. It uses the built-in geoAzimuthalEqualArea projection with custom rotation params.",
  },
  {
    href: "#/texture",
    title: "Mapchart with texture",
    description:
      "This map shows how to use react-simple-maps to add textures on the map. This example uses PatternLines from VX to create a line texture.",
  },
  {
    href: "#/zoom",
    title: "Map with zoom and pan",
    description:
      "The above map shows how to use the <ZoomableGroup /> component to render a map with pinch zoom and pan enabled.",
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
      <a className="back-link" href="#/">
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

function WorldPage() {
  return (
    <main>
      <a className="back-link" href="#/">
        ← Back to examples
      </a>
      <h1>Basic world map</h1>
      <p>
        This example illustrates the easiest way to display a world map based on a custom
        topojson file. You can replace the map file with any valid topojson file.
      </p>
      <p>
        Since this example focuses on the simplest possible version of a world map it omits
        the implementation of zooming and panning. If you are interested in the ZoomableGroup
        component and in adding zooming and panning capabilities to your map, check out the
        zoom-pan example.
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
      </ComposableMap>
    </main>
  );
}

function MarkersPage() {
  return (
    <main>
      <a className="back-link" href="#/">
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

function GraticulePage() {
  return (
    <main>
      <a className="back-link" href="#/">
        ← Back to examples
      </a>
      <h1>Europe map with graticule</h1>
      <p>
        This example shows how to use react-simple-maps to make a map of Europe with
        graticule. It uses the built-in
        {" "}
        <code>geoAzimuthalEqualArea</code>
        {" "}
        projection with custom rotation params.
      </p>
      <ComposableMap
        projection="geoAzimuthalEqualArea"
        projectionConfig={{
          rotate: [-10.0, -53.0, 0],
          center: [0, 52],
          scale: 1100,
        }}
      >
        <Graticule stroke="#e4e4e7" />
        <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
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
      </ComposableMap>
    </main>
  );
}

function TexturePage() {
  return (
    <main>
      <a className="back-link" href="#/">
        ← Back to examples
      </a>
      <h1>Mapchart with texture</h1>
      <p>
        This map shows how to use react-simple-maps to add textures on the map.
        This example uses PatternLines from VX to create a line texture.
      </p>
      <ComposableMap projectionConfig={{ scale: 140 }}>
        <defs>
          <PatternLines
            id="texture"
            height={8}
            width={8}
            stroke="#9a8c98"
            strokeWidth={1}
            orientation={["diagonal"]}
          />
        </defs>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill="url('#texture')"
                stroke="#4a4e69"
                strokeWidth={0.4}
              />
            ))
          }
        </Geographies>
      </ComposableMap>
    </main>
  );
}

function ZoomPage() {
  return (
    <main>
      <a className="back-link" href="#/">
        ← Back to examples
      </a>
      <h1>Map with zoom and pan</h1>
      <p>
        The above map shows how to use the
        {" "}
        <code>{"<ZoomableGroup />"}</code>
        {" "}
        component to render a map with pinch zoom and pan enabled.
      </p>
      <ComposableMap projectionConfig={{ scale: 140 }}>
        <ZoomableGroup>
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
        </ZoomableGroup>
      </ComposableMap>
    </main>
  );
}

function App() {
  const [route, setRoute] = useState(() => window.location.hash.replace(/^#/, "") || "/");

  useEffect(() => {
    const handleHashChange = () => {
      setRoute(window.location.hash.replace(/^#/, "") || "/");
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (route === "/world") {
    return <WorldPage />;
  }

  if (route === "/annotation") {
    return <AnnotationPage />;
  }

  if (route === "/markers") {
    return <MarkersPage />;
  }

  if (route === "/graticule") {
    return <GraticulePage />;
  }

  if (route === "/texture") {
    return <TexturePage />;
  }

  if (route === "/zoom") {
    return <ZoomPage />;
  }

  return <LandingPage />;
}

export default App;
