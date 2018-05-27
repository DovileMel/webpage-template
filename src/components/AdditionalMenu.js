import React from 'react';
import '../styles/style.scss';
import PropTypes from 'prop-types';


class AdditionalMenu extends React.PureComponent {

  handleMenuEvent = () => {
    this.props.handleMenu(this.props.menuName)
  }

  render() {
    return (
      <div className="menu-link-2">
        <a href="#"
           className={`link-url ${this.props.menuStatus ? 'active-option' : 'inactive-option'}`}
           onMouseOver={this.handleMenuEvent}>menu link</a>
        {this.props.menuStatus && <div className="additional-menu" onMouseLeave={this.handleMenuEvent}>
          {this.props.options.map((option, index) =>
            <div key={index}>
              <div className="additional-menu-option"><a href="#">{option}</a></div>
            </div>
          )}
        </div>}
      </div>
    )
  }
}

AdditionalMenu.propTypes = {
  handleMenu: PropTypes.func,
  menuStatus: PropTypes.bool,
  menuName: PropTypes.string,
  options: PropTypes.array
};


export default AdditionalMenu;
