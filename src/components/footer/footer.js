import React from 'react';
import Contacts from './contacts';
import Copyrights from './copyrights';
import FooterBottom from './footer-bottom';
import Form from './form';
import Map from './map';

const Footer = () => (
  <footer className="footer">
    <Form />
    <Map />
    <Contacts />
    <FooterBottom />
    <Copyrights />
  </footer>
);

export default Footer;
