'use client';

import { ReactNode, createContext, useContext } from 'react';

interface AccessContextType {
  permissions: string[];
}

const AccessContext = createContext<AccessContextType | null>(null);

export default function AccessProvider({
  permissions,
  children,
}: {
  permissions: string[];
  children: ReactNode;
}) {
  return (
    <AccessContext.Provider value={{ permissions }}>
      {children}
    </AccessContext.Provider>
  );
}

export const useAccess = () => {
  const accessContext = useContext(AccessContext);

  if (!accessContext) {
    throw new Error('useAccess has to be used within <AccessContext.Provider>');
  }

  return accessContext;
};
