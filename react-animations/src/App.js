import { useState } from 'react';
import './App.css';
import { Popup, InLinePopup, Modal} from './lib';

function App() {
  const [show, setShow] = useState(false)
  const [showModal, setModal] = useState(false)

  function closed(){
    setShow(false)
  }

  function closeModal(){
    setModal(false)
  }

  return (
    <div className="App">
      <h1>Examples - Popup</h1>
      <button onClick={() => setShow(true)}>
        <span style={{display: "flex", alignItems: "center",justifyContent:"center"}}>
          <p style={{marginRight: "10px"}}>
          Open Popup 
          </p>
          <span style={{marginRight: "20px"}}>
            <InLinePopup show={show} animated={true} size="small" onClose={closed}/>
          </span>
          <span>
            <InLinePopup show={show} animated={true} size="small" variant="trash" onClose={closed}/>
          </span>
        </span>
      </button>
      <br></br>
      <button onClick={() => setModal(true)}>
        Show Modal
      </button>
      <br></br>
      
      <section>
        <h2>no size, animated, variant=danger</h2>
        <Popup show={show} animated={true} onClose={closed} variant="danger"/>
      </section>
      <br></br>
      <section>
        <h2>size: small animated variant=warning</h2>
        <Popup show={show} size="small" animated={true} onClose={closed} variant="warning"/>
      </section>
      <br></br>
      <section>
        <h2>size: medium, animated variant=success</h2>
        <Popup show={show} size="medium" animated={true} onClose={closed} variant="success"/>
      </section>
      <br></br>
      <section>
        <h2>size: large, animated variant=trash</h2>
        <Popup show={show} size="large"animated={true} onClose={closed} variant="trash"/>
      </section>
      <Modal 
        show={showModal} 
        onClose={closeModal} 
        variant="success" 
        backdrop={false}
        message="saved!"
      />
    </div>
  );
}

export default App;
