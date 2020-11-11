import React from 'react';
import ReactDOM from 'react-dom';
import Form from "@rjsf/core";
import './index.css';

const DB = {
    bereich: {
        ort: {
            title: "fragen zu Ort der Veranstaltung",
            id: 'ort',
            fragen: {
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
        teilnemer_praesenz: {
            title: "Wie viele Teilnehmer werden erwartet",
            id: 'telnehmer_prasesenz',
            fragen: {
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
            title: "Wie vile Teilnehmer sind in der Übertragung",
            id: 'teilnehmer_uebertragung',
            fragen: {
                gt_200: {
                    id: 'gt_200', title: "über 200",
                    skill: ["technik-einschalten", "raumlicht-einschalten"],
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
        anzahl_beamer: {
            title: "Wie viele Beamer sollen bespielt werden",
            id: 'anzahl_beamer',
            fragen: {

                kein: {
                    id: 'kein',
                    title: "kein",

                },
                ein: {
                    id: 'ein',
                    title: "ein Beamer",
                    skill: ["beamer-einschalten"],
                },
                mehr: {
                    id: 'mehr',
                    title: "mehrere Beamer",
                    skill: ["beamer-einschalten", "uebertragung-einschalten"]
                }
            }
        },
        uebertragungsziel: {
            title: "Wohin soll übertragen werden",
            id: 'uebertragungsziel',
            fragen: {
                kein: {
                    id: 'kein',
                    title: "keine Übertragung"
                },
                zoom: {
                    id: "zoom",
                    title: "Übertragung nach Zoom",
                    skill: ["uebertragung-zoom-einschalten"],
                },
                livestream: {
                    id: "livesteam",
                    title: "Übertragung nach Twitch Livestream auf BG-Homepage",
                    skill: ["uebetragung-livestream-einschalten"],
                },
                intern: {
                    id: "intern",
                    title: "Übertragung intern (GZ, AZK)",
                    skill: ["uebertragung-intern-einschalten"],
                }
            }
        },
        uebertragungsumfang: {
            title: "in welchem Umfang soll übertragen werden",
            id: 'uebertragungsumfang',
            fragen: {
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
                    title: "mehrere Kameras + ppt",
                    skill: ["frontkamera-einschalten", "vmix-bedienen", "propresenter-bedienen"],

                },
                vorproduziert: {
                    id: "vorproduziert",
                    title: "vorproduzierte Aufnahme",
                    skill: ["songbeamer-bedienen"],

                }
            }
        },
        zoom: {
            title: "fragen zu Ort der Veranstaltung",
            id: "zoom",
            fragen: {
                kein: {
                    id: "kein",
                    title: "kein Zoom"
                },
                livestream_in_zoom: {
                    id: "livestream_in_zoom",
                    title: "Livestream zusätzlich in Zoom",
                    skill: ["uebertragung-zoom-einschalten", "livestream-einschalten", "zoomraum-einrichten"]
                },
                nur_zoom: {
                    id: "nur_zoom",
                    title: "Veranstaltung nur in Zoom",
                    skill: ["uebertragung-zoom-einschalten", "zoomraum-einschalten"]
                },
                zoom_danach: {
                    id: "zoom_danach",
                    title: "Nachveranstaltung in zoom",
                    skill: ["zoomraum-einscahlten"]
                }
            }
        },
        feedback: {
            title: "Wie sollen Rückmeldungen verarbeitet werden",
            id: 'feedback',
            fragen: {
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
            title: "welche Ton-Anforderungen",
            id: "ton",
            fragen: {
                basis: {
                    title: ("Grundanforderung (max vier mikrofone)"),
                    id: "basis",
                    skill: ["ton-grund-einstellen"]
                },
                komplex: {
                    title: ("Komplexes Setup mit band etc."),
                    id: "komplex",
                    skill: ["ton-abmischen",
                        "tontechnik-aufbauen"]
                }
            }
        },
        licht: {
            title: "Welche Licht-Anforderungen",
            id: 'licht',
            fragen: {
                basis: {
                    id: "basis",
                    title: "Nur Raumlicht",
                    skill: ["raumlicht-einschalten"]

                },
                weiss: {
                    id: "weiss",
                    title: "Sendebeleuchtung weiß",
                    skill: ["raumlicht-einschalten"]
                },
                deko: {
                    id: "deko",
                    title: "Sendebeleuchtung dekoration",
                    skill: ["raumlicht-einschalten", "sendebeleuchtung-einschalten"]
                },
                variabel: {
                    id: "variabel",
                    title: "variable beletuchtung (Fokus, Band, Redner)",
                    skill: ["raumlicht-einschalten", "sendebeleuchtung-einschalten", "sendebeleuchtung-steuern"]
                }
            }
        },
        remote_beitraege: {
            title: "Welche Programmbeiträge kommen",
            id: 'remote_beitraege',
            fragen: {
                kein: {
                    id: "kein",
                    title: "Programmbeiträge nur vor Ort"
                },
                ein: {
                    id: "ein",
                    title: "Ein Programmbeitrag remote",
                    skill: ["zoom-in-üertragung-einsteuern"]
                },
                mehr: {
                    id: "mehr",
                    title: "mehrere Programmbeiträger remote",
                    skill: ["zoom-in-üertragung-einsteuern"]
                }
            }
        }
    },
    techniker: [
        {
            id: "Basistechniker 1",
            skill: [
                "beamer-einschalten",           //
                // "frontkamera-einschalten",
                // "gebetsanliegen-aufnehmen",
                // "livestream-einbetten",
                // "livestream-einschalten",
                // "propresenter-bedienen",
                "raumlicht-einschalten",        //
                // "sendebeleuchtung-einschalten", 
                // "sendebeleuchtung-steuern",
                "songbeamer-bedienen",          //
                "technik-einschalten",          //
                //  "technik-grosser-saal-einschalten",  //
                //  "technik-grosses-forum-einschalten",
                //  "technik-open-air-aufbauen",    //. open air techner
                // "uebertragung-einschalten",     
                // "uebertragung-intern-einschalten",
                // "uebertragung-zoom-einschalten",  
                // "uebetragung-livestream-einschalten",
                // "vmix-bedienen",
                // "zoom-in-üertragung-einsteuern",
                // "zoomraum-einrichten",
                // "zoomraum-einscahlten",

                "ton-grund-einstellen",

            ]
        },
        {
            id: "Basistechniker 2",
            skill: [
                "beamer-einschalten",   //
                "frontkamera-einschalten",  //
                // "gebetsanliegen-aufnehmen",
                // "livestream-einbetten",
                "livestream-einschalten",  //. ---- duplikate
                // "propresenter-bedienen",
                "raumlicht-einschalten", //
                "sendebeleuchtung-einschalten",  //
                // "sendebeleuchtung-steuern",
                "songbeamer-bedienen",  //
                "technik-einschalten",   //
                // "technik-grosser-saal-einschalten",
                // "technik-grosses-forum-einschalten",
                // "technik-open-air-aufbauen",
                "uebertragung-einschalten",  //
                "uebertragung-intern-einschalten",  //
                // "uebertragung-zoom-einschalten",
                "uebetragung-livestream-einschalten",  //
                // "vmix-bedienen",
                // "zoom-in-üertragung-einsteuern",
                // "zoomraum-einrichten",
                // "zoomraum-einscahlten",

                "ton-grund-einstellen"
            ]
        },
        {
            id: "Tontechnker",
            skill: [
                // "beamer-einschalten",
                // "frontkamera-einschalten",
                // "gebetsanliegen-aufnehmen",
                // "livestream-einbetten",
                // "livestream-einschalten",
                // "propresenter-bedienen",
                "raumlicht-einschalten",
                // "sendebeleuchtung-einschalten",
                // "sendebeleuchtung-steuern",
                // "songbeamer-bedienen",
                "technik-einschalten",  //
                // "technik-grosser-saal-einschalten",
                // "technik-grosses-forum-einschalten",
                // "technik-open-air-aufbauen",
                // "uebertragung-einschalten",
                // "uebertragung-intern-einschalten",
                // "uebertragung-zoom-einschalten",
                // "uebetragung-livestream-einschalten",
                // "vmix-bedienen",
                // "zoom-in-üertragung-einsteuern",
                // "zoomraum-einrichten",
                // "zoomraum-einscahlten",

                "ton-grund-einstellen",
                "ton-abmischen", //
                "tontechnik-aufbauen" //

            ]
        },
        {
            id: "kameratechniker",
            skill: [
                "beamer-einschalten", //
                // "frontkamera-einschalten",
                // "gebetsanliegen-aufnehmen",
                // "livestream-einbetten",
                // "livestream-einschalten",
                // "propresenter-bedienen",
                "raumlicht einschalten",   //
                "sendebeleuchtung-einschalten",  //
                "sendebeleuchtung-steuern",    //
                // "songbeamer-bedienen",
                "technik-einschalten",  //
                // "technik-grosser-saal-einschalten",
                // "technik-grosses-forum-einschalten",
                // "technik-open-air-aufbauen",
                // "uebertragung-einschalten", //
                "uebertragung-intern-einschalten", //
                "uebertragung-zoom-einschalten",   //
                "uebertragung-livestream-einschalten",  //
                "vmix-bedienen",  //
                "zoom-in-üertragung-einsteuern",  //
                // "zoomraum-einrichten",
                // "zoomraum-einschalten",
            ]
        },
        {
            id: "Präsentationstechniker",
            skill: [
                "beamer-einschalten", //
                // "frontkamera-einschalten",
                // "gebetsanliegen-aufnehmen",
                // "livestream-einbetten",
                // "livestream-einschalten",
                "propresenter-bedienen", //
                // "raumlicht einschalten",
                // "sendebeleuchtung-einschalten",  
                // "sendebeleuchtung-steuern",
                "songbeamer-bedienen", //
                "technik-einschalten",  //
                // "technik-grosser-saal-einschalten",
                // "technik-grosses-forum-einschalten",
                // "technik-open-air-aufbauen",
                // "uebertragung-einschalten",
                // "uebertragung-intern-einschalten",
                // "uebertragung-zoom-einschalten",
                // "uebetragung-livestream-einschalten",
                // "vmix-bedienen",
                // "zoom-in-üertragung-einsteuern",
                // "zoomraum-einrichten",
                // "zoomraum-einscahlten",
            ]
        },
        {
            id: "zoommoderator",
            skill: [
                // "beamer-einschalten",
                // "frontkamera-einschalten",
                // "gebetsanliegen-aufnehmen",
                // "livestream-einbetten",
                // "livestream-einschalten",
                // "propresenter-bedienen",
                // "raumlicht einschalten",
                // "sendebeleuchtung-einschalten",
                // "sendebeleuchtung-steuern",
                // "songbeamer-bedienen",
                // "technik-einschalten",
                // "technik-grosser-saal-einschalten",
                // "technik-grosses-forum-einschalten",
                // "technik-open-air-aufbauen",
                // "uebertragung-einschalten",
                // "uebertragung-intern-einschalten",
                // "uebertragung-zoom-einschalten",
                // "uebetragung-livestream-einschalten",
                // "vmix-bedienen",
                // "zoom-in-üertragung-einsteuern",
                "zoomraum-einrichten", //
                "zoomraum-einscahlten", //
            ]
        },
        {
            id: "webredakteur",
            skill: [
                // "beamer-einschalten",
                // "frontkamera-einschalten",
                // "gebetsanliegen-aufnehmen",
                "livestream-einbetten",  //
                // "livestream-einschalten",
                // "propresenter-bedienen",
                // "raumlicht einschalten",
                // "sendebeleuchtung-einschalten",
                // "sendebeleuchtung-steuern",
                // "songbeamer-bedienen",
                // "technik-einschalten",
                // "technik-grosser-saal-einschalten",
                // "technik-grosses-forum-einschalten",
                // "technik-open-air-aufbauen",
                // "uebertragung-einschalten",
                // "uebertragung-intern-einschalten",
                // "uebertragung-zoom-einschalten",
                // "uebetragung-livestream-einschalten",
                // "vmix-bedienen",
                // "zoom-in-üertragung-einsteuern",
                // "zoomraum-einrichten",
                // "zoomraum-einschalten",
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
            <table border="1" vlign="top">
                <tr valign="too">
                    <td valign="top">
                        <p>
                            {
                                Object.keys(DB.bereich).map((key) => {
                                    const options = DB.bereich[key];
                                    return <Selection
                                        label={key}
                                        options={options}
                                        onChange={(v) => this.setSelection(key, v)}
                                        default={this.props.defaults[key] ||
                                            [options.id, Object.keys(options.fragen)[0]].join(".")} />;
                                })
                            }
                        </p>
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
            result.push({ foo: "fail",  match:pt.missing, techn: {id: "offen"}, missing: pt.missing })
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

    const raw = "" //<pre>{JSON.stringify(result, null, 2)}</pre> ;  
    return <div>
        {[nicer,raw]}
    </div>;
};

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
            {this.props.highlight && "highlight"}
            <p>{this.props.options.title}: </p>
            <select onChange={(evt) => { this.props.onChange(evt.target.value) }} defaultValue={this.props.default}> {
                Object.keys(options).map((v) => { var val = parentkey + "." + v; return <option key={val} value={val}>{options[v].title}</option>; })
            } </select>
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
        <h1>das ist die Überschriftss</h1>
        <Techniker defaults={{}} />
    </div>,
    document.getElementById('root')
);
