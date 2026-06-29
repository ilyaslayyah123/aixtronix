import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';

function getPage() {
  const hash = window.location.hash || '#/';
  const path = hash.replace('#', '').replace(/\/$/, '') || '/';
  return path;
}

function App() {
  const [page, setPage] = useState(getPage());

  useEffect(() => {
    const handleHashChange = () => {
      const newPage = getPage();
      setPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    window.addEventListener('hashchange', handleHashChange);
    window.addEventListener('popstate', handleHashChange);

    // Handle initial load
    handleHashChange();

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
      window.removeEventListener('popstate', handleHashChange);
    };
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [page]);

  const renderPage = () => {
    switch (page) {
      case '/about':
        return <About />;
      case '/services':
        return <Services />;
      case '/portfolio':
        return <Portfolio />;
      case '/contact':
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#050816]">
      <Navbar />
      <main className="flex-1">
        <div key={page} className="page-enter">
          {renderPage()}
        </div>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
