import './globals.css';

export const metadata = {
  title: 'Binary Search Tree UI',
  description: 'BST implemented with UI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className="flex flex-col justify-between items-center">
        <div className="container">{children}</div>
      </body>
    </html>
  );
}
