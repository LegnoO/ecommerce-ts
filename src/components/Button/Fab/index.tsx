import React from 'react';

interface IProps {
  children?: React.ReactNode;
}

const Fab: React.FC<IProps> = ({ children }) => {
  return <>{children}</>;
};

export default Fab;
