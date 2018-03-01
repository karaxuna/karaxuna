import './index.scss';

function createCube(size = 1, color = 'green') {
    let container = document.createElement('div');
    container.className = 'cube';

    let front = document.createElement('div');
    front.className = 'cube__side cube__side--front';
    front.style.backgroundColor = color;
    container.appendChild(front);

    let back = document.createElement('div');
    back.className = 'cube__side cube__side--back';
    back.style.backgroundColor = color;
    container.appendChild(back);

    let right = document.createElement('div');
    right.className = 'cube__side cube__side--right';
    right.style.backgroundColor = color;
    container.appendChild(right);

    let left = document.createElement('div');
    left.className = 'cube__side cube__side--left';
    left.style.backgroundColor = color;
    container.appendChild(left);

    let top = document.createElement('div');
    top.className = 'cube__side cube__side--top';
    top.style.backgroundColor = color;
    container.appendChild(top);

    let bottom = document.createElement('div');
    bottom.className = 'cube__side cube__side--bottom';
    bottom.style.backgroundColor = color;
    container.appendChild(bottom);

    return container;
}

function createFigure(matrix: number[][], size = 1, color = 'green'): any {
    let y,
        x,
        cube;

    let container = document.createElement('div');
    container.classList.add('figure');
    container.style.width = matrix[0].length + 'em';
    container.style.height = matrix.length + 'em';

    for (y = 0; y < matrix.length; y++) {
        for (x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x]) {
                cube = createCube(size, color);
                cube.style.top = y + 'em';
                cube.style.left = x + 'em';
                container.appendChild(cube);
            }
        }
    }

    return container;
}

function createText(text, tagName = 'div', size = 1, color = 'green'): any {
    let container = document.createElement(tagName);
    container.className = 'text';

    text.split('').forEach(letter => {
        let figure;
        if (letter === ' ') {
            figure = document.createElement('div');
            figure.style.width = size * 8 + 'px';
            
        }
        else {
            figure = createFigure(letters[letter], size, color);
        }
        container.appendChild(figure);
    });

    container.addEventListener('animationend', e => {
        container.classList.remove('text--animating');
    });

    container.addEventListener('mouseenter', e => {
        container.classList.add('text--animating');
    });

    return container;
}

function createLink(text, href, size = 1, color = 'green') {
    let container = createText(text, 'a', size, color);
    container.href = href;
    container.target = '_blank';
    return container;
}

let letters = {
    a: [
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 1],
        [0, 1, 1, 1, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 1]
    ],
    b: [
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 1, 1, 1, 0]
    ],
    g: [
        [0, 1, 1, 0, 1],
        [1, 0, 0, 1, 1],
        [0, 1, 1, 1, 1],
        [0, 0, 0, 0, 1],
        [0, 1, 1, 1, 0]
    ],
    h: [
        [1, 0, 0, 0, 0],
        [1, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1]
    ],
    i: [
        [0, 0, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 1, 1, 0]
    ],
    k: [
        [1, 0, 0, 1, 1],
        [1, 0, 1, 0, 0],
        [1, 1, 0, 0, 0],
        [1, 0, 1, 0, 0],
        [1, 0, 0, 1, 1]
    ],
    n: [
        [1, 0, 1, 1, 0],
        [1, 1, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1]
    ],
    o: [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [0, 1, 1, 1, 0]
    ],
    r: [
        [1, 0, 1, 1, 0],
        [1, 1, 0, 0, 1],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0],
        [1, 0, 0, 0, 0]
    ],
    x: [
        [1, 0, 0, 0, 1],
        [0, 1, 0, 1, 0],
        [0, 0, 1, 0, 0],
        [0, 1, 0, 1, 0],
        [1, 0, 0, 0, 1]
    ],
    s: [
        [0, 1, 1, 1, 0],
        [1, 0, 0, 0, 0],
        [0, 1, 1, 1, 0],
        [0, 0, 0, 0, 1],
        [0, 1, 1, 1, 0]
    ],
    t: [
        [0, 1, 0, 0, 0],
        [1, 1, 1, 0, 0],
        [0, 1, 0, 0, 0],
        [0, 1, 0, 0, 1],
        [0, 0, 1, 1, 0]
    ],
    u: [
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1],
        [1, 0, 0, 1, 1],
        [0, 1, 1, 0, 1]
    ]
};

let scene = document.getElementById('scene');
let links = document.getElementById('links');

scene.appendChild(createText('karaxuna', 'div', 2, '#4caf50'));
links.appendChild(createLink('so ', 'https://stackoverflow.com/users/1265753/karaxuna', 1, '#f69c55'));
links.appendChild(createLink('github', 'https://github.com/karaxuna', 1, '#484c4f'));
