// Initial shift value (default is 5)
let shift = 5;

// Update shift value based on dropdown selection
document.getElementById('shiftSelect').addEventListener('change', function() {
  shift = parseInt(this.value);  // Get the selected value
});

window.encrypt = function encrypt() {
  try {
    const plainText = document.getElementById('plainText').value;
    if (!plainText) {
      alert('Error: Plain text is empty.');
      return;
    }
    
    const encryptedText = plainText
    .split('')
    .map((char) => {
      const charCode = char.charCodeAt(0);
      return String.fromCharCode(charCode + shift); // Apply shift to the char code
    })
    .join('');
    document.getElementById('encryptedText').value = encryptedText;
  } catch (error) {
    alert(`Error in encrypting: ${error.message}`);
  }
}

window.decrypt = function decrypt() {
  try {
    const encryptedText = document.getElementById('encryptedText').value;
    if (!encryptedText) {
      alert('Error: Encrypted text is empty.');
      return;
    }
    
    const plainText = encryptedText
    .split('')
    .map((char) => {
      const charCode = char.charCodeAt(0);
      return String.fromCharCode(charCode - shift); // Reverse the shift for decryption
    })
    .join('');
    document.getElementById('plainText').value = plainText;
  } catch (error) {
    alert(`Error in decrypting: ${error.message}`);
  }
}

// Copy text to clipboard
function copyText(elementId) {
  const textArea = document.getElementById(elementId);
  textArea.select();
  document.execCommand('copy');  // Execute copy command
  
  // Show toast
  const toast = document.getElementById('toast');
  toast.classList.add('show');
  
  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
