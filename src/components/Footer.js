import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footsy = styled.footer`
  background: ${props => props.theme.footy};
`;

var d = new Date();
var n = d.getFullYear();
export default function Footer() {
  return (
    <div>
      <Footsy className="page-footer font-small blue">
        <div className="container">
          <div className="row py-4 d-flex align-items-center">
            <div className="col-md-4 col-lg-4 col-sm-12    text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 footer-Left  leftyFoot ">
                copyright © {n} Lea de Sousa
              </h6>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12 text-md-left mb-4 mb-md-0">
              <h6 className="mb-0  ">
                <span>
                  <i className="fab fa-instagram" />
                </span>
                <span>
                  <i className="fab fa-pinterest-p" />
                </span>
              </h6>
            </div>
            <div className="col-md-4 col-lg-4 col-sm-12  text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 footer-Right ">
                <Link to="/leaslogin">code by AH Welgemoed</Link>
              </h6>
            </div>
          </div>
        </div>
      </Footsy>
    </div>
  );
}
