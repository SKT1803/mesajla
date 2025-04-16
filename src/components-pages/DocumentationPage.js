import Docs from "../components/Docs.js";
import projectProposal from "../assets/Project Proposal.pdf";
import projectSpecificationsReport from "../assets/Project Specifications Report.pdf";
import ProjectAnalysisReport from "../assets/Project Analysis Report.pdf";
import HighLevelDesignReport from "../assets/High Level Design Report.pdf";
import LowLevelDesignReport from "../assets/Low Level Design Report.pdf";
import TestPlanReport from "../assets/Test Plan Report.pdf";
import "../styles/doc-cards.css";

const DocumentationsPage = () => (
  <>
    <div className="doc-cards docs-page-anim">
      <Docs name={"Project Proposal"} link={projectProposal} />
      <Docs name={"Project Specifications Report"} link={projectSpecificationsReport} />
      <Docs name={"Project Analysis Report"} link={ProjectAnalysisReport} />
      <Docs name={"High Level Design Report"} link={HighLevelDesignReport} />
      <Docs name={"Low Level Design Report"} link={LowLevelDesignReport} />
      <Docs name={"Test Plan Report"} link={TestPlanReport} />
    </div>

    {/* <iframe className='' src={projectProposal} height="100%" width="100%" title="Project Proposal"></iframe> */}
  </>
);

export default DocumentationsPage;
