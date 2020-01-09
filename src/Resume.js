import React from 'react';
import './Resume.css';
import portraitImg from "./images/ColbyNelsonPortrait.jpg";
import byuLogo from "./images/BYU-Logo-sq.png";
import churchLogo from "./images/churchLogo.jpg";
import billingsPRLogo from "./images/billingsPR.png";
import briconLogo from "./images/bricon.jpg";
import ipohubLogo from "./images/ipohubLogo.png";
import linkedInLogo from "./images/linkedInLogo.png";

class Resume extends React.Component {
    render() {
    return (
            <div className="container opaqueBg">
                <div className="row resumeContent">
                    <div className="col-sm-12 col-md-3">
                        <img className="resumePortrait" src={portraitImg} alt="Professional Headshot Colby Nelson"/>
                        <div className="contactInfo">
                            <h2 className="contactInfoHeader">
                                Colby Nelson
                                <a href="https://www.linkedin.com/in/colby-nelson/">
                                    <img className="linkedInLogo" src={linkedInLogo} alt="LinkedIn Logo" />
                                </a>
                            </h2>
                            <a href = "mailto: cnelson27@outlook.com">
                                <p>cnelson27@outlook.com</p>
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
                            <div className="col-sm-12 col-md-1">
                            </div>
                            <div className="col-sm-12 col-md-11 jobDescription">
                                Achievements:
                                <ul className="resumeList">
                                    <li>Dean's List 2018-2019</li>
                                    <li>Member Association of Information Systems</li>
                                    <li>Member Golden Key International Honour Society</li>
                                </ul>
                            </div>
                        </div>
                            
                        
                        <h3 className="resumeheading">Experience </h3>
                        <hr className="resumeHr" />
                        <div className="jobDiv row">
                            <div className="col-sm-12 col-md-1">
                                <img className="resumeLogo" src={ipohubLogo} alt="IPOHub Logo"/>
                            </div>
                            <div className=" col-sm-12 col-md-11 jobDescription">
                                <p>
                                Web Developer<br />
                                BYU School of Accountancy Hub Technical Team<br />
                                Feb 2019&ndash;Present | Provo, UT
                                </p>
                                <ul className="resumeList">
                                    <li>Manage development team supporting <a href="https://internationalhub.org">InternationalHub.org</a>, <a href="https://ipohub.org">IPOhub.org</a>, and <a href="https://revenuehub.org">RevenueHub.org</a></li>
                                    <li>Increased site visits 150% in first year with SEO solutions</li>
                                </ul>
                            </div>
                        </div>
                        <div className="jobDiv row">
                            <div className="col-sm-12 col-md-1">
                                <img className="resumeLogo" src={churchLogo} alt="The Church of Jesus Christ of Latter-day Saints Logo"/>
                            </div>
                            <div className="col-sm-12 col-md-11 jobDescription">
                                <p>
                                Quality Assurance Engineer Intern<br />
                                The Church of Jesus Christ of Latter-day Saints<br />
                                May&ndash;Aug 2019 | Riverton, UT
                                </p>
                                <ul className="resumeList">
                                    <li>Designed automated C# test suite for Dynamics CRM-based international loan program</li>
                                    <li>Set and met goals in Scrum-style Agile development team</li>
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
                                    <li>Acted as a customer service representative addressing residents’ concerns and complaints</li>
                                    <li>Created live Tableau report saving 30 minutes/day of employee time</li>
                                </ul>
                            </div>
                        </div>
                        <div className="jobDiv row">
                            <div className="col-sm-12 col-md-1">
                                <img className="resumeLogo" src={briconLogo} alt="Bricon Construction, Inc. Logo"/>
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
                                <img className="resumeLogo" src={billingsPRLogo} alt="Billings Parks and Recreation Logo"/>
                            </div>
                            <div className=" col-sm-12 col-md-11 jobDescription">
                                <p>
                                Lead Camp Counselor<br />
                                Billings Parks and Recreation<br />
                                May&ndash;Aug 2017 | Billings, MT
                                </p>
                                <ul className="resumeList">
                                    <li>Planned and executed summer camp activities allowing operation of three simultaneous camps.</li>
                                    <li>Managed a team of eight counselors improving risk avoidance and employee scheduling.</li>
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
                                    <li>Led a team of 10 in setting and meeting goals.</li>
                                    <li>Developed processes for maintaining reliable financial records as a financial secretary.</li>
                                </ul>
                            </div>
                        </div>
                        <h3 className="resumeheading">Skills and Achievements</h3>
                        <hr className="resumeHr" />
                        Information Systems Skills:
                        <div className="isSkills">
                            Experienced:
                            <ul className="resumeList">
                                <li>Programming Languages: Python, PHP, JavaScript</li>
                                <li>Applications: Azure Machine Learning Studio, JMP, Tableau, Advanced Excel Tools (Solver, Pivot Tables, Statistical Analysis)</li>
                                <li>Other Skills: SQL (MSSQL, Oracle, PostgreSQL), Penetration Testing, Metasploit Penetration Testing Framework</li>
                            </ul>
                            Proficient:
                            <ul className="resumeList">
                                <li>C# Programming</li>
                                <li>HTML, CSS, Wordpress Web Development</li>
                                <li>UML Diagramming</li>
                                <li>Git Source Control</li>
                                <li>AWS Architecture</li>
                            </ul>
                        </div>
                        Language Skills:
                        <ul className="resumeList">
                            <li>Fluent in Spanish, Conversational in French</li>
                            <li>Excellent Communication Skills</li>
                        </ul>
                        Achievements:
                        <ul className="resumeList">
                            <li>AWS Cloud Practitioner Certification</li>
                            <li>AWS Solutions Architect &ndash; Associate</li>
                            <li><a href="https://is415machinelearningnelson.azurewebsites.net/Default.aspx">Azure Machine Learning Example</a> (Contact Me Through LinkedIn for Authentication Details)</li>
                        </ul>
                    </div>
                </div>
            </div>
                
        );
    }
}





export default Resume;
