import React, { useState } from "react";
import Modal from  "react-modal";
import EditForm from "./EditForm"

Modal.setAppElement('#root')

const EditSong = (props) => {
    const [modalIsOpen, setModalIsOpen] = useState(false)
    return(
        <div className="edit">
            <button onClick = {()=> setModalIsOpen(true)}>Edit</button>
            <Modal isOpen={modalIsOpen} onRequestClose= {()=> setModalIsOpen(false)}>
                <h2>Heading</h2>
                <EditForm editSong={props.editSong}/>
                <div>
                    <button onClick= {()=> setModalIsOpen(false)}>Close</button>
                </div>
            </Modal>
        </div>
    )
}

export default EditSong;








