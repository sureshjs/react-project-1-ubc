import "./App.css";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";

function App() {
  return (
    <div className='App'>
      <div className='header__logo'></div>

      <div className='header__search'></div>

      <div className='header__nav'>
        <div className='nav__item'>
          <span className='nav__itemlineone'>Hello Guest</span>
          <span className='nav__itemlinetwo'>Sign In</span>
        </div>
        <div className='nav__item'>
          <span className='nav__itemlineone'>Your</span>
          <span className='nav__itemlinetwo'>Shop</span>
        </div>
        <div className='nav__item'>
          <ShoppingBasketIcon fontSize='large' />
          <span className='nav__itemlinetwo'>0</span>
        </div>
      </div>
    </div>
  );
}

export default App;
