



class MusicEngine {

    // In base al nome della nota calcola lo spostamento sulla tastiera
    static asOffset(note) {
        note = note.toLowerCase();
        let offset = NOTES.indexOf(note);
        if (offset === -1) {
            offset = NOTESENH.indexOf(note);
        }
        return offset;
    }

    // calcola che nota è a2 è pari a 33
    // tutte le note hanno l'ottava ES: a2 indica che è il LA sulla 5° corda (a vuoto) !
    static absNote(note) {
        const octave = note[note.length - 1];
        let pitch = asOffset(note.slice(0, -1)); // pitch = tono 
        if (pitch > -1) {
            return pitch + octave * 12; // per a2 è 33
        }
    }

    static sumInterval(intervalArray) {
        let trasformati = transformInt(intervalArray);
        return trasformati.reduce((a, b) => a + b);
    }

    static calculateDegrees(intervalArray) {
        let out = ['T']; //{'1': 'T'};
        let loops = intervalArray.length;
        let mapToBeUsed;
        switch (loops) {
            case 8:
                mapToBeUsed = intervalMap8;
                break;
            case 7:
                mapToBeUsed = intervalMap7;
                break;
            case 6:
                mapToBeUsed = intervalMap6;
                break;
            case 5:
                mapToBeUsed = intervalMap5;
                break;
            case 4:
                mapToBeUsed = intervalMap4;
                break;
            case 3:
                mapToBeUsed = intervalMap4;
                break;
            default:
                break;
        }
        for (let i = 0; i < loops; i++) {
            let subarray = intervalArray.slice(0, i + 1);
            let oo = sumInterval(subarray);
            if (oo < 12) {
                //out[`${i + 2}`] = /*  `${oo}`;  */ mapToBeUsed[`${i + 2}`][`${oo}`]; oggetto
                out.push(mapToBeUsed[`${i + 2}`][`${oo}`]); // array
            }
        }
        return out;
    }

    // ritorna un array di note che parte da startNote
    static transposeScaleByStartingNote(startNote) {
        var indexToSplit = NOTES.indexOf(startNote);
        var first = NOTES.slice(0, indexToSplit);
        var second = NOTES.slice(indexToSplit);
        return second.concat(first);
    }

    // ritorna un array di intervalli che parte da startDegree
    // (startDegree è pari 0  se si considera il 1° grado)
    static transposeIntervalsByStartingDegree(startDegree, intervals) {
        var indexToSplit = startDegree;
        var first = intervals.slice(0, indexToSplit);
        var second = intervals.slice(indexToSplit);
        return second.concat(first);
    }

    // 7 semitoni è una quinta, 5 semitoni è una quarta
    // torna il nome della T
    static moveDownByNumOfSemitones(howManySemitone, fromNote) {
        let numOfSemiton = howManySemitone > 12 ? howManySemitone % 12 : howManySemitone;
        var indexToSplit = NOTES.indexOf(fromNote);
        var first = NOTES.slice(0, indexToSplit);
        var second = NOTES.slice(indexToSplit);
        var join = second.concat(first);
        return createScale(join[numOfSemiton], SCALES.ionian)
    }

    static moveUpByNumOfSemitones(howManySemitone, fromNote) {
        let numOfSemiton = howManySemitone > 12 ? howManySemitone % 12 : howManySemitone;
        var indexToSplit = NOTES.indexOf(fromNote);
        var first = NOTES.slice(0, indexToSplit + 1);
        var second = NOTES.slice(indexToSplit + 1);
        var join = second.concat(first);
        return createScale(join[11 - numOfSemiton], SCALES.ionian);
    }

    static transformInt(intervalli) {
        return intervalli.map((e) => {
            let out;
            switch (e) {
                case '3t':
                    out = 6;
                    break;
                case '2ts':
                    out = 5;
                    break;
                case '2t':
                    out = 4;
                    break;
                case 'ts':
                    out = 3;
                    break;
                case 't':
                    out = 2;
                    break;
                case 's':
                    out = 1;
                    break;
                default:
                    break;
            }
            return out;
        });
    }

    static getName(intervalli) {
        for (const key in SCALES) {
            if (SCALES.hasOwnProperty(key) && SCALES[key].toString() == intervalli.toString()) {
                return key;
            }
        }
    }

    static compare(list1, list2, isUnion) {
        var result = [];
        for (var i = 0; i < list1.length; i++) {
            var item1 = list1[i],
                found = false;
            for (var j = 0; j < list2.length && !found; j++) {
                found = item1 === list2[j];
            }
            if (found === !!isUnion) { // isUnion is coerced to boolean
                result.push(item1);
            }
        }
        return result;
    }

    static analize(noteScala, gradi) {
        let gradiArr = []
        for (const key in gradi) {
            if (gradi.hasOwnProperty(key)) {
                gradiArr.push(gradi[key]);
            }
        }
        let out = {
            inside: {},
            consonant: {},
            dissonances: []
        };
        for (let i = 0; i < noteScala.length; i++) {
            const element = noteScala[i];
            if ((i + 1) % 2 != 0) {
                out.inside[gradiArr[i]] = element;
            } else {
                out.consonant[gradiArr[i]] = element;
            }
            out.dissonances = compare(NOTES, noteScala, false);
        }
        return out;
    }

    static calcolaAccordo(gradiScala) {
        let outStr = '';
        if (gradiScala.indexOf("b3") != -1 && gradiScala.indexOf("b7") != -1) {
            outStr = 'm7';
        } else if (gradiScala.indexOf("b3") != -1 && gradiScala.indexOf("b5") != -1) {
            outStr = 'm7/b5';
        } else if (gradiScala.indexOf("b7") != -1) {
            outStr = '7';
        } else if (gradiScala.indexOf("7") != -1) {
            outStr = 'maj7';
        }
        return outStr;
    }

    // ritorna un array di note che rappresenta la scala in base agli intervalli passati
    static createScale(startNote, intervalli) {
        let output = {
            key: startNote,
            notes: [],
            intervalli: intervalli,
            mode: getName(intervalli),
            gradi: calculateDegrees(intervalli)
        };
        var notes = transposeScaleByStartingNote(startNote, NOTES);
        var intervalli = transformInt(intervalli);
        let progressIndex = 0; // indica i salti da fare tra gli elementi della scala
        output.notes.push(notes[progressIndex]);
        intervalli.forEach((e, index) => {
            if (index != intervalli.length - 1) {
                progressIndex += e;
                output.notes.push(notes[progressIndex]);
            }
        });
        output = Object.assign(output, analize(output.notes, output.gradi));
        output.accordo = calcolaAccordo(output.gradi);
        return output;
    }

    // ritorna un array di note a partire da una nota iniziale ed un relativo grado
    static createScaleOnDegree(startNote, scale, degree) {
        let i = degree - 1;
        var mag = createScale(startNote, scale).notes; // "scala di riferimento"
        var ind = transposeIntervalsByStartingDegree(i, scale);
        return createScale(mag[i], ind);
    }

    // si creano tutti i gradi a partire da una scala maggiore
    static createAllDegree(tonica, scala) {
        var allDegree = [];
        var mag = createScale(tonica, scala).notes;
        mag.forEach((firstNote, i) => {
            var n = transposeScaleByStartingNote(firstNote, mag);
            var ind = transposeIntervalsByStartingDegree(i, selectedScale);
            allDegree.push(createScale(n[0], ind));
        });
        return allDegree;
    }

    static calculateCircleOfFifth(scale) {
        let out = [];
        let semitonArray = [42, 35, 28, 21, 14, 7];
        semitonArray.forEach((e) => out.push(moveUpByNumOfSemitones(e, scale)));
        out.push(createScale('c', SCALES.ionian))
        semitonArray.reverse().forEach((e) => out.push(moveDownByNumOfSemitones(e, scale)));
        return out;
    }

    static tableModalInterchange(scale) {
        let out = [];
        let scalaArray = [
            SCALES.lydian,
            SCALES.ionian,
            SCALES.mixolydian,
            SCALES.dorian,
            SCALES.eolian,
            SCALES.phrygian,
            SCALES.locrian
        ];
        scalaArray.forEach((e) => out.push(createScale('c', e)));
        return out;
    }
}

export { MusicEngine };