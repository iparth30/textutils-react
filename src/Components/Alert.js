import React from 'react'

export default function Alert(props) {
    function capitalize(string) {
        if (typeof string !== 'string' || string.trim().length === 0) {
            return '';
        }
        string = string.toLowerCase().trim();
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
  return (
    <div>
        <div className={`alert alert-${props.alert.msg} alert-dismissible fade show`} role="alert">
            <strong>{capitalize(props.alert.msg)}</strong>{props.alert.type}
        </div>
    </div>
  )
}

