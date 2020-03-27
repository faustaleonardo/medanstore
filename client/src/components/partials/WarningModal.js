import React from 'react';

const WarningModal = ({ title }) => {
  return (
    <div
      className="modal fade"
      id="warningModal"
      tabIndex={-1}
      role="dialog"
      aria-labelledby="warningTitle"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <p className="modal-title" id="warningTitle">
              {title}
            </p>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to do this?</p>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-danger">
              Confirm
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WarningModal;
