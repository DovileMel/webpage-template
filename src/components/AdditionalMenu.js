import React from 'react';
import '../styles/style.scss';
import * as actions from '../actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';


class AdditionalMenu extends React.PureComponent {



  handleMenuEvent = () => {
    this.props.handleMenu(this.props.menuName)
  }


  render() {
    return (
      <div className="menu-link-2">
        <a href="#" className="link-url" onClick={this.handleMenuEvent}>menu link</a>
        {this.props.menuStatus && <div className="additional-menu" onMouseLeave={this.handleMenuEvent}>
          {this.props.options.map((option, index) =>
            <div key={index}>
              {option}
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
  menuName: PropTypes.string
};

const stateToProps = ({ mainRd }) => ({
  ...mainRd
});

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}
export default connect(
  stateToProps,
  mapDispatchToProps
)(AdditionalMenu);
