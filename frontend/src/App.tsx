import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { MainLayout } from './layouts';
import { HomePage, AboutPage, ProgramsPage } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        } />
        <Route path="/about" element={
          <MainLayout>
            <AboutPage />
          </MainLayout>
        } />
        <Route path="/programs" element={
          <MainLayout>
            <ProgramsPage />
          </MainLayout>
        } />
      </Routes>
    </Router>
  );
}

export default App;
