let brickCount = 0

export const build = (totalBricks) => {
    const body = document.querySelector('body');
    const columns = 3;
    const bricksPerCol = Math.ceil(totalBricks/columns);

    for (let i = 1; i <= totalBricks; i++) {
        setTimeout(() => {
            const brick = document.createElement('div');
            brick.id  = `brick-${i}`;

            if ((i - 1) % columns === 1) {
                brick.dataset.foundation = 'true';
            }
            body.append(brick)
        }, i * 100);
    }

    brickCount = totalBricks;
}

export const repair = (...ids) => {
    for (let id of ids) {
        let brick = document.getElementById(id);
        if (brick) {
            if ((id.slice(6) +1 )% 3 === 0) {
                brick.dataset.repaired = 'in progress';
            } else {
                brick.dataset.repaired = 'true';
            }
        }
    }
}

export function destroy() {
    if (brickCount === 0) return;

    const lastBrick =  document.getElementById(`brick-${brickCount}`);
    if (lastBrick) lastBrick.remove();

    brickCount--;
}