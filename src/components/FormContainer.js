import React from 'react';
import '../styles/style.scss';
import * as actions from '../actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from "prop-types";


class FormContainer extends React.PureComponent {

  state = {
    form: {
      name: '',
      surname: '',
      message: ''
    },
    errors: {
      nameError: '',
      surnameError: '',
      messageError: ''
    }
  }

  handleChange = (event) => {
    let inputField = event.target.name;
    let updatedValue = event.target.value;
    let errorValue = inputField + "Error";

    this.setState({
      form: {
        ...this.state.form,
        [ inputField ]: updatedValue
      },
      errors: {
        ...this.state.errors,
        [ errorValue ]: ''
      }
    })
  }

  //validation of input fields ; validation is applied onMouseLeave
  validateInput = (event) => {
    let fieldName = event.target.name;
    let updatedValue = event.target.value;
    let errorValue = fieldName + "Error";
    if (updatedValue !== '') {
      if (fieldName === "name" || fieldName === "surname") {
        if (/^[A-Za-z ]+$/.test(updatedValue)) {
          this.setState({
            form: {
              ...this.state.form,
              [ fieldName ]: updatedValue
            },
            errors: {
              ...this.state.errors,
              [ fieldName + 'Error' ]: ''
            }
          })
        }
        else {
          this.setState({

            errors: {
              ...this.state.errors,
              [ errorValue ]: 'Please check your ' + fieldName
            }
          })

        }
      }
      else if (fieldName === "message") {
        if (/^[ A-Za-z0-9_@./#&+-]*$/.test(updatedValue)) {
          this.setState({
            form: {
              ...this.state.form,
              [ fieldName ]: updatedValue
            },

            errors: {
              ...this.state.errors,
              [ fieldName + 'Error' ]: ''
            }
          })
        }
        else {
          this.setState({
            errors: {
              ...this.state.errors,
              [ errorValue ]: 'Please check your ' + fieldName
            }
          })
        }
      }
    } else {
      this.setState({
        errors: {
          ...this.state.errors,
          [ errorValue ]: 'Please enter your ' + fieldName
        }
      })
    }
  }

  handleForm = () => {
    const keys = Object.keys(this.state.form);
    const filteredEmptyFields = keys.filter((key) => this.state.form[ key ] === '');
    if (filteredEmptyFields.length > 0) {
      filteredEmptyFields.map(field => {
        this.setState({
          errors: {
            ...this.state.errors,
            [ field + "Error" ]: 'Please enter your ' + field
          }
        })
      })
    }
    if (this.state.errors.nameError !== '' || this.state.errors.surnameError !== '' || this.state.errors.messageError !== '') {
      console.log("there are mistakes in the form");
    }
    else {
      const { actions } = this.props;
      actions.submitForm(this.state.form);
    }
  }


  render() {
    const { form } = this.state;
    const { errors } = this.state;
    return (
      <div className="form-elements">
        <form>
          <div>
            <label>
              First name:
              <input type="text" name="name" value={form.name} onChange={this.handleChange}
                     placeholder="Enter your name" onMouseLeave={this.validateInput}/>
              <div className="error-message">{errors.nameError}</div>
            </label>
          </div>
          <div>
            <label>
              Last name:
              <input type="text" name="surname" value={form.surname} onChange={this.handleChange}
                     placeholder="Enter your last name" onMouseLeave={this.validateInput}/>
              <div className="error-message">{errors.surnameError}</div>
            </label>
          </div>
          <div>
            <label>
              Message:
              <input type="text" value={form.message} onChange={this.handleChange} name="message"
                     onMouseLeave={this.validateInput}/>
              <div className="error-message">{errors.messageError}</div>
            </label>
          </div>
        </form>
        <button className="button" onClick={this.handleForm}>SUBMIT</button>
        {this.props.messageForm.form_status === "completed" &&
        <div className="form-submitted">Thank you, your message is send!</div>}
      </div>
    )
  }
}

FormContainer.propTypes = {
  form: PropTypes.object
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
)(FormContainer);
