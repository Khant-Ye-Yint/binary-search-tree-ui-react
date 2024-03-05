import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex flex-row items-center justify-between w-full min-h-[10vh] ">
      <Link href="/">
        <div className="text-2xl font-bold cursor-pointer">
          Binary Search Tree Visualization{' '}
        </div>
      </Link>
      <div className="flex flex-row items-center justify-end gap-5">
        <Link href="/">
          <div className="">Binary Search Tree</div>
        </Link>
        <Link href="/optimal-binary-search-tree">
          <div>Optimal Binary Search Tree</div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
