import * as React from 'react';

type LayoutProps = React.PropsWithChildren<{
  title: string;
}>;

function Layout({ children, title }: LayoutProps) {
  return (
    <div>
      <div>
        <p>{title}</p>
      </div>
      <main>{children}</main>
    </div>
  );
}

export default Layout;
