import React from "react";
import "../css/hero.css";
import IconSearch from "../assets/img/icon-search.svg"



export default function Hero() {
  return (
    <header className="heroHeader">
      <div className="heroContainer">
        <h1>Encontre hashtags de maneira fácil.</h1>

        <p>
          Digite o que deseja no campo de buscas e confira os resultados do
          Twitter abaixo
        </p>
      </div>

      <div className="heroSearchBar">
                    <img src={IconSearch} alt="" /> <input type="search"  placeholder="Buscar..." /> 
                    </div>
                <div className="gradient-bg"></div>   
        </header>
      
      
  );
}