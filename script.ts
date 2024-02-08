import { images, soundFiles } from './fileNames.js'

const editBtn = document.getElementById('edit-btn') as HTMLButtonElement
const buttons = document.getElementById('buttons') as HTMLDivElement
const sounds = document.getElementById('sounds') as HTMLDivElement
let btnArray: { id: number; filename: string }[] = []
let activeSoundFile: string = ''
let activeImageFile: string = ''
let edit: boolean = false

function createSoundBtn(id: number): { id: number; filename: string } {
	return {
		id: id,
		filename: 'sounds/18076__daven__01_sb_bass_hit_c.wav'
	}
}

editBtn.addEventListener('click', (): void => {
	edit = !edit
	edit
		? ((document.body.style.backgroundColor = 'rgb(79,79,79)'),
			(editBtn.style.backgroundColor = 'white'),
			(editBtn.textContent = 'playMode'))
		: ((document.body.style.backgroundColor = 'rgb(0,51,62)'),
			(editBtn.style.backgroundColor = 'greenyellow'),
			(editBtn.textContent = 'Edit mode'))
})

for (let i: number = 0; i <= 15; i++) {
	const soundBtnObj: { id: number; filename: string } = createSoundBtn(i)
	const soundButton = document.createElement('div') as HTMLDivElement
	soundButton.id = 'soundButton'

	btnArray.push(soundBtnObj)

	soundButton.addEventListener('click', (): void => {
		let sound: HTMLAudioElement = new Audio(soundBtnObj.filename) //  get from array

		if (!edit) {
			sound.play().then()
		} else {
			soundBtnObj.filename = activeSoundFile
			soundButton.style.backgroundImage = activeImageFile
		}
	})
	buttons.append(soundButton)
}
for (let i = 0; i <= images.length; i++) {
	const obj = document.createElement('div') as HTMLDivElement
	obj.id = 'obj'
	obj.style.backgroundImage = `url('img/${images[i]}')`
	sounds.append(obj)
	const soundPreview = new Audio(`sounds/${soundFiles[i]}`)
	obj.addEventListener('click', (): void => {
		if (!edit) {
			soundPreview.play().then()
		} else {
			soundPreview.play().then()
			activeImageFile = `url(img/${images[i]})`
			activeSoundFile = `sounds/${soundFiles[i]}`
		}
	})
}
