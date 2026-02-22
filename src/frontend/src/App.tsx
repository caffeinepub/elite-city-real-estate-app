import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './pages/HomePage';
import Header from './components/Header';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/sonner';

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HomePage />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
