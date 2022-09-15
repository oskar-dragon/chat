import { ChakraProvider } from '@chakra-ui/react';

interface AppProvidersProps {
  children: React.ReactNode;
}

function AppProviders({ children }: AppProvidersProps) {
  return <ChakraProvider resetCSS>{children}</ChakraProvider>;
}

export default AppProviders;
