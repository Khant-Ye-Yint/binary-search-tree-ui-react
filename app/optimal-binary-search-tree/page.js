'use client';

import BinaryTree from './BinaryTree';

import { useState } from 'react';
import Actions from './Actions';

const Home = () => {
  const [keys, setKeys] = useState([]);
  const [frequencies, setFrequencies] = useState([]);
  const [dummy, setDummy] = useState(true);
  const [tree, setTree] = useState({});
  const [cost, setCost] = useState(null);

  return (
    <div className="min-h-[80vh]">
      <h1 className="text-xl font-semibold text-start">
        Optimal Binary Search Tree UI
      </h1>
      <div className="flex flex-col items-center">
        <Actions
          keys={keys}
          setKeys={setKeys}
          frequencies={frequencies}
          setFrequencies={setFrequencies}
          dummy={dummy}
          setDummy={setDummy}
          tree={tree}
          setTree={setTree}
          setCost={setCost}
        />
        <BinaryTree tree={tree} />
      </div>
      <h1 className="text-center">{cost && `Minimal Cost : ${cost}`}</h1>
    </div>
  );
};

export default Home;
