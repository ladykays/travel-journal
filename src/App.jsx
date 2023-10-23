import Navbar from "../components/Navbar";
import Card from "../components/Card";
import data from "../data/data";
import "../src/assets/css/App.css";

export default function App() {
  const cards = data.map((cardItem) => {
    return <Card 
      key={cardItem.id}
      cardItem={cardItem}
    />
  })
  return (
    <>
      <Navbar />
      <section className="cards-list d-flex flex-column">
        {cards}
      </section>
    </>
  );
}
