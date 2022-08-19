import React from 'react'

export default function Alerts(props) {
  return (
    <div className="alert-pop">
        <div className={`toast align-items-center border-0 ${props.msg.bgColor + " " + props.msg.textColor}`} style={{opacity: props.msg.opacity}} role="alert" aria-live="assertive" aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    <strong>{ props.msg.msg }</strong>
                </div>
            </div>
        </div>
    </div>
  )
}
