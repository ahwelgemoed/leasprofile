import React from 'react';
import styled from 'styled-components';

const Footsy = styled.footer`
  background: #fe5500;
`;

var d = new Date();
var n = d.getFullYear();
export default function Footer() {
  return (
    <div>
      <Footsy className="page-footer font-small blue">
        <div className="container">
          <div className="row py-4 d-flex align-items-center">
            <div className="col-md-4 col-lg-4 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 footer-Left">copyright © {n} Lea de Sousa</h6>
            </div>
            <div className="col-md-4 col-lg-4 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0">
                <span>
                  <i className="fab fa-instagram" />
                </span>
                <span>
                  <i className="fab fa-twitter" />
                </span>
                <span>
                  <i className="fab fa-pinterest-p" />
                </span>
              </h6>
            </div>
            <div className="col-md-4 col-lg-4 text-center text-md-left mb-4 mb-md-0">
              <h6 className="mb-0 footer-Right">code by AH Welgemoed</h6>
            </div>
          </div>
        </div>
      </Footsy>
    </div>
  );
}
