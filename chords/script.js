let $tonal = document.getElementById('tonal')
let $tonlaup = document.getElementById('tonlaup')
let $tonladown = document.getElementById('tonladown')
let $chords = document.getElementById('chords')

const NOTES = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'H']
let indexNotes = 0;
let addBagrouneColor = false

const editTonal = (n) => {
    indexNotes += n
    if (indexNotes < 0) {
        indexNotes = 11
    }
    indexNotes = indexNotes % 12
    $tonal.innerText = NOTES[indexNotes]
    renderTable()
}
$tonlaup.addEventListener('click', () => {
    editTonal(1)
})
$tonladown.addEventListener('click', () => {
    editTonal(-1)
})

const chords = {
    _maj7: {
        html: ' maj<sup>7</sup>',
        formula: [0, 4, 7, 11],
        chordsOnNeck: [
            {
                value: [
                    [1, 0, 0, 0],
                    [1, 0, 4, 0],
                    [1, 2, 0, 0],
                    [1, 0, 3, 0],
                    [1, 0, 0, 0],
                    [0, 0, 0, 0],
                ],
                row: 3
            },
            {
                value: [
                    [1, 0, 0, 0],
                    [0, 2, 0, 0],
                    [0, 0, 3, 0],
                    [0, 0, 0, 4],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                ],
                row: 7
            },
            {
                value: [
                    [0, 0, 3, 0],
                    [0, 0, 3, 0],
                    [0, 0, 3, 0],
                    [1, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                ],
                row: 10
            },
            {
                value: [
                    [0, 0, 3, 0],
                    [1, 0, 0, 0],
                    [1, 0, 0, 0],
                    [1, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                ],
                row: 5
            },
            {
                value: [
                    [1, 0, 0, 0],
                    [1, 0, 0, 0],
                    [1, 0, 0, 0],
                    [0, 0, 2, 0],
                    [0, 0, 0, 3],
                    [0, 0, 0, 0],
                ],
                row: 12
            },
            // {
            //     value: [
            //         [0, 0, 0, 0],
            //         [0, 0, 0, 0],
            //         [0, 0, 0, 0],
            //         [0, 0, 0, 0],
            //         [0, 0, 0, 0],
            //         [0, 0, 0, 0],
            //     ],
            //     row: 5
            // },
        
        ]
    },
    _7: {
        html: '<sup>7</sup> ',
        formula: [0, 4, 7, 10],
        chordsOnNeck: [
            {
                value: [
                    [1, 0, 0, 0],
                    [1, 0, 0, 4],
                    [1, 2, 0, 0],
                    [1, 0, 0, 0],
                    [1, 0, 3, 0],
                    [1, 0, 0, 0],
                ],
                row: 8
            },
            {
                value: [
                    [1, 0, 0, 0],
                    [1, 0, 4, 0],
                    [1, 0, 0, 0],
                    [1, 0, 3, 0],
                    [1, 0, 0, 0],
                    [0, 0, 0, 0],
                ],
                row: 3
            },
            {
                value: [
                    [0, 0, 0, 0],
                    [1, 0, 0, 0],
                    [0, 0, 4, 0],
                    [0, 2, 0, 0],
                    [0, 0, 3, 0],
                    [0, 0, 0, 0],
                ],
                row: 1
            },
            {
                value: [
                    [1, 2, 0, 0],
                    [1, 0, 0, 0],
                    [1, 0, 0, 0],
                    [1, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                ],
                row: 5
            },
            {
                value: [
                    [1, 0, 4, 0],
                    [1, 2, 0, 0],
                    [1, 0, 3, 0],
                    [1, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                ],
                row: 10
            },
            {
                value: [
                    [0, 0, 4, 0],
                    [1, 0, 0, 0],
                    [0, 0, 3, 0],
                    [0, 2, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                ],
                row: 1
            },
        ]
    },
    _m7: {
        html: 'm<sup>7</sup>',
        formula: [0, 3, 7, 10],
        chordsOnNeck: [
            {
                value: [
                    [1, 0, 0, 0],
                    [1, 0, 0, 0],
                    [1, 0, 0, 0],
                    [1, 0, 0, 0],
                    [1, 0, 2, 0],
                    [1, 0, 0, 0],
                ],
                row: 8
            },
            {
                value: [
                    [1, 0, 0, 0],
                    [1, 2, 0, 0],
                    [1, 0, 0, 0],
                    [1, 0, 3, 0],
                    [1, 0, 0, 0],
                    [0, 0, 0, 0],
                ],
                row: 3
            },
            {
                value: [
                    [0, 3, 0, 0],
                    [0, 2, 0, 0],
                    [0, 0, 4, 0],
                    [1, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                ],
                row: 10
            },
            {
                value: [
                    [0, 0, 4, 0],
                    [1, 0, 0, 0],
                    [0, 3, 0, 0],
                    [0, 2, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                ],
                row: 4
            },
            {
                value: [
                    [1, 0, 4, 0],
                    [1, 0, 0, 0],
                    [1, 0, 3, 0],
                    [1, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                ],
                row: 1
            },
            
        ]
    },
    _7b5: {
        html: 'm<sup>7♭5</sup> ',
        formula: [0, 3, 6, 10],
        chordsOnNeck: [
            {
                value: [
                    [0, 0, 0, 0],
                    [0, 4, 0, 0],
                    [2, 0, 0, 0],
                    [0, 3, 0, 0],
                    [1, 0, 0, 0],
                    [0, 0, 0, 0],
                ],
                row: 3
            },
            {
                value: [
                    [0, 3, 0, 0],
                    [0, 3, 0, 0],
                    [0, 3, 0, 0],
                    [1, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                ],
                row: 10
            }
        ]
    },
    _0: {
        html: '<sup>o</sup>',
        formula: [0, 3, 6, 9],
        chordsOnNeck: [
            {
                value: [
                    [0, 4, 0, 0],
                    [2, 0, 0, 0],
                    [0, 3, 0, 0],
                    [1, 0, 0, 0],
                    [0, 0, 0, 0],
                    [0, 0, 0, 0],
                ],
                row: 10
            },
            {
                value: [
                    [1, 0, 0, 0],
                    [1, 0, 4, 0],
                    [1, 0, 0, 0],
                    [1, 0, 3, 0],
                    [1, 2, 0, 0],
                    [0, 0, 0, 0],
                ],
                row: 2
            }
        ]
    },
}

const tact = {
    1: {
        1: {
            step: [1, 3],
            value: [chords._maj7, chords._m7]
        },
        2: {
            step: [1, 5],
            value: [chords._maj7, chords._7]
        },
        3: {
            step: [1, 6],
            value: [chords._maj7, chords._maj7]
        },
        4: {
            step: [1, 8],
            value: [chords._maj7, chords._7]
        },
        5: {
            step: [1, 10],
            value: [chords._maj7, chords._m7]
        },
        6: {
            step: [1, 12],
            value: [chords._maj7, chords._7]
        },
    },
    2: {
        1: {
            step: [3, 8],
            value: [chords._m7, chords._7]
        },
        2: {
            step: [6, 8],
            value: [chords._maj7, chords._7]
        },
        3: {
            step: [10, 8],
            value: [chords._m7, chords._7]
        },
        4: {
            step: [5, 8],
            value: [chords._m7, chords._7]
        },
        5: {
            step: [9, 2],
            value: [chords._m7, chords._7]
        },
        6: {
            step: [3, 2],
            value: [chords._m7, chords._7]
        },
    },
    3: {
        1: {
            step: [1, 3],
            value: [chords._maj7, chords._7]
        },
        2: {
            step: [1, 5],
            value: [chords._maj7, chords._m7]
        },
        3: {
            step: [1, 6],
            value: [chords._maj7, chords._7]
        },
        4: {
            step: [1, 8],
            value: [chords._maj7, chords._7]
        },
        5: {
            step: [1, 10],
            value: [chords._maj7, chords._7]
        },
        6: {
            step: [1, 12],
            value: [chords._maj7, chords._7b5]
        },
    },
    4: {
        1: {
            step: [3, 2],
            value: [chords._m7, chords._7]
        },
        2: {
            step: [9, 2],
            value: [chords._m7, chords._7]
        },
        3: {
            step: [3, 8],
            value: [chords._m7, chords._7]
        },
        4: {
            step: [5, 8],
            value: [chords._m7, chords._7]
        },
        5: {
            step: [6, 8],
            value: [chords._maj7, chords._7]
        },
        6: {
            step: [10, 8],
            value: [chords._m7, chords._7]
        },
    },
    5: {
        1: {
            step: [8, 1],
            value: [chords._m7, chords._7]
        },
        2: {
            step: [8, 7],
            value: [chords._m7, chords._7]
        },
        3: {
            step: [8, 7],
            value: [chords._m7, chords._0]
        },
        4: {
            step: [1, 11],
            value: [chords._7, chords._7]
        },
        5: {
            step: [10, 8],
            value: [chords._m7, chords._m7]
        },
        6: {
            step: [3, 5],
            value: [chords._m7, chords._m7]
        },
    },
    6: {
        1: {
            step: [6, 7],
            value: [chords._maj7, chords._0]
        },
        2: {
            step: [6, 6],
            value: [chords._maj7, chords._m7]
        },
        3: {
            step: [6, 8],
            value: [chords._maj7, chords._7]
        },
        4: {
            step: [6, 2],
            value: [chords._maj7, chords._maj7]
        },
        5: {
            step: [6, 12],
            value: [chords._maj7, chords._7b5]
        },
        6: {
            step: [6, 3],
            value: [chords._maj7, chords._m7]
        },
    },
    7: {
        1: {
            step: [5, 10],
            value: [chords._m7, chords._7]
        },
        2: {
            step: [10, 5],
            value: [chords._m7, chords._7]
        },
        3: {
            step: [10, 6],
            value: [chords._m7, chords._maj7]
        },
        4: {
            step: [5, 10],
            value: [chords._m7, chords._m7]
        },
        5: {
            step: [10, 3],
            value: [chords._m7, chords._7]
        },
        6: {
            step: [1, 10],
            value: [chords._maj7, chords._m7]
        },
    },
    8: {
        1: {
            step: [3, 8],
            value: [chords._m7, chords._7]
        },
        2: {
            step: [3, 2],
            value: [chords._m7, chords._7]
        },
        3: {
            step: [10, 8],
            value: [chords._m7, chords._7]
        },
        4: {
            step: [9, 2],
            value: [chords._m7, chords._7]
        },
        5: {
            step: [5, 8],
            value: [chords._m7, chords._7]
        },
        6: {
            step: [6, 8],
            value: [chords._maj7, chords._7]
        },
    },
}

const getRandomInt = (max) => {
    return Math.floor(Math.random() * max);
}


let $random_sequence = document.getElementById('random_sequence')
$random_sequence.addEventListener('click', () => {

    $chords.innerHTML = ''
    let tbody = $table.lastChild
    // tmp = []
    for (let i=0; i<=7; i++) {
        let tr = tbody.children[i]
        for (let j=0; j<=5; j++) {
            tr.children[j].classList.remove('active')
        }
        const randomInt = getRandomInt(6)
        tr.children[randomInt].classList.add('active')

        // рендер акордів
        let {step, value} = tact[i + 1][randomInt + 1]
        renderChord(NOTES[(step[0] - 1 + indexNotes) % 12], value[0])
        renderGrif(NOTES[(step[0] - 1 + indexNotes) % 12], value[0])
        renderChord(NOTES[(step[1] - 1 + indexNotes) % 12], value[1])
        renderGrif(NOTES[(step[1] - 1 + indexNotes) % 12], value[1])
        
        // tmp.push([NOTES[(step[0] - 1 + indexNotes) % 12], value[0]])
        // tmp.push([NOTES[(step[1] - 1 + indexNotes) % 12], value[1]])
    }

    // for (let index = 0; index < tmp.length; index++) {
    //     const arr = tmp[index];
    //     renderGrif(arr[0], arr[1])
        
    // }
    // renderGrif('C', chords._maj7)
})

const getDiv = (className) => {
    let div = document.createElement('div')
    div.setAttribute('class', className)
    return div
}

const getRimNumber = (n) => {
    const rimNumber = {
        1: 'I',
        2: 'II',
        3: 'III',
        4: 'IV',
        5: 'V',
        6: 'VI',
        7: 'VII',
        8: 'VIII',
        9: 'IX',
        10: 'X',
        11: 'XI',
        12: 'XII',
    }
    if (rimNumber.hasOwnProperty(n)) {
        return rimNumber[n]
    }
    return '???'
}

const getChord = (chordOnNeck, indexLad) => {
    let div = getDiv('chord')
    let chordInfo = getDiv('chord_info')
    chordInfo.innerText = getRimNumber((chordOnNeck.row + indexLad - 1) % 12 + 1)
    div.append(chordInfo)
    const arr = chordOnNeck.value
    for (let index = 0; index < arr.length; index++) {
        const chordRow = arr[index];
        let row = getDiv('chordrow')
        for (let index = 0; index < chordRow.length; index++) {
            const n = chordRow[index];
            let coll = getDiv('chordcoll')
            if (n) {
                let circle = getDiv('circle')
                circle.innerText = n
                coll.append(circle)
            }     
            row.append(coll)
        }
        div.append(row)
    }
    return div
}

const renderChord = (name, chordElem) => {

    let chordWraper = getDiv('chord_wraper')
    if (addBagrouneColor) {
        chordWraper.classList.add('bg_chord')
    }
    addBagrouneColor = !addBagrouneColor
    let chordTitle = getDiv('chord_title')
    chordTitle.innerHTML = name + chordElem.html
    chordWraper.append(chordTitle)

    let chordBody = getDiv('chord_body')


    const chordsOnNeck = chordElem.chordsOnNeck
    for (let index = 0; index < chordsOnNeck.length; index++) {
        const element = chordsOnNeck[index];
        // console.log(getChord(element));
        chordBody.append(getChord(element, NOTES.indexOf(name)))
    }
    chordWraper.append(chordBody)
    $chords.append(chordWraper)

}

let $table = document.getElementById('table')
const renderTable = () => {
    // let table = document.createElement('table')
    // $table.innerHTML = ''
    // for (let i=1; i<=8; i++) {
        //     let tr = document.createElement('tr')
    //     for (let j=1; j<=6; j++) {
        //         let td = document.createElement('td')
    //         td.innerHTML = `${NOTES[(tact[i][j].step[0] - 1 + indexNotes) % 12]}${tact[i][j].value[0]} ${NOTES[(tact[i][j].step[1] - 1 + indexNotes) % 12]}${tact[i][j].value[1]}`
    //         tr.append(td)
    //     }
    //     $table.append(tr)
    // }
    // $table.innerHTML = ''
    let tbody = $table.lastChild
    for (let i=1; i<=8; i++) {
        let tr = tbody.children[i - 1]
        for (let j=1; j<=6; j++) {
            let td = tr.children[j - 1]
            td.innerHTML = `${NOTES[(tact[i][j].step[0] - 1 + indexNotes) % 12]}${tact[i][j].value[0].html} ${NOTES[(tact[i][j].step[1] - 1 + indexNotes) % 12]}${tact[i][j].value[1].html}`
        }
    }
}
renderTable()

let renderGrif = (name, chordElem) => {
    let chordWraper = getDiv('chord_wraper')
    if (!addBagrouneColor) {
        chordWraper.classList.add('bg_chord')
    }
    
    let chordTitle = getDiv('chord_title')
    chordTitle.innerHTML = name + chordElem.html
    chordWraper.append(chordTitle)

    let chordBody = getDiv('chord_body')
    chordBody.style.justifyContent = 'center'


    let div = getDiv('chord')
    let chordInfo = getDiv('chord_info')

    const EHGDAE = [4, 11, 7, 2, 9, 2]
    
    let newFormula = []
    const formula = chordElem.formula
    for (let index = 0; index < formula.length; index++) {
        const el = formula[index];
        newFormula.push((el + NOTES.indexOf(name)) % 12)            
    }
    
    for (let j = 0; j < 6; j++) {
        // const chordRow = arr[index];
        let row = getDiv('chordrow')
        const mainIndex = EHGDAE[j]
        for (let i = 0; i <= 24; i++) {
            const noteIndex = (mainIndex + i) % 12;
            let coll = getDiv('chordcoll')
            if (newFormula.includes(noteIndex)) {
                let circle = getDiv('circle')
                circle.innerText = NOTES[noteIndex]
                coll.append(circle)
            }
            if (j !== 5){
                if ([0, 12, 24].includes(i)){
                    coll.style.backgroundColor = 'yellow'
                } else if ([3, 5, 7, 15, 17, 19].includes(i)){
                    coll.style.backgroundColor = 'grey'
                } else if ([9, 21].includes(i)){
                    coll.style.backgroundColor = '#444'
                }
            }
            row.append(coll)
        }
        div.append(row)
    }
    chordBody.append(div)

    chordWraper.append(chordBody)
    $chords.append(chordWraper)

}
// renderGrif('C', chords._maj7)