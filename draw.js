// Music
const allNotes            = [ 'c', 'c#', 'd', 'd#', 'e', 'f', 'f#', 'g', 'g#', 'a', 'a#', 'b'];
const allNotesEnh         = ['c', 'db', 'd', 'eb', 'e', 'f', 'gb', 'g', 'ab', 'a', 'bb', 'b'];
const colors              = ['yellow', 'DodgerBlue', '#F4D03F', 'MediumSeaGreen', 'Tomato', '#A569BD', 'lightgray']; // 7 note
const colors_penta        = ['yellow', 'DodgerBlue', '#F4D03F', 'Tomato', 'lightgray'];                     // 5 note
const colors_penta_six    = ['yellow', 'DodgerBlue', '#F4D03F', 'SlateBlue', 'Tomato', 'lightgray'];             // 6 note
const colors_triads_seven = ['yellow', '#F4D03F', 'Tomato', 'lightgray'];                               // 4 note
const colors_triads       = ['yellow', '#F4D03F', 'Tomato'];                                            // 3 note

const Scales = {
    // chords
    'maj':  'c e g',
    'maj7': 'c e g b',
    '7':    'c e g bb',
    'aug':  'c e g#',
    'min':  'c eb g',
    'min7': 'c eb g bb',
    'dim':  'c eb gb',
    'm7b5': 'c eb gb bb',
    'dim7': 'c eb gb a',
    // scales
    'lydian':                'c d e f# g a b',
    'lydian-pentatonic':     'c d e f# a',          // R 2 3 #4 6
    'major-ionian':          'c d e f g a b',
    'major-pentatonic':      'c d e g a',
    'major-blues':           'c d d# e g a',
    'mixolydian':            'c d e f g a bb',
    'mixolydian-pentatonic': 'c d e g bb',         // R 2 3 5 b7
    'dom-pentatonic':        'c e f g bb',         // R 3 4 5 b7
    'dorian':                'c d eb f g a bb',
    'dorian-pentatonic':     'c eb f g a',         // R b3 4 5 6
    'minor6th-blues-pentatonic':'c eb f# g a',     // R b3 4# 5 6
    'rootless9th-pentatonic':'d eb f g bb',        // 2 b3 4 5 7b
    'aeolian':               'c d eb f g ab bb',
    'minor-pentatonic':      'c eb f g bb',
    'minor-blues':           'c eb f f# g bb',
    'phrygian':              'c db eb f g ab bb',
    'phrygian-pentatonic':   'c db f g bb',       // R b2 4 5 b7
    'locrian':               'c db eb f gb ab bb',
    'locrian-pentatonic':    'c eb f gb bb',      // R b3 4 b5 b7
    'japanese':              'c db f g ab',
    'melodic-minor':         'c d eb f g a b',
    'lydian-dominant':       'c d e f# g a bb',     // 1	2	3	#4	5	6	b7
    'super-locrian':         'c db eb e gb ab bb', // 1	b2	b3	b4	b5	b6	b7
    'armonic-minor':         'c d eb f g ab b',
    'whole-tone':            'c d e f# g# a#',
    _: function (scale) {
        return Scales[scale].split(' ');
    },
};

// ACCORDATURE
const Tunings = {
    E_4ths: ['e2', 'a2', 'd3', 'g3', 'c4', 'f4'],
    E_std: ['e2', 'a2', 'd3', 'g3', 'b3', 'e4'],
    Drop_D: ['d2', 'a2', 'd3', 'g3', 'b3', 'e4'],
    G_open: ['d2', 'g2', 'd3', 'g3', 'b4', 'd4']
};

const tuning = document.getElementById('myTuning');
const root = document.getElementById('myRoot');
const scale = document.getElementById('myScale');
const arpeggio = document.getElementById('myArpeggio');

// DEFAULTS
let type = 'scala';
let visualizzazione = 'grado';
root.value = 'c';       
tuning.value = 'E_std'; 
scale.value = ''; 
arpeggio.disabled = true;

function getType(value) {
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

function getVisualizzazione(value) {
    visualizzazione = value;
}

function addFretboard() {
    if (root.value && scale.value || root.value && arpeggio.value) {
        const scala = Fretboard({
            tuning: Tunings[tuning.value] || Tunings.E_std
        });
        scala.scale(root.value + ' ' + (type == 'arpeggio' ? arpeggio.value : scale.value), type, visualizzazione);
    }
    // root.value = '';
    scale.value = '';
    arpeggio.value = '';
}

// In base al nome della nota calcola lo spostamento sulla tastiera
function asOffset(note) {
    note = note.toLowerCase();
    let offset = allNotes.indexOf(note);
    if (offset === -1) {
        offset = allNotesEnh.indexOf(note);
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

// data la  scala 'a a# c d e f g' calcola i gradi di cui è composta 't 9b 3 4# 5 6 7'
function asDegree(nomescala) {
    let [root, type] = nomescala.split(' ');
    let output;
    switch (type) {
        // arpeggi
        case 'maj': output ='T 3 5';break;
        case 'maj7': output ='T 3 5 7';break;
        case '7': output ='T 3 5 7b';break;
        case 'aug': output ='T 3 5#';break;
        case 'min': output ='T 3b 5';break;
        case 'min7': output ='T 3b 5 7b';break;
        // scale
        case 'lydian': output ='T 9 3 4# 5 6 7';break;
        case 'lydian-pentatonic': output ='T 9 3 4# 6';break;       // R 2 3 #4 6
        case 'major-ionian': output ='T 9 3 4 5 6 7';break;
        case 'major-pentatonic': output ='T 9 3 5 6';break;
        case 'major-blues': output ='T 9 3b 3 5 6';break;
        case 'mixolydian': output ='T 9 3 4 5 6 7b';break;
        case 'mixolydian-pentatonic': output ='T 9 3 5 7b';break;
        case 'dom-pentatonic': output ='T 3 4 5 7b';break;
        case 'dorian': output ='T 9 3b 4 5 6 7b';break;
        case 'dorian-pentatonic': output ='T 3b 4 5 6';break; // R b3 4 5 6
        case 'minor6th-blues-pentatonic': output ='T 3b 4# 5 6';break; // R b3 4 5 6
        case 'rootless9th-pentatonic': output ='9 3b 4 5 7b';break; // R b3 4 5 6
        case 'aeolian': output ='T 9 3b 4 5 6b 7b';break;
        case 'minor-pentatonic': output ='T 3b 4 5 7b';break;
        case 'minor-blues': output ='T 3b 4 4# 5 7b';break;
        case 'phrygian': output ='T 9b 3b 4 5 6b 7b';break;
        case 'phrygian-pentatonic': output ='T 9b 4 5 7b';break; // R b2 4 5 b7
        case 'locrian': output ='T 9b 3b 4 5b 6b 7b';break;
        case 'locrian-pentatonic': output ='T 3b 4 5b 7b';break; // R b3 4 b5 b7
        case 'japanese': output ='T 2b 4 5 6b';break; // R b3 4 b5 b7
        case 'melodic-minor': output ='T 2 3b 4 5 6 7';break;     
        case 'lydian-dominant': output ='T 2 3 4# 5 6 7b'; break;     
        case 'super-locrian': output ='T 2b 3b 4b 5b 6b 7b';break;     
        case 'armonic-minor': output ='T 2 3b 4 5 6b 7';break;     
        case 'whole-tone': output ='T 2 3 4# 5# 6#';break;     
        default:break;
    }
    return output;
}

// data la scale ='a lydian' calcola la scala 'a a# c d e f g'
function asNotes(scale) {
    let [root, type] = scale.split(' ');
    const scaleInC = Scales._(type);
    const offset = asOffset(root);
    const scaleTransposed = scaleInC.map(function (note) {
        return allNotes[(asOffset(note) + offset) % 12];
    });
    return scaleTransposed.join(' ');
}

// helper per ritornare il valore
const verbatim = function (d) {
    return d;
};


// si istanzia l'oggetto 'TASTIERA' passandogli un eventuale oggetto di configurazione
const Fretboard = function (config) {
    config = config || {};

    const instance = {
        frets:      config.frets || 15,                 // numero di tasti da visualizzare
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
                .text(`${instance.name.toUpperCase()}`) 
   
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
                default:break;
            }
            return out;
        } else if (type == 'arpeggio') {
            return numNotes > 3 ? colors_triads_seven[i] : colors_triads[i];
        }
    }

    instance.addNotes = function (notes, tipo, tipovisualizzazione) {
        console.log(notes, tipo, tipovisualizzazione);
        const allNotes = notes.split(' ');
        let allDegrees;
        if (tipovisualizzazione == 'grado') {
             allDegrees = instance.gradi.split(' ');
        }
        for (i = 0; i < allNotes.length; i++) {
            const showColor = instance.getRightColor(i, tipo, allNotes.length);
            const note = allNotes[i];
            const degree = allDegrees ? allDegrees[i] : null;
            for (octave = 2; octave < 7; octave++) {
                instance.addNote(note + octave, showColor, tipovisualizzazione, degree);
            }
        }
    }

    /*  per disegnare SCALE è chiamata all'interno dell'HTML !!!! */
    instance.scale = function (scaleName, tipo, tipovisualizzazione) {
        instance.name = scaleName;
        let notes = asNotes(scaleName);
        instance.notes = notes;
        instance.gradi = asDegree(scaleName);
        instance.clear(); // cancella tutto
        instance.addNotes(notes,tipo,tipovisualizzazione); // ridisegna le note
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