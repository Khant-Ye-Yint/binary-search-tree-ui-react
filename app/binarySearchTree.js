const Node = ({ node }) => {
  const { data, left, right } = node;

  return node.data == null ? (
    ''
  ) : (
    <>
      <div className="value" id={data} onClick={() => alert(data)}>
        {data}
      </div>

      {(left || right) && <ChildNodes left={left} right={right} />}
    </>
  );
};

const ChildNodes = ({ left, right }) => {
  return (
    <>
      <div className="bottomLine"></div>
      <div className="children">
        <div className="node">{left && <Node node={left} />}</div>
        <div className="node right">{right && <Node node={right} />}</div>
      </div>
    </>
  );
};

const BinarySearchTree = ({ bst }) => {
  return (
    <div className="flex-1 tree">
      <div className="node root">{bst.root && <Node node={bst.root} />}</div>
    </div>
  );
};

export default BinarySearchTree;
