import React from 'react'

function Alert(props) {

  // This function will take the first letter of props.alert.type that is success and convert to Success.
  const capitalize = (word)=> {
    let lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }

  return (
    // If props.alert is not null then evaluate the <div> part orelse don't evalute. Since props.alert is null so we are using this
    // props.alert &&
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
    </div>
  )
}

export default Alert