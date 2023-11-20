import { useState } from 'react';

function App() {
  const [isHoveredShowCard, setIsHoveredShowCard] = useState(false);
  const [isHoveredNextCard, setIsHoveredNextCard] = useState(false);

  return (
    <section>
      <div></div>
      <div className="absolute left-0 top-0 h-full w-full bg-yellow-500">
        <div
          className="absolute right-1/2 top-0 h-screen w-1/2 overflow-hidden"
          style={{
            transform: isHoveredShowCard
              ? 'translate3d(0px, 0px, 0px) scale(0.16, 1.15)'
              : 'translate3d(0px, 0px, 0px) scale(0, 1.15)',
            touchAction: 'pan-y',
            transition: 'transform 0.5s ease-in-out',
            backgroundColor: 'red',
          }}
        >
          <div
            className="bg-red-500"
            style={{
              transform: 'translate3d(0px, 0px, 0px) scale(0, 1.15)',
              touchAction: 'pan-y',
            }}
          />
          <div className="bg-yellow-500" />
        </div>

        <div
          className="absolute left-1/2 top-0 h-screen w-1/2 overflow-hidden"
          style={{
            transform: isHoveredNextCard
              ? 'translate3d(0px, 0px, 0px) scale(0.16, 1.15)'
              : 'translate3d(0px, 0px, 0px) scale(0, 1.15)',
            touchAction: 'pan-y',
            transition: 'transform 0.5s ease-in-out',
            backgroundColor: 'red',
          }}
        >
          <div
            className="bg-red-500"
            style={{
              transform: 'translate3d(0px, 0px, 0px) scale(0, 1.15)',
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
      <button>
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
      </button>
    </section>
  );
}

export default App;
