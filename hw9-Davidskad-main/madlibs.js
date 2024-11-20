function getShortMadLib() {
    return {
        fillers: [
            {type: "word", id: "NOUN_1", friendlyText: "Pick a noun.", exampleText: "potato"},
            {type: "adjective", id: "ADJECTIVE_1", friendlyText: "Pick an adjective.", exampleText: "spongy"},
            {type: "quote", id: "QUOTE_1", friendlyText: "Pick a favorite quote, with quotations.", exampleText: "'to be or not to be'"}
        ],
        text: [
            {
                segmentType: "static",
                text: "The "
            },
            {
                segmentType: "fillable",
                id: "ADJECTIVE_1"
            },
            {
                segmentType: "static",
                text: " "
            },
            {
                segmentType: "fillable",
                id: "NOUN_1"
            },
            {
                segmentType: "static",
                text: " says "
            },
            {
                segmentType: "fillable",
                id: "QUOTE_1"
            },
            {
                segmentType: "newline"
            },
            {
                segmentType: "static",
                text: "Everyone applauds!"
            },
        ]
    }
}

function getLongMadLib() {
    return {
        fillers: [
            {type: "word", id: "NOUN_1", friendlyText: "Pick a noun.", exampleText: "potato"},
            {type: "adjective", id: "ADJECTIVE_1", friendlyText: "Pick an adjective.", exampleText: "spongy"},
            {type: "word", id: "NOUN_2", friendlyText: "Pick another noun.", exampleText: "bottle"},
            {type: "quote", id: "QUOTE_1", friendlyText: "Pick a favorite quote, with quotations.", exampleText: "'to be or not to be'"},
            {type: "properNoun", id: "NAME_1", friendlyText: "Pick a name.", exampleText: "Remzi"},
            {type: "word", id: "FEELING_1", friendlyText: "Pick a feeling.", exampleText: "awe"}
        ],
        text: [
            {
                segmentType: "static",
                text: "A(n) "
            },
            {
                segmentType: "fillable",
                id: "NOUN_1"
            },
            {
                segmentType: "static",
                text: " walks into the "
            },
            {
                segmentType: "fillable",
                id: "ADJECTIVE_1"
            },
            {
                segmentType: "static",
                text: " "
            },
            {
                segmentType: "fillable",
                id: "NOUN_2"
            },
            {
                segmentType: "newline"
            },
            {
                segmentType: "static",
                text: "The "
            },
            {
                segmentType: "fillable",
                id: "NOUN_1"
            },
            {
                segmentType: "static",
                text: " says "
            },
            {
                segmentType: "fillable",
                id: "QUOTE_1"
            },
            {
                segmentType: "static",
                text: "."
            },
            {
                segmentType: "newline"
            },
            {
                segmentType: "fillable",
                id: "NAME_1"
            },
            {
                segmentType: "static",
                text: " stares at the "
            },
            {
                segmentType: "fillable",
                id: "NOUN_1"
            },
            {
                segmentType: "static",
                text: " in "
            },
            {
                segmentType: "fillable",
                id: "FEELING_1"
            },
            {
                segmentType: "static",
                text: "."
            },
        ]
    }
}