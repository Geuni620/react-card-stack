import { useEffect, useState } from 'react';

function App() {
  const [isHoveredShowCard, setIsHoveredShowCard] = useState(false);
  const [isHoveredNextCard, setIsHoveredNextCard] = useState(false);

  // const [isHoveredShowCard, setIsHoveredShowCard] = useState(false);
  const [scale, setScale] = useState(0);

  // const 증가값 영어로
  const increaseValue = 0.5;

  useEffect(() => {
    let interval: any;
    if (isHoveredShowCard) {
      interval = setInterval(() => {
        setScale((prevScale) =>
          prevScale < 0.61 ? prevScale + increaseValue : 0.61,
        );
      }, 10); // 점진적으로 증가
    } else {
      interval = setInterval(() => {
        setScale((prevScale) =>
          prevScale > 0 ? prevScale - increaseValue : 0,
        );
      }, 10); // 점진적으로 감소
    }
    return () => clearInterval(interval);
  }, [isHoveredShowCard]);

  return (
    <section>
      <div></div>
      <div className="absolute left-0 top-0 h-full w-full bg-yellow-500">
        {/* 왼쪽만 */}
        <div
          className="absolute right-1/2 top-0 h-screen w-1/2 overflow-hidden"
          style={{
            transformOrigin: 'right',
            transform: `scale(${scale}, 1.15)`, // 여기에서 scale 상태 값을 사용
            touchAction: 'pan-y',
            transition: 'transform 0.5s ease-out', // 애니메이션 속도 조절
            backgroundColor: 'red',
            borderTopLeftRadius: '50%', // 오른쪽 상단
            borderBottomLeftRadius: '50%', // 오른쪽 하단
          }}
        >
          <div
            className="bg-red-500"
            style={{
              transformOrigin: 'center top',
              touchAction: 'pan-y',
            }}
          />
          <div className="bg-yellow-500" />
        </div>

        <div className="absolute left-1/2 top-0 h-screen w-1/2 overflow-hidden">
          <div
            className="bg-red-500"
            style={{
              transformOrigin: 'center top',
              transform: isHoveredNextCard
                ? 'scale(0, 1.15)'
                : 'scale(1, 1.15)',
              touchAction: 'pan-y',
            }}
          />
          <div className="bg-yellow-500" />
        </div>
      </div>
      <button
        onMouseEnter={() => setIsHoveredShowCard(true)}
        onMouseLeave={() => setIsHoveredShowCard(false)}
        style={{
          width: 'calc(50% - 250px)',
          paddingRight: '8%',
        }}
        className="absolute top-0 h-screen"
      >
        Next Card
      </button>
      <button
        style={{
          width: 'calc(50% - 250px)',
          paddingLeft: '8%',
          right: 0,
        }}
        className="absolute top-0 h-screen"
        onMouseEnter={() => setIsHoveredNextCard(true)}
        onMouseLeave={() => setIsHoveredNextCard(false)}
      >
        Show me!
      </button>
      {/* <button>
        <div
          className="absolute"
          style={{
            left: 'calc(50% - 250px)',
            top: 'calc(50% - 250px)',
            height: '500px',
            width: '500px',
            backgroundColor: 'white',
          }}
        />
      </button> */}
      <button>
        <div
          className="absolute"
          style={{
            left: 'calc(50% - 250px)',
            top: 'calc(50% - 250px)',
            height: '500px',
            width: '500px',
            backgroundColor: 'white',
            transform: isHoveredShowCard
              ? 'rotateY(30deg) translateX(-80%)'
              : 'rotateY(0deg) translateX(0)',
            transition: 'transform 0.6s ease-out',
            transformStyle: 'preserve-3d', // 3D 변형 스타일 유지
          }}
        >
          여기 내용내용내용내용
        </div>
      </button>
    </section>
  );
}

export default App;
