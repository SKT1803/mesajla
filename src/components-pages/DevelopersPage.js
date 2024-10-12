import "../styles/flip-cards.css";

import serdar from "../assets/serdar.jpeg";
import ahmet from "../assets/ahmet.jpeg";
import burak from "../assets/burak.jpeg";
import DevCart from "../components/DevCart";


const DevelopersPage = () => (
  <>
    <div className="flip-container">
    <div className="flip-cards developers-page-anim">

        <div className="card-row">
        <DevCart name={"Ahmet Tunahan"} surname={"Küçükgökce"} dep={"Computer Engineer"} imgSrc={ahmet} gitSrc={"https://github.com/Tunagkce"} linkedinSrc={"https://www.linkedin.com/in/ahmet-tunahan-k%C3%BC%C3%A7%C3%BCkg%C3%B6kce-52194795/"} />
        <DevCart name={"Altar"} surname={"Gürsoy"} dep={"Computer Engineer"} imgSrc={""} gitSrc={"#"} linkedinSrc={"#"} />
        </div>
        <div className="card-row">
        <DevCart name={"Burak Eren"} surname={"Birinci"} dep={"Computer Engineer"} imgSrc={burak} gitSrc={"https://github.com/burakbrnc"} linkedinSrc={"www.linkedin.com/in/burak-eren-birinci-617024288"} />
        <DevCart name={"Serdar Kemal"} surname={"Topkaya"} dep={"Computer Engineer"} imgSrc={serdar} gitSrc={"https://github.com/SKT1803"} linkedinSrc={"#"} />
        </div>
        </div>
    </div>
  </>
);

export default DevelopersPage;
