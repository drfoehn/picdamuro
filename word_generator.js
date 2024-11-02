$(document).ready(function (){

})

/* let wordsArray;
fetch('https://drevil.uber.space/picdamuro/data/words.json')
  .then(res => res.json())
  .then(data => wordsArray = data)
  .then(() => console.log(wordsArray)) */


let wordsArray = [
    {
        "name": "\u00c4rger",
        "category": "Emotionen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 1
    },
    {
        "name": "\u00c4rztin",
        "category": "Berufe",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 2
    },
    {
        "name": "Abend",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 3
    },
    {
        "name": "Abfahrt",
        "category": "Transport",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 4
    },
    {
        "name": "Abflug",
        "category": "Transport",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 5
    },
    {
        "name": "Absender",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 6
    },
    {
        "name": "Adresse",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 7
    },
    {
        "name": "Alkohol",
        "category": "Getr\u00e4nke",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 8
    },
    {
        "name": "Alter",
        "category": "Person",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 9
    },
    {
        "name": "Ampel",
        "category": "Verkehr",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 10
    },
    {
        "name": "Anfang",
        "category": "Allgemein",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 11
    },
    {
        "name": "Angebot",
        "category": "Gesch\u00e4ft",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 12
    },
    {
        "name": "Angestellte",
        "category": "Berufe",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 13
    },
    {
        "name": "Angst",
        "category": "Emotionen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 14
    },
    {
        "name": "Ankunft",
        "category": "Transport",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 15
    },
    {
        "name": "Anmeldung",
        "category": "Verwaltung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 16
    },
    {
        "name": "Anrede",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 17
    },
    {
        "name": "Anruf",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 18
    },
    {
        "name": "Anrufbeantworter",
        "category": "Technik",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 19
    },
    {
        "name": "Ansage",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 20
    },
    {
        "name": "Anschluss",
        "category": "Technik",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 21
    },
    {
        "name": "Antwort",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 22
    },
    {
        "name": "Anzeige",
        "category": "Gesch\u00e4ft",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 23
    },
    {
        "name": "Anzug",
        "category": "Kleidung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 24
    },
    {
        "name": "Apfel",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 25
    },
    {
        "name": "Apotheke",
        "category": "Gesundheit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 26
    },
    {
        "name": "Appartement",
        "category": "Wohnen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 27
    },
    {
        "name": "Appetit",
        "category": "Essen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 28
    },
    {
        "name": "April",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 29
    },
    {
        "name": "Arbeit",
        "category": "Beruf",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 30
    },
    {
        "name": "Arbeitsplatz",
        "category": "Beruf",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 31
    },
    {
        "name": "Arm",
        "category": "K\u00f6rper",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 32
    },
    {
        "name": "Arzt",
        "category": "Berufe",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 33
    },
    {
        "name": "Aufenthalt",
        "category": "Allgemein",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 34
    },
    {
        "name": "Aufgabe",
        "category": "Bildung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 35
    },
    {
        "name": "Aufzug",
        "category": "Geb\u00e4ude",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 36
    },
    {
        "name": "Auge",
        "category": "K\u00f6rper",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 37
    },
    {
        "name": "August",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 38
    },
    {
        "name": "Ausbildung",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 39
    },
    {
        "name": "Ausflug",
        "category": "Freizeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 40
    },
    {
        "name": "Ausgang",
        "category": "Geb\u00e4ude",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 41
    },
    {
        "name": "Auskunft",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 42
    },
    {
        "name": "Ausl\u00e4nder",
        "category": "Person",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 43
    },
    {
        "name": "Ausl\u00e4nderin",
        "category": "Person",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 44
    },
    {
        "name": "Ausland",
        "category": "Orte",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 45
    },
    {
        "name": "Aussage",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 46
    },
    {
        "name": "Ausstellung",
        "category": "Kultur",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 47
    },
    {
        "name": "Ausweis",
        "category": "Dokumente",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 48
    },
    {
        "name": "Auto",
        "category": "Transport",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 49
    },
    {
        "name": "Autobahn",
        "category": "Verkehr",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 50
    },
    {
        "name": "Automat",
        "category": "Technik",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 51
    },
    {
        "name": "B\u00e4ckerei",
        "category": "Gesch\u00e4ft",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 52
    },
    {
        "name": "B\u00fcro",
        "category": "Arbeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 53
    },
    {
        "name": "Baby",
        "category": "Person",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 54
    },
    {
        "name": "Bad",
        "category": "Wohnen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 55
    },
    {
        "name": "Bahn",
        "category": "Transport",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 56
    },
    {
        "name": "Bahnhof",
        "category": "Transport",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 57
    },
    {
        "name": "Bahnsteig",
        "category": "Transport",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 58
    },
    {
        "name": "Balkon",
        "category": "Wohnen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 59
    },
    {
        "name": "Banane",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 60
    },
    {
        "name": "Bank",
        "category": "Finanzen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 61
    },
    {
        "name": "Batterie",
        "category": "Technik",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 62
    },
    {
        "name": "Baum",
        "category": "Natur",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 63
    },
    {
        "name": "Beamte",
        "category": "Berufe",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 64
    },
    {
        "name": "Beamtin",
        "category": "Berufe",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 65
    },
    {
        "name": "Bein",
        "category": "K\u00f6rper",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 66
    },
    {
        "name": "Beispiel",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 67
    },
    {
        "name": "Bekannte",
        "category": "Person",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 68
    },
    {
        "name": "Benzin",
        "category": "Transport",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 69
    },
    {
        "name": "Beratung",
        "category": "Dienstleistung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 70
    },
    {
        "name": "Berg",
        "category": "Natur",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 71
    },
    {
        "name": "Beruf",
        "category": "Arbeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 72
    },
    {
        "name": "Berufsschule",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 73
    },
    {
        "name": "Besuch",
        "category": "Soziales",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 74
    },
    {
        "name": "Betrag",
        "category": "Finanzen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 75
    },
    {
        "name": "Bett",
        "category": "Wohnen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 76
    },
    {
        "name": "Bewerbung",
        "category": "Beruf",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 77
    },
    {
        "name": "Bier",
        "category": "Getr\u00e4nke",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 78
    },
    {
        "name": "Bild",
        "category": "Kunst",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 79
    },
    {
        "name": "Bildschirm",
        "category": "Technik",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 80
    },
    {
        "name": "Birne",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 81
    },
    {
        "name": "Bitte",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 82
    },
    {
        "name": "Blatt",
        "category": "Natur",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 83
    },
    {
        "name": "Bleistift",
        "category": "B\u00fcro",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 84
    },
    {
        "name": "Blick",
        "category": "Wahrnehmung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 85
    },
    {
        "name": "Blume",
        "category": "Natur",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 86
    },
    {
        "name": "Bluse",
        "category": "Kleidung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 87
    },
    {
        "name": "Blut",
        "category": "K\u00f6rper",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 88
    },
    {
        "name": "Bogen",
        "category": "B\u00fcro",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 89
    },
    {
        "name": "Bohne",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 90
    },
    {
        "name": "Br\u00f6tchen",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 91
    },
    {
        "name": "Br\u00fccke",
        "category": "Verkehr",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 92
    },
    {
        "name": "Brief",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 93
    },
    {
        "name": "Briefkasten",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 94
    },
    {
        "name": "Briefmarke",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 95
    },
    {
        "name": "Brieftasche",
        "category": "Alltag",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 96
    },
    {
        "name": "Briefumschlag",
        "category": "B\u00fcro",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 97
    },
    {
        "name": "Brille",
        "category": "Alltag",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 98
    },
    {
        "name": "Brot",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 99
    },
    {
        "name": "Bruder",
        "category": "Familie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 100
    },
    {
        "name": "Buch",
        "category": "Bildung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 101
    },
    {
        "name": "Buchstabe",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 102
    },
    {
        "name": "Bus",
        "category": "Transport",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 103
    },
    {
        "name": "Butter",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 104
    },
    {
        "name": "Caf\u00e9",
        "category": "Gastronomie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 105
    },
    {
        "name": "CD",
        "category": "Technik",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 106
    },
    {
        "name": "CD-ROM",
        "category": "Technik",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 107
    },
    {
        "name": "Chef",
        "category": "Beruf",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 108
    },
    {
        "name": "Computer",
        "category": "Technik",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 109
    },
    {
        "name": "Creme",
        "category": "Kosmetik",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 110
    },
    {
        "name": "Dach",
        "category": "Geb\u00e4ude",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 111
    },
    {
        "name": "Dame",
        "category": "Person",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 112
    },
    {
        "name": "Dank",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 113
    },
    {
        "name": "Datum",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 114
    },
    {
        "name": "Dauer",
        "category": "Zeit",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 115
    },
    {
        "name": "Deutsche",
        "category": "Person",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 116
    },
    {
        "name": "Dezember",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 117
    },
    {
        "name": "Dienstag",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 118
    },
    {
        "name": "Ding",
        "category": "Allgemein",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 119
    },
    {
        "name": "Disco",
        "category": "Freizeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 120
    },
    {
        "name": "Doktor",
        "category": "Beruf",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 121
    },
    {
        "name": "Dom",
        "category": "Geb\u00e4ude",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 122
    },
    {
        "name": "Donnerstag",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 123
    },
    {
        "name": "Doppelzimmer",
        "category": "Unterkunft",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 124
    },
    {
        "name": "Dorf",
        "category": "Orte",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 125
    },
    {
        "name": "Drucker",
        "category": "Technik",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 126
    },
    {
        "name": "Durchsage",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 127
    },
    {
        "name": "Durst",
        "category": "K\u00f6rper",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 128
    },
    {
        "name": "Dusche",
        "category": "Sanit\u00e4r",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 129
    },
    {
        "name": "E-Mail",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 130
    },
    {
        "name": "Ecke",
        "category": "Ort",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 131
    },
    {
        "name": "Ehefrau",
        "category": "Familie",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 132
    },
    {
        "name": "Ehemann",
        "category": "Familie",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 133
    },
    {
        "name": "Ei",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 134
    },
    {
        "name": "Einf\u00fchrung",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 135
    },
    {
        "name": "Eingang",
        "category": "Geb\u00e4ude",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 136
    },
    {
        "name": "Einladung",
        "category": "Soziales",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 137
    },
    {
        "name": "Eintritt",
        "category": "Freizeit",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 138
    },
    {
        "name": "Einwohner",
        "category": "Person",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 139
    },
    {
        "name": "Einzelzimmer",
        "category": "Unterkunft",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 140
    },
    {
        "name": "Eis",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 141
    },
    {
        "name": "Eltern",
        "category": "Familie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 142
    },
    {
        "name": "Empf\u00e4nger",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 143
    },
    {
        "name": "Empfang",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 144
    },
    {
        "name": "Ende",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 145
    },
    {
        "name": "Enkel",
        "category": "Familie",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 146
    },
    {
        "name": "Entschuldigung",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 147
    },
    {
        "name": "Erdgeschoss",
        "category": "Geb\u00e4ude",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 148
    },
    {
        "name": "Erfahrung",
        "category": "Allgemein",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 149
    },
    {
        "name": "Ergebnis",
        "category": "Allgemein",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 150
    },
    {
        "name": "Erlaubnis",
        "category": "Verwaltung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 151
    },
    {
        "name": "Erm\u00e4\u00dfigung",
        "category": "Finanzen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 152
    },
    {
        "name": "Erwachsene",
        "category": "Person",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 153
    },
    {
        "name": "Essen",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 154
    },
    {
        "name": "Export",
        "category": "Wirtschaft",
        "difficulty": 3,
        "type": "Hauptwort",
        "id": 155
    },
    {
        "name": "F\u00e4hre",
        "category": "Transport",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 156
    },
    {
        "name": "F\u00fchrerschein",
        "category": "Dokumente",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 157
    },
    {
        "name": "F\u00fchrung",
        "category": "Dienstleistung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 158
    },
    {
        "name": "Fabrik",
        "category": "Wirtschaft",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 159
    },
    {
        "name": "Fahrer",
        "category": "Beruf",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 160
    },
    {
        "name": "Fahrkarte",
        "category": "Transport",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 161
    },
    {
        "name": "Fahrplan",
        "category": "Transport",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 162
    },
    {
        "name": "Fahrrad",
        "category": "Transport",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 163
    },
    {
        "name": "Familie",
        "category": "Soziales",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 164
    },
    {
        "name": "Familienname",
        "category": "Person",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 165
    },
    {
        "name": "Familienstand",
        "category": "Person",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 166
    },
    {
        "name": "Farbe",
        "category": "Eigenschaften",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 167
    },
    {
        "name": "Fax",
        "category": "Technik",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 168
    },
    {
        "name": "Februar",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 169
    },
    {
        "name": "Fehler",
        "category": "Allgemein",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 170
    },
    {
        "name": "Fenster",
        "category": "Geb\u00e4ude",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 171
    },
    {
        "name": "Ferien",
        "category": "Freizeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 172
    },
    {
        "name": "Fernsehger\u00e4t",
        "category": "Technik",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 173
    },
    {
        "name": "Fest",
        "category": "Freizeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 174
    },
    {
        "name": "Feuer",
        "category": "Natur",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 175
    },
    {
        "name": "Feuerwehr",
        "category": "Beruf",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 176
    },
    {
        "name": "Feuerzeug",
        "category": "Alltag",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 177
    },
    {
        "name": "Fieber",
        "category": "Gesundheit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 178
    },
    {
        "name": "Film",
        "category": "Unterhaltung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 179
    },
    {
        "name": "Firma",
        "category": "Wirtschaft",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 180
    },
    {
        "name": "Fisch",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 181
    },
    {
        "name": "Flasche",
        "category": "Alltag",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 182
    },
    {
        "name": "Fleisch",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 183
    },
    {
        "name": "Flughafen",
        "category": "Transport",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 184
    },
    {
        "name": "Flugzeug",
        "category": "Transport",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 185
    },
    {
        "name": "Flur",
        "category": "Geb\u00e4ude",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 186
    },
    {
        "name": "Fluss",
        "category": "Natur",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 187
    },
    {
        "name": "Formular",
        "category": "Verwaltung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 188
    },
    {
        "name": "Foto",
        "category": "Medien",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 189
    },
    {
        "name": "Fotoapparat",
        "category": "Technik",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 190
    },
    {
        "name": "Fr\u00fchjahr",
        "category": "Zeit",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 191
    },
    {
        "name": "Fr\u00fchling",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 192
    },
    {
        "name": "Fr\u00fchst\u00fcck",
        "category": "Mahlzeiten",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 193
    },
    {
        "name": "Frage",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 194
    },
    {
        "name": "Frau",
        "category": "Person",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 195
    },
    {
        "name": "Freitag",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 196
    },
    {
        "name": "Freizeit",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 197
    },
    {
        "name": "Freund",
        "category": "Soziales",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 198
    },
    {
        "name": "Freundin",
        "category": "Soziales",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 199
    },
    {
        "name": "Friseur",
        "category": "Beruf",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 200
    },
    {
        "name": "Frist",
        "category": "Verwaltung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 201
    },
    {
        "name": "Fu\u00df",
        "category": "K\u00f6rper",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 202
    },
    {
        "name": "Fu\u00dfball",
        "category": "Sport",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 203
    },
    {
        "name": "Fundb\u00fcro",
        "category": "Dienstleistung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 204
    },
    {
        "name": "Gabel",
        "category": "Haushalt",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 205
    },
    {
        "name": "Garage",
        "category": "Geb\u00e4ude",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 206
    },
    {
        "name": "Garten",
        "category": "Wohnen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 207
    },
    {
        "name": "Gas",
        "category": "Energie",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 208
    },
    {
        "name": "Gast",
        "category": "Soziales",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 209
    },
    {
        "name": "Geb\u00fchr",
        "category": "Finanzen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 210
    },
    {
        "name": "Geburtsjahr",
        "category": "Person",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 211
    },
    {
        "name": "Geburtsort",
        "category": "Person",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 212
    },
    {
        "name": "Geburtstag",
        "category": "Feste",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 213
    },
    {
        "name": "Gegenteil",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 214
    },
    {
        "name": "Geld",
        "category": "Finanzen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 215
    },
    {
        "name": "Geldb\u00f6rse",
        "category": "Alltag",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 216
    },
    {
        "name": "Gem\u00fcse",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 217
    },
    {
        "name": "Gep\u00e4ck",
        "category": "Reisen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 218
    },
    {
        "name": "Gericht",
        "category": "Recht",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 219
    },
    {
        "name": "Gesamtschule",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 220
    },
    {
        "name": "Gesch\u00e4ft",
        "category": "Wirtschaft",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 221
    },
    {
        "name": "Geschenk",
        "category": "Soziales",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 222
    },
    {
        "name": "Geschirr",
        "category": "Haushalt",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 223
    },
    {
        "name": "Geschwister",
        "category": "Familie",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 224
    },
    {
        "name": "Gesicht",
        "category": "K\u00f6rper",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 225
    },
    {
        "name": "Gespr\u00e4ch",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 226
    },
    {
        "name": "Gesundheit",
        "category": "Gesundheit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 227
    },
    {
        "name": "Getr\u00e4nk",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 228
    },
    {
        "name": "Gegenteil",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 229
    },
    {
        "name": "Geld",
        "category": "Finanzen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 230
    },
    {
        "name": "Geldb\u00f6rse",
        "category": "Alltag",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 231
    },
    {
        "name": "Gem\u00fcse",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 232
    },
    {
        "name": "Gep\u00e4ck",
        "category": "Reisen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 233
    },
    {
        "name": "Gericht",
        "category": "Recht",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 234
    },
    {
        "name": "Gesamtschule",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 235
    },
    {
        "name": "Gesch\u00e4ft",
        "category": "Wirtschaft",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 236
    },
    {
        "name": "Geschenk",
        "category": "Soziales",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 237
    },
    {
        "name": "Geschirr",
        "category": "Haushalt",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 238
    },
    {
        "name": "Geschwister",
        "category": "Familie",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 239
    },
    {
        "name": "Gesicht",
        "category": "K\u00f6rper",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 240
    },
    {
        "name": "Gespr\u00e4ch",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 241
    },
    {
        "name": "Gesundheit",
        "category": "Gesundheit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 242
    },
    {
        "name": "Getr\u00e4nk",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 243
    },
    {
        "name": "Gewicht",
        "category": "Ma\u00dfe",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 244
    },
    {
        "name": "Gift",
        "category": "Gefahr",
        "difficulty": 3,
        "type": "Hauptwort",
        "id": 245
    },
    {
        "name": "Glas",
        "category": "Haushalt",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 246
    },
    {
        "name": "Gleis",
        "category": "Transport",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 247
    },
    {
        "name": "Gl\u00fcck",
        "category": "Emotionen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 248
    },
    {
        "name": "Gott",
        "category": "Religion",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 249
    },
    {
        "name": "Gr\u00f6\u00dfe",
        "category": "Eigenschaften",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 250
    },
    {
        "name": "Gro\u00dfeltern",
        "category": "Familie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 251
    },
    {
        "name": "Gro\u00dfmutter",
        "category": "Familie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 252
    },
    {
        "name": "Gro\u00dfvater",
        "category": "Familie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 253
    },
    {
        "name": "Gruppe",
        "category": "Soziales",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 254
    },
    {
        "name": "Gru\u00df",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 255
    },
    {
        "name": "Grundschule",
        "category": "Bildung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 256
    },
    {
        "name": "Gymnasium",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 257
    },
    {
        "name": "Haar",
        "category": "K\u00f6rper",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 258
    },
    {
        "name": "H\u00e4hnchen",
        "category": "Lebensmittel",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 259
    },
    {
        "name": "Halle",
        "category": "Geb\u00e4ude",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 260
    },
    {
        "name": "Hals",
        "category": "K\u00f6rper",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 261
    },
    {
        "name": "Haltestelle",
        "category": "Transport",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 262
    },
    {
        "name": "Hand",
        "category": "K\u00f6rper",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 263
    },
    {
        "name": "Handtuch",
        "category": "Haushalt",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 264
    },
    {
        "name": "Handy",
        "category": "Technik",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 265
    },
    {
        "name": "Haus",
        "category": "Geb\u00e4ude",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 266
    },
    {
        "name": "Haushalt",
        "category": "Alltag",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 267
    },
    {
        "name": "Hausaufgabe",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 268
    },
    {
        "name": "Hausfrau",
        "category": "Beruf",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 269
    },
    {
        "name": "Hausmann",
        "category": "Beruf",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 270
    },
    {
        "name": "Heimat",
        "category": "Orte",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 271
    },
    {
        "name": "Heizung",
        "category": "Geb\u00e4ude",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 272
    },
    {
        "name": "Hemd",
        "category": "Kleidung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 273
    },
    {
        "name": "Herbst",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 274
    },
    {
        "name": "Herd",
        "category": "Haushalt",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 275
    },
    {
        "name": "Herr",
        "category": "Person",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 276
    },
    {
        "name": "Herz",
        "category": "K\u00f6rper",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 277
    },
    {
        "name": "Hilfe",
        "category": "Soziales",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 278
    },
    {
        "name": "Hobby",
        "category": "Freizeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 279
    },
    {
        "name": "Holz",
        "category": "Material",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 280
    },
    {
        "name": "Hose",
        "category": "Kleidung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 281
    },
    {
        "name": "Hotel",
        "category": "Unterkunft",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 282
    },
    {
        "name": "Hund",
        "category": "Tiere",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 283
    },
    {
        "name": "Hunger",
        "category": "K\u00f6rper",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 284
    },
    {
        "name": "Idee",
        "category": "Denken",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 285
    },
    {
        "name": "Information",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 286
    },
    {
        "name": "Internet",
        "category": "Technik",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 287
    },
    {
        "name": "Jahr",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 288
    },
    {
        "name": "Januar",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 289
    },
    {
        "name": "Job",
        "category": "Beruf",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 290
    },
    {
        "name": "Jugendliche",
        "category": "Person",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 291
    },
    {
        "name": "Juli",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 292
    },
    {
        "name": "Juni",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 293
    },
    {
        "name": "K\u00e4se",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 294
    },
    {
        "name": "K\u00f6rper",
        "category": "Biologie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 295
    },
    {
        "name": "K\u00fcche",
        "category": "Wohnen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 296
    },
    {
        "name": "Kaffee",
        "category": "Getr\u00e4nke",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 297
    },
    {
        "name": "Kalender",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 298
    },
    {
        "name": "Kamera",
        "category": "Technik",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 299
    },
    {
        "name": "Karte",
        "category": "Allgemein",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 300
    },
    {
        "name": "Kartoffel",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 301
    },
    {
        "name": "Kasse",
        "category": "Gesch\u00e4ft",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 302
    },
    {
        "name": "Kassette",
        "category": "Technik",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 303
    },
    {
        "name": "Katze",
        "category": "Tiere",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 304
    },
    {
        "name": "Keller",
        "category": "Geb\u00e4ude",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 305
    },
    {
        "name": "Kellner",
        "category": "Beruf",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 306
    },
    {
        "name": "Kellnerin",
        "category": "Beruf",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 307
    },
    {
        "name": "Kind",
        "category": "Person",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 308
    },
    {
        "name": "Kindergarten",
        "category": "Bildung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 309
    },
    {
        "name": "Kinderwagen",
        "category": "Familie",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 310
    },
    {
        "name": "Kino",
        "category": "Freizeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 311
    },
    {
        "name": "Kirche",
        "category": "Geb\u00e4ude",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 312
    },
    {
        "name": "Klasse",
        "category": "Bildung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 313
    },
    {
        "name": "Kleid",
        "category": "Kleidung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 314
    },
    {
        "name": "Kleidung",
        "category": "Mode",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 315
    },
    {
        "name": "Kneipe",
        "category": "Gastronomie",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 316
    },
    {
        "name": "Koffer",
        "category": "Reisen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 317
    },
    {
        "name": "Kollege",
        "category": "Beruf",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 318
    },
    {
        "name": "Kollegin",
        "category": "Beruf",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 319
    },
    {
        "name": "Konstruktion",
        "category": "Technik",
        "difficulty": 3,
        "type": "Hauptwort",
        "id": 320
    },
    {
        "name": "Kontakt",
        "category": "Soziales",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 321
    },
    {
        "name": "Konto",
        "category": "Finanzen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 322
    },
    {
        "name": "Kontrolle",
        "category": "Verwaltung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 323
    },
    {
        "name": "Kopf",
        "category": "K\u00f6rper",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 324
    },
    {
        "name": "Kosmetik",
        "category": "Sch\u00f6nheit",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 325
    },
    {
        "name": "Krankenkasse",
        "category": "Gesundheit",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 326
    },
    {
        "name": "Krankenhaus",
        "category": "Gesundheit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 327
    },
    {
        "name": "Krankheit",
        "category": "Gesundheit",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 328
    },
    {
        "name": "Kreditkarte",
        "category": "Finanzen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 329
    },
    {
        "name": "Kreuzung",
        "category": "Verkehr",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 330
    },
    {
        "name": "Kuchen",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 331
    },
    {
        "name": "Kugelschreiber",
        "category": "B\u00fcro",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 332
    },
    {
        "name": "Kunde",
        "category": "Gesch\u00e4ft",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 333
    },
    {
        "name": "Kundin",
        "category": "Gesch\u00e4ft",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 334
    },
    {
        "name": "Kurs",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 335
    },
    {
        "name": "L\u00f6ffel",
        "category": "Haushalt",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 336
    },
    {
        "name": "L\u00f6sung",
        "category": "Allgemein",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 337
    },
    {
        "name": "Laden",
        "category": "Gesch\u00e4ft",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 338
    },
    {
        "name": "Lager",
        "category": "Wirtschaft",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 339
    },
    {
        "name": "Lampe",
        "category": "Haushalt",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 340
    },
    {
        "name": "Land",
        "category": "Geografie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 341
    },
    {
        "name": "Landschaft",
        "category": "Natur",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 342
    },
    {
        "name": "Leben",
        "category": "Allgemein",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 343
    },
    {
        "name": "Lebensmittel",
        "category": "Essen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 344
    },
    {
        "name": "Leber",
        "category": "K\u00f6rper",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 345
    },
    {
        "name": "Lehrerin",
        "category": "Beruf",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 346
    },
    {
        "name": "Lehrer",
        "category": "Beruf",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 347
    },
    {
        "name": "Lehrstelle",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 348
    },
    {
        "name": "Leute",
        "category": "Person",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 349
    },
    {
        "name": "Licht",
        "category": "Physik",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 350
    },
    {
        "name": "Lied",
        "category": "Musik",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 351
    },
    {
        "name": "Lohn",
        "category": "Finanzen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 352
    },
    {
        "name": "Lokal",
        "category": "Gastronomie",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 353
    },
    {
        "name": "Luft",
        "category": "Natur",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 354
    },
    {
        "name": "Lust",
        "category": "Emotion",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 355
    },
    {
        "name": "M\u00e4dchen",
        "category": "Person",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 356
    },
    {
        "name": "M\u00e4rz",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 357
    },
    {
        "name": "M\u00f6bel",
        "category": "Wohnen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 358
    },
    {
        "name": "M\u00fcll",
        "category": "Haushalt",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 359
    },
    {
        "name": "Mutter",
        "category": "Familie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 360
    },
    {
        "name": "Magen",
        "category": "K\u00f6rper",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 361
    },
    {
        "name": "Mai",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 362
    },
    {
        "name": "Mann",
        "category": "Person",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 363
    },
    {
        "name": "Mannschaft",
        "category": "Sport",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 364
    },
    {
        "name": "Mantel",
        "category": "Kleidung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 365
    },
    {
        "name": "Markt",
        "category": "Wirtschaft",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 366
    },
    {
        "name": "Maschine",
        "category": "Technik",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 367
    },
    {
        "name": "Material",
        "category": "Allgemein",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 368
    },
    {
        "name": "Mechaniker",
        "category": "Beruf",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 369
    },
    {
        "name": "Medikament",
        "category": "Gesundheit",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 370
    },
    {
        "name": "Meer",
        "category": "Natur",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 371
    },
    {
        "name": "Mehrwertsteuer",
        "category": "Finanzen",
        "difficulty": 3,
        "type": "Hauptwort",
        "id": 372
    },
    {
        "name": "Meinung",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 373
    },
    {
        "name": "Menge",
        "category": "Ma\u00dfe",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 374
    },
    {
        "name": "Mensch",
        "category": "Person",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 375
    },
    {
        "name": "Messer",
        "category": "Haushalt",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 376
    },
    {
        "name": "Miete",
        "category": "Wohnen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 377
    },
    {
        "name": "Milch",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 378
    },
    {
        "name": "Minute",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 379
    },
    {
        "name": "Mittag",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 380
    },
    {
        "name": "Mittagessen",
        "category": "Mahlzeiten",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 381
    },
    {
        "name": "Mittwoch",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 382
    },
    {
        "name": "Monat",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 383
    },
    {
        "name": "Montag",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 384
    },
    {
        "name": "Morgen",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 385
    },
    {
        "name": "Motor",
        "category": "Technik",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 386
    },
    {
        "name": "Museum",
        "category": "Kultur",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 387
    },
    {
        "name": "Musik",
        "category": "Kunst",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 388
    },
    {
        "name": "Mutter",
        "category": "Familie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 389
    },
    {
        "name": "Nachbar",
        "category": "Soziales",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 390
    },
    {
        "name": "Nachbarin",
        "category": "Soziales",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 391
    },
    {
        "name": "Nachmittag",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 392
    },
    {
        "name": "Nachricht",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 393
    },
    {
        "name": "Nacht",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 394
    },
    {
        "name": "Name",
        "category": "Person",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 395
    },
    {
        "name": "Natur",
        "category": "Umwelt",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 396
    },
    {
        "name": "Nebel",
        "category": "Wetter",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 397
    },
    {
        "name": "Norden",
        "category": "Richtung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 398
    },
    {
        "name": "Note",
        "category": "Bildung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 399
    },
    {
        "name": "Notfall",
        "category": "Notfall",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 400
    },
    {
        "name": "November",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 401
    },
    {
        "name": "Nummer",
        "category": "Zahlen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 402
    },
    {
        "name": "Obst",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 403
    },
    {
        "name": "Oktober",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 404
    },
    {
        "name": "Oma",
        "category": "Familie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 405
    },
    {
        "name": "Opa",
        "category": "Familie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 406
    },
    {
        "name": "Operation",
        "category": "Gesundheit",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 407
    },
    {
        "name": "Orange",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 408
    },
    {
        "name": "Ordnung",
        "category": "Allgemein",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 409
    },
    {
        "name": "Ort",
        "category": "Geografie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 410
    },
    {
        "name": "Osten",
        "category": "Richtung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 411
    },
    {
        "name": "\u00d6l",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 412
    },
    {
        "name": "Paar",
        "category": "Beziehung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 413
    },
    {
        "name": "Paket",
        "category": "Post",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 414
    },
    {
        "name": "Panne",
        "category": "Verkehr",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 415
    },
    {
        "name": "Papa",
        "category": "Familie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 416
    },
    {
        "name": "Papier",
        "category": "B\u00fcro",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 417
    },
    {
        "name": "Papiere",
        "category": "Dokumente",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 418
    },
    {
        "name": "Park",
        "category": "Freizeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 419
    },
    {
        "name": "Parkplatz",
        "category": "Verkehr",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 420
    },
    {
        "name": "Partner",
        "category": "Beziehung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 421
    },
    {
        "name": "Partnerin",
        "category": "Beziehung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 422
    },
    {
        "name": "Pass",
        "category": "Dokumente",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 423
    },
    {
        "name": "Patient",
        "category": "Gesundheit",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 424
    },
    {
        "name": "Patientin",
        "category": "Gesundheit",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 425
    },
    {
        "name": "Pause",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 426
    },
    {
        "name": "Person",
        "category": "Mensch",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 427
    },
    {
        "name": "Pferd",
        "category": "Tiere",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 428
    },
    {
        "name": "Pflanze",
        "category": "Natur",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 429
    },
    {
        "name": "Plan",
        "category": "Organisation",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 430
    },
    {
        "name": "Plastik",
        "category": "Material",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 431
    },
    {
        "name": "Platz",
        "category": "Ort",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 432
    },
    {
        "name": "Polizei",
        "category": "Sicherheit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 433
    },
    {
        "name": "Polizist",
        "category": "Beruf",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 434
    },
    {
        "name": "Polizistin",
        "category": "Beruf",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 435
    },
    {
        "name": "Post",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 436
    },
    {
        "name": "Postleitzahl",
        "category": "Adresse",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 437
    },
    {
        "name": "Praxis",
        "category": "Gesundheit",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 438
    },
    {
        "name": "Preis",
        "category": "Wirtschaft",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 439
    },
    {
        "name": "Problem",
        "category": "Allgemein",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 440
    },
    {
        "name": "Produkt",
        "category": "Wirtschaft",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 441
    },
    {
        "name": "Programm",
        "category": "Medien",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 442
    },
    {
        "name": "Pr\u00fcfung",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 443
    },
    {
        "name": "Qualit\u00e4t",
        "category": "Eigenschaften",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 444
    },
    {
        "name": "Quittung",
        "category": "Finanzen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 445
    },
    {
        "name": "Rad",
        "category": "Transport",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 446
    },
    {
        "name": "Radio",
        "category": "Medien",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 447
    },
    {
        "name": "Rathaus",
        "category": "Geb\u00e4ude",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 448
    },
    {
        "name": "Raum",
        "category": "Geb\u00e4ude",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 449
    },
    {
        "name": "Rechnung",
        "category": "Finanzen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 450
    },
    {
        "name": "Regen",
        "category": "Wetter",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 451
    },
    {
        "name": "Regenschirm",
        "category": "Alltag",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 452
    },
    {
        "name": "Region",
        "category": "Geografie",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 453
    },
    {
        "name": "Reifen",
        "category": "Auto",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 454
    },
    {
        "name": "Reis",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 455
    },
    {
        "name": "Reise",
        "category": "Freizeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 456
    },
    {
        "name": "Reisef\u00fchrer",
        "category": "Tourismus",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 457
    },
    {
        "name": "Reisende",
        "category": "Person",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 458
    },
    {
        "name": "Reparatur",
        "category": "Service",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 459
    },
    {
        "name": "Restaurant",
        "category": "Gastronomie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 460
    },
    {
        "name": "Rezept",
        "category": "Gesundheit",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 461
    },
    {
        "name": "Rezeption",
        "category": "Service",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 462
    },
    {
        "name": "Richter",
        "category": "Beruf",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 463
    },
    {
        "name": "Richtung",
        "category": "Navigation",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 464
    },
    {
        "name": "Ring",
        "category": "Schmuck",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 465
    },
    {
        "name": "Rock",
        "category": "Kleidung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 466
    },
    {
        "name": "Rose",
        "category": "Pflanzen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 467
    },
    {
        "name": "R\u00fccken",
        "category": "K\u00f6rper",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 468
    },
    {
        "name": "Rundfahrt",
        "category": "Tourismus",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 469
    },
    {
        "name": "S\u00fcden",
        "category": "Richtung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 470
    },
    {
        "name": "Sache",
        "category": "Allgemein",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 471
    },
    {
        "name": "Saft",
        "category": "Getr\u00e4nke",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 472
    },
    {
        "name": "Salat",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 473
    },
    {
        "name": "Salz",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 474
    },
    {
        "name": "Samstag",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 475
    },
    {
        "name": "Satz",
        "category": "Sprache",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 476
    },
    {
        "name": "Sch\u00fcler",
        "category": "Bildung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 477
    },
    {
        "name": "Sch\u00fclerin",
        "category": "Bildung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 478
    },
    {
        "name": "Schalter",
        "category": "Technik",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 479
    },
    {
        "name": "Scheckkarte",
        "category": "Finanzen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 480
    },
    {
        "name": "Schiff",
        "category": "Transport",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 481
    },
    {
        "name": "Schild",
        "category": "Information",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 482
    },
    {
        "name": "Schinken",
        "category": "Lebensmittel",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 483
    },
    {
        "name": "Schl\u00fcssel",
        "category": "Alltag",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 484
    },
    {
        "name": "Schloss",
        "category": "Geb\u00e4ude",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 485
    },
    {
        "name": "Schluss",
        "category": "Zeit",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 486
    },
    {
        "name": "Schnee",
        "category": "Wetter",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 487
    },
    {
        "name": "Schnupfen",
        "category": "Gesundheit",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 488
    },
    {
        "name": "Schokolade",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 489
    },
    {
        "name": "Schrank",
        "category": "M\u00f6bel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 490
    },
    {
        "name": "Schuh",
        "category": "Kleidung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 491
    },
    {
        "name": "Schule",
        "category": "Bildung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 492
    },
    {
        "name": "Schwester",
        "category": "Familie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 493
    },
    {
        "name": "See",
        "category": "Natur",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 494
    },
    {
        "name": "Sehensw\u00fcrdigkeit",
        "category": "Tourismus",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 495
    },
    {
        "name": "Seife",
        "category": "Hygiene",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 496
    },
    {
        "name": "September",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 497
    },
    {
        "name": "Service",
        "category": "Dienstleistung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 498
    },
    {
        "name": "Sofa",
        "category": "M\u00f6bel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 499
    },
    {
        "name": "Sohn",
        "category": "Familie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 500
    },
    {
        "name": "Sommer",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 501
    },
    {
        "name": "Sonne",
        "category": "Natur",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 502
    },
    {
        "name": "Sonntag",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 503
    },
    {
        "name": "Sorge",
        "category": "Emotion",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 504
    },
    {
        "name": "Spa\u00df",
        "category": "Emotion",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 505
    },
    {
        "name": "Spaziergang",
        "category": "Freizeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 506
    },
    {
        "name": "Speise",
        "category": "Essen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 507
    },
    {
        "name": "Spielplatz",
        "category": "Freizeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 508
    },
    {
        "name": "Sprache",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 509
    },
    {
        "name": "Sprachschule",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 510
    },
    {
        "name": "Stadt",
        "category": "Geografie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 511
    },
    {
        "name": "Standesamt",
        "category": "Verwaltung",
        "difficulty": 3,
        "type": "Hauptwort",
        "id": 512
    },
    {
        "name": "Stempel",
        "category": "B\u00fcro",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 513
    },
    {
        "name": "Steuer",
        "category": "Finanzen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 514
    },
    {
        "name": "Stift",
        "category": "B\u00fcro",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 515
    },
    {
        "name": "Stirn",
        "category": "K\u00f6rper",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 516
    },
    {
        "name": "Stra\u00dfe",
        "category": "Verkehr",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 517
    },
    {
        "name": "Stra\u00dfenbahn",
        "category": "Transport",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 518
    },
    {
        "name": "Student",
        "category": "Bildung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 519
    },
    {
        "name": "Studentin",
        "category": "Bildung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 520
    },
    {
        "name": "Studium",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 521
    },
    {
        "name": "Stuhl",
        "category": "M\u00f6bel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 522
    },
    {
        "name": "Stunde",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 523
    },
    {
        "name": "Supermarkt",
        "category": "Einkaufen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 524
    },
    {
        "name": "Suppe",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 525
    },
    {
        "name": "System",
        "category": "Technik",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 526
    },
    {
        "name": "Tablett",
        "category": "Haushalt",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 527
    },
    {
        "name": "Tag",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 528
    },
    {
        "name": "Tante",
        "category": "Familie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 529
    },
    {
        "name": "Tasche",
        "category": "Accessoires",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 530
    },
    {
        "name": "Tasse",
        "category": "Haushalt",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 531
    },
    {
        "name": "Taxi",
        "category": "Transport",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 532
    },
    {
        "name": "Tee",
        "category": "Getr\u00e4nke",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 533
    },
    {
        "name": "Teil",
        "category": "Allgemein",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 534
    },
    {
        "name": "Telefon",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 535
    },
    {
        "name": "Temperatur",
        "category": "Wetter",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 536
    },
    {
        "name": "Teppich",
        "category": "Wohnen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 537
    },
    {
        "name": "Termin",
        "category": "Zeit",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 538
    },
    {
        "name": "Test",
        "category": "Bildung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 539
    },
    {
        "name": "Text",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 540
    },
    {
        "name": "Theater",
        "category": "Kultur",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 541
    },
    {
        "name": "Thema",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 542
    },
    {
        "name": "Ticket",
        "category": "Transport",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 543
    },
    {
        "name": "Tier",
        "category": "Natur",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 544
    },
    {
        "name": "Tisch",
        "category": "M\u00f6bel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 545
    },
    {
        "name": "Tochter",
        "category": "Familie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 546
    },
    {
        "name": "Toilette",
        "category": "Sanit\u00e4r",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 547
    },
    {
        "name": "Tomate",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 548
    },
    {
        "name": "Tour",
        "category": "Reisen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 549
    },
    {
        "name": "Tourist",
        "category": "Person",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 550
    },
    {
        "name": "Treppe",
        "category": "Geb\u00e4ude",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 551
    },
    {
        "name": "Trinkgeld",
        "category": "Gastronomie",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 552
    },
    {
        "name": "T\u00fcr",
        "category": "Geb\u00e4ude",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 553
    },
    {
        "name": "Turm",
        "category": "Geb\u00e4ude",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 554
    },
    {
        "name": "Uhr",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 555
    },
    {
        "name": "Unfall",
        "category": "Notfall",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 556
    },
    {
        "name": "Universit\u00e4t",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 557
    },
    {
        "name": "Unterhaltung",
        "category": "Freizeit",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 558
    },
    {
        "name": "Unterricht",
        "category": "Bildung",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 559
    },
    {
        "name": "Unterschied",
        "category": "Allgemein",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 560
    },
    {
        "name": "Unterschrift",
        "category": "Dokumente",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 561
    },
    {
        "name": "Urlaub",
        "category": "Freizeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 562
    },
    {
        "name": "Vater",
        "category": "Familie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 563
    },
    {
        "name": "Verbindung",
        "category": "Transport",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 564
    },
    {
        "name": "Verein",
        "category": "Organisation",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 565
    },
    {
        "name": "Verk\u00e4ufer",
        "category": "Beruf",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 566
    },
    {
        "name": "Verk\u00e4uferin",
        "category": "Beruf",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 567
    },
    {
        "name": "Verkehr",
        "category": "Transport",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 568
    },
    {
        "name": "Vermieter",
        "category": "Wohnen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 569
    },
    {
        "name": "Vermieterin",
        "category": "Wohnen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 570
    },
    {
        "name": "Versicherung",
        "category": "Finanzen",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 571
    },
    {
        "name": "Video",
        "category": "Medien",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 572
    },
    {
        "name": "Vogel",
        "category": "Tiere",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 573
    },
    {
        "name": "Volksschule",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 574
    },
    {
        "name": "Vorname",
        "category": "Person",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 575
    },
    {
        "name": "Vorsicht",
        "category": "Sicherheit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 576
    },
    {
        "name": "Vorwahl",
        "category": "Telefon",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 577
    },
    {
        "name": "W\u00e4sche",
        "category": "Haushalt",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 578
    },
    {
        "name": "Wagen",
        "category": "Transport",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 579
    },
    {
        "name": "Wald",
        "category": "Natur",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 580
    },
    {
        "name": "Wand",
        "category": "Geb\u00e4ude",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 581
    },
    {
        "name": "Wasser",
        "category": "Getr\u00e4nke",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 582
    },
    {
        "name": "Weg",
        "category": "Verkehr",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 583
    },
    {
        "name": "Wein",
        "category": "Getr\u00e4nke",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 584
    },
    {
        "name": "Welt",
        "category": "Geografie",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 585
    },
    {
        "name": "Werkstatt",
        "category": "Service",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 586
    },
    {
        "name": "Werkzeug",
        "category": "Handwerk",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 587
    },
    {
        "name": "Westen",
        "category": "Richtung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 588
    },
    {
        "name": "Wetter",
        "category": "Natur",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 589
    },
    {
        "name": "Wiederholung",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 590
    },
    {
        "name": "Wiese",
        "category": "Natur",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 591
    },
    {
        "name": "Wind",
        "category": "Wetter",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 592
    },
    {
        "name": "Winter",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 593
    },
    {
        "name": "Woche",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 594
    },
    {
        "name": "Wochentag",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 595
    },
    {
        "name": "Wohnung",
        "category": "Wohnen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 596
    },
    {
        "name": "Wolke",
        "category": "Wetter",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 597
    },
    {
        "name": "Wort",
        "category": "Sprache",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 598
    },
    {
        "name": "Wunsch",
        "category": "Emotion",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 599
    },
    {
        "name": "Zahl",
        "category": "Mathematik",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 600
    },
    {
        "name": "Zahn",
        "category": "K\u00f6rper",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 601
    },
    {
        "name": "Zeit",
        "category": "Zeit",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 602
    },
    {
        "name": "Zeitung",
        "category": "Medien",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 603
    },
    {
        "name": "Zentrum",
        "category": "Ort",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 604
    },
    {
        "name": "Zettel",
        "category": "B\u00fcro",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 605
    },
    {
        "name": "Zeugnis",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 606
    },
    {
        "name": "Zimmer",
        "category": "Wohnen",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 607
    },
    {
        "name": "Zitrone",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 608
    },
    {
        "name": "Zoll",
        "category": "Beh\u00f6rde",
        "difficulty": 2,
        "type": "Hauptwort",
        "id": 609
    },
    {
        "name": "Zucker",
        "category": "Lebensmittel",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 610
    },
    {
        "name": "Zug",
        "category": "Transport",
        "difficulty": 1,
        "type": "Hauptwort",
        "id": 611
    },
    {
        "name": "Hund",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 612
    },
    {
        "name": "Katze",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 613
    },
    {
        "name": "Elefant",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 614
    },
    {
        "name": "L\u00f6we",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 615
    },
    {
        "name": "Giraffe",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 616
    },
    {
        "name": "Pinguin",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 617
    },
    {
        "name": "Krokodil",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 618
    },
    {
        "name": "Affe",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 619
    },
    {
        "name": "Zebra",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 620
    },
    {
        "name": "Nilpferd",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 621
    },
    {
        "name": "Hai",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 622
    },
    {
        "name": "Delfin",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 623
    },
    {
        "name": "Eisb\u00e4r",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 624
    },
    {
        "name": "Tiger",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 625
    },
    {
        "name": "Papagei",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 626
    },
    {
        "name": "Auto",
        "category": "Fahrzeuge",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 627
    },
    {
        "name": "Fahrrad",
        "category": "Fahrzeuge",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 628
    },
    {
        "name": "Flugzeug",
        "category": "Fahrzeuge",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 629
    },
    {
        "name": "Zug",
        "category": "Fahrzeuge",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 630
    },
    {
        "name": "Bus",
        "category": "Fahrzeuge",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 631
    },
    {
        "name": "Rakete",
        "category": "Fahrzeuge",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 632
    },
    {
        "name": "Hubschrauber",
        "category": "Fahrzeuge",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 633
    },
    {
        "name": "Motorrad",
        "category": "Fahrzeuge",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 634
    },
    {
        "name": "Traktor",
        "category": "Fahrzeuge",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 635
    },
    {
        "name": "Raumschiff",
        "category": "Fahrzeuge",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 636
    },
    {
        "name": "Haus",
        "category": "Geb\u00e4ude",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 637
    },
    {
        "name": "Schloss",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 638
    },
    {
        "name": "Wolkenkratzer",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 639
    },
    {
        "name": "Kirche",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 640
    },
    {
        "name": "Schule",
        "category": "Geb\u00e4ude",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 641
    },
    {
        "name": "Turm",
        "category": "Geb\u00e4ude",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 642
    },
    {
        "name": "Br\u00fccke",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 643
    },
    {
        "name": "Pyramide",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 644
    },
    {
        "name": "Iglu",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 645
    },
    {
        "name": "Leuchtturm",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 646
    },
    {
        "name": "Arzt",
        "category": "Berufe",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 647
    },
    {
        "name": "Polizist",
        "category": "Berufe",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 648
    },
    {
        "name": "Feuerwehrmann",
        "category": "Berufe",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 649
    },
    {
        "name": "Lehrer",
        "category": "Berufe",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 650
    },
    {
        "name": "Koch",
        "category": "Berufe",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 651
    },
    {
        "name": "Pilot",
        "category": "Berufe",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 652
    },
    {
        "name": "Astronaut",
        "category": "Berufe",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 653
    },
    {
        "name": "B\u00e4cker",
        "category": "Berufe",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 654
    },
    {
        "name": "Maler",
        "category": "Berufe",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 655
    },
    {
        "name": "G\u00e4rtner",
        "category": "Berufe",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 656
    },
    {
        "name": "Stift",
        "category": "Gegenst\u00e4nde",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 657
    },
    {
        "name": "Buch",
        "category": "Gegenst\u00e4nde",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 658
    },
    {
        "name": "Schere",
        "category": "Gegenst\u00e4nde",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 659
    },
    {
        "name": "Tasse",
        "category": "Gegenst\u00e4nde",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 660
    },
    {
        "name": "Brille",
        "category": "Gegenst\u00e4nde",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 661
    },
    {
        "name": "Uhr",
        "category": "Gegenst\u00e4nde",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 662
    },
    {
        "name": "Schl\u00fcssel",
        "category": "Gegenst\u00e4nde",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 663
    },
    {
        "name": "Telefon",
        "category": "Gegenst\u00e4nde",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 664
    },
    {
        "name": "Computer",
        "category": "Gegenst\u00e4nde",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 665
    },
    {
        "name": "Fernseher",
        "category": "Gegenst\u00e4nde",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 666
    },
    {
        "name": "Fu\u00dfball",
        "category": "Sport",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 667
    },
    {
        "name": "Basketball",
        "category": "Sport",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 668
    },
    {
        "name": "Tennis",
        "category": "Sport",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 669
    },
    {
        "name": "Skateboard",
        "category": "Sport",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 670
    },
    {
        "name": "Ski",
        "category": "Sport",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 671
    },
    {
        "name": "Drache",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 672
    },
    {
        "name": "Einhorn",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 673
    },
    {
        "name": "Zauberer",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 674
    },
    {
        "name": "Fee",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 675
    },
    {
        "name": "Hexe",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 676
    },
    {
        "name": "Ritter",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 677
    },
    {
        "name": "Pirat",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 678
    },
    {
        "name": "Ninja",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 679
    },
    {
        "name": "Superheld",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 680
    },
    {
        "name": "Roboter",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 681
    },
    {
        "name": "Baum",
        "category": "Natur",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 682
    },
    {
        "name": "Blume",
        "category": "Natur",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 683
    },
    {
        "name": "Berg",
        "category": "Natur",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 684
    },
    {
        "name": "Strand",
        "category": "Natur",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 685
    },
    {
        "name": "Wald",
        "category": "Natur",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 686
    },
    {
        "name": "Vulkan",
        "category": "Natur",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 687
    },
    {
        "name": "Wasserfall",
        "category": "Natur",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 688
    },
    {
        "name": "Insel",
        "category": "Natur",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 689
    },
    {
        "name": "W\u00fcste",
        "category": "Natur",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 690
    },
    {
        "name": "Dschungel",
        "category": "Natur",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 691
    },
    {
        "name": "Smartphone",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 692
    },
    {
        "name": "Tablet",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 693
    },
    {
        "name": "Laptop",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 694
    },
    {
        "name": "Kamera",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 695
    },
    {
        "name": "Konsole",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 696
    },
    {
        "name": "Pizza",
        "category": "Essen",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 697
    },
    {
        "name": "Hamburger",
        "category": "Essen",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 698
    },
    {
        "name": "Spaghetti",
        "category": "Essen",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 699
    },
    {
        "name": "Kuchen",
        "category": "Essen",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 700
    },
    {
        "name": "Eis",
        "category": "Essen",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 701
    },
    {
        "name": "T-Shirt",
        "category": "Kleidung",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 702
    },
    {
        "name": "Hose",
        "category": "Kleidung",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 703
    },
    {
        "name": "Schuhe",
        "category": "Kleidung",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 704
    },
    {
        "name": "M\u00fctze",
        "category": "Kleidung",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 705
    },
    {
        "name": "Jacke",
        "category": "Kleidung",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 706
    },
    {
        "name": "Burg",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 707
    },
    {
        "name": "Windm\u00fchle",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 708
    },
    {
        "name": "Garage",
        "category": "Geb\u00e4ude",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 709
    },
    {
        "name": "Zelt",
        "category": "Geb\u00e4ude",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 710
    },
    {
        "name": "Scheune",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 711
    },
    {
        "name": "Schwein",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 712
    },
    {
        "name": "Kuh",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 713
    },
    {
        "name": "Pferd",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 714
    },
    {
        "name": "Schaf",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 715
    },
    {
        "name": "Huhn",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 716
    },
    {
        "name": "Ente",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 717
    },
    {
        "name": "Maus",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 718
    },
    {
        "name": "Kaninchen",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 719
    },
    {
        "name": "Hamster",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 720
    },
    {
        "name": "Schildkr\u00f6te",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 721
    },
    {
        "name": "Gitarre",
        "category": "Musik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 722
    },
    {
        "name": "Klavier",
        "category": "Musik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 723
    },
    {
        "name": "Trommel",
        "category": "Musik",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 724
    },
    {
        "name": "Fl\u00f6te",
        "category": "Musik",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 725
    },
    {
        "name": "Geige",
        "category": "Musik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 726
    },
    {
        "name": "Sonnenbrille",
        "category": "Gegenst\u00e4nde",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 727
    },
    {
        "name": "Regenschirm",
        "category": "Gegenst\u00e4nde",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 728
    },
    {
        "name": "Rucksack",
        "category": "Gegenst\u00e4nde",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 729
    },
    {
        "name": "Handtasche",
        "category": "Gegenst\u00e4nde",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 730
    },
    {
        "name": "Geldb\u00f6rse",
        "category": "Gegenst\u00e4nde",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 731
    },
    {
        "name": "Smartphone",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 732
    },
    {
        "name": "Kopfh\u00f6rer",
        "category": "Technik",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 733
    },
    {
        "name": "Lautsprecher",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 734
    },
    {
        "name": "Mikrofon",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 735
    },
    {
        "name": "Drucker",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 736
    },
    {
        "name": "Skateboard",
        "category": "Sport",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 737
    },
    {
        "name": "Rollschuhe",
        "category": "Sport",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 738
    },
    {
        "name": "Schlitten",
        "category": "Sport",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 739
    },
    {
        "name": "Surfbrett",
        "category": "Sport",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 740
    },
    {
        "name": "Boxhandschuhe",
        "category": "Sport",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 741
    },
    {
        "name": "Krone",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 742
    },
    {
        "name": "Zauberstab",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 743
    },
    {
        "name": "Schatzkiste",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 744
    },
    {
        "name": "Kristallkugel",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 745
    },
    {
        "name": "Zaubertrank",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 746
    },
    {
        "name": "Palme",
        "category": "Natur",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 747
    },
    {
        "name": "Kaktus",
        "category": "Natur",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 748
    },
    {
        "name": "Regenbogen",
        "category": "Natur",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 749
    },
    {
        "name": "Sonne",
        "category": "Natur",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 750
    },
    {
        "name": "Mond",
        "category": "Natur",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 751
    },
    {
        "name": "Stern",
        "category": "Natur",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 752
    },
    {
        "name": "Wolke",
        "category": "Natur",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 753
    },
    {
        "name": "Regentropfen",
        "category": "Natur",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 754
    },
    {
        "name": "Schneeflocke",
        "category": "Natur",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 755
    },
    {
        "name": "Blitz",
        "category": "Natur",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 756
    },
    {
        "name": "Sandwich",
        "category": "Essen",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 757
    },
    {
        "name": "Donut",
        "category": "Essen",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 758
    },
    {
        "name": "Brezel",
        "category": "Essen",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 759
    },
    {
        "name": "Schokolade",
        "category": "Essen",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 760
    },
    {
        "name": "Hot Dog",
        "category": "Essen",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 761
    },
    {
        "name": "Wort",
        "category": "Kategorie",
        "difficulty": "Schwierigkeitsgrad",
        "type": "Hauptwort",
        "id": 762
    },
    {
        "name": "Pullover",
        "category": "Kleidung",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 763
    },
    {
        "name": "Schal",
        "category": "Kleidung",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 764
    },
    {
        "name": "Handschuhe",
        "category": "Kleidung",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 765
    },
    {
        "name": "Stiefel",
        "category": "Kleidung",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 766
    },
    {
        "name": "Socken",
        "category": "Kleidung",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 767
    },
    {
        "name": "Labor",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 768
    },
    {
        "name": "Fabrik",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 769
    },
    {
        "name": "Stadion",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 770
    },
    {
        "name": "Museum",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 771
    },
    {
        "name": "Bibliothek",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 772
    },
    {
        "name": "Giraffe",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 773
    },
    {
        "name": "Panda",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 774
    },
    {
        "name": "Koala",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 775
    },
    {
        "name": "Gorilla",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 776
    },
    {
        "name": "Schlange",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 777
    },
    {
        "name": "Adler",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 778
    },
    {
        "name": "Eule",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 779
    },
    {
        "name": "Pinguin",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 780
    },
    {
        "name": "Flamingo",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 781
    },
    {
        "name": "Cham\u00e4leon",
        "category": "Tiere",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 782
    },
    {
        "name": "Trompete",
        "category": "Musik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 783
    },
    {
        "name": "Saxophon",
        "category": "Musik",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 784
    },
    {
        "name": "Harfe",
        "category": "Musik",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 785
    },
    {
        "name": "Xylophon",
        "category": "Musik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 786
    },
    {
        "name": "Akkordeon",
        "category": "Musik",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 787
    },
    {
        "name": "Kamera",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 788
    },
    {
        "name": "Roboter",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 789
    },
    {
        "name": "Rakete",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 790
    },
    {
        "name": "Satellit",
        "category": "Technik",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 791
    },
    {
        "name": "Teleskop",
        "category": "Technik",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 792
    },
    {
        "name": "Volleyball",
        "category": "Sport",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 793
    },
    {
        "name": "Rugby",
        "category": "Sport",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 794
    },
    {
        "name": "Golf",
        "category": "Sport",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 795
    },
    {
        "name": "Hockey",
        "category": "Sport",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 796
    },
    {
        "name": "Dart",
        "category": "Sport",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 797
    },
    {
        "name": "Drachen",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 798
    },
    {
        "name": "Meerjungfrau",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 799
    },
    {
        "name": "Zentaur",
        "category": "Fantasy",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 800
    },
    {
        "name": "Ph\u00f6nix",
        "category": "Fantasy",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 801
    },
    {
        "name": "Pegasus",
        "category": "Fantasy",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 802
    },
    {
        "name": "Gebirge",
        "category": "Natur",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 803
    },
    {
        "name": "Canyon",
        "category": "Natur",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 804
    },
    {
        "name": "Gletscher",
        "category": "Natur",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 805
    },
    {
        "name": "Korallenriff",
        "category": "Natur",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 806
    },
    {
        "name": "Savanne",
        "category": "Natur",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 807
    },
    {
        "name": "Lasagne",
        "category": "Essen",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 808
    },
    {
        "name": "Sushi",
        "category": "Essen",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 809
    },
    {
        "name": "Croissant",
        "category": "Essen",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 810
    },
    {
        "name": "Burrito",
        "category": "Essen",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 811
    },
    {
        "name": "Waffel",
        "category": "Essen",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 812
    },
    {
        "name": "Anzug",
        "category": "Kleidung",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 813
    },
    {
        "name": "Krawatte",
        "category": "Kleidung",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 814
    },
    {
        "name": "Smoking",
        "category": "Kleidung",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 815
    },
    {
        "name": "Kleid",
        "category": "Kleidung",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 816
    },
    {
        "name": "Kost\u00fcm",
        "category": "Kleidung",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 817
    },
    {
        "name": "Bungalow",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 818
    },
    {
        "name": "Villa",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 819
    },
    {
        "name": "Pagode",
        "category": "Geb\u00e4ude",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 820
    },
    {
        "name": "Moschee",
        "category": "Geb\u00e4ude",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 821
    },
    {
        "name": "Tempel",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 822
    },
    {
        "name": "Oktopus",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 823
    },
    {
        "name": "Seepferdchen",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 824
    },
    {
        "name": "Qualle",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 825
    },
    {
        "name": "Seestern",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 826
    },
    {
        "name": "Krabbe",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 827
    },
    {
        "name": "Kastagnetten",
        "category": "Musik",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 828
    },
    {
        "name": "Banjo",
        "category": "Musik",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 829
    },
    {
        "name": "Ukulele",
        "category": "Musik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 830
    },
    {
        "name": "Dudelsack",
        "category": "Musik",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 831
    },
    {
        "name": "Triangel",
        "category": "Musik",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 832
    },
    {
        "name": "Mikroskop",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 833
    },
    {
        "name": "Stethoskop",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 834
    },
    {
        "name": "Kompass",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 835
    },
    {
        "name": "Fernrohr",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 836
    },
    {
        "name": "Barometer",
        "category": "Technik",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 837
    },
    {
        "name": "Bogenschie\u00dfen",
        "category": "Sport",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 838
    },
    {
        "name": "Fechten",
        "category": "Sport",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 839
    },
    {
        "name": "Rodeln",
        "category": "Sport",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 840
    },
    {
        "name": "Segeln",
        "category": "Sport",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 841
    },
    {
        "name": "Tauchen",
        "category": "Sport",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 842
    },
    {
        "name": "Gargoyle",
        "category": "Fantasy",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 843
    },
    {
        "name": "Basilisk",
        "category": "Fantasy",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 844
    },
    {
        "name": "Greif",
        "category": "Fantasy",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 845
    },
    {
        "name": "Minotaurus",
        "category": "Fantasy",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 846
    },
    {
        "name": "Sphinx",
        "category": "Fantasy",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 847
    },
    {
        "name": "Geysir",
        "category": "Natur",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 848
    },
    {
        "name": "Fjord",
        "category": "Natur",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 849
    },
    {
        "name": "Lagune",
        "category": "Natur",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 850
    },
    {
        "name": "Delta",
        "category": "Natur",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 851
    },
    {
        "name": "Oase",
        "category": "Natur",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 852
    },
    {
        "name": "Paella",
        "category": "Essen",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 853
    },
    {
        "name": "Fondue",
        "category": "Essen",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 854
    },
    {
        "name": "Risotto",
        "category": "Essen",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 855
    },
    {
        "name": "Ratatouille",
        "category": "Essen",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 856
    },
    {
        "name": "Makronen",
        "category": "Essen",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 857
    },
    {
        "name": "Kimono",
        "category": "Kleidung",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 858
    },
    {
        "name": "Poncho",
        "category": "Kleidung",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 859
    },
    {
        "name": "Sari",
        "category": "Kleidung",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 860
    },
    {
        "name": "Lederhose",
        "category": "Kleidung",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 861
    },
    {
        "name": "Dirndl",
        "category": "Kleidung",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 862
    },
    {
        "name": "Festung",
        "category": "Geb\u00e4ude",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 863
    },
    {
        "name": "Aqu\u00e4dukt",
        "category": "Geb\u00e4ude",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 864
    },
    {
        "name": "Amphitheater",
        "category": "Geb\u00e4ude",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 865
    },
    {
        "name": "Kolosseum",
        "category": "Geb\u00e4ude",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 866
    },
    {
        "name": "Akropolis",
        "category": "Geb\u00e4ude",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 867
    },
    {
        "name": "Albatros",
        "category": "Tiere",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 868
    },
    {
        "name": "Pelikan",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 869
    },
    {
        "name": "Condor",
        "category": "Tiere",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 870
    },
    {
        "name": "Pfau",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 871
    },
    {
        "name": "Kolibri",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 872
    },
    {
        "name": "Keyboard",
        "category": "Musik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 873
    },
    {
        "name": "Synthesizer",
        "category": "Musik",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 874
    },
    {
        "name": "Theremin",
        "category": "Musik",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 875
    },
    {
        "name": "Schlagzeug",
        "category": "Musik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 876
    },
    {
        "name": "Kontrabass",
        "category": "Musik",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 877
    },
    {
        "name": "Hologramm",
        "category": "Technik",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 878
    },
    {
        "name": "Drohne",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 879
    },
    {
        "name": "Scanner",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 880
    },
    {
        "name": "Projektor",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 881
    },
    {
        "name": "Router",
        "category": "Technik",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 882
    },
    {
        "name": "Curling",
        "category": "Sport",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 883
    },
    {
        "name": "Polo",
        "category": "Sport",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 884
    },
    {
        "name": "Lacrosse",
        "category": "Sport",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 885
    },
    {
        "name": "Squash",
        "category": "Sport",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 886
    },
    {
        "name": "Klettern",
        "category": "Sport",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 887
    },
    {
        "name": "Hydra",
        "category": "Fantasy",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 888
    },
    {
        "name": "Kraken",
        "category": "Fantasy",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 889
    },
    {
        "name": "Chim\u00e4re",
        "category": "Fantasy",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 890
    },
    {
        "name": "Cyclop",
        "category": "Fantasy",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 891
    },
    {
        "name": "Leprechaun",
        "category": "Fantasy",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 892
    },
    {
        "name": "Stalagmit",
        "category": "Natur",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 893
    },
    {
        "name": "Stalaktit",
        "category": "Natur",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 894
    },
    {
        "name": "Atoll",
        "category": "Natur",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 895
    },
    {
        "name": "D\u00fcne",
        "category": "Natur",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 896
    },
    {
        "name": "Tundra",
        "category": "Natur",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 897
    },
    {
        "name": "Sashimi",
        "category": "Essen",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 898
    },
    {
        "name": "Tempura",
        "category": "Essen",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 899
    },
    {
        "name": "Dim Sum",
        "category": "Essen",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 900
    },
    {
        "name": "Couscous",
        "category": "Essen",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 901
    },
    {
        "name": "Tiramisu",
        "category": "Essen",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 902
    },
    {
        "name": "Toga",
        "category": "Kleidung",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 903
    },
    {
        "name": "Turban",
        "category": "Kleidung",
        "difficulty": "2",
        "type": "Hauptwort",
        "id": 904
    },
    {
        "name": "Kaftan",
        "category": "Kleidung",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 905
    },
    {
        "name": "Bolero",
        "category": "Kleidung",
        "difficulty": "3",
        "type": "Hauptwort",
        "id": 906
    },
    {
        "name": "Fliege",
        "category": "Kleidung",
        "difficulty": "1",
        "type": "Hauptwort",
        "id": 907
    },
    {
        "name": "abfahren",
        "category": "Transport",
        "difficulty": 1,
        "type": "Verb",
        "id": 908
    },
    {
        "name": "aktivieren",
        "category": "Technik",
        "difficulty": 2,
        "type": "Verb",
        "id": 909
    },
    {
        "name": "anbeten",
        "category": "Religion",
        "difficulty": 2,
        "type": "Verb",
        "id": 910
    },
    {
        "name": "anhalten",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 911
    },
    {
        "name": "antreffen",
        "category": "Soziales",
        "difficulty": 2,
        "type": "Verb",
        "id": 912
    },
    {
        "name": "arbeiten",
        "category": "Beruf",
        "difficulty": 1,
        "type": "Verb",
        "id": 913
    },
    {
        "name": "\u00e4rgern",
        "category": "Emotion",
        "difficulty": 1,
        "type": "Verb",
        "id": 914
    },
    {
        "name": "aufatmen",
        "category": "K\u00f6rper",
        "difficulty": 2,
        "type": "Verb",
        "id": 915
    },
    {
        "name": "austeilen",
        "category": "Soziales",
        "difficulty": 2,
        "type": "Verb",
        "id": 916
    },
    {
        "name": "ausstellen",
        "category": "Dokumente",
        "difficulty": 2,
        "type": "Verb",
        "id": 917
    },
    {
        "name": "backen",
        "category": "K\u00fcche",
        "difficulty": 1,
        "type": "Verb",
        "id": 918
    },
    {
        "name": "baden",
        "category": "K\u00f6rperpflege",
        "difficulty": 1,
        "type": "Verb",
        "id": 919
    },
    {
        "name": "befehlen",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Verb",
        "id": 920
    },
    {
        "name": "beginnen",
        "category": "Allgemein",
        "difficulty": 1,
        "type": "Verb",
        "id": 921
    },
    {
        "name": "bei\u00dfen",
        "category": "K\u00f6rper",
        "difficulty": 1,
        "type": "Verb",
        "id": 922
    },
    {
        "name": "bejahen",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Verb",
        "id": 923
    },
    {
        "name": "belegen",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Verb",
        "id": 924
    },
    {
        "name": "bestimmen",
        "category": "Kontrolle",
        "difficulty": 2,
        "type": "Verb",
        "id": 925
    },
    {
        "name": "bilden",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Verb",
        "id": 926
    },
    {
        "name": "bluten",
        "category": "Gesundheit",
        "difficulty": 1,
        "type": "Verb",
        "id": 927
    },
    {
        "name": "bremsen",
        "category": "Transport",
        "difficulty": 1,
        "type": "Verb",
        "id": 928
    },
    {
        "name": "charakterisieren",
        "category": "Beschreibung",
        "difficulty": 3,
        "type": "Verb",
        "id": 929
    },
    {
        "name": "chippen",
        "category": "Technik",
        "difficulty": 2,
        "type": "Verb",
        "id": 930
    },
    {
        "name": "codieren",
        "category": "Technik",
        "difficulty": 3,
        "type": "Verb",
        "id": 931
    },
    {
        "name": "covern",
        "category": "Musik",
        "difficulty": 2,
        "type": "Verb",
        "id": 932
    },
    {
        "name": "dableiben",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 933
    },
    {
        "name": "dagegenhalten",
        "category": "Konflikt",
        "difficulty": 2,
        "type": "Verb",
        "id": 934
    },
    {
        "name": "dahinpl\u00e4tschern",
        "category": "Bewegung",
        "difficulty": 2,
        "type": "Verb",
        "id": 935
    },
    {
        "name": "d\u00e4mmern",
        "category": "Natur",
        "difficulty": 2,
        "type": "Verb",
        "id": 936
    },
    {
        "name": "danken",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Verb",
        "id": 937
    },
    {
        "name": "decken",
        "category": "Haushalt",
        "difficulty": 1,
        "type": "Verb",
        "id": 938
    },
    {
        "name": "deklinieren",
        "category": "Sprache",
        "difficulty": 3,
        "type": "Verb",
        "id": 939
    },
    {
        "name": "denken",
        "category": "Geist",
        "difficulty": 1,
        "type": "Verb",
        "id": 940
    },
    {
        "name": "deuten",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Verb",
        "id": 941
    },
    {
        "name": "dienen",
        "category": "Soziales",
        "difficulty": 2,
        "type": "Verb",
        "id": 942
    },
    {
        "name": "dolmetschen",
        "category": "Sprache",
        "difficulty": 3,
        "type": "Verb",
        "id": 943
    },
    {
        "name": "drucken",
        "category": "Technik",
        "difficulty": 1,
        "type": "Verb",
        "id": 944
    },
    {
        "name": "dr\u00fccken",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 945
    },
    {
        "name": "durchgeben",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Verb",
        "id": 946
    },
    {
        "name": "ehelichen",
        "category": "Soziales",
        "difficulty": 3,
        "type": "Verb",
        "id": 947
    },
    {
        "name": "eifern",
        "category": "Emotion",
        "difficulty": 2,
        "type": "Verb",
        "id": 948
    },
    {
        "name": "einbauen",
        "category": "Handwerk",
        "difficulty": 2,
        "type": "Verb",
        "id": 949
    },
    {
        "name": "einfallen",
        "category": "Geist",
        "difficulty": 2,
        "type": "Verb",
        "id": 950
    },
    {
        "name": "ekeln",
        "category": "Emotion",
        "difficulty": 2,
        "type": "Verb",
        "id": 951
    },
    {
        "name": "emporblicken",
        "category": "Bewegung",
        "difficulty": 2,
        "type": "Verb",
        "id": 952
    },
    {
        "name": "entbinden",
        "category": "Gesundheit",
        "difficulty": 3,
        "type": "Verb",
        "id": 953
    },
    {
        "name": "entriegeln",
        "category": "Sicherheit",
        "difficulty": 2,
        "type": "Verb",
        "id": 954
    },
    {
        "name": "entwickeln",
        "category": "Prozess",
        "difficulty": 2,
        "type": "Verb",
        "id": 955
    },
    {
        "name": "ergreifen",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 956
    },
    {
        "name": "erziehen",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Verb",
        "id": 957
    },
    {
        "name": "essen",
        "category": "Grundbed\u00fcrfnis",
        "difficulty": 1,
        "type": "Verb",
        "id": 958
    },
    {
        "name": "explodieren",
        "category": "Aktion",
        "difficulty": 2,
        "type": "Verb",
        "id": 959
    },
    {
        "name": "fahren",
        "category": "Transport",
        "difficulty": 1,
        "type": "Verb",
        "id": 960
    },
    {
        "name": "fallen",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 961
    },
    {
        "name": "f\u00e4llen",
        "category": "Handwerk",
        "difficulty": 2,
        "type": "Verb",
        "id": 962
    },
    {
        "name": "fangen",
        "category": "Sport",
        "difficulty": 1,
        "type": "Verb",
        "id": 963
    },
    {
        "name": "fasten",
        "category": "Gesundheit",
        "difficulty": 2,
        "type": "Verb",
        "id": 964
    },
    {
        "name": "feilen",
        "category": "Handwerk",
        "difficulty": 2,
        "type": "Verb",
        "id": 965
    },
    {
        "name": "festlegen",
        "category": "Organisation",
        "difficulty": 2,
        "type": "Verb",
        "id": 966
    },
    {
        "name": "fiebern",
        "category": "Gesundheit",
        "difficulty": 2,
        "type": "Verb",
        "id": 967
    },
    {
        "name": "fixieren",
        "category": "Handwerk",
        "difficulty": 2,
        "type": "Verb",
        "id": 968
    },
    {
        "name": "flie\u00dfen",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 969
    },
    {
        "name": "folgen",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 970
    },
    {
        "name": "f\u00f6rdern",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Verb",
        "id": 971
    },
    {
        "name": "freuen",
        "category": "Emotion",
        "difficulty": 1,
        "type": "Verb",
        "id": 972
    },
    {
        "name": "funken",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Verb",
        "id": 973
    },
    {
        "name": "gackern",
        "category": "Tiere",
        "difficulty": 1,
        "type": "Verb",
        "id": 974
    },
    {
        "name": "galoppieren",
        "category": "Bewegung",
        "difficulty": 2,
        "type": "Verb",
        "id": 975
    },
    {
        "name": "garantieren",
        "category": "Gesch\u00e4ft",
        "difficulty": 2,
        "type": "Verb",
        "id": 976
    },
    {
        "name": "gebrauchen",
        "category": "Allgemein",
        "difficulty": 1,
        "type": "Verb",
        "id": 977
    },
    {
        "name": "gedenken",
        "category": "Erinnerung",
        "difficulty": 2,
        "type": "Verb",
        "id": 978
    },
    {
        "name": "genehmigen",
        "category": "Verwaltung",
        "difficulty": 2,
        "type": "Verb",
        "id": 979
    },
    {
        "name": "genie\u00dfen",
        "category": "Emotion",
        "difficulty": 2,
        "type": "Verb",
        "id": 980
    },
    {
        "name": "gleichen",
        "category": "Vergleich",
        "difficulty": 2,
        "type": "Verb",
        "id": 981
    },
    {
        "name": "gl\u00fchen",
        "category": "Physik",
        "difficulty": 2,
        "type": "Verb",
        "id": 982
    },
    {
        "name": "garnieren",
        "category": "K\u00fcche",
        "difficulty": 2,
        "type": "Verb",
        "id": 983
    },
    {
        "name": "greifen",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 984
    },
    {
        "name": "gr\u00fcnden",
        "category": "Organisation",
        "difficulty": 2,
        "type": "Verb",
        "id": 985
    },
    {
        "name": "haben",
        "category": "Besitz",
        "difficulty": 1,
        "type": "Verb",
        "id": 986
    },
    {
        "name": "hacken",
        "category": "Handwerk",
        "difficulty": 2,
        "type": "Verb",
        "id": 987
    },
    {
        "name": "halten",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 988
    },
    {
        "name": "handeln",
        "category": "Gesch\u00e4ft",
        "difficulty": 2,
        "type": "Verb",
        "id": 989
    },
    {
        "name": "hassen",
        "category": "Emotion",
        "difficulty": 2,
        "type": "Verb",
        "id": 990
    },
    {
        "name": "hauen",
        "category": "Gewalt",
        "difficulty": 2,
        "type": "Verb",
        "id": 991
    },
    {
        "name": "heften",
        "category": "B\u00fcro",
        "difficulty": 1,
        "type": "Verb",
        "id": 992
    },
    {
        "name": "heilen",
        "category": "Gesundheit",
        "difficulty": 2,
        "type": "Verb",
        "id": 993
    },
    {
        "name": "herumlaufen",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 994
    },
    {
        "name": "hoffen",
        "category": "Emotion",
        "difficulty": 1,
        "type": "Verb",
        "id": 995
    },
    {
        "name": "honorieren",
        "category": "Anerkennung",
        "difficulty": 2,
        "type": "Verb",
        "id": 996
    },
    {
        "name": "idealisieren",
        "category": "Denken",
        "difficulty": 3,
        "type": "Verb",
        "id": 997
    },
    {
        "name": "illuminieren",
        "category": "Kunst",
        "difficulty": 3,
        "type": "Verb",
        "id": 998
    },
    {
        "name": "implizieren",
        "category": "Logik",
        "difficulty": 3,
        "type": "Verb",
        "id": 999
    },
    {
        "name": "infiltrieren",
        "category": "Aktion",
        "difficulty": 3,
        "type": "Verb",
        "id": 1000
    },
    {
        "name": "inserieren",
        "category": "Gesch\u00e4ft",
        "difficulty": 2,
        "type": "Verb",
        "id": 1001
    },
    {
        "name": "investieren",
        "category": "Finanzen",
        "difficulty": 2,
        "type": "Verb",
        "id": 1002
    },
    {
        "name": "irren",
        "category": "Fehler",
        "difficulty": 1,
        "type": "Verb",
        "id": 1003
    },
    {
        "name": "jagen",
        "category": "Sport",
        "difficulty": 2,
        "type": "Verb",
        "id": 1004
    },
    {
        "name": "jammern",
        "category": "Emotion",
        "difficulty": 1,
        "type": "Verb",
        "id": 1005
    },
    {
        "name": "jauchzen",
        "category": "Emotion",
        "difficulty": 2,
        "type": "Verb",
        "id": 1006
    },
    {
        "name": "joggen",
        "category": "Sport",
        "difficulty": 1,
        "type": "Verb",
        "id": 1007
    },
    {
        "name": "jubeln",
        "category": "Emotion",
        "difficulty": 1,
        "type": "Verb",
        "id": 1008
    },
    {
        "name": "justieren",
        "category": "Technik",
        "difficulty": 2,
        "type": "Verb",
        "id": 1009
    },
    {
        "name": "kalkulieren",
        "category": "Mathematik",
        "difficulty": 2,
        "type": "Verb",
        "id": 1010
    },
    {
        "name": "kaltmachen",
        "category": "Aktion",
        "difficulty": 2,
        "type": "Verb",
        "id": 1011
    },
    {
        "name": "k\u00e4mmen",
        "category": "K\u00f6rperpflege",
        "difficulty": 1,
        "type": "Verb",
        "id": 1012
    },
    {
        "name": "k\u00e4mpfen",
        "category": "Konflikt",
        "difficulty": 2,
        "type": "Verb",
        "id": 1013
    },
    {
        "name": "kapitulieren",
        "category": "Konflikt",
        "difficulty": 2,
        "type": "Verb",
        "id": 1014
    },
    {
        "name": "kegeln",
        "category": "Sport",
        "difficulty": 1,
        "type": "Verb",
        "id": 1015
    },
    {
        "name": "kellnern",
        "category": "Beruf",
        "difficulty": 2,
        "type": "Verb",
        "id": 1016
    },
    {
        "name": "kichern",
        "category": "Emotion",
        "difficulty": 1,
        "type": "Verb",
        "id": 1017
    },
    {
        "name": "klagen",
        "category": "Recht",
        "difficulty": 2,
        "type": "Verb",
        "id": 1018
    },
    {
        "name": "kl\u00e4ren",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Verb",
        "id": 1019
    },
    {
        "name": "klumpen",
        "category": "Physik",
        "difficulty": 2,
        "type": "Verb",
        "id": 1020
    },
    {
        "name": "knacken",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1021
    },
    {
        "name": "konsumieren",
        "category": "Wirtschaft",
        "difficulty": 2,
        "type": "Verb",
        "id": 1022
    },
    {
        "name": "kreisen",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1023
    },
    {
        "name": "kurieren",
        "category": "Gesundheit",
        "difficulty": 2,
        "type": "Verb",
        "id": 1024
    },
    {
        "name": "labern",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Verb",
        "id": 1025
    },
    {
        "name": "lachen",
        "category": "Emotion",
        "difficulty": 1,
        "type": "Verb",
        "id": 1026
    },
    {
        "name": "landen",
        "category": "Transport",
        "difficulty": 1,
        "type": "Verb",
        "id": 1027
    },
    {
        "name": "lassen",
        "category": "Allgemein",
        "difficulty": 1,
        "type": "Verb",
        "id": 1028
    },
    {
        "name": "leben",
        "category": "Grundbed\u00fcrfnis",
        "difficulty": 1,
        "type": "Verb",
        "id": 1029
    },
    {
        "name": "leeren",
        "category": "Handlung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1030
    },
    {
        "name": "leihen",
        "category": "Soziales",
        "difficulty": 1,
        "type": "Verb",
        "id": 1031
    },
    {
        "name": "lenken",
        "category": "Transport",
        "difficulty": 1,
        "type": "Verb",
        "id": 1032
    },
    {
        "name": "leuchten",
        "category": "Physik",
        "difficulty": 1,
        "type": "Verb",
        "id": 1033
    },
    {
        "name": "liefern",
        "category": "Transport",
        "difficulty": 2,
        "type": "Verb",
        "id": 1034
    },
    {
        "name": "loben",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Verb",
        "id": 1035
    },
    {
        "name": "lohnen",
        "category": "Wirtschaft",
        "difficulty": 2,
        "type": "Verb",
        "id": 1036
    },
    {
        "name": "losziehen",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1037
    },
    {
        "name": "l\u00fcften",
        "category": "Haushalt",
        "difficulty": 1,
        "type": "Verb",
        "id": 1038
    },
    {
        "name": "machen",
        "category": "Allgemein",
        "difficulty": 1,
        "type": "Verb",
        "id": 1039
    },
    {
        "name": "malen",
        "category": "Kunst",
        "difficulty": 1,
        "type": "Verb",
        "id": 1040
    },
    {
        "name": "manipulieren",
        "category": "Soziales",
        "difficulty": 3,
        "type": "Verb",
        "id": 1041
    },
    {
        "name": "marschieren",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1042
    },
    {
        "name": "m\u00e4\u00dfigen",
        "category": "Verhalten",
        "difficulty": 2,
        "type": "Verb",
        "id": 1043
    },
    {
        "name": "messen",
        "category": "Mathematik",
        "difficulty": 1,
        "type": "Verb",
        "id": 1044
    },
    {
        "name": "mindern",
        "category": "Prozess",
        "difficulty": 2,
        "type": "Verb",
        "id": 1045
    },
    {
        "name": "mischen",
        "category": "Handlung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1046
    },
    {
        "name": "mosern",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Verb",
        "id": 1047
    },
    {
        "name": "m\u00fchen",
        "category": "Anstrengung",
        "difficulty": 2,
        "type": "Verb",
        "id": 1048
    },
    {
        "name": "nachbereiten",
        "category": "Prozess",
        "difficulty": 2,
        "type": "Verb",
        "id": 1049
    },
    {
        "name": "nachgucken",
        "category": "Wahrnehmung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1050
    },
    {
        "name": "n\u00e4chtigen",
        "category": "Alltag",
        "difficulty": 2,
        "type": "Verb",
        "id": 1051
    },
    {
        "name": "n\u00e4hen",
        "category": "Handwerk",
        "difficulty": 1,
        "type": "Verb",
        "id": 1052
    },
    {
        "name": "n\u00e4hren",
        "category": "Ern\u00e4hrung",
        "difficulty": 2,
        "type": "Verb",
        "id": 1053
    },
    {
        "name": "neiden",
        "category": "Emotion",
        "difficulty": 2,
        "type": "Verb",
        "id": 1054
    },
    {
        "name": "nerven",
        "category": "Soziales",
        "difficulty": 1,
        "type": "Verb",
        "id": 1055
    },
    {
        "name": "niedermachen",
        "category": "Konflikt",
        "difficulty": 2,
        "type": "Verb",
        "id": 1056
    },
    {
        "name": "niesen",
        "category": "K\u00f6rper",
        "difficulty": 1,
        "type": "Verb",
        "id": 1057
    },
    {
        "name": "normalisieren",
        "category": "Prozess",
        "difficulty": 2,
        "type": "Verb",
        "id": 1058
    },
    {
        "name": "n\u00f6tigen",
        "category": "Soziales",
        "difficulty": 3,
        "type": "Verb",
        "id": 1059
    },
    {
        "name": "nutzen",
        "category": "Allgemein",
        "difficulty": 1,
        "type": "Verb",
        "id": 1060
    },
    {
        "name": "obsiegen",
        "category": "Konflikt",
        "difficulty": 3,
        "type": "Verb",
        "id": 1061
    },
    {
        "name": "\u00f6den",
        "category": "Emotion",
        "difficulty": 2,
        "type": "Verb",
        "id": 1062
    },
    {
        "name": "offenbaren",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Verb",
        "id": 1063
    },
    {
        "name": "\u00f6konomisieren",
        "category": "Wirtschaft",
        "difficulty": 3,
        "type": "Verb",
        "id": 1064
    },
    {
        "name": "\u00f6len",
        "category": "Technik",
        "difficulty": 1,
        "type": "Verb",
        "id": 1065
    },
    {
        "name": "operieren",
        "category": "Medizin",
        "difficulty": 3,
        "type": "Verb",
        "id": 1066
    },
    {
        "name": "ordnen",
        "category": "Organisation",
        "difficulty": 1,
        "type": "Verb",
        "id": 1067
    },
    {
        "name": "orten",
        "category": "Technik",
        "difficulty": 2,
        "type": "Verb",
        "id": 1068
    },
    {
        "name": "paaren",
        "category": "Biologie",
        "difficulty": 2,
        "type": "Verb",
        "id": 1069
    },
    {
        "name": "pachten",
        "category": "Wirtschaft",
        "difficulty": 2,
        "type": "Verb",
        "id": 1070
    },
    {
        "name": "packen",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1071
    },
    {
        "name": "parken",
        "category": "Transport",
        "difficulty": 1,
        "type": "Verb",
        "id": 1072
    },
    {
        "name": "passen",
        "category": "Allgemein",
        "difficulty": 1,
        "type": "Verb",
        "id": 1073
    },
    {
        "name": "pauken",
        "category": "Bildung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1074
    },
    {
        "name": "peitschen",
        "category": "Bewegung",
        "difficulty": 2,
        "type": "Verb",
        "id": 1075
    },
    {
        "name": "personalisieren",
        "category": "Verwaltung",
        "difficulty": 3,
        "type": "Verb",
        "id": 1076
    },
    {
        "name": "pfeifen",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Verb",
        "id": 1077
    },
    {
        "name": "pflegen",
        "category": "Gesundheit",
        "difficulty": 2,
        "type": "Verb",
        "id": 1078
    },
    {
        "name": "picken",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1079
    },
    {
        "name": "planen",
        "category": "Organisation",
        "difficulty": 1,
        "type": "Verb",
        "id": 1080
    },
    {
        "name": "praktizieren",
        "category": "Beruf",
        "difficulty": 2,
        "type": "Verb",
        "id": 1081
    },
    {
        "name": "proben",
        "category": "Kunst",
        "difficulty": 2,
        "type": "Verb",
        "id": 1082
    },
    {
        "name": "protokollieren",
        "category": "B\u00fcro",
        "difficulty": 2,
        "type": "Verb",
        "id": 1083
    },
    {
        "name": "qualifizieren",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Verb",
        "id": 1084
    },
    {
        "name": "quaken",
        "category": "Tiere",
        "difficulty": 1,
        "type": "Verb",
        "id": 1085
    },
    {
        "name": "qu\u00e4len",
        "category": "Gewalt",
        "difficulty": 2,
        "type": "Verb",
        "id": 1086
    },
    {
        "name": "qualmen",
        "category": "Physik",
        "difficulty": 1,
        "type": "Verb",
        "id": 1087
    },
    {
        "name": "quatschen",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Verb",
        "id": 1088
    },
    {
        "name": "quengeln",
        "category": "Verhalten",
        "difficulty": 2,
        "type": "Verb",
        "id": 1089
    },
    {
        "name": "querlegen",
        "category": "Position",
        "difficulty": 2,
        "type": "Verb",
        "id": 1090
    },
    {
        "name": "quietschen",
        "category": "Ger\u00e4usch",
        "difficulty": 1,
        "type": "Verb",
        "id": 1091
    },
    {
        "name": "quittieren",
        "category": "Gesch\u00e4ft",
        "difficulty": 2,
        "type": "Verb",
        "id": 1092
    },
    {
        "name": "radieren",
        "category": "B\u00fcro",
        "difficulty": 1,
        "type": "Verb",
        "id": 1093
    },
    {
        "name": "rahmen",
        "category": "Handwerk",
        "difficulty": 2,
        "type": "Verb",
        "id": 1094
    },
    {
        "name": "rangieren",
        "category": "Transport",
        "difficulty": 2,
        "type": "Verb",
        "id": 1095
    },
    {
        "name": "ranken",
        "category": "Natur",
        "difficulty": 2,
        "type": "Verb",
        "id": 1096
    },
    {
        "name": "rankommen",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1097
    },
    {
        "name": "raten",
        "category": "Denken",
        "difficulty": 1,
        "type": "Verb",
        "id": 1098
    },
    {
        "name": "r\u00e4umen",
        "category": "Ordnung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1099
    },
    {
        "name": "rechnen",
        "category": "Mathematik",
        "difficulty": 1,
        "type": "Verb",
        "id": 1100
    },
    {
        "name": "reden",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Verb",
        "id": 1101
    },
    {
        "name": "regeln",
        "category": "Organisation",
        "difficulty": 2,
        "type": "Verb",
        "id": 1102
    },
    {
        "name": "reichen",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1103
    },
    {
        "name": "reinigen",
        "category": "Haushalt",
        "difficulty": 1,
        "type": "Verb",
        "id": 1104
    },
    {
        "name": "reparieren",
        "category": "Handwerk",
        "difficulty": 2,
        "type": "Verb",
        "id": 1105
    },
    {
        "name": "respektieren",
        "category": "Soziales",
        "difficulty": 2,
        "type": "Verb",
        "id": 1106
    },
    {
        "name": "rinnen",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1107
    },
    {
        "name": "rollen",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1108
    },
    {
        "name": "rosten",
        "category": "Prozess",
        "difficulty": 2,
        "type": "Verb",
        "id": 1109
    },
    {
        "name": "r\u00fcckkehren",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1110
    },
    {
        "name": "ruhen",
        "category": "Erholung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1111
    },
    {
        "name": "rutschen",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1112
    },
    {
        "name": "sabbern",
        "category": "K\u00f6rper",
        "difficulty": 1,
        "type": "Verb",
        "id": 1113
    },
    {
        "name": "sagen",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Verb",
        "id": 1114
    },
    {
        "name": "s\u00e4gen",
        "category": "Handwerk",
        "difficulty": 1,
        "type": "Verb",
        "id": 1115
    },
    {
        "name": "salzen",
        "category": "K\u00fcche",
        "difficulty": 1,
        "type": "Verb",
        "id": 1116
    },
    {
        "name": "saugen",
        "category": "Haushalt",
        "difficulty": 1,
        "type": "Verb",
        "id": 1117
    },
    {
        "name": "schaben",
        "category": "Handwerk",
        "difficulty": 2,
        "type": "Verb",
        "id": 1118
    },
    {
        "name": "schenken",
        "category": "Soziales",
        "difficulty": 1,
        "type": "Verb",
        "id": 1119
    },
    {
        "name": "schie\u00dfen",
        "category": "Sport",
        "difficulty": 2,
        "type": "Verb",
        "id": 1120
    },
    {
        "name": "schlemmen",
        "category": "Essen",
        "difficulty": 2,
        "type": "Verb",
        "id": 1121
    },
    {
        "name": "schlingern",
        "category": "Bewegung",
        "difficulty": 2,
        "type": "Verb",
        "id": 1122
    },
    {
        "name": "schnappen",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1123
    },
    {
        "name": "schnitzen",
        "category": "Handwerk",
        "difficulty": 2,
        "type": "Verb",
        "id": 1124
    },
    {
        "name": "schw\u00e4rzen",
        "category": "Handwerk",
        "difficulty": 2,
        "type": "Verb",
        "id": 1125
    },
    {
        "name": "sehen",
        "category": "Wahrnehmung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1126
    },
    {
        "name": "setzen",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1127
    },
    {
        "name": "sichern",
        "category": "Sicherheit",
        "difficulty": 2,
        "type": "Verb",
        "id": 1128
    },
    {
        "name": "sprechen",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Verb",
        "id": 1129
    },
    {
        "name": "stehen",
        "category": "Position",
        "difficulty": 1,
        "type": "Verb",
        "id": 1130
    },
    {
        "name": "str\u00f6men",
        "category": "Bewegung",
        "difficulty": 2,
        "type": "Verb",
        "id": 1131
    },
    {
        "name": "studieren",
        "category": "Bildung",
        "difficulty": 2,
        "type": "Verb",
        "id": 1132
    },
    {
        "name": "tafeln",
        "category": "Essen",
        "difficulty": 2,
        "type": "Verb",
        "id": 1133
    },
    {
        "name": "tagen",
        "category": "Zeit",
        "difficulty": 2,
        "type": "Verb",
        "id": 1134
    },
    {
        "name": "tanken",
        "category": "Transport",
        "difficulty": 1,
        "type": "Verb",
        "id": 1135
    },
    {
        "name": "tauschen",
        "category": "Handel",
        "difficulty": 1,
        "type": "Verb",
        "id": 1136
    },
    {
        "name": "teilen",
        "category": "Soziales",
        "difficulty": 1,
        "type": "Verb",
        "id": 1137
    },
    {
        "name": "telefonieren",
        "category": "Kommunikation",
        "difficulty": 1,
        "type": "Verb",
        "id": 1138
    },
    {
        "name": "testen",
        "category": "Pr\u00fcfung",
        "difficulty": 2,
        "type": "Verb",
        "id": 1139
    },
    {
        "name": "tieferlegen",
        "category": "Technik",
        "difficulty": 2,
        "type": "Verb",
        "id": 1140
    },
    {
        "name": "tippen",
        "category": "B\u00fcro",
        "difficulty": 1,
        "type": "Verb",
        "id": 1141
    },
    {
        "name": "t\u00f6ten",
        "category": "Gewalt",
        "difficulty": 3,
        "type": "Verb",
        "id": 1142
    },
    {
        "name": "tr\u00e4umen",
        "category": "Geist",
        "difficulty": 2,
        "type": "Verb",
        "id": 1143
    },
    {
        "name": "trinken",
        "category": "Grundbed\u00fcrfnis",
        "difficulty": 1,
        "type": "Verb",
        "id": 1144
    },
    {
        "name": "twittern",
        "category": "Social Media",
        "difficulty": 2,
        "type": "Verb",
        "id": 1145
    },
    {
        "name": "\u00fcben",
        "category": "Lernen",
        "difficulty": 1,
        "type": "Verb",
        "id": 1146
    },
    {
        "name": "\u00fcberanstrengen",
        "category": "K\u00f6rper",
        "difficulty": 2,
        "type": "Verb",
        "id": 1147
    },
    {
        "name": "\u00fcberbacken",
        "category": "K\u00fcche",
        "difficulty": 2,
        "type": "Verb",
        "id": 1148
    },
    {
        "name": "um\u00e4ndern",
        "category": "Handwerk",
        "difficulty": 2,
        "type": "Verb",
        "id": 1149
    },
    {
        "name": "umh\u00f6ren",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Verb",
        "id": 1150
    },
    {
        "name": "unterbrechen",
        "category": "Allgemein",
        "difficulty": 2,
        "type": "Verb",
        "id": 1151
    },
    {
        "name": "unternehmen",
        "category": "Aktion",
        "difficulty": 2,
        "type": "Verb",
        "id": 1152
    },
    {
        "name": "urteilen",
        "category": "Denken",
        "difficulty": 2,
        "type": "Verb",
        "id": 1153
    },
    {
        "name": "vakuumieren",
        "category": "Haushalt",
        "difficulty": 2,
        "type": "Verb",
        "id": 1154
    },
    {
        "name": "variieren",
        "category": "Ver\u00e4nderung",
        "difficulty": 2,
        "type": "Verb",
        "id": 1155
    },
    {
        "name": "verabreden",
        "category": "Soziales",
        "difficulty": 2,
        "type": "Verb",
        "id": 1156
    },
    {
        "name": "verallgemeinern",
        "category": "Denken",
        "difficulty": 3,
        "type": "Verb",
        "id": 1157
    },
    {
        "name": "verbinden",
        "category": "Handlung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1158
    },
    {
        "name": "verderben",
        "category": "Prozess",
        "difficulty": 2,
        "type": "Verb",
        "id": 1159
    },
    {
        "name": "vergeben",
        "category": "Soziales",
        "difficulty": 2,
        "type": "Verb",
        "id": 1160
    },
    {
        "name": "verlangen",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Verb",
        "id": 1161
    },
    {
        "name": "vertragen",
        "category": "Soziales",
        "difficulty": 2,
        "type": "Verb",
        "id": 1162
    },
    {
        "name": "vierteln",
        "category": "Handwerk",
        "difficulty": 1,
        "type": "Verb",
        "id": 1163
    },
    {
        "name": "vollziehen",
        "category": "Prozess",
        "difficulty": 2,
        "type": "Verb",
        "id": 1164
    },
    {
        "name": "vorangehen",
        "category": "Bewegung",
        "difficulty": 2,
        "type": "Verb",
        "id": 1165
    },
    {
        "name": "vorausahnen",
        "category": "Geist",
        "difficulty": 3,
        "type": "Verb",
        "id": 1166
    },
    {
        "name": "vorbringen",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Verb",
        "id": 1167
    },
    {
        "name": "voten",
        "category": "Entscheidung",
        "difficulty": 2,
        "type": "Verb",
        "id": 1168
    },
    {
        "name": "wachen",
        "category": "Zustand",
        "difficulty": 1,
        "type": "Verb",
        "id": 1169
    },
    {
        "name": "wagen",
        "category": "Mut",
        "difficulty": 2,
        "type": "Verb",
        "id": 1170
    },
    {
        "name": "w\u00e4hlen",
        "category": "Entscheidung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1171
    },
    {
        "name": "wahren",
        "category": "Verhalten",
        "difficulty": 2,
        "type": "Verb",
        "id": 1172
    },
    {
        "name": "wallfahren",
        "category": "Religion",
        "difficulty": 3,
        "type": "Verb",
        "id": 1173
    },
    {
        "name": "wandern",
        "category": "Freizeit",
        "difficulty": 1,
        "type": "Verb",
        "id": 1174
    },
    {
        "name": "w\u00e4rmen",
        "category": "Physik",
        "difficulty": 1,
        "type": "Verb",
        "id": 1175
    },
    {
        "name": "w\u00e4ssern",
        "category": "Garten",
        "difficulty": 1,
        "type": "Verb",
        "id": 1176
    },
    {
        "name": "weggehen",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1177
    },
    {
        "name": "weichen",
        "category": "Bewegung",
        "difficulty": 2,
        "type": "Verb",
        "id": 1178
    },
    {
        "name": "weitermachen",
        "category": "Prozess",
        "difficulty": 1,
        "type": "Verb",
        "id": 1179
    },
    {
        "name": "werben",
        "category": "Wirtschaft",
        "difficulty": 2,
        "type": "Verb",
        "id": 1180
    },
    {
        "name": "wertsch\u00e4tzen",
        "category": "Soziales",
        "difficulty": 2,
        "type": "Verb",
        "id": 1181
    },
    {
        "name": "wichteln",
        "category": "Spiel",
        "difficulty": 2,
        "type": "Verb",
        "id": 1182
    },
    {
        "name": "widersprechen",
        "category": "Kommunikation",
        "difficulty": 2,
        "type": "Verb",
        "id": 1183
    },
    {
        "name": "wiederholen",
        "category": "Lernen",
        "difficulty": 1,
        "type": "Verb",
        "id": 1184
    },
    {
        "name": "wollen",
        "category": "Absicht",
        "difficulty": 1,
        "type": "Verb",
        "id": 1185
    },
    {
        "name": "wurzeln",
        "category": "Natur",
        "difficulty": 2,
        "type": "Verb",
        "id": 1186
    },
    {
        "name": "zahlen",
        "category": "Finanzen",
        "difficulty": 1,
        "type": "Verb",
        "id": 1187
    },
    {
        "name": "zahnen",
        "category": "K\u00f6rper",
        "difficulty": 2,
        "type": "Verb",
        "id": 1188
    },
    {
        "name": "zappeln",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1189
    },
    {
        "name": "zaubern",
        "category": "Unterhaltung",
        "difficulty": 2,
        "type": "Verb",
        "id": 1190
    },
    {
        "name": "zeichnen",
        "category": "Kunst",
        "difficulty": 1,
        "type": "Verb",
        "id": 1191
    },
    {
        "name": "zelten",
        "category": "Freizeit",
        "difficulty": 1,
        "type": "Verb",
        "id": 1192
    },
    {
        "name": "zerdr\u00fccken",
        "category": "Handlung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1193
    },
    {
        "name": "zeugen",
        "category": "Recht",
        "difficulty": 3,
        "type": "Verb",
        "id": 1194
    },
    {
        "name": "ziehen",
        "category": "Bewegung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1195
    },
    {
        "name": "zieren",
        "category": "Dekoration",
        "difficulty": 2,
        "type": "Verb",
        "id": 1196
    },
    {
        "name": "zischen",
        "category": "Ger\u00e4usch",
        "difficulty": 1,
        "type": "Verb",
        "id": 1197
    },
    {
        "name": "zivilisieren",
        "category": "Gesellschaft",
        "difficulty": 3,
        "type": "Verb",
        "id": 1198
    },
    {
        "name": "zubereiten",
        "category": "K\u00fcche",
        "difficulty": 1,
        "type": "Verb",
        "id": 1199
    },
    {
        "name": "zucken",
        "category": "K\u00f6rper",
        "difficulty": 1,
        "type": "Verb",
        "id": 1200
    },
    {
        "name": "zudecken",
        "category": "Handlung",
        "difficulty": 1,
        "type": "Verb",
        "id": 1201
    },
    {
        "name": "zur\u00fcckweichen",
        "category": "Bewegung",
        "difficulty": 2,
        "type": "Verb",
        "id": 1202
    },
    {
        "name": "zusammenleben",
        "category": "Soziales",
        "difficulty": 2,
        "type": "Verb",
        "id": 1203
    },
    {
        "name": "zusto\u00dfen",
        "category": "Ereignis",
        "difficulty": 2,
        "type": "Verb",
        "id": 1204
    },
    {
        "name": "zwingen",
        "category": "Kontrolle",
        "difficulty": 2,
        "type": "Verb",
        "id": 1205
    },
    {
        "name": "laufen",
        "category": "Bewegung",
        "difficulty": "1",
        "type": "Verb",
        "id": 1206
    },
    {
        "name": "rennen",
        "category": "Bewegung",
        "difficulty": "1",
        "type": "Verb",
        "id": 1207
    },
    {
        "name": "springen",
        "category": "Bewegung",
        "difficulty": "1",
        "type": "Verb",
        "id": 1208
    },
    {
        "name": "h\u00fcpfen",
        "category": "Bewegung",
        "difficulty": "1",
        "type": "Verb",
        "id": 1209
    },
    {
        "name": "kriechen",
        "category": "Bewegung",
        "difficulty": "1",
        "type": "Verb",
        "id": 1210
    },
    {
        "name": "tanzen",
        "category": "Bewegung",
        "difficulty": "1",
        "type": "Verb",
        "id": 1211
    },
    {
        "name": "schwimmen",
        "category": "Bewegung",
        "difficulty": "1",
        "type": "Verb",
        "id": 1212
    },
    {
        "name": "fliegen",
        "category": "Bewegung",
        "difficulty": "2",
        "type": "Verb",
        "id": 1213
    },
    {
        "name": "klettern",
        "category": "Bewegung",
        "difficulty": "2",
        "type": "Verb",
        "id": 1214
    },
    {
        "name": "schleichen",
        "category": "Bewegung",
        "difficulty": "1",
        "type": "Verb",
        "id": 1215
    },
    {
        "name": "rollen",
        "category": "Bewegung",
        "difficulty": "1",
        "type": "Verb",
        "id": 1216
    },
    {
        "name": "gleiten",
        "category": "Bewegung",
        "difficulty": "2",
        "type": "Verb",
        "id": 1217
    },
    {
        "name": "marschieren",
        "category": "Bewegung",
        "difficulty": "2",
        "type": "Verb",
        "id": 1218
    },
    {
        "name": "balancieren",
        "category": "Bewegung",
        "difficulty": "2",
        "type": "Verb",
        "id": 1219
    },
    {
        "name": "rutschen",
        "category": "Bewegung",
        "difficulty": "1",
        "type": "Verb",
        "id": 1220
    },
    {
        "name": "essen",
        "category": "Alltag",
        "difficulty": "1",
        "type": "Verb",
        "id": 1221
    },
    {
        "name": "trinken",
        "category": "Alltag",
        "difficulty": "1",
        "type": "Verb",
        "id": 1222
    },
    {
        "name": "schlafen",
        "category": "Alltag",
        "difficulty": "1",
        "type": "Verb",
        "id": 1223
    },
    {
        "name": "waschen",
        "category": "Alltag",
        "difficulty": "1",
        "type": "Verb",
        "id": 1224
    },
    {
        "name": "kochen",
        "category": "Alltag",
        "difficulty": "1",
        "type": "Verb",
        "id": 1225
    },
    {
        "name": "putzen",
        "category": "Alltag",
        "difficulty": "1",
        "type": "Verb",
        "id": 1226
    },
    {
        "name": "telefonieren",
        "category": "Alltag",
        "difficulty": "1",
        "type": "Verb",
        "id": 1227
    },
    {
        "name": "lesen",
        "category": "Alltag",
        "difficulty": "1",
        "type": "Verb",
        "id": 1228
    },
    {
        "name": "schreiben",
        "category": "Alltag",
        "difficulty": "1",
        "type": "Verb",
        "id": 1229
    },
    {
        "name": "zeichnen",
        "category": "Alltag",
        "difficulty": "1",
        "type": "Verb",
        "id": 1230
    },
    {
        "name": "malen",
        "category": "Kunst",
        "difficulty": "1",
        "type": "Verb",
        "id": 1231
    },
    {
        "name": "basteln",
        "category": "Kunst",
        "difficulty": "2",
        "type": "Verb",
        "id": 1232
    },
    {
        "name": "n\u00e4hen",
        "category": "Kunst",
        "difficulty": "2",
        "type": "Verb",
        "id": 1233
    },
    {
        "name": "stricken",
        "category": "Kunst",
        "difficulty": "2",
        "type": "Verb",
        "id": 1234
    },
    {
        "name": "h\u00e4keln",
        "category": "Kunst",
        "difficulty": "2",
        "type": "Verb",
        "id": 1235
    },
    {
        "name": "schnitzen",
        "category": "Kunst",
        "difficulty": "3",
        "type": "Verb",
        "id": 1236
    },
    {
        "name": "t\u00f6pfern",
        "category": "Kunst",
        "difficulty": "3",
        "type": "Verb",
        "id": 1237
    },
    {
        "name": "weben",
        "category": "Kunst",
        "difficulty": "3",
        "type": "Verb",
        "id": 1238
    },
    {
        "name": "fotografieren",
        "category": "Kunst",
        "difficulty": "2",
        "type": "Verb",
        "id": 1239
    },
    {
        "name": "filmen",
        "category": "Kunst",
        "difficulty": "2",
        "type": "Verb",
        "id": 1240
    },
    {
        "name": "boxen",
        "category": "Sport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1241
    },
    {
        "name": "fechten",
        "category": "Sport",
        "difficulty": "3",
        "type": "Verb",
        "id": 1242
    },
    {
        "name": "turnen",
        "category": "Sport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1243
    },
    {
        "name": "jonglieren",
        "category": "Sport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1244
    },
    {
        "name": "Ski fahren",
        "category": "Sport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1245
    },
    {
        "name": "surfen",
        "category": "Sport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1246
    },
    {
        "name": "skaten",
        "category": "Sport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1247
    },
    {
        "name": "Tennis spielen",
        "category": "Sport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1248
    },
    {
        "name": "Golf spielen",
        "category": "Sport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1249
    },
    {
        "name": "Basketball spielen",
        "category": "Sport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1250
    },
    {
        "name": "backen",
        "category": "K\u00fcche",
        "difficulty": "2",
        "type": "Verb",
        "id": 1251
    },
    {
        "name": "braten",
        "category": "K\u00fcche",
        "difficulty": "2",
        "type": "Verb",
        "id": 1252
    },
    {
        "name": "grillen",
        "category": "K\u00fcche",
        "difficulty": "2",
        "type": "Verb",
        "id": 1253
    },
    {
        "name": "r\u00fchren",
        "category": "K\u00fcche",
        "difficulty": "1",
        "type": "Verb",
        "id": 1254
    },
    {
        "name": "schneiden",
        "category": "K\u00fcche",
        "difficulty": "1",
        "type": "Verb",
        "id": 1255
    },
    {
        "name": "h\u00e4mmern",
        "category": "Handwerk",
        "difficulty": "2",
        "type": "Verb",
        "id": 1256
    },
    {
        "name": "s\u00e4gen",
        "category": "Handwerk",
        "difficulty": "2",
        "type": "Verb",
        "id": 1257
    },
    {
        "name": "bohren",
        "category": "Handwerk",
        "difficulty": "2",
        "type": "Verb",
        "id": 1258
    },
    {
        "name": "schrauben",
        "category": "Handwerk",
        "difficulty": "2",
        "type": "Verb",
        "id": 1259
    },
    {
        "name": "streichen",
        "category": "Handwerk",
        "difficulty": "2",
        "type": "Verb",
        "id": 1260
    },
    {
        "name": "singen",
        "category": "Musik",
        "difficulty": "1",
        "type": "Verb",
        "id": 1261
    },
    {
        "name": "trommeln",
        "category": "Musik",
        "difficulty": "2",
        "type": "Verb",
        "id": 1262
    },
    {
        "name": "klatschen",
        "category": "Musik",
        "difficulty": "1",
        "type": "Verb",
        "id": 1263
    },
    {
        "name": "pfeifen",
        "category": "Musik",
        "difficulty": "1",
        "type": "Verb",
        "id": 1264
    },
    {
        "name": "dirigieren",
        "category": "Musik",
        "difficulty": "3",
        "type": "Verb",
        "id": 1265
    },
    {
        "name": "lachen",
        "category": "Emotionen",
        "difficulty": "1",
        "type": "Verb",
        "id": 1266
    },
    {
        "name": "weinen",
        "category": "Emotionen",
        "difficulty": "1",
        "type": "Verb",
        "id": 1267
    },
    {
        "name": "schmollen",
        "category": "Emotionen",
        "difficulty": "2",
        "type": "Verb",
        "id": 1268
    },
    {
        "name": "g\u00e4hnen",
        "category": "Emotionen",
        "difficulty": "1",
        "type": "Verb",
        "id": 1269
    },
    {
        "name": "zwinkern",
        "category": "Emotionen",
        "difficulty": "1",
        "type": "Verb",
        "id": 1270
    },
    {
        "name": "zaubern",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Verb",
        "id": 1271
    },
    {
        "name": "fliegen",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Verb",
        "id": 1272
    },
    {
        "name": "verwandeln",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Verb",
        "id": 1273
    },
    {
        "name": "verzaubern",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Verb",
        "id": 1274
    },
    {
        "name": "hexen",
        "category": "Fantasy",
        "difficulty": "2",
        "type": "Verb",
        "id": 1275
    },
    {
        "name": "angeln",
        "category": "Freizeit",
        "difficulty": "2",
        "type": "Verb",
        "id": 1276
    },
    {
        "name": "campen",
        "category": "Freizeit",
        "difficulty": "2",
        "type": "Verb",
        "id": 1277
    },
    {
        "name": "wandern",
        "category": "Freizeit",
        "difficulty": "2",
        "type": "Verb",
        "id": 1278
    },
    {
        "name": "picknicken",
        "category": "Freizeit",
        "difficulty": "2",
        "type": "Verb",
        "id": 1279
    },
    {
        "name": "zelten",
        "category": "Freizeit",
        "difficulty": "2",
        "type": "Verb",
        "id": 1280
    },
    {
        "name": "bellen",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Verb",
        "id": 1281
    },
    {
        "name": "miauen",
        "category": "Tiere",
        "difficulty": "1",
        "type": "Verb",
        "id": 1282
    },
    {
        "name": "wiehern",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Verb",
        "id": 1283
    },
    {
        "name": "br\u00fcllen",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Verb",
        "id": 1284
    },
    {
        "name": "zwitschern",
        "category": "Tiere",
        "difficulty": "2",
        "type": "Verb",
        "id": 1285
    },
    {
        "name": "programmieren",
        "category": "Technik",
        "difficulty": "3",
        "type": "Verb",
        "id": 1286
    },
    {
        "name": "tippen",
        "category": "Technik",
        "difficulty": "1",
        "type": "Verb",
        "id": 1287
    },
    {
        "name": "klicken",
        "category": "Technik",
        "difficulty": "1",
        "type": "Verb",
        "id": 1288
    },
    {
        "name": "scannen",
        "category": "Technik",
        "difficulty": "2",
        "type": "Verb",
        "id": 1289
    },
    {
        "name": "drucken",
        "category": "Technik",
        "difficulty": "1",
        "type": "Verb",
        "id": 1290
    },
    {
        "name": "lehren",
        "category": "Beruf",
        "difficulty": "2",
        "type": "Verb",
        "id": 1291
    },
    {
        "name": "heilen",
        "category": "Beruf",
        "difficulty": "2",
        "type": "Verb",
        "id": 1292
    },
    {
        "name": "reparieren",
        "category": "Beruf",
        "difficulty": "2",
        "type": "Verb",
        "id": 1293
    },
    {
        "name": "verkaufen",
        "category": "Beruf",
        "difficulty": "2",
        "type": "Verb",
        "id": 1294
    },
    {
        "name": "bauen",
        "category": "Beruf",
        "difficulty": "2",
        "type": "Verb",
        "id": 1295
    },
    {
        "name": "k\u00e4mpfen",
        "category": "Action",
        "difficulty": "2",
        "type": "Verb",
        "id": 1296
    },
    {
        "name": "schie\u00dfen",
        "category": "Action",
        "difficulty": "2",
        "type": "Verb",
        "id": 1297
    },
    {
        "name": "werfen",
        "category": "Action",
        "difficulty": "1",
        "type": "Verb",
        "id": 1298
    },
    {
        "name": "fangen",
        "category": "Action",
        "difficulty": "1",
        "type": "Verb",
        "id": 1299
    },
    {
        "name": "zielen",
        "category": "Action",
        "difficulty": "2",
        "type": "Verb",
        "id": 1300
    },
    {
        "name": "schneiden",
        "category": "Handlung",
        "difficulty": "1",
        "type": "Verb",
        "id": 1301
    },
    {
        "name": "falten",
        "category": "Handlung",
        "difficulty": "2",
        "type": "Verb",
        "id": 1302
    },
    {
        "name": "kleben",
        "category": "Handlung",
        "difficulty": "1",
        "type": "Verb",
        "id": 1303
    },
    {
        "name": "mischen",
        "category": "Handlung",
        "difficulty": "1",
        "type": "Verb",
        "id": 1304
    },
    {
        "name": "stapeln",
        "category": "Handlung",
        "difficulty": "1",
        "type": "Verb",
        "id": 1305
    },
    {
        "name": "graben",
        "category": "Garten",
        "difficulty": "2",
        "type": "Verb",
        "id": 1306
    },
    {
        "name": "pflanzen",
        "category": "Garten",
        "difficulty": "2",
        "type": "Verb",
        "id": 1307
    },
    {
        "name": "gie\u00dfen",
        "category": "Garten",
        "difficulty": "1",
        "type": "Verb",
        "id": 1308
    },
    {
        "name": "j\u00e4ten",
        "category": "Garten",
        "difficulty": "2",
        "type": "Verb",
        "id": 1309
    },
    {
        "name": "ernten",
        "category": "Garten",
        "difficulty": "2",
        "type": "Verb",
        "id": 1310
    },
    {
        "name": "puzzlen",
        "category": "Spiele",
        "difficulty": "2",
        "type": "Verb",
        "id": 1311
    },
    {
        "name": "w\u00fcrfeln",
        "category": "Spiele",
        "difficulty": "1",
        "type": "Verb",
        "id": 1312
    },
    {
        "name": "schummeln",
        "category": "Spiele",
        "difficulty": "2",
        "type": "Verb",
        "id": 1313
    },
    {
        "name": "gewinnen",
        "category": "Spiele",
        "difficulty": "1",
        "type": "Verb",
        "id": 1314
    },
    {
        "name": "verlieren",
        "category": "Spiele",
        "difficulty": "1",
        "type": "Verb",
        "id": 1315
    },
    {
        "name": "tr\u00e4umen",
        "category": "Mental",
        "difficulty": "2",
        "type": "Verb",
        "id": 1316
    },
    {
        "name": "denken",
        "category": "Mental",
        "difficulty": "2",
        "type": "Verb",
        "id": 1317
    },
    {
        "name": "gr\u00fcbeln",
        "category": "Mental",
        "difficulty": "2",
        "type": "Verb",
        "id": 1318
    },
    {
        "name": "erinnern",
        "category": "Mental",
        "difficulty": "2",
        "type": "Verb",
        "id": 1319
    },
    {
        "name": "vergessen",
        "category": "Mental",
        "difficulty": "2",
        "type": "Verb",
        "id": 1320
    },
    {
        "name": "massieren",
        "category": "K\u00f6rper",
        "difficulty": "2",
        "type": "Verb",
        "id": 1321
    },
    {
        "name": "dehnen",
        "category": "K\u00f6rper",
        "difficulty": "1",
        "type": "Verb",
        "id": 1322
    },
    {
        "name": "entspannen",
        "category": "K\u00f6rper",
        "difficulty": "2",
        "type": "Verb",
        "id": 1323
    },
    {
        "name": "atmen",
        "category": "K\u00f6rper",
        "difficulty": "1",
        "type": "Verb",
        "id": 1324
    },
    {
        "name": "meditieren",
        "category": "K\u00f6rper",
        "difficulty": "2",
        "type": "Verb",
        "id": 1325
    },
    {
        "name": "kellnern",
        "category": "Beruf",
        "difficulty": "2",
        "type": "Verb",
        "id": 1326
    },
    {
        "name": "bedienen",
        "category": "Beruf",
        "difficulty": "2",
        "type": "Verb",
        "id": 1327
    },
    {
        "name": "kassieren",
        "category": "Beruf",
        "difficulty": "2",
        "type": "Verb",
        "id": 1328
    },
    {
        "name": "liefern",
        "category": "Beruf",
        "difficulty": "2",
        "type": "Verb",
        "id": 1329
    },
    {
        "name": "verpacken",
        "category": "Beruf",
        "difficulty": "2",
        "type": "Verb",
        "id": 1330
    },
    {
        "name": "experimentieren",
        "category": "Wissenschaft",
        "difficulty": "3",
        "type": "Verb",
        "id": 1331
    },
    {
        "name": "forschen",
        "category": "Wissenschaft",
        "difficulty": "3",
        "type": "Verb",
        "id": 1332
    },
    {
        "name": "beobachten",
        "category": "Wissenschaft",
        "difficulty": "2",
        "type": "Verb",
        "id": 1333
    },
    {
        "name": "messen",
        "category": "Wissenschaft",
        "difficulty": "2",
        "type": "Verb",
        "id": 1334
    },
    {
        "name": "analysieren",
        "category": "Wissenschaft",
        "difficulty": "3",
        "type": "Verb",
        "id": 1335
    },
    {
        "name": "segeln",
        "category": "Wasser",
        "difficulty": "2",
        "type": "Verb",
        "id": 1336
    },
    {
        "name": "paddeln",
        "category": "Wasser",
        "difficulty": "2",
        "type": "Verb",
        "id": 1337
    },
    {
        "name": "tauchen",
        "category": "Wasser",
        "difficulty": "2",
        "type": "Verb",
        "id": 1338
    },
    {
        "name": "schnorcheln",
        "category": "Wasser",
        "difficulty": "2",
        "type": "Verb",
        "id": 1339
    },
    {
        "name": "rudern",
        "category": "Wasser",
        "difficulty": "2",
        "type": "Verb",
        "id": 1340
    },
    {
        "name": "musizieren",
        "category": "Musik",
        "difficulty": "2",
        "type": "Verb",
        "id": 1341
    },
    {
        "name": "komponieren",
        "category": "Musik",
        "difficulty": "3",
        "type": "Verb",
        "id": 1342
    },
    {
        "name": "improvisieren",
        "category": "Musik",
        "difficulty": "3",
        "type": "Verb",
        "id": 1343
    },
    {
        "name": "\u00fcben",
        "category": "Musik",
        "difficulty": "2",
        "type": "Verb",
        "id": 1344
    },
    {
        "name": "applaudieren",
        "category": "Musik",
        "difficulty": "1",
        "type": "Verb",
        "id": 1345
    },
    {
        "name": "moderieren",
        "category": "Medien",
        "difficulty": "2",
        "type": "Verb",
        "id": 1346
    },
    {
        "name": "pr\u00e4sentieren",
        "category": "Medien",
        "difficulty": "2",
        "type": "Verb",
        "id": 1347
    },
    {
        "name": "interviewen",
        "category": "Medien",
        "difficulty": "2",
        "type": "Verb",
        "id": 1348
    },
    {
        "name": "berichten",
        "category": "Medien",
        "difficulty": "2",
        "type": "Verb",
        "id": 1349
    },
    {
        "name": "kommentieren",
        "category": "Medien",
        "difficulty": "2",
        "type": "Verb",
        "id": 1350
    },
    {
        "name": null,
        "category": null,
        "difficulty": null,
        "type": "Verb",
        "id": 1351
    },
    {
        "name": "Verb",
        "category": "Kategorie",
        "difficulty": "Schwierigkeitsgrad",
        "type": "Verb",
        "id": 1352
    },
    {
        "name": "reiten",
        "category": "Sport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1353
    },
    {
        "name": "rodeln",
        "category": "Sport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1354
    },
    {
        "name": "bowlen",
        "category": "Sport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1355
    },
    {
        "name": "kicken",
        "category": "Sport",
        "difficulty": "1",
        "type": "Verb",
        "id": 1356
    },
    {
        "name": "dribbeln",
        "category": "Sport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1357
    },
    {
        "name": "tauchen",
        "category": "Sport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1358
    },
    {
        "name": "kegeln",
        "category": "Sport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1359
    },
    {
        "name": "boxen",
        "category": "Sport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1360
    },
    {
        "name": "ringen",
        "category": "Sport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1361
    },
    {
        "name": "fechten",
        "category": "Sport",
        "difficulty": "3",
        "type": "Verb",
        "id": 1362
    },
    {
        "name": "schnipseln",
        "category": "Kunst",
        "difficulty": "1",
        "type": "Verb",
        "id": 1363
    },
    {
        "name": "skizzieren",
        "category": "Kunst",
        "difficulty": "2",
        "type": "Verb",
        "id": 1364
    },
    {
        "name": "modellieren",
        "category": "Kunst",
        "difficulty": "3",
        "type": "Verb",
        "id": 1365
    },
    {
        "name": "gravieren",
        "category": "Kunst",
        "difficulty": "3",
        "type": "Verb",
        "id": 1366
    },
    {
        "name": "illustrieren",
        "category": "Kunst",
        "difficulty": "3",
        "type": "Verb",
        "id": 1367
    },
    {
        "name": "dirigieren",
        "category": "Musik",
        "difficulty": "3",
        "type": "Verb",
        "id": 1368
    },
    {
        "name": "komponieren",
        "category": "Musik",
        "difficulty": "3",
        "type": "Verb",
        "id": 1369
    },
    {
        "name": "choreografieren",
        "category": "Kunst",
        "difficulty": "3",
        "type": "Verb",
        "id": 1370
    },
    {
        "name": "designen",
        "category": "Kunst",
        "difficulty": "3",
        "type": "Verb",
        "id": 1371
    },
    {
        "name": "gestalten",
        "category": "Kunst",
        "difficulty": "2",
        "type": "Verb",
        "id": 1372
    },
    {
        "name": "b\u00fcgeln",
        "category": "Haushalt",
        "difficulty": "2",
        "type": "Verb",
        "id": 1373
    },
    {
        "name": "staubsaugen",
        "category": "Haushalt",
        "difficulty": "1",
        "type": "Verb",
        "id": 1374
    },
    {
        "name": "wischen",
        "category": "Haushalt",
        "difficulty": "1",
        "type": "Verb",
        "id": 1375
    },
    {
        "name": "sp\u00fclen",
        "category": "Haushalt",
        "difficulty": "1",
        "type": "Verb",
        "id": 1376
    },
    {
        "name": "aufr\u00e4umen",
        "category": "Haushalt",
        "difficulty": "1",
        "type": "Verb",
        "id": 1377
    },
    {
        "name": "g\u00e4rtnern",
        "category": "Natur",
        "difficulty": "2",
        "type": "Verb",
        "id": 1378
    },
    {
        "name": "pfl\u00fccken",
        "category": "Natur",
        "difficulty": "1",
        "type": "Verb",
        "id": 1379
    },
    {
        "name": "s\u00e4en",
        "category": "Natur",
        "difficulty": "2",
        "type": "Verb",
        "id": 1380
    },
    {
        "name": "m\u00e4hen",
        "category": "Natur",
        "difficulty": "2",
        "type": "Verb",
        "id": 1381
    },
    {
        "name": "harken",
        "category": "Natur",
        "difficulty": "2",
        "type": "Verb",
        "id": 1382
    },
    {
        "name": "programmieren",
        "category": "Technik",
        "difficulty": "3",
        "type": "Verb",
        "id": 1383
    },
    {
        "name": "hacken",
        "category": "Technik",
        "difficulty": "3",
        "type": "Verb",
        "id": 1384
    },
    {
        "name": "coden",
        "category": "Technik",
        "difficulty": "3",
        "type": "Verb",
        "id": 1385
    },
    {
        "name": "installieren",
        "category": "Technik",
        "difficulty": "2",
        "type": "Verb",
        "id": 1386
    },
    {
        "name": "konfigurieren",
        "category": "Technik",
        "difficulty": "3",
        "type": "Verb",
        "id": 1387
    },
    {
        "name": "recherchieren",
        "category": "Bildung",
        "difficulty": "2",
        "type": "Verb",
        "id": 1388
    },
    {
        "name": "studieren",
        "category": "Bildung",
        "difficulty": "2",
        "type": "Verb",
        "id": 1389
    },
    {
        "name": "lernen",
        "category": "Bildung",
        "difficulty": "1",
        "type": "Verb",
        "id": 1390
    },
    {
        "name": "unterrichten",
        "category": "Bildung",
        "difficulty": "2",
        "type": "Verb",
        "id": 1391
    },
    {
        "name": "pr\u00fcfen",
        "category": "Bildung",
        "difficulty": "2",
        "type": "Verb",
        "id": 1392
    },
    {
        "name": "fl\u00fcstern",
        "category": "Kommunikation",
        "difficulty": "1",
        "type": "Verb",
        "id": 1393
    },
    {
        "name": "schreien",
        "category": "Kommunikation",
        "difficulty": "1",
        "type": "Verb",
        "id": 1394
    },
    {
        "name": "diskutieren",
        "category": "Kommunikation",
        "difficulty": "2",
        "type": "Verb",
        "id": 1395
    },
    {
        "name": "debattieren",
        "category": "Kommunikation",
        "difficulty": "3",
        "type": "Verb",
        "id": 1396
    },
    {
        "name": "verhandeln",
        "category": "Kommunikation",
        "difficulty": "3",
        "type": "Verb",
        "id": 1397
    },
    {
        "name": "jonglieren",
        "category": "Zirkus",
        "difficulty": "3",
        "type": "Verb",
        "id": 1398
    },
    {
        "name": "balancieren",
        "category": "Zirkus",
        "difficulty": "2",
        "type": "Verb",
        "id": 1399
    },
    {
        "name": "zaubern",
        "category": "Zirkus",
        "difficulty": "2",
        "type": "Verb",
        "id": 1400
    },
    {
        "name": "akrobatieren",
        "category": "Zirkus",
        "difficulty": "3",
        "type": "Verb",
        "id": 1401
    },
    {
        "name": "seiltanzen",
        "category": "Zirkus",
        "difficulty": "3",
        "type": "Verb",
        "id": 1402
    },
    {
        "name": "navigieren",
        "category": "Transport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1403
    },
    {
        "name": "steuern",
        "category": "Transport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1404
    },
    {
        "name": "einparken",
        "category": "Transport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1405
    },
    {
        "name": "beschleunigen",
        "category": "Transport",
        "difficulty": "2",
        "type": "Verb",
        "id": 1406
    },
    {
        "name": "bremsen",
        "category": "Transport",
        "difficulty": "1",
        "type": "Verb",
        "id": 1407
    },
    {
        "name": "mei\u00dfeln",
        "category": "Handwerk",
        "difficulty": "3",
        "type": "Verb",
        "id": 1408
    },
    {
        "name": "schleifen",
        "category": "Handwerk",
        "difficulty": "2",
        "type": "Verb",
        "id": 1409
    },
    {
        "name": "polieren",
        "category": "Handwerk",
        "difficulty": "2",
        "type": "Verb",
        "id": 1410
    },
    {
        "name": "l\u00f6ten",
        "category": "Handwerk",
        "difficulty": "3",
        "type": "Verb",
        "id": 1411
    },
    {
        "name": "schwei\u00dfen",
        "category": "Handwerk",
        "difficulty": "3",
        "type": "Verb",
        "id": 1412
    },
    {
        "name": "therapieren",
        "category": "Medizin",
        "difficulty": "3",
        "type": "Verb",
        "id": 1413
    },
    {
        "name": "operieren",
        "category": "Medizin",
        "difficulty": "3",
        "type": "Verb",
        "id": 1414
    },
    {
        "name": "behandeln",
        "category": "Medizin",
        "difficulty": "2",
        "type": "Verb",
        "id": 1415
    },
    {
        "name": "diagnostizieren",
        "category": "Medizin",
        "difficulty": "3",
        "type": "Verb",
        "id": 1416
    },
    {
        "name": "versorgen",
        "category": "Medizin",
        "difficulty": "2",
        "type": "Verb",
        "id": 1417
    },
    {
        "name": "servieren",
        "category": "Gastronomie",
        "difficulty": "2",
        "type": "Verb",
        "id": 1418
    },
    {
        "name": "mixen",
        "category": "Gastronomie",
        "difficulty": "2",
        "type": "Verb",
        "id": 1419
    },
    {
        "name": "garnieren",
        "category": "Gastronomie",
        "difficulty": "3",
        "type": "Verb",
        "id": 1420
    },
    {
        "name": "anrichten",
        "category": "Gastronomie",
        "difficulty": "2",
        "type": "Verb",
        "id": 1421
    },
    {
        "name": "dekorieren",
        "category": "Gastronomie",
        "difficulty": "2",
        "type": "Verb",
        "id": 1422
    },
    {
        "name": "schminken",
        "category": "Kosmetik",
        "difficulty": "2",
        "type": "Verb",
        "id": 1423
    },
    {
        "name": "frisieren",
        "category": "Kosmetik",
        "difficulty": "2",
        "type": "Verb",
        "id": 1424
    },
    {
        "name": "rasieren",
        "category": "Kosmetik",
        "difficulty": "1",
        "type": "Verb",
        "id": 1425
    },
    {
        "name": "k\u00e4mmen",
        "category": "Kosmetik",
        "difficulty": "1",
        "type": "Verb",
        "id": 1426
    },
    {
        "name": "stylen",
        "category": "Kosmetik",
        "difficulty": "2",
        "type": "Verb",
        "id": 1427
    },
    {
        "name": "meditieren",
        "category": "Wellness",
        "difficulty": "2",
        "type": "Verb",
        "id": 1428
    },
    {
        "name": "entspannen",
        "category": "Wellness",
        "difficulty": "1",
        "type": "Verb",
        "id": 1429
    },
    {
        "name": "massieren",
        "category": "Wellness",
        "difficulty": "2",
        "type": "Verb",
        "id": 1430
    },
    {
        "name": "dehnen",
        "category": "Wellness",
        "difficulty": "1",
        "type": "Verb",
        "id": 1431
    },
    {
        "name": "trainieren",
        "category": "Wellness",
        "difficulty": "2",
        "type": "Verb",
        "id": 1432
    },
    {
        "name": "recyceln",
        "category": "Umwelt",
        "difficulty": "2",
        "type": "Verb",
        "id": 1433
    },
    {
        "name": "kompostieren",
        "category": "Umwelt",
        "difficulty": "2",
        "type": "Verb",
        "id": 1434
    },
    {
        "name": "trennen",
        "category": "Umwelt",
        "difficulty": "1",
        "type": "Verb",
        "id": 1435
    },
    {
        "name": "sammeln",
        "category": "Umwelt",
        "difficulty": "1",
        "type": "Verb",
        "id": 1436
    },
    {
        "name": "reinigen",
        "category": "Umwelt",
        "difficulty": "1",
        "type": "Verb",
        "id": 1437
    },
    {
        "name": "demonstrieren",
        "category": "Politik",
        "difficulty": "2",
        "type": "Verb",
        "id": 1438
    },
    {
        "name": "protestieren",
        "category": "Politik",
        "difficulty": "2",
        "type": "Verb",
        "id": 1439
    },
    {
        "name": "abstimmen",
        "category": "Politik",
        "difficulty": "2",
        "type": "Verb",
        "id": 1440
    },
    {
        "name": "kandidieren",
        "category": "Politik",
        "difficulty": "3",
        "type": "Verb",
        "id": 1441
    },
    {
        "name": "regieren",
        "category": "Politik",
        "difficulty": "3",
        "type": "Verb",
        "id": 1442
    },
    {
        "name": "moderieren",
        "category": "Medien",
        "difficulty": "2",
        "type": "Verb",
        "id": 1443
    },
    {
        "name": "reportieren",
        "category": "Medien",
        "difficulty": "2",
        "type": "Verb",
        "id": 1444
    },
    {
        "name": "dokumentieren",
        "category": "Medien",
        "difficulty": "2",
        "type": "Verb",
        "id": 1445
    },
    {
        "name": "senden",
        "category": "Medien",
        "difficulty": "2",
        "type": "Verb",
        "id": 1446
    },
    {
        "name": "streamen",
        "category": "Medien",
        "difficulty": "2",
        "type": "Verb",
        "id": 1447
    },
    {
        "name": "chatten",
        "category": "Internet",
        "difficulty": "1",
        "type": "Verb",
        "id": 1448
    },
    {
        "name": "bloggen",
        "category": "Internet",
        "difficulty": "2",
        "type": "Verb",
        "id": 1449
    },
    {
        "name": "posten",
        "category": "Internet",
        "difficulty": "1",
        "type": "Verb",
        "id": 1450
    },
    {
        "name": "liken",
        "category": "Internet",
        "difficulty": "1",
        "type": "Verb",
        "id": 1451
    },
    {
        "name": "teilen",
        "category": "Internet",
        "difficulty": "1",
        "type": "Verb",
        "id": 1452
    },
    {
        "name": "navigieren",
        "category": "Internet",
        "difficulty": "2",
        "type": "Verb",
        "id": 1453
    },
    {
        "name": "surfen",
        "category": "Internet",
        "difficulty": "1",
        "type": "Verb",
        "id": 1454
    },
    {
        "name": "downloaden",
        "category": "Internet",
        "difficulty": "2",
        "type": "Verb",
        "id": 1455
    },
    {
        "name": "uploaden",
        "category": "Internet",
        "difficulty": "2",
        "type": "Verb",
        "id": 1456
    },
    {
        "name": "speichern",
        "category": "Internet",
        "difficulty": "1",
        "type": "Verb",
        "id": 1457
    },
    {
        "name": "dirigieren",
        "category": "Orchester",
        "difficulty": "3",
        "type": "Verb",
        "id": 1458
    },
    {
        "name": "orchestrieren",
        "category": "Orchester",
        "difficulty": "3",
        "type": "Verb",
        "id": 1459
    },
    {
        "name": "intonieren",
        "category": "Orchester",
        "difficulty": "3",
        "type": "Verb",
        "id": 1460
    },
    {
        "name": "begleiten",
        "category": "Orchester",
        "difficulty": "2",
        "type": "Verb",
        "id": 1461
    },
    {
        "name": "auff\u00fchren",
        "category": "Orchester",
        "difficulty": "2",
        "type": "Verb",
        "id": 1462
    },
    {
        "name": "verzieren",
        "category": "Handarbeit",
        "difficulty": "2",
        "type": "Verb",
        "id": 1463
    },
    {
        "name": "sticken",
        "category": "Handarbeit",
        "difficulty": "3",
        "type": "Verb",
        "id": 1464
    },
    {
        "name": "kn\u00fcpfen",
        "category": "Handarbeit",
        "difficulty": "2",
        "type": "Verb",
        "id": 1465
    },
    {
        "name": "flechten",
        "category": "Handarbeit",
        "difficulty": "2",
        "type": "Verb",
        "id": 1466
    },
    {
        "name": "h\u00e4keln",
        "category": "Handarbeit",
        "difficulty": "2",
        "type": "Verb",
        "id": 1467
    },
    {
        "name": "schneidern",
        "category": "Handarbeit",
        "difficulty": "3",
        "type": "Verb",
        "id": 1468
    },
    {
        "name": "zuschneiden",
        "category": "Handarbeit",
        "difficulty": "2",
        "type": "Verb",
        "id": 1469
    },
    {
        "name": "applizieren",
        "category": "Handarbeit",
        "difficulty": "3",
        "type": "Verb",
        "id": 1470
    },
    {
        "name": "besticken",
        "category": "Handarbeit",
        "difficulty": "3",
        "type": "Verb",
        "id": 1471
    },
    {
        "name": "ausbessern",
        "category": "Handarbeit",
        "difficulty": "2",
        "type": "Verb",
        "id": 1472
    },
    {
        "name": "experimentieren",
        "category": "Wissenschaft",
        "difficulty": "3",
        "type": "Verb",
        "id": 1473
    },
    {
        "name": "analysieren",
        "category": "Wissenschaft",
        "difficulty": "3",
        "type": "Verb",
        "id": 1474
    },
    {
        "name": "beobachten",
        "category": "Wissenschaft",
        "difficulty": "2",
        "type": "Verb",
        "id": 1475
    },
    {
        "name": "dokumentieren",
        "category": "Wissenschaft",
        "difficulty": "2",
        "type": "Verb",
        "id": 1476
    },
    {
        "name": "protokollieren",
        "category": "Wissenschaft",
        "difficulty": "2",
        "type": "Verb",
        "id": 1477
    },
    {
        "name": "kalkulieren",
        "category": "B\u00fcro",
        "difficulty": "2",
        "type": "Verb",
        "id": 1478
    },
    {
        "name": "archivieren",
        "category": "B\u00fcro",
        "difficulty": "2",
        "type": "Verb",
        "id": 1479
    },
    {
        "name": "kopieren",
        "category": "B\u00fcro",
        "difficulty": "1",
        "type": "Verb",
        "id": 1480
    },
    {
        "name": "scannen",
        "category": "B\u00fcro",
        "difficulty": "1",
        "type": "Verb",
        "id": 1481
    },
    {
        "name": "faxen",
        "category": "B\u00fcro",
        "difficulty": "1",
        "type": "Verb",
        "id": 1482
    },
    {
        "name": "rezitieren",
        "category": "B\u00fchne",
        "difficulty": "3",
        "type": "Verb",
        "id": 1483
    },
    {
        "name": "deklamieren",
        "category": "B\u00fchne",
        "difficulty": "3",
        "type": "Verb",
        "id": 1484
    },
    {
        "name": "vortragen",
        "category": "B\u00fchne",
        "difficulty": "2",
        "type": "Verb",
        "id": 1485
    },
    {
        "name": "auff\u00fchren",
        "category": "B\u00fchne",
        "difficulty": "2",
        "type": "Verb",
        "id": 1486
    },
    {
        "name": "inszenieren",
        "category": "B\u00fchne",
        "difficulty": "3",
        "type": "Verb",
        "id": 1487
    },
    {
        "name": "choreografieren",
        "category": "Tanz",
        "difficulty": "3",
        "type": "Verb",
        "id": 1488
    },
    {
        "name": "improvisieren",
        "category": "Tanz",
        "difficulty": "3",
        "type": "Verb",
        "id": 1489
    },
    {
        "name": "einstudieren",
        "category": "Tanz",
        "difficulty": "2",
        "type": "Verb",
        "id": 1490
    },
    {
        "name": "proben",
        "category": "Tanz",
        "difficulty": "2",
        "type": "Verb",
        "id": 1491
    },
    {
        "name": "auff\u00fchren",
        "category": "Tanz",
        "difficulty": "2",
        "type": "Verb",
        "id": 1492
    },
    {
        "name": "beatboxen",
        "category": "Musik",
        "difficulty": "3",
        "type": "Verb",
        "id": 1493
    },
    {
        "name": "rappen",
        "category": "Musik",
        "difficulty": "2",
        "type": "Verb",
        "id": 1494
    },
    {
        "name": "scratchen",
        "category": "Musik",
        "difficulty": "3",
        "type": "Verb",
        "id": 1495
    },
    {
        "name": "mixen",
        "category": "Musik",
        "difficulty": "2",
        "type": "Verb",
        "id": 1496
    },
    {
        "name": "samplen",
        "category": "Musik",
        "difficulty": "3",
        "type": "Verb",
        "id": 1497
    }
]


let start = document.getElementById("start");
let pause = document.getElementById("pause");
let resume = document.getElementById("resume");
let timer = document.getElementById("timer");
let new_word = document.getElementById("new_word");
let random_word = document.getElementById("random_word");
let reset = document.getElementById("reset");
let noun_select = document.getElementById("selectnoun");
let verb_select = document.getElementById("selectverb");
let allwords_select = document.getElementById("selectallwords");
let select_type = document.querySelector('.select');
let dice = document.getElementById("dice");
let id;
let value = "00:00";
let difficulty_select = document.getElementById("selectDifficulty");
let selectedCategory = document.getElementById("selectedCategory");



function select_noun(){
    wordtype = $.grep(wordsArray, function (n,i){
        return n.type==='Hauptwort'
    });
}

function select_verb() {
    wordtype = $.grep(wordsArray, function (n, i) {
        return n.type === 'Verb'
    });
}

function select_allwords() {
    wordtype = wordsArray
    };

// $("#selectnoun").click(function(){
//         select_noun();
//         $('#selectnoun').data('clicked', true)
//     })
// $("#selectverb").click(function(){
//         select_verb();
//         $('#selectverb').data('clicked', true)
//     })
// $("#selectallwords").click(function(){
//         select_allwords();
//         $('#selectallwords').data('clicked', true)
//     })


function genRandomWord() {
    // Check if wordtype is defined and has words
    if (!wordtype || wordtype.length === 0) {
        alert('Bitte wähle zuerst eine Wortart und einen Schwierigkeitsgrad aus.');
        return;
    }

    // Proceed with generating a random word
    let words = Object.keys(wordtype);
    let randomNumber = Math.random();
    let wordIndex = Math.floor(randomNumber * words.length);
    let randomKey = words[wordIndex];
    let randomValue = wordtype[randomKey];
    let randomWord = randomValue["name"];

    random_word.innerHTML = randomWord;

    // Display the category of the selected word
    selectedCategory.innerHTML = "Kategorie: " + randomValue["category"];

    console.log(randomValue);
    console.log(randomWord);
}

noun_select.addEventListener('click', function() {
    noun_select.dataset.clicked = "true";
    wordtype = $.grep(wordsArray, function(n) {
        return n.type === 'Hauptwort'; 
    });
});

verb_select.addEventListener('click', function() {
    verb_select.dataset.clicked = "true";
    wordtype = $.grep(wordsArray, function(n) {
        return n.type === 'Verb'; 
    });
});

allwords_select.addEventListener('click', function() {
    allwords_select.dataset.clicked = "true";
    wordtype = wordsArray; 
});

new_word.addEventListener("click", function() {
    if (noun_select.dataset.clicked) {
        select_noun();
    } else if (verb_select.dataset.clicked) {
        select_verb();
    } else if (allwords_select.dataset.clicked) {
        select_allwords();
    } else {
        alert('Wähle zuerst eine Wortart aus'); // Alert if no type is selected
        return; // Exit if no type is selected
    }
    genRandomWord();
    delete noun_select.dataset.clicked;
    delete verb_select.dataset.clicked;
    delete allwords_select.dataset.clicked;
    document.body.style.backgroundColor = 'white';
    start.style.display = 'inline-block';
    pause.style.display = 'none';
    timer.style.color = 'black';
    random_word.style.color = "black";
    dice.style.display = 'none';
});

// ------------------------ TIMER FUNCTION ---------------------------

function resetTimer() {
    value = timer;
    clearInterval(value)
}


function startTimer(m, s) {
    timer.textContent = m + ":" + s;
    if (m == 0 && s <=10) {
        timer.style.color = "#ef476f";

    }

    if (s == 0) {
            if (m == 0) {
                timer.style.color = "white";
                document.body.style.backgroundColor = "#ef476f";
                random_word.style.display='inline-block';
                random_word.style.color='white';
                new_word.style.display = 'inline-block'
                reset.style.display = 'none'
                pause.style.display = 'none';
                dice.style.display = 'block';
                allwords_select.style.display = 'block';
                verb_select.style.display = 'block';
                noun_select.style.display = 'block';

                return;
        } else if (m != 0) {
            m = m - 1;
            s = 60;

        }
    }

    s = s - 1;


    reset.addEventListener('click', function(){
                clearInterval(id);
                new_word.style.display = 'inline-block';
                random_word.style.cssText =
                    "display: inline-block;" +
                    "color:'black';"
                start.style.display = 'inline-block';
                pause.style.display = 'none';
                resume.style.display = 'none';
                reset.style.display = 'none'
                dice.style.display = 'block';
                allwords_select.style.display = 'block';
                verb_select.style.display = 'block';
                noun_select.style.display = 'block';
            });
    id = setTimeout(function () {
        startTimer(m, s)
    }, 1000);
}

function pauseTimer() {
    value = timer.textContent;
    clearTimeout(id);
}

function resumeTimer() {
    var t = value.split(":");

    startTimer(parseInt(t[0], 10), parseInt(t[1], 10));
}



start.addEventListener("click", function () {
    startTimer(1, 0);
    start.style.display = 'none';
    pause.style.display = 'inline-block';
    random_word.style.display = 'none';
    new_word.style.display = 'none';
    reset.style.display = 'inline-block';
    allwords_select.style.display = 'none';
    verb_select.style.display = 'none';
    noun_select.style.display = 'none';

}, false);

pause.addEventListener("click", function(){
    pauseTimer();
    pause.style.display = 'none';
    resume.style.display = 'inline-block';
}, false);

resume.addEventListener("click", function(){
    resumeTimer();
    pause.style.display = 'inline-block';
    resume.style.display = 'none';
}, false);


// __________________________________DICE_____________________________________

//select the classes we require
var cube = document.querySelector('.cube');
var rollBtn = document.querySelector('.rollBtn');
var currentClass = '';

//this function will generate a random number between 1 and 6 (or whatever value you send it)
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

//our main roll dice function on click
function rollDice() {
//genberate a random number between 1 and 6 with out getRandomInt function
 var randNum =getRandomInt(1,7);
  console.log(randNum )
  //generate a class with the random number between 1 - 6 called showClass
  var showClass = 'show-' + randNum;
  console.log(showClass)
// if there is a class already selected remove it
  if ( currentClass ) {
    cube.classList.remove( currentClass );
  }
// add the new showclass with the generated number
  cube.classList.add( showClass );
//set the current class to the randomly generated number
  currentClass = showClass;
}
// set initial side
rollDice();
// on click eventlistener for the button element
rollBtn.addEventListener("click", rollDice);

difficulty_select.addEventListener('change', function() {
    let selectedDifficulty = difficulty_select.value;
    wordtype = $.grep(wordsArray, function (n) {
        return n.difficulty == selectedDifficulty;
    });
});