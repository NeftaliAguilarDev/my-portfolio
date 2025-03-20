import { PrimeReactProvider } from 'primereact/api'

export function AppProviders({ children }: { children: React.ReactNode }) {
  return <PrimeReactProvider>{children}</PrimeReactProvider>
}
