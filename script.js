document.getElementById('generateKey').addEventListener('click', function () {
    let keyLength = document.getElementById('keyLength').value;
    let errorMessage = document.getElementById('errorMessage');
    let keyContainer = document.getElementById('keyContainer');
    let keyOutput = document.getElementById('keyOutput');
    let copyButton = document.getElementById('copyKey');
    let resetButton = document.getElementById('reset');

    // Validate key length
    if (keyLength < 6 || keyLength > 30 || isNaN(keyLength)) {
        errorMessage.textContent = "Key length must be between 6 and 30!";
        errorMessage.style.opacity = 1;
        return;
    } else {
        errorMessage.style.opacity = 0;
    }

    // Generate key
    let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let key = "";
    for (let i = 0; i < keyLength; i++) {
        key += characters.charAt(Math.floor(Math.random() * characters.length));
        if ((i + 1) % 4 === 0 && i !== keyLength - 1) {
            key += "-";
        }
    }

    // Display key
    keyOutput.textContent = key;
    keyContainer.classList.remove('hidden');
});

document.getElementById('copyKey').addEventListener('click', function () {
    let keyText = document.getElementById('keyOutput').textContent;
    navigator.clipboard.writeText(keyText).then(() => {
        alert("Key copied to clipboard!");
    });
});

document.getElementById('reset').addEventListener('click', function () {
    document.getElementById('keyLength').value = "";
    document.getElementById('errorMessage').style.opacity = 0;
    document.getElementById('keyContainer').classList.add('hidden');
});
