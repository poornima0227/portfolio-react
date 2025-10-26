import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
        <ScrollAnimation animateIn="fadeInLeft">
          <Image
            src="https://res.cloudinary.com/djet3xceg/image/upload/v1761461846/girl-svgrepo-com_vvmr54.svg"
            alt="girl-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>S.Poornimalakshmi</strong>. I’m from Sivakasi and completed my BCA at Ayya Nadar Janaki Ammal College in 2025. I am a fresher, and during my studies, I gained valuable experience through academic projects and internships, which helped me enhance my technical skills, problem-solving abilities, and adaptability.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
           I have a strong passion for problem-solving and technology, which led me to work on key projects such as an Agriculture Management App (final-year project) and a Tourism Management System (internship). These experiences strengthened my technical skills, teamwork, and adaptability, earning positive feedback from mentors and peers.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            I enjoy working in collaborative environments and creating efficient, user-friendly applications. I am passionate about web development and have experience in both frontend and backend technologies, including ReactJS, Node.js, HTML, CSS, JavaScript, PHP, and MySQL. I am also skilled in design and development tools such as Figma, VS Code, and Git.
             <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>
            

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>

        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
