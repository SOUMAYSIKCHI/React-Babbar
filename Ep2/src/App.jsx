import './App.css'
import NewProduct from './components/NewProduct';
import Products from './components/Products';
function App() {
  const products = [
    { id: 1, title: "Groceries", amount: 50.75, date: new Date(2021, 2, 1) },
    { id: 2, title: "Electricity Bill", amount: 100.00, date: new Date(2021, 2, 5) },
    { id: 3, title: "Internet", amount: 45.99, date: new Date(2021, 2, 10) },
    { id: 4, title: "Dining Out", amount: 30.50, date: new Date(2021, 2, 12) },
    { id: 5, title: "Subscription", amount: 12.99, date: new Date(2021, 2, 15) }
  ];
  
  return (
    <div>
      <Products items={products}/>
    </div>
  )
}

export default App
