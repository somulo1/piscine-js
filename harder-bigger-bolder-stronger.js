export const generateLetters = () => {

    let body = document.querySelector('body')
    for (let count = 1; count <= 120; count++) {
        let letters = document.createElement('div');
        letters.textContent = randomizeAlpha();
        letters.style.fontSize = `${10 + count}px`;
        if (count <= 40) {
            letters.style.fontWeight = '300';
        } else if (count > 40 && count <= 80) {
            letters.style.fontWeight = '400';
        } else {
            letters.style.fontWeight = '600';
        }
        body.appendChild(letters);
    }
}

function randomizeAlpha() {
    const alpha = "QWERTYUIOPLKJHGFDSAZXCVBNM";
    let result = "";
    result = alpha.charAt(Math.floor(Math.random() * alpha.length));
    return result;
}