import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { EducationCard, ExperienceCard, ProjectCard } from "./ProjectCard";
import React, { useState } from 'react';
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';



export const Projects = () => {

  const [activeTab, setActiveTab] = useState('first');
  const [isVisible, setIsVisible] = useState(false);
  const handleSelect = (eventKey) => {
    setActiveTab(eventKey);
  };


  const projects = [
    {
      title: "ENACH API INTEGRATION",
      description: "Register & authenticate eMandates via net banking or debit card through NPCI e-NACH (electronic National Automated Clearing House) process is an e-mandate facility built on top of the NACH platform built and maintained by NPCI. It can help businesses such as banks, NBFCs, telecom operators, insurance companies, and other corporate entities to ensure recurring collection of funds belonging to their customers who opt for the direct debit type of payments",
      imgUrl: projImg1,
    },
    {
      title: "PERSONAL-PORTFOLIO",
      description: "In my personal portfolio project, I meticulously curated a showcase of my professional journey, highlighting key accomplishments, skills, and projects. Through a visually appealing and user-friendly interface, I present my expertise in [mention your main skills/industry], accompanied by detailed insights into projects that demonstrate my problem-solving abilities and creativity. This portfolio reflects not only my technical proficiency but also my dedication to continuous learning and growth.",
      imgUrl: projImg2,
    },
    {
      title: "A Novel Technique to Convert Hand Gestures into speech using Machine Learning",
      description: "The main focus of this is to recognize the human gestures using mathematical algorithms for computer interaction and also focus on train a system that can classify images of hand gestures and converting into the speech.",
      imgUrl: projImg3,
    },
    {
      title: "Automatic railway gate monitoring system",
      description: "It reduces the time for which gate remains closed. Automatic operation prevents errors due to manual operation",
      imgUrl: projImg1,
    },
  ];

  const educations =[
    {
      institution: "Jain College of Engineering and Technology Hubli",
      degree: "B.E in Electronics and Communication Engineering",
      year: "2022",
      score: "8.31 CGPA",
      imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/009/314/988/small/university-building-vector-illustration-isolated-on-white-background-free-png.png",
    },
    {
      institution: "SGES Rural Polytechnic Tarihal Hubli",
      degree: "Diploma in Electronics and Communication Engineering",
      year: "2019",
      score: "77.60 %",
      imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/009/314/988/small/university-building-vector-illustration-isolated-on-white-background-free-png.png",
    },
    {
      institution: "Lamington Boys High School Hubli",
      degree: "SSLC",
      year: "2016",
      score: "58.40 %",
      imgUrl: "https://static.vecteezy.com/system/resources/thumbnails/009/314/988/small/university-building-vector-illustration-isolated-on-white-background-free-png.png",
    },
  ];

  const experience =[
    {
      company: "Intelligrow Bancsoft Pvt Ltd",
      position: "Junior Software Engineer",
      duration: "01/05/2023 Present",
      location: "Hubli",
      description: "My responsibilities included writing clean, efficient code in Java, JavaScript, and crafting MySQL queries to ensure optimal database performance. Collaborating closely with team members, I participated in code reviews and made enhancements to improve overall code quality and maintainability.",
      imgUrl :"https://media.licdn.com/dms/image/C561BAQGnXc5JsJZwrQ/company-background_10000/0/1603215205489/intelligrow_finnova_cover?e=2147483647&v=beta&t=1mvokFf3i6nJx-LVM8ZU2Eib8cZbQuZ3RMmtz6EJro4"
    }
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                {activeTab === 'first' && (
            <div>
              <h2>Projects</h2>
              <p>Welcome to the Projects section! Here, you'll find a curated collection of my various endeavors, each representing a unique journey, achievement, or exploration. From personal undertakings to professional collaborations, this space serves as a portfolio of my endeavors, showcasing my skills, creativity, and dedication.</p>
            </div>
          )}
          {activeTab === 'second' && (
            <div>
              <h2>Qualifications</h2>
              <p>Education is the cornerstone of my journey, shaping both my knowledge and skills. It's where I've laid the foundation for my aspirations and cultivated a deep understanding of various subjects. Explore this section to delve into my academic background, achievements, and the institutions that have contributed to my growth. From degrees earned to specialized courses undertaken, this section offers insights into my educational pursuits and highlights the passion I bring to my learning endeavors.</p>
            </div>
          )}
          {activeTab === 'third' && (
            <div>
              <h2>Experience</h2>
              <p>Junior Software Engineer with proficiency in Java, MySQL, Javascript etc. Skilled in Eclipse IDE, Visual Studio tools etc, with hands-on experience in major project Enach Api Integration. Adept at collaborating with teams to develop and troubleshoot software solutions. Eager to apply my technical expertise and learn new technologies in a dynamic work environment.</p>
            </div>
          )}
                <Tab.Container id="projects-tabs" activeKey={activeTab} onSelect={handleSelect}>
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Projects</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Qualifications</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Experience</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                  
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <Row>
                        {
                          educations.map((education, index) => {
                            return (
                              <EducationCard
                                key={index}
                                {...education}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                    <Row>
                        {
                          experience.map((experience, index) => {
                            return (
                              <ExperienceCard
                                key={index}
                                {...experience}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
