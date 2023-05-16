'use client';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CacheProvider } from '@chakra-ui/next-js';
import { ThemeProvider } from '@candicecz/test-design-system';

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <QueryClientProvider client={queryClient}>
      <CacheProvider>
        <ThemeProvider>{children}</ThemeProvider>
      </CacheProvider>
    </QueryClientProvider>
  );
}
