function toTitleCase(str) {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.remove('hidden');
    notification.style.animation = 'fade-in 1s forwards';
    setTimeout(() => {
        notification.style.animation = 'fade-out 1s forwards';
        setTimeout(() => {
            notification.classList.add('hidden');
        }, 1000);
    }, 3000);
}

function generateStructure() {
    const input = document.getElementById('input').value;
    const lines = input.trim().split('\n');
    
    const structuredData = lines.map(line => {
        if (line.includes('\t')) {
            const parts = line.trim().split('\t');
            const nim = parts[0];
            const name = parts.slice(1).join('\t');
            return `    [${nim}, "${toTitleCase(name)}"]`;
        } else {
            const parts = line.trim().split(' ');
            const nim = parts[0];
            const name = parts.slice(1).join(' ');
            return `    [${nim}, "${toTitleCase(name)}"]`;
        }
    });

    showNotification('Berhasil dibuat!');

    const output = `const data = [\n${structuredData.join(',\n')}\n];`;
    document.getElementById('output').textContent = output;
}

function copyOutput() {
    const output = document.getElementById('output');
    const range = document.createRange();
    range.selectNode(output);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    try {
        document.execCommand('copy');
        showNotification('Berhasil dicopy ke clipboard 📋!');
    } catch (err) {
        showNotification('Tidak bisa copy text: ' + err);
    }
    window.getSelection().removeAllRanges();
}