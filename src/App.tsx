import { useState } from 'react';

function App() {
  const [hoveredItemId, setHoveredItemId] = useState<null | number>(null);

  return (
    <div className="scene">
      <div className="carousel">
        {MockingItemData.map(({ id }, index) => {
          const isHovered = hoveredItemId === id;
          const topValue = isHovered
            ? `${50 - 80 * index - 30}px`
            : `${200 - 80 * index}px`;
          const rotateYValue = `${20 - 5 * index}deg`;
          const translateZValue = `${500 - 300 * index}px`;

          return (
            <div
              key={id}
              className="item"
              onMouseEnter={() => setHoveredItemId(id)}
              onMouseLeave={() => setHoveredItemId(null)}
              style={{
                padding: '150px',
                top: topValue,
                backgroundColor: id % 2 === 0 ? '#ff7979' : '#bfa75b',
                transform: `rotateY(${rotateYValue}) translateZ(${translateZValue})`,
              }}
            >
              {id}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;

const MockingItemData = [
  {
    id: 1,
  },
  {
    id: 2,
  },
  {
    id: 3,
  },
  {
    id: 4,
  },
  {
    id: 5,
  },
  {
    id: 6,
  },
  {
    id: 7,
  },
  {
    id: 8,
  },
  {
    id: 19,
  },
];
