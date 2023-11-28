import React, { useState } from 'react';
import { encrypt, decrypt } from '../func/crypto'; // Pastikan path-nya sesuai dengan struktur proyekmu
import '../App.css';

const Home = () => {
    const [inputText, setInputText] = useState('');
    const [outputText, setOutputText] = useState('');
    const [keyA, setKeyA] = useState(1);
    const [keyB, setKeyB] = useState(0);

    const handleEncrypt = () => {
        try {
            const encryptedText = encrypt(inputText, keyA, keyB);
            setOutputText(encryptedText);
        } catch (error) {
            console.error(error.message);
            setOutputText('Error: Invalid input or key.');
        }
    };

    const handleDecrypt = () => {
        try {
            const decryptedText = decrypt(outputText, keyA, keyB);
            setOutputText(decryptedText);
        } catch (error) {
            console.error(error.message);
            setOutputText('Error: Invalid input or key.');
        }
    };

    return (
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
            <textarea
                placeholder="Enter text..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            />
            <button onClick={handleEncrypt}>Encrypt</button>
            <button onClick={handleDecrypt}>Decrypt</button>
            <div className="output">
                <strong>Output:</strong>
                <div>{outputText}</div>
                {outputText.startsWith('Error') && <div className="error">{outputText}</div>}
            </div>
        </div>
    );
};

export default Home;
