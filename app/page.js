'use client';

import BinarySearchTree from './binarySearchTree';
import { bst } from './bst';
import Actions from './actions';
import { useState } from 'react';

const Home = () => {
  const [dummy, setDummy] = useState(true);

  return (
    <div className="flex flex-col items-center justify-between min-h-[100vh] ">
      <h1 className=" font-bold flex justify-center items-center text-4xl text-center min-h-[10vh]">
        Binary Search Tree UI
      </h1>
      <Actions setDummy={setDummy} dummy={dummy} />
      <BinarySearchTree bst={bst} />
      <div className="flex justify-center items-center min-h-[10vh]">
        Footer :)
      </div>
    </div>
  );
};

export default Home;
