import React, { useState, useRef, useContext } from 'react';
import { server_uri } from '../../../config/config';
import { AuthContext } from '../../../context/AuthContext';
import axios from 'axios'
function UploadCertificate() {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [fileName, setFileName] = useState('');
    const fileInput = useRef(null);


    const [message, setMessage] = useState(null);
    const handleFileChange = (e) => {
        setSelectedFile(e.target.files[0]);
        setFileName(e.target.files[0].name);
    };

    const { currentUser } = useContext(AuthContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!selectedFile) {
            alert('Choose File Please');
            return;
        }
        if (new Date(startDate) >= new Date(endDate)) {
            alert('Start date must be before end date');
            return;
        }

        // Create form data
        const formData = new FormData();
        formData.append('file', selectedFile);

        //dates
        formData.append('startDate', new Date(startDate));
        formData.append('endDate', new Date(endDate));

        try {
            await axios.post(`${server_uri}/certificate/upload`, formData, {
                headers: {
                    Authorization: `Bearer ${currentUser}`,
                    "Content-Type": "multipart/form-data"
                }
            });

        
            setMessage('Upload successful');

            setSelectedFile(null);
            setFileName(null);
            setStartDate(null)
            setEndDate(null)


        } catch (err) {
            console.error('Error uploading file:', err);
            setMessage('Error uploading file');
        }


        setTimeout(() => {
            setMessage(null);
        }, 5000);
    };

    return (
        <div className="upload-certificate-form">
            <h3>Add Certificate</h3>
            <form onSubmit={handleSubmit}>
                {message && <div style={{ minHeight: '50px', padding: '10px', border: '2px solid #0C6FA6', color: 'red' }}>
                    {message}

                </div>
                }
                <div>
                    <label htmlFor="start_date">Start Date:</label>
                    <input type="date" id="start_date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="end_date">End Date:</label>
                    <input type="date" id="end_date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
                </div>
                <div style={{ display: 'flex', marginTop: "20px", alignItems: 'end', justifyContent: 'end' }}>

                    <input type="file" id="file" style={{ display: 'none' }} onChange={handleFileChange} ref={fileInput} />
                    {fileName && <span>{fileName}</span>}
                    <button type="button" onClick={() => fileInput.current.click()}>Choose File</button>
                </div>
                <button type="submit">Upload</button>
            </form>
        </div>
    );
}

export default UploadCertificate;
