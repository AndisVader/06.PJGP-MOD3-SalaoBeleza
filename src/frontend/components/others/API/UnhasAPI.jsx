import axios from "axios";
import React from "react";
import './CardStyle.css'

const baseURL = "http://localhost:3001/Unhas";

export default function UnhasAPI() {
  const [post, setPost] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      setPost(response.data);
    }).catch(error => {
      setError(error);
    });
  }, []);

  if (error) return `Error: ${error.message}`;
  if (!post) return "No post!"

  const arr = post.map((post, index) => {
    return (
      <section className="cards">
        <div className="card">
          <div className="box-img">
            <img src={post.url} alt="Imagem" />
          </div>
          <h2 className="nome">{post.nome}</h2>
          <address className="valor">{post.valor}</address>
          <span className="tempo">{post.tempo}</span>
          <div className="desc">
            <p>{post.desc}</p>
          </div>
        </div>
      </section>
    );
  })

  return (
    <section className="carrousel">
      <h1>Manicure e Pedicure</h1>
      <div className="cards">
        {arr}
      </div>
    </section>
  );
}