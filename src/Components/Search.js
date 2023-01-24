import { useState, useEffect } from "react";

// 4 - custom hook
import { useFetch } from "../assets/data/useFech";

// 8 - errar url para mostrar erro
// "http://localhost:3001/products"
const url = "http://localhost:3000/image";

function App() {
  const [] = useState([]);

  // 4 - custom hook e 5 - refactor post
  const { data: items, httpConfig, loading, error } = useFetch(url);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");

  // 1 - resgatando dados
  // useEffect(async () => {
  //   const res = await fetch("http://localhost:3000/products");

  //   const data = await res.json();

   
  // }, []);

  // 2 - add product
  const handleSubmit = async (e) => {
    e.preventDefault();

    const image = {
      name,
      category,
    };

    // const res = await fetch("http://localhost:3000/products", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(product),
    // });

    // const addedProduct = await res.json();

    // 3 - carregamento dinâmico
    // setProducts((prevProducts) => [...prevProducts, addedProduct]);

    // 5 - refatorar post
    httpConfig(image, "POST");

    setName("");
    setCategory("");
  };

  /* 9 - desafio */
  const handleRemove = (id) => {
    httpConfig(id, "DELETE");
  };

  return (
    <div className="App">
      <h1>Lista de Filmes</h1>
      {/* 6 - state de loading */}
      {loading && <p>Carregando dados...</p>}
      {error && <p>{error}</p>}
      <ul>
        {items &&
          items.map((image) => (
            <li key={image.id}>
              {image.name} - R$: {image.category}
              {/* 9 - desafio */}
              <button onClick={() => handleRemove(image.id)}>Excluir</button>
            </li>
          ))}
      </ul>

      <div className="add-name">
        <p>Adicionar categoria:</p>
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              name="name"
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label>
            category:
            <input
              type="text"
              value={category}
              name="category"
              onChange={(e) => setCategory(e.target.value)}
            />
          </label>
          {/* 7 - state de loading no post */}
          {loading ? <p>Aguarde!</p> : <input type="submit" value="Criar" />}
        </form>
      </div>
    </div>
  );
}

export default App;

