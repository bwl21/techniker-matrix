import React from 'react';
import ReactDOM from 'react-dom';
import Form from "@rjsf/core";
import './index.css';

const DB = {
    bereich: {
        ort: {
            title: "Ort der Veranstaltung?",
            id: 'ort',
            fragen: {
                none: {
                    id: "none",
                    title: "bitte wählen",
                    skill: ["bitte-waehlen"]
                },
                gr_forum: {
                    id: 'gr_forum',
                    title: "Großes Forum",
                    skill: ["technik-einschalten", "raumlicht-einschalten"],
                },
                gr_saal: {
                    id: 'gr_forum',
                    title: "Großer Saal",
                    skill: ["technik-einschalten", "raumlicht-einschalten"],
                },
                open_air: {
                    id: 'open_air',
                    title: "Freiluftveranstaltung",
                    skill: ["technik-open-air-aufbauen"]
                }
            }
        },
		/*
		//kann doch eigentlich weg, da egal ob 0 oder mehr Technik immer eingeschaltet werden muss...
		
        teilnemer_praesenz: {
			title: "Wie viele Teilnehmer werden erwartet?",
            id: 'teilnehmer_praesenz',
            fragen: {
                none: {
                    id: "none",
                    title: "bitte wählen",
                    skill: ["bitte-waehlen"]
                },
                gt_0: {
                    id: 'gt_0',
                    title: "über 0",
                    skill: ["technik-einschalten", "raumlicht-einschalten"],
                },
                eq_0: {
                    id: 'eq_0',
                    title: "keine",
                }
            }
        },
        teilnemer_uebertragung: {
            title: "Wie viele Teilnehmer sind in der Übertragung?",
            id: 'teilnehmer_uebertragung',
            fragen: {
                none: {
                    id: "none",
                    title: "bitte wählen",
                    skill: ["bitte-waehlen"]
                },
                gt_200: {
                    id: 'gt_200', title: "über 200",
                },
                gt_100: {
                    id: 'gt_100',
                    title: "über 100"
                },
                gt_0: {
                    id: 'gt_0',
                    title: "über 0"
                },
                eq_0: {
                    id: 'eq_0',
                    title: "keine"
                }
            }
        },
		*/
        uebertragung_intern: {
            title: "Wie viele Räume sollen bespielt werden (GZ/AZK)",
            id: 'anzahl_raeume',
            fragen: {
                none: {
                    id: "none",
                    title: "bitte wählen",
                    skill: ["bitte-waehlen"]
                },

                kein: {
                    id: 'keiner',
                    title: "keiner",
                },
                einer: {
                    id: 'einer',
                    title: "ein Raum",
                    skill: ["beamer-einschalten"],
                },
                mehr: {
                    id: 'mehr',
                    title: "mehrere Räume",
                    skill: ["beamer-einschalten", "uebertragung-intern-einschalten"]
                }
            }
        },
        livestream: {
            title: "Soll ein Livestream angeboten werden?",
            id: 'livestream',
            fragen: {
                none: {
                    id: "none",
                    title: "bitte wählen",
                    skill: ["bitte-waehlen"]
                },
                kein: {
                    id: 'kein',
                    title: "kein Livestream"
                },
                livestream: {
                    id: "livesteam Twitch",
                    title: "Livestream auf BG-Homepage",
                    skill: ["uebertragung-livestream-einschalten"],
                }
            }
        },
        uebertragungsumfang: {
            title: "In welchem Umfang soll übertragen werden",
            id: 'uebertragungsumfang',
            fragen: {
                none: {
                    id: "none",
                    title: "bitte wählen",
                    skill: ["bitte-waehlen"]
                },
                kein: {
                    id: "kein",
                    title: "keine Übetragung"
                },
                frontkamera: {
                    id: "frontkamera",
                    title: "Frontkamera mit fester Einstellung",
                    skill: ["frontkamera-einschalten"],

                },
                frontkamera_ppt: {
                    id: "frontkamera_ppt",
                    title: "Frontkamera + PPT",
                    skill: ["frontkamera-einschalten", "songbeamer-bedienen"],

                },
                multi_kamera: {
                    id: "multi_kamera",
                    title: "mehrere Kameras",
                    skill: ["kameras-bedienen", "vmix-bedienen"],
                },
                multi_kamera_ppt: {
                    id: "multi_kamera_ppt",
                    title: "mehrere Kameras + ppt",
                    skill: ["kameras-bedienen", "vmix-bedienen", "propresenter-bedienen"],
                },
                vorproduziert: {
                    // vorproduziert kann nur über vmix abgespielt werden
                    // indem Szenario ist nur das vmix zu bedienen
                    id: "vorproduziert",
                    title: "vorproduzierte Aufnahme",
                    skill: ["vmix-bedienen"],
                }
            }
        },
        zoom: {
            title: "Zoom-Einsatz",
            id: "zoom",
            fragen: {
                none: {
                    id: "none",
                    title: "bitte wählen",
                    skill: ["bitte-waehlen"]
                },
                kein: {
                    id: "kein",
                    title: "kein Zoom"
                },
                livestream_in_zoom: {
                    id: "livestream_in_zoom",
                    title: "Livestream zusätzlich in Zoom",
                    skill: ["uebertragung-zoom-livestream-einschalten-einrichten"]
                },
                nur_zoom_aus_grosser_saal: {
                    id: "nur_zoom_aus_grosser_saal",
                    title: "Veranstaltung Aus großer Saal nur in Zoom",
                    skill: ["uebertragung-zoom-gs-einschalten-einrichten"]
                },
                nur_zoom_irgenwo: {
                    id: "nur_zoom_von_irgendwo",
                    title: "Veranstaltung nur über Zoom",
                    skill: ["zoomraum-einrichten", "zoom-moderieren"]
                },
                zoom_danach: {
                    id: "zoom_danach",
                    title: "Nachveranstaltung in zoom",
                    skill: ["zoomraum-einrichten", "zoom-moderieren"]
                }
            }
        },
        feedback: {
            title: "Wie sollen Rückmeldungen verarbeitet werden",
            id: 'feedback',
            fragen: {
                none: {
                    id: "none",
                    title: "bitte wählen",
                    skill: ["bitte-waehlen"]
                },
                kein: {
                    id: "kein",
                    title: "keine Rückmeldungen"
                },
                web: {
                    id: "web",
                    title: "Feedback über webformular",
                    skill: ["gebetsanliegen-aufnehmen"]
                }
            }
        },
        ton: {
            title: "Welche Ton-Anforderungen haben Sie",
            id: "ton",
            fragen: {
                none: {
                    id: "none",
                    title: "bitte wählen",
                    skill: ["bitte-waehlen"]
                },
                basis: {
                    title: ("Minimale (max vier Rednermikrofone)"),
                    id: "basis",
                    skill: ["ton-grund-einstellen"]
                },
                komplex: {
                    title: ("Erweitertes Setup mit Band etc."),
                    id: "erweitert",
                    skill: ["ton-abmischen",
                        "tontechnik-aufbauen"]
                }
            }
        },
        licht: {
            title: "Welche Licht-Anforderungen",
            id: 'licht',
            fragen: {
                none: {
                    id: "none",
                    title: "bitte wählen",
                    skill: ["bitte-waehlen"]
                },
                basis: {
                    id: "basis",
                    title: "Nur Raumlicht",
                    skill: ["raumlicht-einschalten"]

                },
                weiss: {
                    id: "weiss",
                    title: "Sendebeleuchtung weiß",
                    skill: ["sendebeleuchtung-weiss-einschalten", "bt-sendebeleuchtung", ]
                },
                deko: {
                    id: "deko",
                    title: "Sendebeleuchtung dekoration",
                    skill: ["sendebeleuchtung-deko-einschalten"]
                },
                variabel: {
                    id: "variabel",
                    title: "variable beletuchtung (Fokus, Band, Redner)",
                    skill: ["sendebeleuchtung-steuern",]
                }
            }
        },
        programm_beitraege: {
            title: "Welche Programmbeiträge kommen",
            id: 'programm_beitraege',
            fragen: {
                none: {
                    id: "none",
                    title: "bitte wählen",
                    skill: ["bitte-waehlen"]
                },
                kein: {
                    id: "kein",
                    title: "Programmbeiträge in Person nur vor Ort"
                },
                einspieler: {
                    id: "einspieler",
                    title: "Video beitrag",
                    skill: ["programm-einspieler-bedienen",]
                }
                ein: {
                    id: "ein",
                    title: "Ein remote Programmbeitrag",
                    skill: ["vmix-call-einrichten",]
                },
                mehr: {
                    id: "mehr",
                    title: "mehrere remote Programmbeiträger",
                    skill: ["zoom-in-übertragung-einbetten", "zoomraum-einrichten", "zoomraum-moderieren"]
                }
            }
        }
    },
    techniker: [
        {
            id: "Basistechniker 1",
            skill: [
               "ton-grund-einstellen",
                "songbeamer-bedienen",
                "raumlicht-einschalten",
                "beamer-einschalten",
                "technik-einschalten",
            ]
        },
        {
            id: "Basistechniker 2",
            skill: [
                "ton-grund-einstellen",
                "songbeamer-bedienen",
                "beamer-einschalten",
                "technik-einschalten",
                "frontkamera-einschalten",
                "raumlicht-einschalten",
                "bt-sendebeleuchtung",
                "programm-einspieler-bedienen",
                "uebertragung-intern-einschalten",
                "uebertragung-livestream-einschalten",
            ]
        },
        {
            id: "Tontechniker",
            skill: [
                "ton-abmischen",
                "tontechnik-aufbauen",
                "technik-einschalten",
                "raumlicht-einschalten",
            ]
        },
        {
            id: "Kameratechniker",
            skill: [
                "kameras-bedienen",
                "vmix-bedienen",
                "uebertragung-intern-einschalten",
                "uebertragung-livestream-einschalten",
                "uebertragung-zoom-livestream-einschalten-einrichten",
                "uebertragung-zoom-gs-einschalten-einrichten",
                "sendebeleuchtung-weiss-einschalten",
                "sendebeleuchtung-deko-einschalten",
                "sendebeleuchtung-steuern",
                "vmix-call-einrichten",
                "zoom-in-übertragung-einbetten",
                "technik-einschalten",
                "raumlicht-einschalten",
            ]
        },
        {
            id: "Präsentationstechniker",
            skill: [
                "beamer-einschalten",
                "propresenter-bedienen",
                "programm-einspieler-bedienen",
                "technik-einschalten",
                "raumlicht-einschalten",
            ]
        },
        {
            id: "zoommoderator",
            skill: [
                "zoomraum-einrichten",
                "zoom-moderieren",
            ]
        },
        {
            id: "webredakteur",
            skill: [
                 "livestream-einbetten",
            ]
        },
        {
            id: "Gebetsmanager", //habe leider noch keinen besseren Namen
            skill: [
                 "gebetsanliegen-aufnehmen",
            ]
        },
        {
            id: "twitchmoderator",
            skill: [

            ]
        }
    ]
}


class Techniker extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            choices: {},
            capabilities: new Set(),
            servants: {
                "foo": "bar"
            }
        };
    }

    render() {
        return <div>
            <table border="1" vlign="top" width="100%">
                <tr valign="too">
                    <td valign="top" width="30%">
                        <ul>
                            {
                                Object.keys(DB.bereich).map((key) => {
                                    const options = DB.bereich[key];
                                    return <li><p>
                                        <Selection
                                            label={key}
                                            options={options}
                                            onChange={(v) => this.setSelection(key, v)}
                                            default={this.props.defaults[key] ||
                                                [options.id, Object.keys(options.fragen)[0]].join(".")} />
                                    </p></li>;
                                })
                            }
                        </ul>
                    </td>
                    <td valign="top">
                        <Evaluator result={{ choices: this.state.choices }} />
                    </td>
                </tr>
            </table>
        </div>
    }

    setSelection(key, value) {
        const choices = this.state.choices;
        const the_value = value;
        choices[key] = value;
        this.setState({ choices: choices });
    }

}



const Evaluator = (props) => {

    function capabilities(choices) {
        // alert(JSON.stringify(choices.keys));
        // debugger;
        var result = (Object.keys(choices)).map((key) => {
            //   return key;
            return (DB.bereich[key].fragen[choices[key].split(".")[1]] || { skill: "not found" }).skill;
        })


        return ([...new Set(result.flat(10))].filter((obj) => obj).sort());
    };

    function technicians(requiredskills) {
        // techniker mit größter Schnittmenge suchen

        function matchskills(technician) {
            return {
                techn: technician,
                match: technician.skill.filter((tskill) => requiredskills.includes(tskill)),
                missing: requiredskills.filter(rskill => !technician.skill.includes(rskill)),
                nmatch: technician.skill.filter((tskill) => !requiredskills.includes(tskill)),
            }
        };

        var result = [];
        var pt = DB.techniker.map(techn => matchskills(techn));
        pt = pt.sort((a, b) => b.match.length - a.match.length)[0];

        if ((pt.match.length > 0) && (pt.missing.length > 0)) {
            pt.foo = "more";
            var pt1 = technicians(pt.missing);
            debugger;
            result = result.concat([pt]);
            result = result.concat(pt1)
        }
        else if ((pt.match.length > 0) && (pt.missing.length === 0)) {
            pt.foo = "ok";
            result.push(pt);
        }
        else if ((pt.match.length === 0) && (pt.missing.length > 0)) {
            result.push({ foo: "fail", match: pt.missing, techn: { id: "offen" }, missing: pt.missing })
        }
        else if ((pt.match.length === 0) || (pt.missing.length === 0)) {
            // this should never haüü
        }

        return result;
    }

    const choices = props.result.choices;
    const thecapabilities = capabilities(choices);
    const thetechnicians = technicians(thecapabilities);
    const result = {
        choices: choices,
        capabilities: thecapabilities,
        technicians: thetechnicians
    };

    const nicer =
        <table border="1">
            {result.technicians.map(technician =>
                <tr>
                    <td>
                        {technician.techn.id}
                    </td>
                    <td>
                        {technician.match.join(", ")}
                    </td>
                </tr>
            )
            }
        </table>;

    const raw = <pre>{JSON.stringify(result.choices, null, 2)}</pre>;
    return <div>
        {[nicer, raw]}
    </div>;
};

class DropSelection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.onChange(this.props.default);
    }

    render() {
        const options = this.props.options.fragen;
        const parentkey = this.props.options.id;

        return <div>
            {this.props.highlight && "highlight"}
            <p>{this.props.options.title}: </p>
            <select onChange={(evt) => { this.props.onChange(evt.target.value) }} defaultValue={this.props.default}> {
                Object.keys(options).map((v) => { var val = parentkey + "." + v; return <option key={val} value={val}>{options[v].title}</option>; })
            } </select>
        </div>;
    }

}

class Selection extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    componentDidMount() {
        this.props.onChange(this.props.default);
    }

    render() {
        const options = this.props.options.fragen;
        const parentkey = this.props.options.id;

        return <div>
            <span>{this.props.options.title}:</span>
            <form type="radio" name={parentkey} onChange={(evt) => { this.props.onChange(evt.target.id) }} defaultValue={this.props.default}>
                {
                    Object.keys(options).map((v) => {
                        var val = parentkey + "." + v;
                        return <span style={{ margin: '0em' }}>
                            <input id={val} type="radio" name={parentkey}></input>{options[v].title}</span>;
                    })
                }
            </form>
        </div>;
    }

}

// ========================================

const schema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
        title: { type: "string", title: "Title", default: "A new task" },
        done: { type: "boolean", title: "Done?", default: false }
    }
};

const log = (type) => console.log.bind(console, type);

ReactDOM.render(
    <div>
        <h1>Techniker-Matrix Brüdergemeinde-Korntal</h1>
        <Techniker defaults={{}} />
    </div>,
    document.getElementById('root')
);
