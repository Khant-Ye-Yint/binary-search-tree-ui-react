import './globals.css';
import Navbar from './Navbar';

export const metadata = {
  title: 'Binary Search Tree UI',
  description: 'BST implemented with UI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="flex items-center justify-center">
        <div className="container flex flex-col items-center justify-between w-full">
          <Navbar />
          <div className="w-full">{children}</div>
          <div className="flex justify-center items-center min-h-[10vh]">
            Footer :)
          </div>
        </div>
      </body>
    </html>
  );
}
