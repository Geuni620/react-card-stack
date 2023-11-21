import React, { useEffect, useState } from 'react';

function App() {
  const [hoverState, setHoverState] = useState('none');
  const [scale, setScale] = useState(0);

  // 증가값 및 감소값
  const increaseValue = 0.5;
  const targetScale = hoverState === 'none' ? 0 : 0.61; // 호버 상태에 따른 타겟 스케일

  useEffect(() => {
    const interval = setInterval(() => {
      setScale((prevScale) =>
        prevScale < targetScale
          ? Math.min(prevScale + increaseValue, targetScale)
          : Math.max(prevScale - increaseValue, targetScale),
      );
    }, 10); // 점진적으로 증가 또는 감소
    return () => clearInterval(interval);
  }, [targetScale]);

  const leftStyle: React.CSSProperties = {
    transformOrigin: 'right',
    transform: `scale(${hoverState === 'left' ? scale : 0}, 1.15)`,
    touchAction: 'pan-y',
    transition: 'transform 0.5s ease-out',
    backgroundColor: 'red',
    borderTopLeftRadius: '50%',
    borderBottomLeftRadius: '50%',
    position: 'absolute',
    width: '50%',
    top: 0,
    height: '100vh',
    overflow: 'hidden',
  };

  const rightStyle: React.CSSProperties = {
    transformOrigin: 'left',
    transform: `scale(${hoverState === 'right' ? scale : 0}, 1.15)`,
    touchAction: 'pan-y',
    transition: 'transform 0.5s ease-out',
    backgroundColor: 'blue',
    borderTopRightRadius: '50%',
    borderBottomRightRadius: '50%',
    position: 'absolute',
    width: '50%',
    right: 0,
    top: 0,
    height: '100vh',
    overflow: 'hidden',
  };

  const centerDivStyle: React.CSSProperties = {
    position: 'absolute',
    left: 'calc(50% - 250px)',
    top: 'calc(50% - 400px)',
    borderRadius: '20px',
    height: '800px',
    width: '500px',
    backgroundColor: 'white',
    transform:
      hoverState === 'left'
        ? 'rotateY(30deg) translateX(-80%)'
        : hoverState === 'right'
        ? 'rotateY(-30deg) translateX(80%)'
        : 'rotateY(0deg) translateX(0)',
    transition: 'transform 0.6s ease-out',
    transformStyle: 'preserve-3d',
  };

  return (
    <section>
      <div></div>
      <div className="absolute left-0 top-0 h-full w-full bg-yellow-500">
        {/* 왼쪽만 */}
        <div>
          <div style={leftStyle}></div>
          <div className="bg-yellow-500" />
        </div>
        {/* 왼쪽 */}
        <button
          style={{
            width: 'calc(50% - 250px)',
            paddingRight: '8%',
          }}
          className="absolute top-0 z-[20] h-screen"
          onMouseEnter={() => setHoverState('left')}
          onMouseLeave={() => setHoverState('none')}
        >
          Next Card
        </button>

        {/* 오른쪽만 */}
        <div>
          <div style={rightStyle} />
          <div className="bg-yellow-500" />
        </div>
        {/* 오른쪽 */}
        <button
          style={{
            width: 'calc(50% - 250px)',
            paddingLeft: '8%',
            right: 0,
          }}
          className="absolute top-0 z-[20] h-screen"
          onMouseEnter={() => setHoverState('right')}
          onMouseLeave={() => setHoverState('none')}
        >
          Show me!
        </button>
      </div>

      <button>
        <div style={centerDivStyle}>여기 내용내용내용내용</div>
      </button>
    </section>
  );
}

export default App;
