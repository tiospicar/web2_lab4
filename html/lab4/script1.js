console.log("Hello from script1.js");

const goblinImageContainer = document.createElement('div');
goblinImageContainer.id = 'goblin-image-container';
document.body.appendChild(goblinImageContainer);

for (let i = 1; i <= 20; i++) {
    const img = document.createElement('img');
    img.src = '/lab4/images/Green%20Goblin ' + i + '.jpg';
    img.alt = 'Image';
    goblinImageContainer.appendChild(img);
}