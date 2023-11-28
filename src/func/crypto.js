// crypto.js

// Fungsi untuk menghitung invers modulus
    export function modInverse(a, m) {
        for (let i = 1; i < m; i++) {
            if ((a * i) % m === 1) {
                return i;
            }
        }
        throw new Error('Invers modulus not found.');
    }

  // Fungsi untuk mengenkripsi pesan menggunakan Affine Cipher
    export function encrypt(plainText, keyA, keyB) {
        const m = 26; // Jumlah huruf dalam alfabet Inggris
    
        return plainText
        .split('')
        .map(char => {
            if (char.match(/[a-z]/i)) {
                const isUpperCase = char === char.toUpperCase();
                const x = char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
                const encryptedChar = String.fromCharCode(((keyA * x + keyB) % m + m) % m + 'a'.charCodeAt(0));
                return isUpperCase ? encryptedChar.toUpperCase() : encryptedChar;
            } else {
                return char;
            }
        })
        .join('');
    }
    
    // Fungsi untuk mendekripsi pesan menggunakan Affine Cipher
    export function decrypt(cipherText, keyA, keyB) {
        const m = 26; // Jumlah huruf dalam alfabet Inggris
        const aInverse = modInverse(keyA, m);
    
        return cipherText
        .split('')
        .map(char => {
            if (char.match(/[a-z]/i)) {
                const isUpperCase = char === char.toUpperCase();
                const x = char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
                const decryptedChar = String.fromCharCode(((aInverse * (x - keyB)) % m + m) % m + 'a'.charCodeAt(0));
                return isUpperCase ? decryptedChar.toUpperCase() : decryptedChar;
            } else {
                return char;
            }
        })
        .join('');
    }
