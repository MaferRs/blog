import Header from './components/Header/Header';
import About from './components/About/About';
import CardList from './components/CardList/CardList';

import './index.scss';
import './components/About/About.scss';

function App() {
  return (
    <>
      <Header />
      <main className="container">
        <About />
        <CardList />
      </main>
    </>
  );
}

export default App;
