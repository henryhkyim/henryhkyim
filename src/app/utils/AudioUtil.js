import '../audio/correct.mp3'
import '../audio/incorrect.mp3'

var correctAudio = new Audio('audio/correct.mp3')
var incorrectAudio = new Audio('audio/incorrect.mp3')

export function playAudioCorrect() {
	correctAudio.play()
}

export function playAudioIncorrect() {
	incorrectAudio.play()
}