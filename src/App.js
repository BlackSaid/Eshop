import React, { useState } from 'react';
import Argent from "./component/argent"
import coca from "./img/coca.jpg"
import fanta from "./img/fanta.jpg"
import sprite from "./img/Sprite.png"


const App = () => {
  const [articles, setArticle] = useState([
    {
      nom: "Coca cola",
      stock: 5,
      prix: 1,
      img: coca
    },
    {
      nom: "Fanta",
      stock: 5,
      prix: 2,
      img: fanta
    },
    {
      nom: "Sprite",
      stock: 5,
      prix: 2,
      img: sprite
    },

  ]);

  const [panier, setPanier] = useState([])

  const [argent, setArgent] = useState(20)

  const ajouter = (i) => {
    let acheterArticles = [...articles]
    let ajouterPanier = [...panier]
    if (acheterArticles[i].stock > 0 && argent >= acheterArticles[i].prix) {

      setArgent(argent - acheterArticles[i].prix)
      acheterArticles[i].stock --
      ajouterPanier.push(acheterArticles[i])
      setPanier(ajouterPanier)
      setArticle(acheterArticles)
    }
  }

  const suppPanier = (i) => {
    let ajouterArticles = [...articles]
    let retirerPanier = [...panier]
    setArgent(argent + retirerPanier[i].prix)
    ajouterArticles[ajouterArticles.indexOf(retirerPanier[i])].stock ++
    retirerPanier.splice(i, 1)
    setPanier(retirerPanier)
    setArticle(ajouterArticles)
  }

  return (
    <div>
      <div className="text-center">
        <Argent
          argent={argent} />

      </div>
      <div>


        <div className="container">
          <div className="d-flex">
            {articles.map((articles, i) =>
              <div key={i} className="col-4 borderCard mx-2">
                <img className="img-fluid tailleImg" src={articles.img} alt="" />
                <h2 className="ms-5">{articles.nom}</h2>
                <h2 className="ms-5">Prix : {articles.prix}€</h2>
                <h2 className="ms-5 mb-4">Stock : {articles.stock}</h2>
                <button onClick={() => ajouter(i)} className="ms-5 mb-5 fs-1 modifButton">Acheter</button>
              </div>
            )}
          </div>
        </div>

      </div>

      <div className="container">
          <h2 className="ms-2">Mon Panier :</h2>
        <div className="d-flex flex-column">
              {panier.map((articles, i) =>
              <div className="d-flex justify-content-between rounded m-2 border" key = {i}>
                <h3>{articles.nom}</h3>
                <button onClick={() => suppPanier(i)}> Delete </button>
              </div>
              )}
        </div>
      </div>




      {/* derniere div  */}
    </div>

  );
};

export default App;



