import React, { useState } from 'react';
import { encrypt, decrypt } from '../func/crypto'; 
import { Link } from 'react-router-dom';
import '../App.css';

const Home = () => {
    const [inputText, setInputText] = useState('');
    const [outputEncrypt, setOutputEncrypt] = useState('');
    const [outputDecrypt, setOutputDecrypt] = useState('');
    const [keyA, setKeyA] = useState(1);
    const [keyB, setKeyB] = useState(1);

    const handleEncrypt = () => {
        try {
            const encryptedText = encrypt(inputText, keyA, keyB);
            setOutputEncrypt(encryptedText);
        } catch (error) {
            console.error(error.message);
            setOutputEncrypt('Error: Invalid input or key.');
        }
    };

    const handleDecrypt = () => {
        try {
            const decryptedText = decrypt(inputText, keyA, keyB);
            setOutputDecrypt(decryptedText);
        } catch (error) {
            console.error(error.message);
            setOutputDecrypt('Error: Invalid input or key.');
        }
    };

    return (
        <>
        <div className="container">
            <h1>Affine Cipher Calculator</h1>
            <label>
                Key (a):
                <input
                    type="number"
                    value={keyA}
                    onChange={(e) => setKeyA(parseInt(e.target.value))}
                />
            </label>
            <label>
                Key (b):
                <input
                    type="number"
                    value={keyB}
                    onChange={(e) => setKeyB(parseInt(e.target.value))}
                />
            </label>
            <h4>Plaintext: </h4>
            <textarea
                placeholder="Enter text..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={handleEncrypt}>Encrypt</button>
            <button onClick={handleDecrypt}>Decrypt</button>
            <div className="output">
                <strong>Encrypted Text:</strong>
                <div className="output-item">
                    <textarea value={outputEncrypt} readOnly />
                    {outputEncrypt.startsWith('Error') && <div className="error">{outputEncrypt}</div>}
                </div>
                <strong>Decrypted Text:</strong>
                <div className="output-item">
                    <textarea value={outputDecrypt} readOnly />
                    {outputDecrypt.startsWith('Error') && <div className="error">{outputDecrypt}</div>}
                </div>
            </div>
        </div>
        <footer>
            <Link to="/about">
                <h4 className='link'>About This App</h4>
            </Link>
        </footer>
        </>
    );
    
};

export default Home;
