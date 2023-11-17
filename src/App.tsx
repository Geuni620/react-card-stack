import { useState, useEffect } from 'react';

function App() {
  const [rotation, setRotation] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    console.log('scroll 동작');
    // 스크롤 방향을 확인하기 위해 현재 스크롤 위치와 이전 스크롤 위치를 비교합니다.
    const scrollY = window.scrollY;
    const direction = scrollY > lastScrollY ? 1 : -1;

    // 스크롤 방향에 따라 회전 각도를 업데이트합니다.
    setRotation((prev) => prev + direction * 0.1);
    // 현재 스크롤 위치를 이전 스크롤 위치로 업데이트합니다.
    setLastScrollY(scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="scene">
      <div className="carousel">
        {MockingItemData.map(({ id }) => (
          <div className="item hover:top-[-30px]">{id}</div>
        ))}
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
