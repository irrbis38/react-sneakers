import Card from "./components/Card/Card";
import Drawer from "./components/Drawer";
import Header from "./components/Header";

let data = [
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12900, imageUrl: '/img/sneakers/1.jpg'},
  {title: 'Мужские Кроссовки Nike Air Max 270', price: 12900, imageUrl: '/img/sneakers/2.jpg'},
  {title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 8499, imageUrl: '/img/sneakers/3.jpg'},
  {title: 'Кроссовки Puma X Aka Boku Future Rider', price: 8999, imageUrl: '/img/sneakers/4.jpg'}
];

function App() {
  return (
    <div className="wrapper clear">

      <Drawer />

      <Header />

      <div className="content p-40">

        <div className="d-flex justify-between align-center mb-40">
          <h1>Все кроссовки</h1>
          <div className="search-block d-flex">
            <img src="/img/search.svg" alt="Search" />
            <input placeholder="Поиск..." />
          </div>
        </div>
        
        <div className="d-flex justify-start">

          {data.map( el => {
            return <Card title={el.title} price={el.price} imageUrl={el.imageUrl} onClick={() => console.log(el)}/>
          })}

        </div>

      </div>
    </div>
  );
}

export default App;
