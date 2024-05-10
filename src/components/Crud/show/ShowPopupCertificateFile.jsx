import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import { AuthContext } from '../../../context/AuthContext';
import { server_uri } from '../../../config/config';

function ShowPopupFile({ show, handleClose, data }) {
    const [fileContent, setFileContent] = useState(null);
    const { currentUser } = useContext(AuthContext);

    useEffect(() => {
        const fetchFile = async () => {
            try {
                const response = await axios.get(`${server_uri}/certificate/${data.id}/getFile`, {
                    responseType: 'blob',
                    headers: {
                        'Authorization': `Bearer ${currentUser}`,
                        'Content-Type': 'application/json'
                    }
                });

                // Determine the type of file
                const contentType = response.headers['content-type'];
                
                // Check if it's a PDF
                if (contentType === 'application/pdf') {
                    // If it's a PDF, create a URL for it
                    const fileUrl = URL.createObjectURL(response.data);
                    setFileContent({ type: 'pdf', content: fileUrl });
                } else {
                    // If it's not a PDF, assume it's an image or other file type
                    // Convert the blob into base64 string
                    const reader = new FileReader();
                    reader.onload = () => {
                        setFileContent({ type: 'other', content: reader.result });
                    };
                    reader.readAsDataURL(response.data);
                }
            } catch (error) {
                console.error('Error fetching file:', error);
            }
        };
        
        fetchFile();
    }, [data, currentUser]);

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Certificate File</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {fileContent && fileContent.type === 'pdf' ? (
                    <embed src={fileContent.content} type="application/pdf" width="100%" height="500px" />
                ) : fileContent && fileContent.type === 'other' ? (
                    <img src={fileContent.content} alt="File" style={{ maxWidth: '100%', maxHeight: '100%' }} />
                ) : (
                    <p>Loading file...</p>
                )}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Retour
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default ShowPopupFile;
