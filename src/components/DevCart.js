import { AiOutlineGithub, AiOutlineLinkedin } from "react-icons/ai";

const DevCart = ({name, surname, dep, imgSrc, gitSrc, linkedinSrc}) => {
    return (
        <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              alt=""
              src={imgSrc}
              style={{
                width: "200px",
                height: "200px",
                objectFit: "cover",
                borderRadius: "50%",
                border: "8px solid black",
                boxShadow: "0 0 10px black, 0 0 20px black, 0 0 40px black",
              }}
            />
          </div>
          <div className="flip-card-back">
            <h1 className="flip-name">{name}</h1>
            <h1 className="flip-surname">{surname}</h1>
            <p>{dep}</p>
            <div className="flip-card-back-footer">
              <div className="devs-icon-container">
                <a
                  className="icon-link"
                  href= {gitSrc}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineGithub className="flip-icon" />
                </a>
              </div>
              <div className="between"></div>
              <div className="devs-icon-container">
                <a
                  className="icon-link"
                  href= {linkedinSrc}
                  target="_blank"
                  rel="noreferrer"
                >
                  <AiOutlineLinkedin className="flip-icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

}

export default DevCart