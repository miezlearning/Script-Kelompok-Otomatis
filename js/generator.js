function toTitleCase(str) {
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    ).join(' ');
}

function generateStructure() {
    const input = document.getElementById('input').value;
    const lines = input.trim().split('\n');
    
    const structuredData = lines.map(line => {
        if (line.includes('\t')) {
            const parts = line.trim().split('\t');
            const nim = parts[0];
            const name = parts.slice(1).join('\t');
            return `    ["${nim}", "${toTitleCase(name)}"]`;
        } else {
            const parts = line.trim().split(' ');
            const nim = parts[0];
            const name = parts.slice(1).join(' ');
            return `    ["${nim}", "${toTitleCase(name)}"]`;
        }
    });

    const output = `const data = [\n${structuredData.join(',\n')}\n];`;
    document.getElementById('output').textContent = output;
}