
import "../styles/home.css";

const HomePage = () => (
  <>
    {/* <h1 className="home-page-content">Home Page</h1> */}
    <div className="flex home-page-anim">
      <div className="project-name">
        <h1>Mesajla</h1>
        <h3>Real Time Chatting Application</h3>
      </div>  
   
      <div className="content">
        <p className="text">
           Real time chatting application where you can choose your reply to your contact's message with one of the ai generated options if you want.
        </p>
      </div>
   
    </div>
  </>
);

export default HomePage;
