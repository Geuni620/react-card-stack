import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';

function App() {
  return (
    <div className="grid">
      {/* 여기가 Button Section의 배치 layout */}
      <div className="grid h-screen grid-cols-2 place-items-center overflow-hidden bg-blue-500">
        {/* 왼쪽 */}
        <div className="group peer relative flex h-full w-full pr-[80px]">
          <ActionButton direction="left" text="Next card" />
        </div>

        {/* 오른쪽 */}
        <div className="group peer relative flex h-full w-full pl-[80px]">
          <ActionButton text="Show me!" direction="right" />
        </div>
      </div>
    </div>
  );
}

export default App;

interface ActionButtonProps {
  onClick: (e: React.PointerEvent<HTMLButtonElement>) => void;
  direction: 'left' | 'right';
  text: string;
}

const ActionButton: React.FC<ActionButtonProps> = ({
  onClick,
  direction,
  text,
}) => {
  return (
    <button onClick={onClick} className={twMerge('')}>
      <span>{text}</span>
    </button>
  );
};
