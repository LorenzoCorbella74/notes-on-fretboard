const colors_dim          = ['yellow', '#87CEFA', '#F4D03F', '#8FBC8F', 'Tomato', '#a78999', 'lightgray', '#C70039']; // 8 note
const colors              = ['yellow', '#87CEFA', '#F4D03F', '#8FBC8F', 'Tomato', '#a78999', 'lightgray']; // 7 note
const colors_penta        = ['yellow', '#87CEFA', '#F4D03F', 'Tomato', 'lightgray'];                              // 5 note
const colors_penta_six    = ['yellow', '#87CEFA', '#F4D03F', 'SlateBlue', 'Tomato', 'lightgray'];                 // 6 note
const colors_triads_seven = ['yellow', '#F4D03F', 'Tomato', 'lightgray'];                                           // 4 note
const colors_triads       = ['yellow', '#F4D03F', 'Tomato'];                                                        // 3 note

// ACCORDATURE
const Tunings = {
    E_4ths: ['e2', 'a2', 'd3', 'g3', 'c4', 'f4'],
    E_std:  ['e2', 'a2', 'd3', 'g3', 'b3', 'e4'],
    Drop_D: ['d2', 'a2', 'd3', 'g3', 'b3', 'e4'],
    G_open: ['d2', 'g2', 'd3', 'g3', 'b4', 'd4']
};

const intervalMap8 = {
    '2': {
        '1': 'b9',
        '2': '9',
        '3': '#9',
    },
    '3': {
        '3': 'b3',
        '4': '3',
        //'5':'#3',
    },
    '4': {
        '4': '3',
        '5': '4',
        '6': '#4',
    },
    '5': {
        '6': 'b5',
        '7': '5',
        '8': '#5',
    },
    '6': {
        '7': '5',
        '8': 'b6',
        '9': '6',
        '10': '#6',
    },
    '7': {
        '9': '6',
        '10': 'b7',
        '11': '7',
        //'12':'T',
    },
    '8': {
        '10': 'b7',
        '11': '7',
        //'12':'T',
    },
};
const intervalMap7 = {
    '2': {
        '1': 'b9',
        '2': '9',
        '3': '#9',
    },
    '3': {
        '3': 'b3',
        '4': '3',
        //'5':'#3',
    },
    '4': {
        '4': 'b4',
        '5': '4',
        '6': '#4',
    },
    '5': {
        '6': 'b5',
        '7': '5',
        '8': '#5',
    },
    '6': {
        '8': 'b6',
        '9': '6',
        '10': '#6',
    },
    '7': {
        '10': 'b7',
        '11': '7',
        //'12':'T',
    },
};
const intervalMap6 = {
    '2': {
        '1': 'b9',
        '2': '9',
        '3': '#9',
    },
    '3': {
        '2': '9',
        '3': '#9',
        '3': 'b3',
        '4': '3',
        '5': '4',
        '6': 'b5',
        '7': '5',
        '8': '#5',
    },
    '4': {
        '3': 'b3',
        '4': '3',
        '5': '4',
        '6': '#4',
        '7': '5',
        '8': '#5',
    },
    '5': {
        '6': 'b5',
        '7': '5',
        '8': '#5',
        '9': '6',
        '10': 'b7',
        '11': '#7',
    },
    '6': {
        '8': 'b6',
        '9': '6',
        '10': 'b7',
        '11': '7',
    }
};
const intervalMap5 = {
    '2': {
        '1': 'b9',
        '2': '9',
        '3': 'b3',
        '4': '3',
    },
    '3': {
        '3': 'b3',
        '4': '3',
        '5': '4',
    },
    '4': {
        '6': 'b5',
        '7': '5',
        '8': '#5',
    },
    '5': {
        '8': 'b6',
        '9': '6',
        '10': 'b7',
    }
};
const intervalMap4 = {
    '2': {
        '3': 'b3',
        '4': '3',
        //'5': '4',
    },
    '3': {
        '6': 'b5',
        '7': '5',
        '8': '#5',
    },
    '4': {
        '9': '7°',
        '10': 'b7',
        '11': '7',
    }
};
const NOTES = 'a a# b c c# d d# e f f# g g#'.split(' '); // è l'array di note
const NOTESENH = 'a bb b c db d eb e f gb g ab'.split(' '); // è l'array di note
const SCALES = {
    'maj':               ["2t", "ts", "2ts"],
    'maj7':              ["2t", "ts", "2t",'s'],
    '7':                 ["2t", "ts", "ts",'t'],
    'aug':               ["2t", "2t", "2t"],
    'min':               ["ts", "2t", "3t"],
    'min7':              ["ts", "2t", "ts",'ts'],
    'min7/b5':           ["ts", "ts", "2t",'ts'],
    'dim':               ["ts", "ts", "ts",'2ts'],    // TODO: 
    'dim7':              ["ts", "ts", "ts",'2ts'],

    'ionian':            ["t", "t", "s", "t", "t", "t", "s"],
    'dorian':            ["t", "s", "t", "t", "t", "s", "t"],
    'phrygian':          ["s", "t", "t", "t", "s", "t", "t"],
    'lydian':            ["t", "t", "t", "s", "t", "t", "s"],
    'mixolydian':        ["t", "t", "s", "t", "t", "s", "t"],
    'aeolian':           ["t", "s", "t", "t", "s", "t", "t"],
    'locrian':           ["s", "t", "t", "s", "t", "t", "t"],

    'harmonic-minor':    ["t", "s", "t", "t", "s", "ts", "s"],
    'locrian-#6':        ["s", "t", "t", "s", "ts", "s", "t"],
    'ionian-#5':         ["t", "t", "s", "ts", "s", "t", "s"],
    'dorian-#4':         ["t", "s", "ts", "s", "t", "s", "t"],
    'phrygian-dominant': ["s", "ts", "s", "t", "s", "t", "t"],
    'lydian-#2':         ["ts", "s", "t", "s", "t", "t", "s"],
    'super-locrian-dim': ["s", "t", "s", "t", "t", "s", "ts"],

    'melodic-minor':     ["t", "s", "t", "t", "t", "t", "s"],
    'dorian-b2':         ["s", "t", "t", "t", "t", "s", "t"],
    'lydian-aug':        ["t", "t", "t", "t", "s", "t", "s"],
    'lydian-dominant':   ["t", "t", "t", "s", "t", "s", "t"],
    'mixolydian-b6':     ["t", "t", "s", "t", "s", "t", "t"],
    'aeolian-b5':        ["t", "s", "t", "s", "t", "t", "t"],
    'super-locrian':     ["s", "t", "s", "t", "t", "t", "t"],

    'major-pentatonic':          ["t", "t", "ts", "t", "ts"],   
    'major-blues':               ["t", "s", "s", "ts", "t", "ts"],
    'dorian-pentatonic':         ["ts", "t", "t", "t", "ts"],           // R b3 4 5 6
    'phrygian-pentatonic':       ["s", "2t", "t", "ts", "t"],           // R b2 4 5 b7
    'lydian-pentatonic':         ["t", "t", "t", "ts", "ts"],           // R 2 3 #4 6
    'mixolydian-pentatonic':     ["t", "t", "ts", "ts", "t"],           // R 2 3 5 b7
    'dom-pentatonic':            ["2t", "s", "t", "ts", "t"],           // R 3 4 5 b7
    'minor-pentatonic':          ["ts", "t", "t", "ts", "t"],
    'minor-blues':               ["ts", "t", "s", "s", "ts", "t"],
    'minor6Th-blues-pentatonic': ["ts", "t", "s", "s", "t", "ts"],      // R b3 4# 5 6
    'rootless9th-pentatonic':    ["t", "t", "ts", "t", "ts"],           // 2 b3 4 5 7b TODO:
    'locrian-pentatonic':        ["ts", "t", "s", "2t", "t"],           // R b3 4 b5 b7

    'whole-tone': ["t", "t", "t", "t", "t", "t"],

    'diminished-st': ["s", "t", "s", "t", "s", "t", "s", "t"],
    'diminished-ts': ["t", "s", "t", "s", "t", "s", "t", "s"],
};

const tuning   = document.getElementById('myTuning');
const root     = document.getElementById('myRoot');
const scale    = document.getElementById('myScale');
const arpeggio = document.getElementById('myArpeggio');

// DEFAULTS
let type            = 'scala';
let visualizzazione = 'grado';
root.value          = 'c';       
tuning.value        = 'E_std'; 
scale.value         = ''; 
arpeggio.disabled   =  true;
let ac = new AudioContext();

function setType(value) {
    type = value;
    if (type == 'arpeggio') {
        scale.disabled = true;
        arpeggio.disabled = false;
    } else if (type == 'scala') {
        scale.disabled = false;
        arpeggio.disabled = true;
    }
    console.log(type);
}

function setVisualizzazione(value) {
    visualizzazione = value;
}

function addFretboard() {
    if (root.value && scale.value || root.value && arpeggio.value) {
        // si istanzia una nuova tastiera
        const scala = Fretboard({
            tuning: Tunings[tuning.value] || Tunings.E_std
        });
        // si genera la diteggiatura
        scala.scale(root.value + ' ' + (type == 'arpeggio' ? arpeggio.value : scale.value), type, visualizzazione);
    }
    // root.value  = '';
    scale.value    = '';
    arpeggio.value = '';
}

// helper per ritornare il valore
const verbatim = function (d) {
    return d;
};

// In base al nome della nota calcola lo spostamento sulla tastiera
function asOffset(note) {
    note = note.toLowerCase();
    let offset = NOTES.indexOf(note);
    if (offset === -1) {
        offset = NOTESENH.indexOf(note);
    }
    return offset;
}

// calcola che nota è a2 è pari a 33
// tutte le note hanno l'ottava ES: a2 indica che è il LA sulla 5° corda (a vuoto) !
function absNote(note) {
    const octave = note[note.length - 1];
    let pitch = asOffset(note.slice(0, -1)); // pitch = tono 
    if (pitch > -1) {
        return pitch + octave * 12; // per a2 è 33
    }
}

function sumInterval(intervalArray) {
    let trasformati = transformInt(intervalArray);
    return trasformati.reduce((a, b) => a + b);
}

function calculateDegrees(intervalArray) {
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
function transposeScaleByStartingNote(startNote) {
    var indexToSplit = NOTES.indexOf(startNote);
    var first = NOTES.slice(0, indexToSplit);
    var second = NOTES.slice(indexToSplit);
    return second.concat(first);
}

// ritorna un array di intervalli che parte da startDegree
// (startDegree è pari 0  se si considera il 1° grado)
function transposeIntervalsByStartingDegree(startDegree, intervals) {
    var indexToSplit = startDegree;
    var first = intervals.slice(0, indexToSplit);
    var second = intervals.slice(indexToSplit);
    return second.concat(first);
}

// 7 semitoni è una quinta, 5 semitoni è una quarta
// torna il nome della T
function moveDownByNumOfSemitones(howManySemitone, fromNote) {
    let numOfSemiton = howManySemitone > 12 ? howManySemitone % 12 : howManySemitone;
    var indexToSplit = NOTES.indexOf(fromNote);
    var first = NOTES.slice(0, indexToSplit);
    var second = NOTES.slice(indexToSplit);
    var join = second.concat(first);
    return createScale(join[numOfSemiton], SCALES.ionian)
}

function moveUpByNumOfSemitones(howManySemitone, fromNote) {
    let numOfSemiton = howManySemitone > 12 ? howManySemitone % 12 : howManySemitone;
    var indexToSplit = NOTES.indexOf(fromNote);
    var first = NOTES.slice(0, indexToSplit + 1);
    var second = NOTES.slice(indexToSplit + 1);
    var join = second.concat(first);
    return createScale(join[11 - numOfSemiton], SCALES.ionian);
}

function transformInt(intervalli) {
    return intervalli.map((e) => {
        let out;
        switch (e) {
            case '3t':out = 6;break;
            case '2ts':out = 5;break;
            case '2t':out = 4;break;
            case 'ts': out = 3; break;
            case 't':out = 2;break;
            case 's':out = 1;break;
            default: break;
        }
        return out;
    });
}

function getName(intervalli) {
    for (const key in SCALES) {
        if (SCALES.hasOwnProperty(key) && SCALES[key].toString() == intervalli.toString()) {
            return key;
        }
    }
}

function compare(list1, list2, isUnion) {
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

function analize(noteScala, gradi) {
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

function calcolaAccordo(gradiScala) {
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
function createScale(startNote, intervalli) {
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
function createScaleOnDegree(startNote, scale, degree) {
    let i = degree - 1;
    var mag = createScale(startNote, scale).notes; // "scala di riferimento"
    var ind = transposeIntervalsByStartingDegree(i, scale);
    return createScale(mag[i], ind);
}

// si creano tutti i gradi a partire da una scala maggiore
function createAllDegree(tonica, scala) {
    var allDegree = [];
    var mag = createScale(tonica, scala).notes;
    mag.forEach((firstNote, i) => {
        var n = transposeScaleByStartingNote(firstNote, mag);
        var ind = transposeIntervalsByStartingDegree(i, selectedScale);
        allDegree.push(createScale(n[0], ind));
    });
    return allDegree;
}

function calculateCircleOfFifth(scale) {
    let out = [];
    let semitonArray = [42, 35, 28, 21, 14, 7];
    semitonArray.forEach((e) => out.push(moveUpByNumOfSemitones(e, scale)));
    out.push(createScale('c', SCALES.ionian))
    semitonArray.reverse().forEach((e) => out.push(moveDownByNumOfSemitones(e, scale)));
    return out;
}

function tableModalInterchange() {
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

function formatText(scalename){
    let out = scalename.replace(/-/,' ');
    out = out.charAt(0).toUpperCase() + out.slice(1).toLowerCase();
    return out;
}

// si istanzia l'oggetto 'TASTIERA' passandogli un eventuale oggetto di configurazione
const Fretboard = function (config) {
    config = config || {};

    const instance = {
        frets:      config.frets || 12,                 // numero di tasti da visualizzare
        strings:    config.strings || 6,                // numero di corde
        tuning:     config.tuning || Tunings.E_4ths,    // accordatura
        fretWidth:  50,                                 // larghezza tasti
        fretHeight: 30,                                 // altezza tasti
        id:         'fretboard-' + Math.floor(Math.random() * 1000000), // id della tastiera
        name:       '',                                                 // NOME della scala/arpeggio
        notes:''                                                        // NOTE della scala/arpeggio
    };

    instance.fretsWithDots = function () {
        const allDots = [3, 5, 7, 9, 15, 17, 19, 21];
        return allDots.filter(function (v) {
            return v <= instance.frets;
        });
    };

    instance.fretsWithDoubleDots = function () {
        const allDots = [12, 24];
        return allDots.filter(function (v) {
            return v <= instance.frets;
        });
    };

    instance.fretboardHeight = function () {
        return (instance.strings - 1) * instance.fretHeight + 2;
    };

    instance.fretboardWidth = function () {
        return instance.frets * instance.fretWidth + 2;
    };

    instance.XMARGIN = function () {
        return instance.fretWidth;
    };
    instance.YMARGIN = function () {
        return instance.fretHeight;
    };

    // si crea l'istanza SVG
    instance.makeContainer = function () {
        return d3
            .select('.wrapper')
            .append('div')
            .attr('class', 'fretboard')
            .attr('id', instance.id) // id è nell'istanza
            .append('svg')
            .attr('width', instance.fretboardWidth() + instance.XMARGIN() * 2)
            .attr('height', instance.fretboardHeight() + instance.YMARGIN() * 2);
    };

    instance.makeTable = function () {
        let tbody = d3.select('#' + instance.id, '.scale-data')
            .append('table')
            .append('tbody');
        let riga1 = tbody.append('tr');
        riga1.selectAll('td')
            .data(instance.notes.toUpperCase().split(' '))
            .enter()
            .append('td')
            .text((d) => d);
        let riga2 = tbody.append('tr');
        riga2.selectAll('td')
            .data(instance.gradi.split(' '))
            .enter()
            .append('td')
            .text((d) => d);

        return tbody;
    }

    instance.drawScaleName = function(){
        d3.select('#' + instance.id)
                .append('div')
                .attr('class', 'scale-data')
                .append('span')
                .attr('class', 'scale-name')
                .text(`${instance.name/* .toUpperCase() */}`) 
                .append('span')
                .style('position', 'relative')
                .style('left', 6 + 'px')
                .append('i')
                .attr('class', 'fas fa-play')
                .on('click', function (d) {
                    instance.playScale(instance.notes);
                });
   
        instance.makeTable();

        d3.select('#' + instance.id)
        .append('i')
        .attr('class', 'delete-btn fa fa-trash')
        .on('click', function (d) {
            instance.delete(instance.id);
        });

    }

    // TASTI
    instance.drawFrets = function () {
        for (i = 0; i <= instance.frets; i++) {
            let x = i * instance.fretWidth + 1 + instance.XMARGIN(); // coordinata x del tasto
            instance.svgContainer
                .append('line')
                .attr('x1', x)
                .attr('y1', instance.YMARGIN())
                .attr('x2', x)
                .attr('y2', instance.YMARGIN() + instance.fretboardHeight())
                .attr('stroke', 'lightgray')
                .attr('stroke-width', i == 0 ? 8 : 2);
            d3.select('#' + instance.id)
                .append('text')
                .attr('class', 'fretnum')
                .style('top', (instance.fretboardHeight() + instance.YMARGIN() + 5) + 'px')
                .style('left', x - 6 + 'px')
                .text(i); // è il numero del tasto
        }
    }

    // CORDE
    instance.drawStrings = function () {
        for (i = 0; i < instance.strings; i++) {
            instance.svgContainer
                .append('line')
                .attr('x1', instance.XMARGIN())
                .attr('y1', i * instance.fretHeight + 1 + instance.YMARGIN())
                .attr('x2', instance.XMARGIN() + instance.fretboardWidth())
                .attr('y2', i * instance.fretHeight + 1 + instance.YMARGIN())
                .attr('stroke', 'lightgray')
                .attr('stroke-width', 1);
        }
        const placeTuning = function (d, i) {
            return (instance.strings - i) * instance.fretHeight - 5 + 'px';
        };
        d3.select('#' + instance.id)
            .selectAll('.tuning')
            .data(instance.tuning.slice(0, instance.strings))
            .style('top', placeTuning)
            .text(verbatim)
            .enter()
            .append('p')
            .attr('class', 'tuning')
            .style('top', placeTuning)
            .text(verbatim); // testo nota a vuota (dell'accordatura)
    };

    // PALLINI
    instance.drawDots = function () {

        // disegna i cerchi delle note...
        let p = instance.svgContainer
            .selectAll('circle')
            .data(instance.fretsWithDots())
   

        // cerchi indicanti 3 5 7 9 tasto
        p.enter()
            .append('circle')
            .attr('cx', function (d) {
                return (d - 1) * instance.fretWidth + instance.fretWidth / 2 + instance.XMARGIN();
            })
            .attr('cy', instance.fretboardHeight() / 2 + instance.YMARGIN())
            .attr('r', 4).style('fill', '#ddd');

        // rimuove i cerchi sul 3 5 7 9  tasto... ?
        let p2 = instance.svgContainer
            .selectAll('.octave')
            .data(instance.fretsWithDoubleDots);

        // cerchi indicanti il 12 e 24 tasto
        p2.enter()
            .append('circle')
            .attr('class', 'octave')
            .attr('cx', function (d) {
                return (d - 1) * instance.fretWidth + instance.fretWidth / 2 + instance.XMARGIN();
            })
            .attr('cy', instance.fretHeight * 3 / 2 + instance.YMARGIN())
            .attr('r', 4).style('fill', '#ddd');
        p2.enter()
            .append('circle')
            .attr('class', 'octave')
            .attr('cx', function (d) {
                return (d - 1) * instance.fretWidth + instance.fretWidth / 2 + instance.XMARGIN();
            })
            .attr('cy', instance.fretHeight * 7 / 2 + instance.YMARGIN())
            .attr('r', 4).style('fill', '#ddd');
    };


    // Notes on fretboard
    // 'a2' 1 red
    instance.addNoteOnString = function (note, string, color,tipovisualizzazione, grado) {
        const absPitch = absNote(note); // ES: 33
        color = color || 'black';
        const absString = (instance.strings - string);
        const basePitch = absNote(instance.tuning[absString]); // ES: 52 cioè si prende il valore della nota di partenza (sulla corda a vuoto)
        let content = tipovisualizzazione=='nota'?note.substring(0, note.length-1).toUpperCase():grado;
        if ((absPitch >= basePitch) && (absPitch <= basePitch + instance.frets)) {

            if(grado=='T'){
                instance.svgContainer
                .append('rect')
                .attr('class', 'note')
                .style('stroke', '#666')
                .attr('stroke-width', 1)
                .attr("x", (absPitch - basePitch + 0.40) * instance.fretWidth)
                .attr("y", (string - 1) * instance.fretHeight + instance.YMARGIN()/2 +3.5)
                .attr("width", 24)
                .attr("height", 24)
                //.attr("transform", (d,i) => `rotate(${90})`)
                .style("fill", color);
            }else if (grado=='b3' || grado=='3' || grado=='b5' || grado=='5' || grado=='b7' || grado=='7'){
                instance.svgContainer
                .append('rect')
                .attr("rx", 8)
                .attr('class', 'note')
                .style('stroke', '#666')
                .attr('stroke-width', 1)
                .attr("x", (absPitch - basePitch + 0.40) * instance.fretWidth)
                .attr("y", (string - 1) * instance.fretHeight + instance.YMARGIN()/2 +3.5)
                .attr("width", 24)
                .attr("height", 24)
                .style("fill", color);
            } else{
                instance.svgContainer
                    .append('circle')
                    .attr('class', 'note')
                    .attr('stroke-width', 1)
                    // 0.75 is the offset into the fret (higher is closest to fret)
                    .attr('cx', (absPitch - basePitch + 0.65) * instance.fretWidth) // calcola la posizione sull'asse X
                    .attr('cy', (string - 1) * instance.fretHeight + 1 + instance.YMARGIN()) // calcola la posizione sull'asse y
                    .attr('r', 12).style('stroke', '#666').style('fill', color)
                    .on('click', function (d) {
                        let fill = this.style.fill;
                        this.setAttribute('stroke-width', 5 - parseInt(this.getAttribute('stroke-width')));
                        this.style.fill = fill == color ? 'grey' : color;
                    });
            }

            instance.svgContainer
                .append('text')
                .attr('class', 'notes-info')
                .attr('x', content.length>1?((absPitch - basePitch + 0.54) * instance.fretWidth + 'px'):((absPitch - basePitch + 0.60) * instance.fretWidth + 'px'))
                .attr('y', (string - 1) * instance.fretHeight + 1 + instance.YMARGIN() + 3.5 +'px')
                .attr('font-family', 'sans-serif')
                .attr('font-size', '10px')
                .attr('fill', '#333' ) // '#2F4F4F' DarkSlateGrey
                .text(content) // si rimuove l'ultimo carattere


        }
    };


    instance.addNote = function (note, color,tipovisualizzazione, grado) {
        for (string = 1; string <= instance.strings; string++) {
            instance.addNoteOnString(note, string, color,tipovisualizzazione, grado);
        }
    };
    
    // recuperare i colori giusti in base al tipo di scala (7,5 note) o accordo (3,4,5,6 note)
    instance.getRightColor = function (i, type, numNotes) {
        if (type == 'scala') {
            let out;
            switch (numNotes) {
                case 5: out=colors_penta[i];break;
                case 6: out=colors_penta_six[i];break;
                case 7: out=colors[i];break;
                case 8: out=colors_dim[i];break;
                default:break;
            }
            return out;
        } else if (type == 'arpeggio') {
            return numNotes > 3 ? colors_triads_seven[i] : colors_triads[i];
        }
    }

    instance.addNotes = function (notes, tipo, tipovisualizzazione) {
        console.log(notes, tipo, tipovisualizzazione);
        const NOTES = notes.split(' ');
        let allDegrees;
        if (tipovisualizzazione == 'grado') {
             allDegrees = instance.gradi.split(' ');
        }
        for (i = 0; i < NOTES.length; i++) {
            const showColor = instance.getRightColor(i, tipo, NOTES.length);
            const note = NOTES[i];
            const degree = allDegrees ? allDegrees[i] : null;
            for (octave = 2; octave < 7; octave++) {
                instance.addNote(note + octave, showColor, tipovisualizzazione, degree);
            }
        }
    }

    /*
    acoustic_grand_piano
    electric_guitar_jazz 
    acoustic_guitar_nylon
    acoustic_guitar_steel
    */
    instance.playScale = function(scale){
        let scaleDISC = scale.split(' ').map(e=>e.toUpperCase()+3);
        let scaleASC = scale.split(' ').map(e=>e.toUpperCase()+3).reverse();
        scaleToBePlayed = scaleDISC.concat(scale[0].toUpperCase()+4,scaleASC);
        console.log(scaleToBePlayed);
        
        Soundfont.instrument(ac,'acoustic_guitar_steel').then(function (guitar) {  //  
            let time = ac.currentTime + 0.2;
            scaleToBePlayed.forEach(function(note) {
              console.log("Scheduling...", note, time);
              guitar.play(note, time, 0.2);
              time += 0.2;
            });
        });
    }

    /* 
    Per disegnare SCALE è chiamata all'interno dell'HTML !!!! 
    scaleNAme = "c lydian"
    */
    instance.scale = function (scaleName, tipo, tipovisualizzazione) {
        let [root, type] = scaleName.split(' ');
        let intervalli = SCALES[type];
        let data = createScale(root,intervalli);
        instance.name = formatText(scaleName) + ' over ' + root.toUpperCase() + data.accordo;
        instance.notes =  data.notes.join(' ');
        instance.gradi = data.gradi.join(' ');
        instance.clear(); // cancella tutto e ridisegna la tastiera
        instance.addNotes(instance.notes,tipo,tipovisualizzazione); // ridisegna le note "c d e f# g a b", "scala", "grado"
    };

    /*  per disegnare accordi */
    instance.placeNotes = function (sequence) {
        // Sequence of string:note
        // e.g. '6:g2 5:b2 4:d3 3:g3 2:d4 1:g4'
        instance.clear();
        const pairs = sequence.split(' ');
        pairs.forEach(function (pair, i) {
            let [string, note] = pair.split(':');
            string = parseInt(string);
            instance.addNoteOnString(note, string, i == 0 ? 'red' : 'black');
        });
    };


    instance.clearNotes = function () {
        instance.svgContainer
            .selectAll('.note')
            .remove();
    };


    // rimuove quanto disegnato e ridisegna
    instance.clear = function () {
        d3.select('#' + instance.id).selectAll('.fretnum,.tuning').remove();
        instance.svgContainer
            .selectAll('line')
            .remove();
        instance.svgContainer
            .selectAll('circle')
            .remove();
        instance.draw();
    };

    // cancella la singola istanza
    instance.delete = function (id) {
        // instance.clear();
        d3.select('#' + id).remove();
    };

    instance.draw = function () {
        instance.drawScaleName();
        instance.drawFrets();   //  TASTI
        instance.drawStrings(); // STRINGHE
        instance.drawDots();    // cerchi per 3 5 7 9 12 15 17 19 21 24 e note !
    };

    instance.svgContainer = instance.makeContainer();   // istanzia il contenitore SVG per la 1° tastiera
    // instance.draw();                                    // disegna la tastiera, le corde e le note

    return instance;
};