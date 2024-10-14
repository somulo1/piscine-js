export const pimp = (() => {
    let count = 0;
    return () => {
        let btn = document.querySelector('.button');
        if (count < styles.length) {
            btn.classList.add(styles[count]);
            count++;
        } else if (count >= styles.length && count < (2 * styles.length)) {
            btn.classList.remove(styles[2 * styles.length - count - 1]);
            count++;
        } else {
            count = 0;
        }

        if (count === styles.length || count === 2 * styles.length) {
            btn.classList.toggle('unpimp');
        }
    };
})();

export const styles = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
  ]