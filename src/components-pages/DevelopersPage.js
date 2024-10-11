import "../styles/flip-cards.css";

import serdar from "../assets/serdar.jpeg";
import DevCart from "../components/DevCart";


const DevelopersPage = () => (
  <>
    <div className="flip-cards developers-page-anim">

        <DevCart name={"Ahmet Tunahan"} surname={"Küçükgökce"} dep={"Computer Engineer"} imgSrc={""} gitSrc={"#"} linkedinSrc={"#"} />
        <DevCart name={"Altar"} surname={"Gürsoy"} dep={"Computer Engineer"} imgSrc={""} gitSrc={"#"} linkedinSrc={"#"} />
        <DevCart name={"Burak Eren"} surname={"Birinci"} dep={"Computer Engineer"} imgSrc={""} gitSrc={"#"} linkedinSrc={"#"} />
        <DevCart name={"Serdar Kemal"} surname={"Topkaya"} dep={"Computer Engineer"} imgSrc={serdar} gitSrc={"https://github.com/SKT1803"} linkedinSrc={"#"} />
    </div>
  </>
);

export default DevelopersPage;
