import React from 'react';
import '../styles/style.scss';
import * as actions from '../actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';



class FormContainer extends React.PureComponent {

  state = {}


  render() {

    return (
      <div className="form-elements">
        <form>
          <div>
          <label>
            First name:
            <input type="text" name="name" />
          </label>
          </div>
          <div>
          <label>
            Last name:
            <input type="text" name="name" />
          </label>
          </div>
          <div>
          <label>
            Message:
            <input type="text" name="name" />
          </label>
          </div>
          <input type="submit" className="submit-button" value="SUBMIT" />
        </form>


      </div>
    )
  }
}

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
)(FormContainer);
