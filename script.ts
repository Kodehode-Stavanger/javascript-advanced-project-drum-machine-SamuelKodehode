import { images, soundFiles } from './fileNames.js'

const editBtn = document.getElementById('edit-btn') as HTMLButtonElement
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
})

for (let i: number = 0; i <= 10; i++) {
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
	document.body.append(soundButton)
}
for (let i = 1; i <= images.length; i++) {
	const obj = document.createElement('div') as HTMLDivElement
	obj.id = 'obj'
	obj.style.backgroundImage = `url('img/${images[i]}')`
	document.body.append(obj)
	const soundPreview = new Audio(`sounds/${soundFiles[i]}`)
	obj.addEventListener('click', (): void => {
		if (!edit) {
			soundPreview.play().then()
		} else {
			activeImageFile = `url(img/${images[i]})`
			activeSoundFile = `sounds/${soundFiles[i]}`
		}
	})
}
