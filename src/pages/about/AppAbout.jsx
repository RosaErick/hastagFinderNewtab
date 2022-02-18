import React from "react";
import Ilustration from "../../assets/img/aboutIlustration.svg";
import IconGitHub from "../../assets/img/iconGithub.svg";
import IconLinkedin from "../../assets/img/iconAwesomeLinkedin.svg";
import IconMessage from "../../assets/img/iconEnvelope.svg";
import ErickRosa from "../../assets/img/erickRosa.jpeg";
import SamirSantos from "../../assets/img/samirSantos.jpeg";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import "../../css/AppStyleAbout.css";

// navbar icons
import logIcon from "../../assets/img/icon-home.svg";
import logoutIcon from "../../assets/img/icon-power-off.svg"




export default function App () {
  
  return(
      <div className="divContainer">
        <Navbar buttons={[{"title": "Home", "icon": logIcon, "route": "/","backgroundColor": "#72EFDB", "textColor": "#0A1744"}, {"title": "Sair", "icon": logoutIcon, "route": "/sair","backgroundColor": "#0A1744", "textColor": "#FFF"}]}/>
        <body>
          <div className="divAboutProject">
            <div className="descriptionAboutProject">
              <h1>Sobre o projeto</h1>
              <p>
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod
                tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero
                eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna 
                aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
                Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem 
                ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
                justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur.
              </p>
            </div>
            <div className="ilustrationAboutProject">
                <img src={Ilustration}/>
            </div>
          </div>
          <div className="divWhoWeAre">
            <h2>Quem somos</h2>
            <div className="boxAboutWe">
              <div className="profile">
                <img className="imgProfile" src="#"/>
                <h4>Daniel Denardi</h4>
                <p>
                  M.e em Ciências da Linguagem, Eng. Elétrico e Psicólogo,
                  aprimorando habilidades técnicas em Desenvolvimento Web Full Stack,
                  com foco em React. 
                </p>
                <div className="ourIcons">
                  <img src={IconGitHub}/>
                  <img src={IconMessage}/>
                  <img src={IconLinkedin}/>
                </div>
              </div>
              <div className="profile">
                <img className="imgProfile" src={ErickRosa}/>
                <h4>Erick Rosa</h4>
                <p>
                  Esp. em Tradução de Inglês, Ldo. em História, aprimorando
                  habilidades técnicas em Desenvolvimento Web, com foco em Front End.
                </p>
                <div className="ourIcons">
                  <img src={IconGitHub}/>
                  <img src={IconMessage}/>
                  <img src={IconLinkedin}/>
                </div>
              </div>
              <div className="profile">
                <img className="imgProfile" src="#"/>
                <h4>Luan Santos</h4>
                <p>
                  Tec. em Multimídia e Design Gráfico, Desenvolvedor Júnior pioneiro
                  com os Bots no Discord, e aprimorando habilidades técnicas em Desenvolvimento Web Full Stack.
                </p>
                <div className="ourIcons">
                  <img src={IconGitHub}/>
                  <img src={IconMessage}/>
                  <img src={IconLinkedin}/>
                </div>
              </div>
              <div className="profile">
                <img className="imgProfile" src={SamirSantos}/>
                <h4>Samir Santos</h4>
                <p>
                   M.e em Ciências da Educação, Ldo. em Ciências Biológicas,
                   aprimorando habilidades técnicas em Desenvolvimento Web Full Stack.
                </p>
                <div className="ourIcons">
                  <img src={IconGitHub}/>
                  <img src={IconMessage}/>
                  <img src={IconLinkedin}/>
                </div>
              </div>
            </div>
          </div>
        </body>
        <Footer />
      </div>
  )
}