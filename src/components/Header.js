import React from 'react';
import '../styles/style.scss';
import AdditionalMenu from './AdditionalMenu';

const additionalMenuOption1 = [ "Lorem ipsum dolor", "Phasellus varius", "Sed bibendum arcu", "Aliquam a nibh", "Aenean porta" ];
const additionalMenuOption2 = [ "Pellentesque", "Phasellus varius", "Sed bibendum arcu", "Incidunt efficitur", "Aliquam a nibh" ];
const additionalMenuOption3 = [ "Cras gravida", "Aliquam a nibh", "Sed bibendum", "Vestibulum accum", "Aenean porta" ];
const additionalMenuOption4 = [ "Maecenas lacinia", "Phasellus varius", "Sed bibendum arcu", "Aliquam a nibh", "Aenean porta" ];

class Header extends React.PureComponent {

  state = {
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false
  }

  handleClick = (menuName) => {
    const menuOptionSelected = menuName;
    //check which menu option is currently active in order to find out which additional menu to open
    const menuStates = Object.keys(this.state);
    menuStates.map(item => {
        if (item !== menuOptionSelected) {
          this.setState({
            [ item ]: false,
          });
        } else {
          this.setState({
            [ menuOptionSelected ]: !this.state[ menuOptionSelected ],
          });
        }
      }
    )
  }

  render() {
    return (
      <div className="header">
        <div className="title">
          The Site
        </div>
        <div className="header-options">
          <div className="options links-1">
            <a href="#" className="menu-link-1">menu link</a>
            <a href="#" className="menu-link-1">menu link</a>
            <a href="#" className="menu-link-1">menu link</a>
          </div>
          <div className="options links-2">
            <AdditionalMenu menuStatus={this.state.menu1} handleMenu={this.handleClick} menuName="menu1"
                            options={additionalMenuOption1}/>
            <AdditionalMenu menuStatus={this.state.menu2} handleMenu={this.handleClick} menuName="menu2"
                            options={additionalMenuOption2}/>
            <AdditionalMenu menuStatus={this.state.menu3} handleMenu={this.handleClick} menuName="menu3"
                            options={additionalMenuOption3}/>
            <AdditionalMenu menuStatus={this.state.menu4} handleMenu={this.handleClick} menuName="menu4"
                            options={additionalMenuOption4}/>
          </div>
        </div>
      </div>
    )
  }
}


export default Header;
