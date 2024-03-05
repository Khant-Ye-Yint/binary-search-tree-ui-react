const Node = ({ node }) => {
  const { data, left, right } = node;

  return node.data == null ? (
    ''
  ) : (
    <>
      <div
        className="value"
        id={data}
        onClick={() =>
          alert(
            `value : ${data}, left: ${left ? left.data : null}, right: ${
              right ? right.data : null
            }`
          )
        }
      >
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

const BinaryTree = ({ tree }) => {
  return (
    <div className="flex-1 tree">
      <div className="node root">{tree && <Node node={tree} />}</div>
    </div>
  );
};

export default BinaryTree;
