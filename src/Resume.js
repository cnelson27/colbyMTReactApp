import React from 'react';
import './Resume.css';

class Resume extends React.Component {
    render() {
    return (
            <div class="container">
                <div>
                    <h2 class="resumeHeader">Colby Nelson</h2>
                    <h5 class="resumeSubHeader">cnelson27@outlook.com &mdash; </h5>
                </div>
                <span class="resumeheading">Education</span>
                <hr class="hrskills" />
                <ul>
                    <li><span class="bold">Brigham Young University</span><br />
                    Bachelor of Science Information Systems<br />
                    April 2020<br />
                    Provo, UT
                    </li>    
                </ul>
                <span class="resumeheading">Experience </span>
                <hr class="hrskills" />
                <ul>
                    <li> 
                        <span class="bold">The Church of Jesus Christ of Latter-day Saints, Quality Assurance Engineer, May 2019 – Aug 2019, Riverton, UT</span>
                        <ul>
                            <li>Plan and develop automated C# testing suite for international student loan program</li>
                            <li>Participate in Scrum-style Agile development team</li>
                            <li>Increased number of automated tests by nearly 50% in test suite from 42 to 59</li>
                        </ul>
                    </li>
                    <li> 
                        <span class="bold">BYU School of Accountancy Hub Technical Team, Web Developer, Feb 2019 – Present, Provo, UT</span>
                        <ul>
                            <li>Redesign and customize <a href="https://internationalhub.org">InternationalHub.org</a> with Wordpress tools</li>
                            <li>Maintain Hub websites (<a href="https://ipohub.org">IPOhub.org</a>, <a href="https://revenuehub.org">RevenueHub.org</a>) updated with current content</li>
                            <li>Build SEO solutions and increase accessibility</li>
                        </ul>
                    </li>
                    <li> 
                        <span class="bold">BYU Campus Accommodations, Financial Specialist, Sep 2018 – Dec 2018, Provo, UT</span>
                        <ul>
                            <li>Act as customer service representative addressing residents’ concerns and complaints</li>
                            <li>Created live Tableau report saving 30 minutes/day of employee time</li>
                        </ul>
                    </li>
                    <li> 
                        <span class="bold">BriCon Construction, Inc., Commercial Construction Worker, May 2018-Jul. 2018, Nampa, ID</span>
                        <ul>
                            <li>Install and repair city and county concrete infrastructure</li>
                            <li>Worked with eight team members to meet deadlines and manage projects</li>
                        </ul>
                    </li>
                    <li>
                        <span class="bold">Billings Parks and Recreation, Lead Counselor, May 2017-Aug. 2017, Billings, MT</span>
                        <ul>
                            <li>Planned and executed summer camp activities allowing operation of 3 simultaneous camps</li>
                            <li>Led team of eight counselors improving risk avoidance and employee scheduling</li>
                        </ul>
                    </li>
                    <li>
                        <span class="bold">The Church of Jesus Christ of Latter-Day Saints, Volunteer Representative, Aug. 2014-Aug. 2016, Santiago, Chile</span>
                        <ul>
                            <li>Lead team of 10 in setting and meeting goals</li>
                            <li>Keep reliable financial records as financial secretary</li>
                        </ul>
                    </li>
                </ul>
                <span class="resumeheading skills">Skills</span>
                
                <hr class="hrskills" />
                <ul>
                    <li><span class="bold">Information Systems Skills:</span> <br /> 
                        <ul>
                            <li><span class="bold"> Experienced:</span>
                            Python; PHP; JavaScript; Windows App GUI; Structured Query Language (MSSQL, Oracle, PostgreSQL); Azure Machine Learning Studio; Tableau; Advanced Excel Tools (Solver, Pivot Tables, Pivot Charts, Statistics Analysis); Excel Automation (VBA); UML Diagramming; Windows Server Management (IIS, DNS, AD)
                            </li>
                            <li><span class="bold"> Proficient:</span>
                                C#; MVC Web Development; HTML; CSS; Wordpress
                            </li>
                        </ul>
                    </li>
                    <li><span class="bold">Language Skills:</span> Fluent in Spanish, Conversational in French</li>
                    <li><span class="bold">Achievements:</span> <a href="https://is415machinelearningnelson.azurewebsites.net/Default.aspx">Azure Machine Learning Example (Contact Me Through LinkedIn for Authentication Details)</a></li>
                </ul>
            </div>
        );
    }
}





export default Resume;
