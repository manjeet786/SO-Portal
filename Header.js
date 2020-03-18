import React from 'react';
import Logo from './Ally-Logo.png';
class Header extends React.Component {
    render() {
       return (
          <div>
           
           <marquee behavior="scroll" direction="left"><h1><img src={Logo} alt="ally bank" />    SO Portal</h1></marquee>
          </div>
       );
    }
 }
 export default Header;