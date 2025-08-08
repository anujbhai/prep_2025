import React from "react";

interface LayoutProps {
  children: React.ReactNode;
};

function Layout(props: LayoutProps) {
  const {children} = props;
  return (
    <section>
      <h1>My Layout Section</h1>

      {children}
    </section>
  );
}

export default Layout;

