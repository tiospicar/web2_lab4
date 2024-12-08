console.log("Hello from script2.js");

const vaderImageContainer = document.createElement('div');
vaderImageContainer.id = 'vader-image-container';
document.body.appendChild(vaderImageContainer);

for (let i = 1; i <= 20; i++) {
    const img = document.createElement('img');
    img.src = '/lab4/images/Vader%20' + i + '.jpg';
    img.alt = 'Image';
    vaderImageContainer.appendChild(img);
}