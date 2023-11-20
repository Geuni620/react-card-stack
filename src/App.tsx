import { useState } from 'react';

function App() {
  const [items, setItems] = useState(MockingItemData);

  const handleClick = (clickedId: number) => {
    const newItems = [...items];
    const clickedIndex = newItems.findIndex((item) => item.id === clickedId);
    const clickedItem = newItems.splice(clickedIndex, 1)[0];
    newItems.push(clickedItem); // 클릭된 아이템을 배열의 끝으로 이동
    setItems(newItems);
  };

  return (
    <div className="scene">
      <div className="carousel">
        {items.map(({ id }, index) => {
          const topValue = `${200 - 80 * index}px`;
          const rotateYValue = `${20 - 5 * index}deg`;
          const translateZValue = `${500 - 300 * index}px`;

          return (
            <div
              key={id}
              className="item"
              onClick={() => handleClick(id)}
              style={{
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
    id: 9,
  },
];
