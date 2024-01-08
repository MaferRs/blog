import '../../index.scss';
import './CardList.scss';
import data from './data.json';
import React, { useState } from 'react';

interface CardProps {
  title: string;
  description: string;
  image: string;
}

const Card: React.FC<CardProps> = ({ title, description, image }) => (
  <>
    <div className="card-content">
      <div className="card">
        <h2>{title}</h2>
        <img src={image} alt={title} />
      </div>
      <div className="content-description">
        <p className="description">{description}</p>
        <button className="btn-show-more">Ver Mais</button>
      </div>
    </div>
    <hr />
  </>
);

const CardList: React.FC = () => {
  const [search, setSearch] = useState('');

  const filteredData = data.filter(item =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <form className="search">
        <input
          type="text"
          placeholder="Pesquisar"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </form>

      <section className="container-card">
        {filteredData.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            description={item.description}
            image={item.image}
          />
        ))}
      </section>
    </>
  );
};

export default CardList;
