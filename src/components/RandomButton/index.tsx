import React from 'react';

interface RandomButtonProps {
  onClick: () => void;
}

const RandomButton: React.FC<RandomButtonProps> = ({ onClick }: RandomButtonProps) => {
  return (
    <button 
      onClick={onClick} 
      className="px-8 py-3 text-white rounded bg-gray-800 font-medium hover:bg-gray-700 w-[290px]"
    >Buscar fatos do Chuck Norris!</button>
  );
};

export { RandomButton };
