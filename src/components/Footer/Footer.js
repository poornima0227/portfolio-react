import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.div`
  // background-image: url(https://res.cloudinary.com/djet3xceg/image/upload/v1761462099/footer_wave_vrlwvy.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 250px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div className="Container"/>
    </FooterSection>
  );
}

export default Footer;
