export const compose = () => {
    let body = document.querySelector('body');
    document.addEventListener( "keydown",(event) => {
            let eventCd = event.keyCode;
            const keyId = event.key;
            let small = 'qwertyuioplkjhgfdsazxcvbnm';
            if (small.includes(keyId)) {
                let newDiv = document.createElement('div');
                newDiv.className = 'note';
                let color = "#" + 99 + eventCd + eventCd
                newDiv.style.background = color
                newDiv.textContent = keyId;
                body.appendChild(newDiv);
            }
            if (keyId === "Backspace") {
                let allElements = document.querySelectorAll('.note');
                allElements[allElements.length - 1]?.remove();
            }
            if (keyId === "Escape") {
                let allElements = document.querySelectorAll('.note');
                allElements.forEach(element => element.remove());
            }
        }
    );
}