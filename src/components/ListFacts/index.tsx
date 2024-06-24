import React from 'react';

interface ListFactsProps {
  facts: string[];
}

const HEADLINE_TEXT = "text-center text-2xl font-bold text-white mt-3";
const CHILD_TEXT = "font-medium text-white text-center mt-1";

const ListFacts: React.FC<ListFactsProps> = ({ facts }: ListFactsProps) => {
  return (
    <div className="sm:px-2">
      {facts.length > 0 ? <h1 className={HEADLINE_TEXT}>Lista de fatos</h1> : <h1 className={HEADLINE_TEXT}>Você não possui fatos listados!</h1>}
      {facts.length > 0 && (facts.map((fact, index) => (
        <p key={index} className={CHILD_TEXT}>{fact}</p>
      )))}
    </div>
  );
};

export { ListFacts };
