import { randomNumber } from "./NumberUtils"

class QuestionPool {
	constructor() {
		this.book1 = [
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
			{question: "staccato (stacc.)", answer: "detached"}
		]
		this.book2 = []
		this.book3 = [
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
			{question: "più", answer: "more"},
			{question: "poco", answer: "a little"},
			{question: "prima, primo", answer: "first"},
			{question: "seconda, secondo", answer: "second"},
			{question: "sempre", answer: "always"},
			{question: "senza", answer: "without"},
			{question: "subito", answer: "suddenly"},
			{question: "tanto", answer: "so much"},
			{question: "troppo", answer: "too much"},
			{question: "volta", answer: "time (prima volta: first time; seconda volta: second time)"}
		]
		this.book4 = []
		this.book5 = [
			// book 5 Italian terms
			{question: "a", answer: "at, to, by, for, in the style of"},
			{question: "accelerando, accel.", answer: "gradually getting faster"},
			{question: "ad libitum (ad lib.)", answer: "at choice, freely"},
			{question: "adagietto", answer: "rather slow (faster than adagio)"},
			{question: "adagio", answer: "slow"},
			{question: "affettuoso", answer: "tenderly"},
			{question: "affrettando", answer: "hurrying"},
			{question: "agitato", answer: "agitated"},
			{question: "al, alla", answer: "to the, in the manner of (alla breve: with a minim beat, C (2/2); alla marcia: in the style of a march)"},
			{question: "allargando", answer: "broadening (getting slower and louder)"},
			{question: "allegretto", answer: "fairly fast (slower than allegro)"},
			{question: "allegro", answer: "fast (allegro assai: very fast)"},
			{question: "amabile", answer: "amiable, preasant"},
			{question: "amore", answer: "love (amoroso: loving)"},
			{question: "andante", answer: "at a medium (walking) speed"},
			{question: "andantino", answer: "slightly faster than andante"},
			{question: "anima", answer: "soul, spirit (con anima: with feeling)"},
			{question: "animando", answer: "becoming lively"},
			{question: "animato", answer: "animated, lively"},
			{question: "appassionato", answer: "with passion"},
			{question: "assai", answer: "very"},
			{question: "attacca", answer: "go straight on"},
			{question: "ben", answer: "well"},
			{question: "brio", answer: "vigour (con brio: with vigour)"},
			{question: "calando", answer: "getting softer, dying away"},
			{question: "cantabile", answer: "in a singing style"},
			{question: "cantando", answer: "singing"},
			{question: "come", answer: "as, similar to (come prima: as before; come sopra: as above)"},
			{question: "comodo", answer: "convenient, comfotable (tempo comodo: at a comfotable (normal) speed)"},
			{question: "con, col", answer: "with"},
			{question: "crescendo, cresc.", answer: "gradually getting louder"},
			{question: "da capo, D.C.", answer: "repeat from the beginning"},
			{question: "dal segno, D.S", answer: "repeat from the sign S"},
			{question: "deciso", answer: "with determination"},
			{question: "decrescendo, decresc.", answer: "gradually getting softer"},
			{question: "delicato", answer: "delicate"},
			{question: "diminuendo, dim.", answer: "gradually getting softer"},
			{question: "dolce", answer: "sweet, soft"},
			{question: "dolente", answer: "sad, mournful"},
			{question: "dolore", answer: "grief (doloroso: sorrowful)"},
			{question: "doppio movimento", answer: "twice as fast"},
			{question: "e, ed", answer: "and"},
			{question: "energico", answer: "energetic"},
			{question: "espressivo, express., espr.", answer: "expressive (espressione: exression; con espressione: with expression)"},
			{question: "estinto", answer: "as soft as possible, lifeless"},
			{question: "f, forte", answer: "loud"},
			{question: "facile", answer: "easy"},
			{question: "ff, fortissimo", answer: "very loud"},
			{question: "fine", answer: "the end"},
			{question: "forza", answer: "force"},
			{question: "fp, fortepiano", answer: "loud, then immediately soft"},
			{question: "fuoco", answer: "fire"},
			{question: "giocoso", answer: "playful, merry"},
			{question: "giusto", answer: "proper, exact (tempo giusto: in strict time)"},
			{question: "grave", answer: "very slow, solemn"},
			{question: "grazioso", answer: "graceful"},
			{question: "incalzando", answer: "getting faster"},
			{question: "l'istesso", answer: "the same (l'istesso tempo: at the same speed)"},
			{question: "lacrimoso", answer: "sad"},
			{question: "largamente", answer: "broadly"},
			{question: "larghetto", answer: "rather slow (faster than largo)"},
			{question: "largo", answer: "slow stately"},
			{question: "legato", answer: "smoothly"},
			{question: "leggiero", answer: "light, nimble"},
			{question: "lento", answer: "slow"},
			{question: "loco", answer: "at the normal pitch (used to cancel 8va)"},
			{question: "lunga", answer: "long (lunga pausa: long pause"},
			{question: "lusingando", answer: "coaxing, in a sweet and persuasive style"},
			{question: "ma", answer: "but"},
			{question: "maestoso", answer: "majestic"},
			{question: "marcato, marc.", answer: "emphatic, accented"},
			{question: "marziale", answer: "in a military style"},
			{question: "meno", answer: "less"},
			{question: "mesto", answer: "sad"},
			{question: "mezzo", answer: "half"},
			{question: "mf, mezzo forte", answer: "moderately loud"},
			{question: "misura", answer: "measure (alla misura: in strict time; senza misura: in free time"},
			{question: "moderato", answer: "moderately"},
			{question: "molto", answer: "very, much"},
			{question: "morendo", answer: "dying away"},
			{question: "mosso, moto", answer: "movement (meno mosso: slower; con moto: with movement)"},
			{question: "mp, mezzo piano", answer: "moderately soft"},
			{question: "niente", answer: "nothing (a niente: dying away)"},
			{question: "nobilmente", answer: "nobly"},
			{question: "non", answer: "not"},
			{question: "ossia", answer: "or, alternatively"},
			{question: "p, piano", answer: "soft"},
			{question: "perdendosi", answer: "dying away"},
			{question: "pesante", answer: "heavy"},
			{question: "piacevole", answer: "pleasant"},
			{question: "piangevole", answer: "plaintive, in the style of a lament"},
			{question: "più", answer: "more"},
			{question: "pochettino, poch.", answer: "rather little"},
			{question: "poco", answer: "a little"},
			{question: "possible", answer: "possible (presto possible: as fast as possible)"},
			{question: "pp, pianissimo", answer: "very soft"},
			{question: "presto", answer: "fast (faster than allegro)"},
			{question: "prima, primo", answer: "first"},
			{question: "quasi", answer: "as if, resembling"},
			{question: "rallentando, rall.", answer: "gradually getting slower"},
			{question: "rinforzando, rf, rfz", answer: "reinforcing"},
			{question: "risoluto", answer: "bold, strong"},
			{question: "ritardando, ritard., rit.", answer: "gradually getting slower"},
			{question: "ritenuto, riten., rit.", answer: "held back"},
			{question: "ritmico", answer: "rhythmically"},
			{question: "rubato, tempo rubato", answer: "with some freedom of time"},
			{question: "scherzando, scherzoso", answer: "playful, joking"},
			{question: "seconda, secondo", answer: "second"},
			{question: "segue", answer: "go straight on"},
			{question: "semplice", answer: "simple, plain"},
			{question: "sempre", answer: "always"},
			{question: "senza", answer: "without"},
			{question: "sforzando, sforzato, sf, sfz", answer: "forced, accented"},
			{question: "simile, sim.", answer: "in the same way"},
			{question: "smorzando, smorz.", answer: "dying away"},
			{question: "sonoro", answer: "resonant, with rich tone"},
			{question: "sopra", answer: "above"},
			{question: "sostenuto", answer: "sustained"},
			{question: "sotto", answer: "below (sotto voce: in an undertone)"},
			{question: "staccato, stacc.", answer: "detached"},
			{question: "stringendo", answer: "gradually getting faster"},
			{question: "subito", answer: "suddenly"},
			{question: "tanto", answer: "so much"},
			{question: "tempo", answer: "speed, time (a tempo: in time)"},
			{question: "teneramente, tenerezza", answer: "tenderly, tenderness"},
			{question: "tenuto", answer: "held"},
			{question: "tosto", answer: "swift, rapid"},
			{question: "tranquillo", answer: "calm"},
			{question: "triste, tristamente", answer: "sad, sorrowful"},
			{question: "troppo", answer: "too much"},
			{question: "veloce", answer: "swift"},
			{question: "vivace, vivo", answer: "lively, fast"},
			{question: "voce", answer: "voice"},
			{question: "volante", answer: "flying, fast"},
			{question: "volta", answer: "time (prima volta: 1st time; seconda volta: 2nd time)"},
			// book 5 French terms
			{question: "à", answer: "to, at"},
			{question: "animé", answer: "animated, lively"},
			{question: "assez", answer: "enough, sufficiently"},
			{question: "avec", answer: "with"},
			{question: "cédez", answer: "yield, slow down"},
			{question: "douce", answer: "sweet"},
			{question: "en dehors", answer: "prominent"},
			{question: "at", answer: "and"},
			{question: "leger, legere", answer: "light"},
			{question: "légèrement", answer: "light"},
			{question: "lent", answer: "slow"},
			{question: "mais", answer: "but"},
			{question: "moins", answer: "less"},
			{question: "modéré", answer: "at a moderate speed"},
			{question: "non", answer: "not"},
			{question: "peu", answer: "little"},
			{question: "plus", answer: "more"},
			{question: "presser", answer: "hurry (en pressant: hurrying on)"},
			{question: "ralentir", answer: "slow down"},
			{question: "retenu", answer: "held back (en retenant: holding back, slowing a little)"},
			{question: "sans", answer: "without"},
			{question: "très", answer: "very"},
			{question: "un / une", answer: "one"},
			{question: "vif", answer: "lively"},
			{question: "vite", answer: "fast"},
			// book 5 German terms
			{question: "aber", answer: "but"},
			{question: "Ausdruck", answer: "expression"},
			{question: "bewegt", answer: "with movement, agitated"},
			{question: "breit", answer: "broad, expansive"},
			{question: "ein", answer: "a, one"},
			{question: "einfach", answer: "simple"},
			{question: "etwas", answer: "somewhat, rather"},
			{question: "fröhlich", answer: "cheerful, joyful"},
			{question: "immer", answer: "always"},
			{question: "langsam", answer: "slow"},
			{question: "lebhaft", answer: "lively"},
			{question: "mässig", answer: "at a moderate speed"},
			{question: "mit", answer: "with"},
			{question: "nicht", answer: "not"},
			{question: "ohne", answer: "without"},
			{question: "ruhig", answer: "peaceful"},
			{question: "schnell", answer: "fast"},
			{question: "sehr", answer: "very"},
			{question: "süss", answer: "sweet"},
			{question: "traurig", answer: "sad"},
			{question: "und", answer: "and"},
			{question: "voll", answer: "full"},
			{question: "wenig", answer: "little"},
			{question: "wieder", answer: "again"},
			{question: "zart", answer: "tender, delicate"},
			{question: "zu", answer: "to, too"},
		]
	}
}
export class QuestionPoolUtil {
	constructor() {
		this.questionPool = new QuestionPool()
		this.answerOptions = ["A", "B", "C", "D", "E"]
		this.usedQuestionList = []
		this.selectedAnswerList = []
		this.currentQuestionIdx = null
		this.currentAnswerIdxList = []
	} 

	getQuestionPool(book) {
		let questionPool = null;
		if (book == 1) {
			questionPool = this.questionPool.book1
		} else if (book == 3) {
			questionPool = this.questionPool.book3
		} else if (book == 4) {
			questionPool = this.questionPool.book4
		} else if (book == 5) {
			questionPool = this.questionPool.book5
		}
		return questionPool
	}

	getQuestionByIdx(book, idx) {
		console.log('getQuestionByIdx, book = ' + book + '; idx = ' + idx)
		return this.getQuestionPool(book)[idx].question
	}

	getAnswerByIdx(book, idx) {
		return this.getQuestionPool(book)[idx].answer
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

	pullQuestion(book) {
		console.log('pullQuestion book = ' + book)
		let questionPool = this.getQuestionPool(book)
		this.currentQuestionIdx = null
		this.currentAnswerIdxList = []
		if (this.usedQuestionList.length == questionPool.length) {
			return -1;
		}
		while (this.currentQuestionIdx == null || this.usedQuestionList.indexOf(this.currentQuestionIdx) != -1) {
			this.currentQuestionIdx = randomNumber(0, questionPool.length)
		}
		this.usedQuestionList.push(this.currentQuestionIdx)
		this.currentAnswerIdxList.push(this.currentQuestionIdx)
		return this.currentQuestionIdx
	}

	pickAnswer(book) {
		let questionPool = this.getQuestionPool(book)
		let idx = null
		while (idx == null || this.currentAnswerIdxList.indexOf(idx) != -1) {
			idx = randomNumber(0, questionPool.length)
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

	pullAnswers(book, num = 4) {
		while (this.currentAnswerIdxList.length < num) {
			this.currentAnswerIdxList.push(this.pickAnswer(book))
		}
		this.shuffleAnswer()
		return this.currentAnswerIdxList
	}
}
