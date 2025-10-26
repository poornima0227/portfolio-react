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
            src="/girl-svgrepo-com.svg"
            alt="man-svgrepo"
          />
        </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
            Hello! My name is <strong>Poornima</strong>. I'm originally from Tamil Nadu, India, and have been studying at Ayya Nadar Janaki Ammal College. Over the years, I have gained valuable experience through my academic projects and internships, which have greatly enhanced my technical skills, problem-solving abilities, and adaptability.
            </ScrollAnimation>

            <br /><br />
            
            <ScrollAnimation animateIn="fadeInLeft">
            My journey into the world of technology began with a strong passion for problem-solving, which led me to pursue a Bachelor of Computer Applications (BCA) at Ayya Nadar Janaki Ammal College. Despite its challenges, I remained determined and built strong connections that supported me throughout my academic journey.
            During my studies, I had the opportunity to work on fascinating projects. Notably, I developed an Agriculture Management App as my final-year project and created a Tourism Management System during my internship. These projects helped me refine my technical skills and received positive feedback from my peers, mentors, and instructors.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
            Collaborating within a team toward a shared objective has been an incredibly rewarding experience for me. I am eager to continue exploring exciting projects in the future, with a particular interest in web development and cross-platform mobile development using technologies like React, Node.js, and Flutter.
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
