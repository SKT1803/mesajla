import Docs from "../components/Docs.js";
import projectProposal from "../assets/Project Proposal.pdf";
import projectSpecificationsReport from "../assets/Project Specifications Report.pdf";
import "../styles/doc-cards.css";

const DocumentationsPage = () => (
  <>
    <div className="doc-cards docs-page-anim">
     

      <Docs name={"Project Proposal"} link={projectProposal} />
      <Docs name={"Project Specifications Report"} link={projectSpecificationsReport} />
    </div>

    {/* <iframe className='' src={projectProposal} height="100%" width="100%" title="Project Proposal"></iframe> */}
  </>
);

export default DocumentationsPage;
