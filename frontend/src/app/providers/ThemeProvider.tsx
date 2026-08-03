import { App as AntDesignApp, ConfigProvider } from 'antd';
import { createContext, useContext, useMemo } from 'react';
import type { PropsWithChildren } from 'react';

interface ThemeContextValue {
  themeName: 'lam';
}

const ThemeContext = createContext<ThemeContextValue | null>(null);

export function ThemeProvider({ children }: PropsWithChildren) {
  const value = useMemo<ThemeContextValue>(() => ({ themeName: 'lam' }), []);

  return (
    <ConfigProvider
      theme={{
        token: {
          borderRadius: 8,
          colorPrimary: '#0b2f66',
          colorSuccess: '#3b826f',
          colorWarning: '#ff5c00',
          fontFamily: 'Inter, ui-sans-serif, system-ui, sans-serif',
        },
      }}
    >
      <AntDesignApp>
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
      </AntDesignApp>
    </ConfigProvider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider.');
  }

  return context;
}
