import React from "react";
import styled from "styled-components";
import ScrollAnimation from "react-animate-on-scroll";
import { FaGraduationCap, FaSchool, FaCalendarAlt } from "react-icons/fa";

const EducationWrapper = styled.div`
  background: #FAFAFF;
  padding: 60px 20px;
  text-align: center;
`;

const SectionTitle = styled.h1`
  font-size: 32px;
  font-weight: bold;
  color: #333;
  margin-bottom: 40px;
  text-transform: uppercase;
  background: linear-gradient(90deg, #ff7eb3, #6c63ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const EducationCard = styled.div`
  background: #ffffff;
  padding: 25px;
  margin: 20px auto;
  width: 90%;
  max-width: 600px;
  border-radius: 12px;
  box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2);
  }

  h2 {
    font-size: 22px;
    color: #333;
    display: flex;
    align-items: center;
    gap: 10px;
  }

  p {
    font-size: 16px;
    color: #666;
    margin: 8px 0;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  span {
    font-weight: bold;
    color: #ff7eb3;
  }
`;

export default function Education() {
  return (
    <EducationWrapper id="education">
      <SectionTitle>Education</SectionTitle>

      <ScrollAnimation animateIn="fadeInUp">
        <EducationCard>
          <h2><FaGraduationCap /> Park College of Engineering and Technology</h2>
          <p><FaSchool /> <span>Degree:</span> B.Tech (Information Technology)</p>
          <p><span>CGPA:</span> 7.6</p>
          <p><FaCalendarAlt /> <span>Year:</span> 2019 - 2023</p>
        </EducationCard>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" delay={200}>
        <EducationCard>
          <h2><FaSchool /> Nellai Nadar Matric Higher Secondary School</h2>
          <p><span>HSC Percentage:</span> 64.5%</p>
          <p><FaCalendarAlt /> <span>Year:</span> 2019</p>
        </EducationCard>
      </ScrollAnimation>

      <ScrollAnimation animateIn="fadeInUp" delay={400}>
        <EducationCard>
          <h2><FaSchool /> R.V Higher Secondary School</h2>
          <p><span>SSLC Percentage:</span> 86%</p>
          <p><FaCalendarAlt /> <span>Year:</span> 2017</p>
        </EducationCard>
      </ScrollAnimation>
    </EducationWrapper>
  );
}
