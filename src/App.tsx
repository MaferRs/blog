import Header from './components/Header/Header';
import About from './components/About/About';
import './index.scss';
import './components/About/About.scss';

function App() {
  return (
    <>
      <Header></Header>
      <main className="container">
        <About></About>
      </main>
    </>
  );
}

export default App;
