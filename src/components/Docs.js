import { GrDocumentPdf } from "react-icons/gr";
import "../styles/doc-cards.css";

const Docs = ({name, link}) => {

    return( 

        <a
        className="doc-link"
        href={link}
        target="_blank"
        rel="noreferrer"
      >
        <div className="doc-card">
          <div className="doc-card-top">
            <GrDocumentPdf style={{ width: "100px", height: "100px" }} />
          </div>
          <div className="doc-card-container">
            <h4>
              <b>{name}</b>
            </h4>
          </div>
        </div>
      </a>
    );


}

export default Docs