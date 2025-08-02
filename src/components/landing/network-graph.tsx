export default function NetworkGraph() {
  return (
    <svg
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
      }}
      className="max-w-2xl"
    >
      {/* Background Circle for reference */}
      <circle
        cx="250"
        cy="250"
        r="245"
        fill="none"
        stroke="lightgray"
        strokeWidth="0.5"
      />

      {/* Nodes */}
      <circle className="node" cx="150" cy="150" r="4" fill="green" />
      <circle className="node" cx="350" cy="150" r="4" fill="blue" />
      <circle className="node" cx="150" cy="350" r="4" fill="red" />
      <circle className="node" cx="350" cy="350" r="4" fill="purple" />
      <circle className="node" cx="250" cy="50" r="4" fill="orange" />

      {/* Connections between nodes */}
      <line
        className="edge"
        x1="150"
        y1="150"
        x2="350"
        y2="150"
        stroke="white"
        strokeWidth="1"
      />
      <line
        className="edge"
        x1="150"
        y1="150"
        x2="150"
        y2="350"
        stroke="white"
        strokeWidth="1"
      />
      <line
        className="edge"
        x1="150"
        y1="350"
        x2="350"
        y2="350"
        stroke="white"
        strokeWidth="1"
      />
      <line
        className="edge"
        x1="350"
        y1="150"
        x2="250"
        y2="50"
        stroke="white"
        strokeWidth="1"
      />
      <line
        className="edge"
        x1="250"
        y1="50"
        x2="150"
        y2="350"
        stroke="white"
        strokeWidth="1"
      />
    </svg>
  );
}
