import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Answer.css'
const Answer=(props)=> {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Results:
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className='modal-main'>
        {props.ans && <>
          <div className="percentage">
          <h4>{(props?.ans?.data[0]*100).toFixed(2)} %</h4>
          </div>
        <div className="similarity">
        <h3>Instances Of Similarity:</h3>
        <p>
          {props?.ans?.data[1]}
        </p>
        </div>
        
        </>
        }
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default Answer