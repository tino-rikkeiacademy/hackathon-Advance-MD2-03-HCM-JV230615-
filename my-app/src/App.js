import { useState } from 'react';
import './App.css';
import Headerbar from './Components/headerbar';
import ProductsGrid from './Components/products';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
function App() {
  return (
    <>
      <Headerbar />
      <ProductsGrid />
      <a href="#" style={{ position: 'relative', color: 'black' }}>
        <LocalGroceryStoreIcon style={{ bottom: '100px', position: 'fixed', fontSize: '100px' }} />
      </a>
    </>
  );
}

export default App;
