import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Text from './Text/Text';
import Button from './Button/Button';
import Component from './Component/Component';
import CompEx from './Component/compEx';

function App() {
  return (
    <div className="App">
      <Header />
      <Text />
      <Button />
      <Component 
      text="Some random props text 2 Some random props text 2 Some random props text 2 Some random props text 2 Some random props text 2 Some random props text 2 Some random props text 2 "
      />
      <CompEx>
        Its children
      </CompEx>
      <Footer />
    </div>
  );
}

export default App;
