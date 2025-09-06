import { ReactNode, Suspense } from 'react';

import AppBar from '../AppBar/AppBar';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className=''>
      <AppBar />
      <Suspense fallback={null}>{children}</Suspense>
    </div>
  );
};
export default Layout;
