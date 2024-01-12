import React from "react";
import { ScrollContainer, ScrollPage, Animator, batch, Fade, FadeIn, MoveIn, MoveOut, Sticky, StickyIn, ZoomIn, } from "react-scroll-motion";
import "./style.css";

import {FiMail} from 'react-icons/fi'
import {SiInstagram} from 'react-icons/si'
import {FiGithub} from 'react-icons/fi'
import {TiSocialLinkedin} from 'react-icons/ti'
import {IoDocumentAttach} from "react-icons/io5"

import headerImage from "../../img/header-image.jpg";
import projectOne from "../../img/Sparkify.png";
import projectTwo from "../../img/IBM.png";
import projectThree from "../../img/AirportKiosk.png";

const Home = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());

    const work = [
            {
                name: "Sparkify Project",
                link: 'https://github.com/NolanMM/Data_Scientist_Capstone_Co-op_Sparkify',  
                imageSrc: projectOne,
            },
            {
                name: "Design Recommendations IBM Project",
                link: 'https://github.com/NolanMM/Experimental-Design_Recommendations_IBM_Co_op',  
                imageSrc: projectTwo,
            },
            {
                name: "Airports Kiosk Project",
                link: 'https://github.com/NolanMM/Building-Computer_Vision_Solutions_Intern',  
                imageSrc: projectThree,
            },     
        ];

    const handleContactClick = (url) => {
        const win = window.open(url, '_blank');
        win.focus();
    }

    const handleDownloadClick = (url) => {
        window.open(url, '_blank');
    }

    return (
        <ScrollContainer>
            {/* Section 1 - Image and Introduction - Minh Nguyen - Data Scientist, Data Analysis*/}    
            <ScrollPage page={0}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                    <div className="image-container">
                        <img src={headerImage} alt="header"/>
                        <div className="black-background"></div>
                    </div>  
                </Animator>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(1000, 0))}>
                    <div className="name">
                        <h2 className="first">
                            NoLan
                        </h2>
                    </div>
                </Animator>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(-1650, 0))}>
                    <div className="name">
                        <h2 className="last">
                            Minh
                        </h2>
                    </div>
                </Animator>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(-100, 100))}>
                    <div className="position">
                        <div></div>
                        <h2 className="last">
                            Data Scientist/Analyst
                        </h2>
                    </div>
                </Animator>
            </ScrollPage>
            
            {/* Section 4 - Page 4 - Portfolio Section*/}
            <ScrollPage page={1}>
                <Animator animation={ZoomInScrollOut}>
                    <div className="section-title about-me">
                        About Me
                    </div>
                </Animator>
            </ScrollPage>

            <ScrollPage page={2}>
                <Animator animation={batch(MoveIn(100,0), Sticky(), MoveOut(-3000, -400))}>
                    <div className="background-image-container">
                        <img src={headerImage} alt="header"/>
                        <div className="black-background"></div>
                    </div>
                </Animator>
                <div className="details aboutme">
                    <Animator animation={batch(MoveIn(1500,-500), Sticky(), MoveOut(-3000, 500))}>
                        <h2 className="greeting">
                            Hello,
                        </h2>
                        <p className="bio">
                            My name is Minh Nguyen and I am a Data Scientist / Analyst with a background in statistics and computer science. 
                        </p>
                        <p className="bio">
                            I have experience in data cleaning, data wrangling, exploratory data analysis, and machine learning. 
                        </p>
                        <p className="bio"> 
                            My passionate is about using data to solve problems and make better decisions. I am also interested in data visualization and web development.
                        </p>
                    </Animator>
                </div>
            </ScrollPage>

            <ScrollPage page={3}>
                <Animator animation={ZoomInScrollOut}>
                    <div className="section-title-technical technical-skill">
                        Technical Skills
                    </div>
                </Animator>
            </ScrollPage>

            <ScrollPage page={4}>
            <div className="details">
                    <Animator animation={batch(Fade(), MoveIn(200,-500), Sticky(), MoveOut(-200, 1000))}>
                        <br/>
                        <h2 className="greeting">
                            Technical Skills
                        </h2>
                        <p className="bio">
                            My proficiency in programming languages such as Python, Java, C, C++, and C# aligns with the requirements for the Instructor, Data Visualization and Dashboarding role.
                        </p>
                        <p className="bio">
                            Additionally, I am skilled in database technologies, including MySQL, PostgreSQL, Apache SQL, and MongoDB, allowing me to manage and manipulate data effectively.
                        </p>
                        <p className="bio">
                            Furthermore, I am adept at working within the big data ecosystem, utilizing Data Warehouse, Data Lake, and Data Lake House to devise robust solutions for large-scale data processing.
                        </p>
                        <p className="bio">
                            In the realm of data analysis and visualization, I am well-versed in Databricks, Spark, Azure Synapse, and business intelligence tools like Power BI, AWS QuickSight, DAX Functions, and M Languages. 
                        </p>
                        <p className="bio">
                            Besides, I also have hands-on experience in AI and machine learning and have worked on projects involving Computer Vision, Natural Language Processing, and Conversational AI with Azure.
                        </p>
                    </Animator>
                </div>
            </ScrollPage>

            {/* Section 2 - Page 2 - Portfolio Section*/}
            <ScrollPage page={5}>
                <Animator animation={ZoomInScrollOut}>
                    <div className="section-title">
                        Projects
                    </div>
                </Animator>
            </ScrollPage>
            {/* Section 3 - Page 3 - Portfolio Section*/}
            <ScrollPage page={6}>
                <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                    <div className="portfolio-content">
                        {
                            work?.map((work, index) => {
                                return(
                                    <a href={work?.link} target="_blank" key={work?.name} rel="noreferrer">
                                        <div className="portfolio-card">
                                            <div className="project-image">
                                                <img src={work?.imageSrc} alt={work?.name}/>
                                            </div>
                                            <div className="portfolio-title">
                                                <h3>
                                                    {work?.name}
                                                </h3>
                                            </div>
                                            <div className="count">
                                                {index}
                                            </div>
                                        </div>
                                    </a>
                                ) 
                            })
                        }
                    </div>
                </Animator> 
            </ScrollPage>

            <ScrollPage page={7}>
                <Animator animation={ZoomInScrollOut}>
                    <div className="section-title contact">
                        Contacts
                    </div>
                </Animator>
            </ScrollPage>

            <ScrollPage page={8}>
                <div style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: '100%',
                }}>
                    <span style={{
                        fontSize: '40px',
                    }}>
                        <Animator animation={batch(StickyIn(), FadeIn(), ZoomIn())}>
                            <div className="section-title-contact">
                                <p>Contact Information</p>
                            </div>
                        </Animator>

                        {/* Instagram */}
                        <Animator animation={batch(Fade(),MoveIn(-1000, 0), MoveOut(-1000,0))}>
                            <div onClick={()=> handleContactClick('https://www.instagram.com/n_olanm/')} className="Instagram">
                                <SiInstagram color="white" className="contact-list-icon" />
                                <p>@n_olanm</p>
                            </div>
                        </Animator>

                        {/* Gmail */}
                        <Animator animation={batch(Fade(),MoveIn(1000, 0), MoveOut(1000,0))}>
                            <div onClick={()=> handleContactClick('mailto:minhlenguyen02@gmail.com')} className="Gmail">
                                <FiMail color="white" className="contact-list-icon"/>
                                <p>minhlenguyen02@gmail.com</p>
                            </div>
                        </Animator>
                        
                        {/* Github */}
                        <Animator animation={batch(Fade(),MoveIn(-1000, 0), MoveOut(-1000,0))}>
                            <div onClick={()=> handleContactClick('https://github.com/NolanMM')} className="Github">
                                <FiGithub color="white" className="contact-list-icon"/>
                                <p>NolanM</p>
                            </div>
                        </Animator>

                        {/* LinkedIn */}
                        <Animator animation={batch(Fade(),MoveIn(1000, 0), MoveOut(1000,0))}>
                            <div onClick={()=> handleContactClick('https://www.linkedin.com/in/nolan2810/')} className="LinkedIn">
                                <TiSocialLinkedin color="white" className="contact-list-icon"/>
                                <p>Minh (Nolan) Nguyen</p>
                            </div>
                        </Animator>

                        {/* Resumes */}
                        <Animator animation={batch(Fade(),MoveIn(-1000, 0), MoveOut(-1000,0))}>
                            <div onClick={()=> handleDownloadClick('https://drive.usercontent.google.com/download?id=1-Si-BSldvaksdgPKykErFID9XY-__Xho&export=download&authuser=1&confirm=t&uuid=b7e50143-dacf-474e-b66f-5ec5ca32cd42&at=APZUnTWyKyqTuA7SmYvVmXcN_YCi:1704976195702')} className="Resumes">
                                <IoDocumentAttach color="white" className="contact-list-icon"/>
                                <p>Minh Nguyen - Resumes</p>
                            </div>
                        </Animator>
                    </span>
                </div>
            </ScrollPage>  

            <ScrollPage page={9}>
                <Animator animation={batch(Fade(),Sticky())}>
                    <div className="section-footer">
                        <div className="footer">
                            Thank you so much for your time !
                        </div>
                    </div>
                </Animator>
            </ScrollPage>

        </ScrollContainer>
    );
}

export default Home;