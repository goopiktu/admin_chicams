import React, { Component, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import ConfirmationDialog from '../ConfirmationDialog/ConfirmationDialog';
import './ApprovalButtons.scss';

class ApprovalButtons extends Component {
  render() {
    return (
      <Fragment>
        <div className="button-approval">
          <ConfirmationDialog>
            {showConfirmDialog => (
              <Fragment>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={showConfirmDialog(this.props.approveConfirmMsg || "Are you sure you want to approve?", this.props.onApprove)}
                  disabled={this.props.disableApproveBtn}
                >
                  {this.props.btnApproveName || "Approve"}
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={showConfirmDialog(this.props.rejectConfirmMsg || "Are you sure you want to reject?", this.props.onReject)}
                >
                  {this.props.btnRejectName || "Reject"}
                </Button>
              </Fragment>
            )}
          </ConfirmationDialog>
        </div>
      </Fragment>
    );
  }
}

export default ApprovalButtons;