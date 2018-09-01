import { randomNumber } from "./NumberUtils"

export class QuestionPoolUtil {
	constructor() {
		this.questionPool = [
			// book 1
			/*
			{question: "accelerando, accel.", answer: "gradually getting faster"},
			{question: "adagio", answer: "slow"},
			{question: "allegretto", answer: "fairly fast (slower than allegro)"},
			{question: "allegro", answer: "lively, fast"},
			{question: "andante", answer: "at a walking speed"},
			{question: "lento", answer: "slow"},
			{question: "moderato", answer: "moderately"},
			{question: "rallentando (rall.)", answer: "gradually getting slower"},
			{question: "ritardando (ritard., rit.)", answer: "gradually getting slower"},
			{question: "ritenuto (riten., rit.)", answer: "held back"},
			{question: "tempo", answer: "speed, time (a tempo: in time)"},
			{question: "crescendo (cresc.)", answer: "gradually getting louder"},
			{question: "decrescendo (decresc.)", answer: "gradually getting softer"},
			{question: "f (forte)", answer: "loud"}, 
			{question: "ff (fortissimo)", answer: "very loud"},
			{question: "mf (mezzo forte)", answer: "moderately loud"},
			{question: "mp (mezzo piano)", answer: "moderately soft"},
			{question: "p (piano)", answer: "soft"},
			{question: "pp (pianissimo)", answer: "very soft"},
			{question: "cantabile", answer: "in a singing style"},
			{question: "da capo (D.C.)", answer: "repeat from the beginning"},
			{question: "dal segno (D.S.)", answer: "repeat from the sign S"},
			{question: "fine", answer: "the end"},
			{question: "legato", answer: "smoothly"},
			{question: "mezzo", answer: "half"},
			{question: "poco", answer: "a little"},
			{question: "staccato (stacc.)", answer: "detached"},
			*/

			// book 3 - Performance Directions
			{question: "ad libitum (ad lib.)", answer: "at choice, freely"},
			{question: "agitato", answer: "agitated"},
			{question: "alla marcia", answer: "in the style of a march"},
			{question: "amore", answer: "love (amoroso: loving)"},
			{question: "anima", answer: "soul, spirit (con anima: with spirit)"},
			{question: "animato", answer: "animated, lively (animando: becoming more lively)"},
			{question: "brio", answer: "vigour (con brio: with vigour)"},
			{question: "cantabile", answer: "in a singing style"},
			{question: "comodo", answer: "convenient (tempo comodo: at a comfotable speed)"},
			{question: "da capo (D.C.)", answer: "repeat from the beginning"},
			{question: "dal segno (D.S.)", answer: "repeat from the sign .S."},
			{question: "deciso", answer: "with determination"},
			{question: "delicato", answer: "delicate"},
			{question: "dolce", answer: "sweet, soft"},
			{question: "energico", answer: "energetic"},
			{question: "espressivo (espress., espr.)", answer: "expressive"},
			{question: "fine", answer: "the end"},
			{question: "forza", answer: "force"},
			{question: "giocoso", answer: "merry"},
			{question: "grave", answer: "solemn, very slow"},
			{question: "grazioso", answer: "graceful"},
			{question: "largamente", answer: "broadly"},
			{question: "legato", answer: "smoothly"},
			{question: "leggiero", answer: "light, nimble"},
			{question: "maestoso", answer: "majestic"},
			{question: "marcato (marc.)", answer: "emphatic, accented"},
			{question: "marziale", answer: "in a military style"},
			{question: "mesto", answer: "sad"},
			{question: "pesante", answer: "heavy"},
			{question: "risoluto", answer: "bold, strong"},
			{question: "ritmico", answer: "rhythmically"},
			{question: "scherzando, scherzoso", answer: "playful, joking"},
			{question: "semplice", answer: "simple, plain"},
			{question: "simile (sim.)", answer: "in the same way"},
			{question: "sostenuto", answer: "sustained"},
			{question: "staccato (stacc.)", answer: "detached"},
			{question: "tenuto", answer: "held"},
			{question: "tranquillo", answer: "calm"},
			{question: "triste, tristamente", answer: "sad, sorrowful"},

			// book 3 Tempo
			{question: "accelerando (accel.)", answer: "gradually getting faster"},
			{question: "adagietto", answer: "fairly slow"},
			{question: "adagio", answer: "slow"},
			{question: "alla breve", answer: "C 2/2, 2 minims in a bar"},
			{question: "allargando", answer: "broadening"},
			{question: "allegretto", answer: "fairly fast"},
			{question: "allegro", answer: "fast"},
			{question: "allegro assai", answer: "very fast"},
			{question: "andante", answer: "at a walking speed"},
			{question: "andantino", answer: "slightly faster or slower than andante"},
			{question: "larghetto", answer: "fairly slow"},
			{question: "largo", answer: "slow"},
			{question: "lento", answer: "slow"},
			{question: "moderato", answer: "moderate speed"},
			{question: "mosso, moto", answer: "movement (meno mosso: slower; con moto: with movement)"},
			{question: "presto", answer: "very fast"},
			{question: "rallentando (rall.)", answer: "gradually getting slower"},
			{question: "ritardando (ritard., rit.)", answer: "gradually getting slower"},
			{question: "ritenuto (riten., rit.)", answer: "held back"},
			{question: "rubato, tempo rubato", answer: "with some freedom of time"},
			{question: "stringendo", answer: "gradually getting faster"},
			{question: "tempo", answer: "speed, time (a tempo: in time)"},
			{question: "vivace, vivo", answer: "lively, fast"},

			// book 3 Dynamics
			{question: "crescendo (cresc.)", answer: "gradually getting louder"},
			{question: "decrescendo (decresc.)", answer: "gradually getting softer"},
			{question: "diminuendo (dim.)", answer: "gradually getting softer"},
			{question: "f (forte)", answer: "loud"}, 
			{question: "ff (fortissimo)", answer: "very loud"},
			{question: "fp (fortepiano)", answer: "loud then immediately soft"},
			{question: "fz (forzando)", answer: "forced, accented"},
			{question: "mf (mezzo forte)", answer: "moderately loud"},
			{question: "mp (mezzo piano)", answer: "moderately soft"},
			{question: "p (piano)", answer: "soft"},
			{question: "pp (pianissimo)", answer: "very soft"},
			{question: "sf, sfz (sforzando)", answer: "forced, accented"},

			// book 3 Others
			{question: "a", answer: "at, to, by, for, in"},
			{question: "al, alla", answer: "in the style of"},
			{question: "assai", answer: "very"},
			{question: "ben", answer: "well"},
			{question: "con, col", answer: "with"},
			{question: "e, ed", answer: "and"},
			{question: "ma", answer: "but"},
			{question: "meno", answer: "less"},
			{question: "mezzo", answer: "half"},
			{question: "molto", answer: "very, much"},
			{question: "non", answer: "not"},
			{question: "piu", answer: "more"},
			{question: "poco", answer: "a little"},
			{question: "prima, primo", answer: "first"},
			{question: "seconda, secondo", answer: "second"},
			{question: "sempre", answer: "always"},
			{question: "senza", answer: "without"},
			{question: "subito", answer: "suddenly"},
			{question: "tanto", answer: "so much"},
			{question: "troppo", answer: "too much"},
			{question: "volta", answer: "time (prima volta: first time; seconda volta: second time)"},
		]
		this.answerOptions = ["A", "B", "C", "D", "E"]
		this.usedQuestionList = []
		this.selectedAnswerList = []
		this.currentQuestionIdx = null
		this.currentAnswerIdxList = []
	} 

	getQuestionByIdx(idx) {
		return this.questionPool[idx].question
	}

	getAnswerByIdx(idx) {
		return this.questionPool[idx].answer
	}

	getAnswerOption(idx) {
		return this.answerOptions[idx]
	}

	getCurrentQuestionIdx() {
		return this.currentQuestionIdx
	}

	getCurrentAnswerIdxList() {
		return this.currentAnswerIdxList
	}

	getUsedQuestionList() {
		return this.usedQuestionList
	}

	getSelectedAnswerList() {
		return this.selectedAnswerList
	}

	clearUsedQuestionList() {
		this.usedQuestionList = []
	}

	clearSelectedAnswerList() {
		this.selectedAnswerList = []
	}

	addSelectedAnswerList(idx) {
		this.selectedAnswerList.push(idx)
	}

	pullQuestion() {
		this.currentQuestionIdx = null
		this.currentAnswerIdxList = []
		if (this.usedQuestionList.length == this.questionPool.length) {
			return -1;
		}
		while (this.currentQuestionIdx == null || this.usedQuestionList.indexOf(this.currentQuestionIdx) != -1) {
			this.currentQuestionIdx = randomNumber(0, this.questionPool.length)
		}
		this.usedQuestionList.push(this.currentQuestionIdx)
		this.currentAnswerIdxList.push(this.currentQuestionIdx)
		return this.currentQuestionIdx
	}

	pickAnswer() {
		let idx = null
		while (idx == null || this.currentAnswerIdxList.indexOf(idx) != -1) {
			idx = randomNumber(0, this.questionPool.length)
		}
		return idx
	}

	shuffleAnswer() {
		let shiftCount = randomNumber(0, this.currentAnswerIdxList.length)
		if (shiftCount > 0) {
			for (let i = 1; i <= shiftCount; i++) {
				let e = this.currentAnswerIdxList[0]
				this.currentAnswerIdxList.shift()
				this.currentAnswerIdxList.push(e)
			}
		}
	} 

	pullAnswers(num) {
		while (this.currentAnswerIdxList.length < num) {
			this.currentAnswerIdxList.push(this.pickAnswer())
		}
		this.shuffleAnswer()
		return this.currentAnswerIdxList
	}
}
