'use client';

import BinaryTree from './BinaryTree';

import { useState } from 'react';
import Actions from './Actions';

const Home = () => {
  const [keys, setKeys] = useState([]);
  const [probabilities, setProbabilities] = useState([]);
  const [dummy, setDummy] = useState(true);
  const [tree, setTree] = useState({});

  return (
    <div className="min-h-[80vh]">
      <h1 className="text-xl font-semibold text-start">
        Optimal Binary Search Tree UI
      </h1>
      <div className="flex flex-col items-center">
        <Actions
          keys={keys}
          setKeys={setKeys}
          probabilities={probabilities}
          setProbabilities={setProbabilities}
          dummy={dummy}
          setDummy={setDummy}
          tree={tree}
          setTree={setTree}
        />
        <BinaryTree tree={tree} />
      </div>
    </div>
  );
};

export default Home;
