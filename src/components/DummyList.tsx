import React from 'react';

const DummyList: React.FC = () => {
  const items = [
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, corrupti?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, corrupti?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, corrupti?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, corrupti?',
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, corrupti?',
  ];

  return (
    <article className='flex flex-col items-center'>
      <h2 className="text-2xl font-bold mb-4">DummyList</h2>
      <ul className="list-disc pl-6">
        {items.map((item, index) => (
          <li key={index} className="mb-2">
            {item}
          </li>
        ))}
      </ul>
    </article>
  );
};

export default DummyList;
