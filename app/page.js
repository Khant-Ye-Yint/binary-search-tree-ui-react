'use client';

import BinarySearchTree from './binarySearchTree';
import { bst } from './bst';
import Actions from './actions';
import { useState } from 'react';

const Home = () => {
  const [dummy, setDummy] = useState(true);

  return (
    <div className="min-h-[80vh]">
      <h1 className="text-xl font-semibold text-start">
        Binary Search Tree UI
      </h1>
      <div className="flex flex-col items-center">
        <Actions setDummy={setDummy} dummy={dummy} />
        <BinarySearchTree bst={bst} />
      </div>
    </div>
  );
};

export default Home;
