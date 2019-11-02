import React from 'react';
import './Resume.css';
import portraitImg from "./images/ColbyNelsonPortrait.jpg";
import byuLogo from "./images/BYU-Logo-sq.png";
import churchLogo from "./images/churchLogo.jpg";

class Resume extends React.Component {
    render() {
    return (
            <div className="container opaqueBg">
                <div className="row resumeContent">
                    <div className="col-sm-12 col-md-3">
                        <img className="resumePortrait" src={portraitImg} alt="Professional Headshot Colby Nelson"/>
                        <div className="contactInfo">
                            <h2>Colby Nelson</h2>
                            <a href = "mailto: cnelson27@outlook.com">
                                <p>cnelson27@outlook.com</p>
                            </a>
                            <a href = "tel: 4068617250">
                                <p>406.861.7250</p>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-9">
                        <h3 className="resumeheading">Education</h3>
                        <hr className="resumeHr" />
                        <div className="row">
                            <div className="col-sm-12 col-md-1">
                                <img className="resumeLogo" src={byuLogo} alt="Brigham Young University Logo"/>
                            </div>
                            <div className=" col-sm-12 col-md-11 jobDescription">
                                <p>
                                Bachelor of Science &mdash; Information Systems<br />
                                Brigham Young University Marriott School of Business<br />
                                April 2021 | Provo, UT
                                </p>
                            </div>
                            <div className="col-sm-12 col-md-1">
                                <img className="resumeLogo" src={byuLogo} alt="Brigham Young University Logo"/>
                            </div>
                            <div className=" col-sm-12 col-md-11 jobDescription">
                                <p>
                                Master of Science &mdash; Information Systems<br />
                                Brigham Young University Marriott School of Business<br />
                                April 2021 | Provo, UT
                                </p>
                            </div>
                        </div>
                            
                        
                        <h3 className="resumeheading">Experience </h3>
                        <hr className="resumeHr" />
                        <div className="jobDiv row">
                            <div className="col-sm-12 col-md-1">
                                <img className="resumeLogo" src={byuLogo} alt="Brigham Young University Logo"/>
                            </div>
                            <div className=" col-sm-12 col-md-11 jobDescription">
                                <p>
                                Web Developer<br />
                                BYU School of Accountancy Hub Technical Team<br />
                                Feb 2019&ndash;Present | Provo, UT
                                </p>
                                <ul className="resumeList">
                                    <li>Redesign and customize <a href="https://internationalhub.org">InternationalHub.org</a> with Wordpress tools</li>
                                    <li>Maintain Hub websites (<a href="https://ipohub.org">IPOhub.org</a>, <a href="https://revenuehub.org">RevenueHub.org</a>) updated with current content</li>
                                    <li>Build SEO solutions and increase accessibility</li>
                                </ul>
                            </div>
                        </div>
                        <div className="jobDiv row">
                            <div className="col-sm-12 col-md-1">
                                <img className="resumeLogo" src={churchLogo} alt="Church of Jesus Christ of Latter-day Saints Logo"/>
                            </div>
                            <div className="col-sm-12 col-md-11 jobDescription">
                                <p>
                                Quality Assurance Engineer Intern<br />
                                The Church of Jesus Christ of Latter-day Saints<br />
                                May&ndash;Aug 2019 | Riverton, UT
                                </p>
                                <ul className="resumeList">
                                    <li>Planned and developed automated C# testing suite for international student loan program</li>
                                    <li>Participated in Scrum-style Agile development team</li>
                                    <li>Increased number of automated tests by nearly 50% in test suite from 42 to 59</li>
                                </ul>
                            </div>
                        </div>
                        <div className="jobDiv row">
                            <div className="col-sm-12 col-md-1">
                                <img className="resumeLogo" src={byuLogo} alt="Brigham Young University Logo"/>
                            </div>
                            <div className=" col-sm-12 col-md-11 jobDescription">
                                <p>
                                Financial Specialist<br />
                                BYU Campus Accommodations<br />
                                Sep&ndash;Dec 2018 | Provo, UT
                                </p>
                                <ul className="resumeList">
                                    <li>Act as customer service representative addressing residents’ concerns and complaints</li>
                                    <li>Created live Tableau report saving 30 minutes/day of employee time</li>
                                </ul>
                            </div>
                        </div>
                        <div className="jobDiv row">
                            <div className="col-sm-12 col-md-1">
                                <img className="resumeLogo" src={churchLogo} alt="Church of Jesus Christ of Latter-day Saints Logo"/>
                            </div>
                            <div className=" col-sm-12 col-md-11 jobDescription">
                                <p>
                                Commercial Construction Worker<br />
                                BriCon Construction, Inc.<br />
                                May&ndash;Jul 2018 | Nampa, ID
                                </p>
                                <ul className="resumeList">
                                    <li>Install and repair city and county concrete infrastructure</li>
                                    <li>Worked with eight team members to meet deadlines and manage projects</li>
                                </ul>
                            </div>
                        </div>
                        <div className="jobDiv row">
                            <div className="col-sm-12 col-md-1">
                                <img className="resumeLogo" src={churchLogo} alt="Church of Jesus Christ of Latter-day Saints Logo"/>
                            </div>
                            <div className=" col-sm-12 col-md-11 jobDescription">
                                <p>
                                Lead Camp Counselor<br />
                                Billings Parks and Recreation<br />
                                May&ndash;Aug 2017 | Billings, MT
                                </p>
                                <ul className="resumeList">
                                    <li>I planned and executed summer camp activities allowing operation of 3 simultaneous camps.</li>
                                    <li>I led a team of eight counselors improving risk avoidance and employee scheduling.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="jobDiv row">
                            <div className="col-sm-12 col-md-1">
                                <img className="resumeLogo" src={churchLogo} alt="Church of Jesus Christ of Latter-day Saints Logo"/>
                            </div>
                            <div className="col-sm-12 col-md-11 jobDescription">
                                <p>
                                Volunteer Representative<br />
                                The Church of Jesus Christ of Latter-Day Saints<br />
                                Aug 2014&ndash;Aug 2016 | Santiago, Chile
                                </p>
                                <ul className="resumeList">
                                    <li>I led a team of 10 in setting and meeting goals.</li>
                                    <li>I developed processes for maintaining reliable financial records as a financial secretary.</li>
                                </ul>
                            </div>
                        </div>
                        <h3 className="resumeheading">Education</h3>
                        <hr className="resumeHr" />
                        <b>Information Systems Skills:</b> <br /> 
                                <ul>
                                    <li><span className="bold"> Experienced:</span>
                                    Python; PHP; JavaScript; Windows App GUI; Structured Query Language (MSSQL, Oracle, PostgreSQL); Azure Machine Learning Studio; Tableau; Advanced Excel Tools (Solver, Pivot Tables, Pivot Charts, Statistics Analysis); Excel Automation (VBA); UML Diagramming; Windows Server Management (IIS, DNS, AD)
                                    </li>
                                    <li><span className="bold"> Proficient:</span>
                                        C#; MVC Web Development; HTML; CSS; Wordpress
                                    </li>
                                </ul>
                        <b>Language Skills:</b> Fluent in Spanish, Conversational in French <br />
                        <b>Achievements:</b> <a href="https://is415machinelearningnelson.azurewebsites.net/Default.aspx">Azure Machine Learning Example (Contact Me Through LinkedIn for Authentication Details)</a>
                    </div>
                </div>
            </div>
                
        );
    }
}





export default Resume;
