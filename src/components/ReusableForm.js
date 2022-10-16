import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <React.Fragment>
      <h3>Reusable Form</h3>
      <form onSubmit={props.formSubmissionHandler}>
        <input type="text" name="names" placeholder="Names" />
        <input type="text" name="locations" placeholder="Location" />
        <textarea name="issue" placeholder="Describe the issue." />
        <button type="submit">{props.buttonText}</button>
      </form>
    </React.Fragment>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;
