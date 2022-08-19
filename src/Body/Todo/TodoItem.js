import React from 'react'

export default function TodoItem({ todo, onDelete, showAddTodo }) {
  return (
    <>
      <div className="col-12 col-sm-12 col-md-3 col-lg-3 col-xl-3">
          <div className={`card text-start mb-3 ${todo.cardClasses}`}>
            <span className={`position-absolute top-0 translate-middle badge rounded-pill status-badge ${todo.statusClasses}`}>
              { todo.status }
            </span>
            <span className={`position-absolute top-0 translate-middle badge rounded-pill priority-badge ${todo.priorityClasses}`}>
              { todo.priority }
            </span>
            <div className="card-header bg-transparent h3" data-bs-toggle="modal" data-bs-target={`#todoViewModal_${todo.id}`}><strong> { todo.title.length > 25 ? todo.title.substring(0, 24).trim() + `...` : todo.title } </strong></div>
            <div className="card-body">
              <h5 className="card-title">{ todo.summary.length > 25 ? todo.summary.substring(0, 24).trim() + `...` : todo.summary }</h5>
              <p className="card-text">{ todo.desc.length > 126 ? todo.desc.substring(0, 125).trim() + `...` : todo.desc }</p>
            </div>
            <div className="card-footer bg-transparent">
              <button className="btn btn-outline-warning me-1 btn-md" onClick={() => showAddTodo(todo)}> Edit </button>
              <button className="btn btn-outline-danger btn-md" onClick={() => onDelete(todo)}> Delete </button>
            </div>
          </div>
      </div>

      {/* View Todo Modal */}
      <div className="fade modal" id={`todoViewModal_${todo.id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable todoModal">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel"> { todo.title.length > 41 ? todo.title.substring(0, 40).trim() + `...` : todo.title } </h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body text-start">
              <div className="mb-3">
                <h3> { todo.title } </h3>
              </div>
              <div className="mb-3">
                <h5> { todo.summary } </h5>
              </div>
              <div className="mb-3">
                <p> { todo.desc } </p>
              </div>
            </div>
            <div className="modal-footer">
              <input value={`Todo Id: ${todo.id}`} className="px-2 py-1" disabled />
              <button type="button" className="btn btn-md btn-outline-secondary" data-bs-dismiss="modal">Close</button>
              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
