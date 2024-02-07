import { images, soundFiles } from './fileNames.js';
const editBtn = document.getElementById('edit-btn');
let btnArray = [];
let activeSoundFile = '';
let activeImageFile = '';
let edit = false;
function createSoundBtn(id) {
    return {
        id: id,
        filename: 'sounds/18076__daven__01_sb_bass_hit_c.wav'
    };
}
editBtn.addEventListener('click', () => {
    edit = !edit;
});
for (let i = 0; i <= 10; i++) {
    const soundBtnObj = createSoundBtn(i);
    const soundButton = document.createElement('div');
    soundButton.id = 'soundButton';
    btnArray.push(soundBtnObj);
    soundButton.addEventListener('click', () => {
        let sound = new Audio(soundBtnObj.filename);
        if (!edit) {
            sound.play().then();
        }
        else {
            soundBtnObj.filename = activeSoundFile;
            soundButton.style.backgroundImage = activeImageFile;
        }
    });
    document.body.append(soundButton);
}
for (let i = 1; i <= images.length; i++) {
    const obj = document.createElement('div');
    obj.id = 'obj';
    obj.style.backgroundImage = `url('img/${images[i]}')`;
    document.body.append(obj);
    const soundPreview = new Audio(`sounds/${soundFiles[i]}`);
    obj.addEventListener('click', () => {
        if (!edit) {
            soundPreview.play().then();
        }
        else {
            activeImageFile = `url(img/${images[i]})`;
            activeSoundFile = `sounds/${soundFiles[i]}`;
        }
    });
}
//# sourceMappingURL=script.js.map