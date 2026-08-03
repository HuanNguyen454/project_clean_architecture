import { createContext, useContext, useMemo } from 'react';
import type { PropsWithChildren } from 'react';

type UserRole = 'student' | 'teacher' | 'admin';

interface AuthUser {
  id: string;
  name: string;
  role: UserRole;
}

interface AuthContextValue {
  user: AuthUser | null;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextValue | null>(null);

const demoUser: AuthUser = {
  id: 'demo-user',
  name: 'Demo User',
  role: 'teacher',
};

export function AuthProvider({ children }: PropsWithChildren) {
  const value = useMemo<AuthContextValue>(() => ({
    user: demoUser,
    isAuthenticated: true,
  }), []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider.');
  }

  return context;
}
