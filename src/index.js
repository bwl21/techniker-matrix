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
                    skill: ["technik-grosses-forum-einschalten"],
                },
                gr_saal: {
                    id: 'gr_forum',
                    title: "Großer Saal",
                    skill: ["technik-grosser-saal-einschalten"],
                },
                open_air: {
                    id: 'open_air',
                    title: "Freiluftveranstaltung",
                    skill: ["technik-open-air-aufbauen"]
                }
            }
        },
        anwesend: {
            title: "fragen zu Art der Veranstaltung",
            id: 'anwesend',
            fragen: {
                praesenz: {
                    id: 'praesenz',
                    title: "Präsenzveranstaltung",
                    skill: ["technik-einschalten"]
                },
                uebertragung: {
                    id: 'uebertragung',
                    title: "Übertragung",
                    skill: ["uebertragung-einschalten", "livestream-einbetten"]
                }
            }
        },
        teilnemer_praesenz: {
            title: "Wie viele Teilnehmer werden erwartet",
            id: 'telnehmer_prasesenz',
            fragen: {
                gt_200: {
                    id: 'gt_200',
                    title: "über 200"
                },
                gt_100: {
                    id: 'gt_100',
                    title: "über 100",
                },
                gt_0: {
                    id: 'gt_0',
                    title: "über 0",
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
                gt_200: { id: 'gt_200', title: "über 200" },
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
                    skill: ["beamer-einschalten"]

                },
                mehr: {
                    id: 'mehr',
                    title: "mehrere Beamer",
                    skill: ["beamer-esnschalten", "uebertragung-einschalten"]

                }
            }
        },
        uebertragungsziel: {
            title: "Wohin soll übertragen werden",
            id: 'uebertragungsziel',
            fragen: {
                kein: {
                    id: 'kein',
                    title: "keine Übetragung"
                },
                zoom: {
                    id: "zoom",
                    title: "übertragung nach Zoom",
                    skill: ["uebertragung-zoom-einschalten"]
                },
                livestream: {
                    id: "livesteam",
                    title: "Übertragung nach Twitch Livestream auf BG-Homepage",
                    skill: ["uebetragung-livestream-einschalten"]
                },
                intern: {
                    id: "intern",
                    title: "Übertragung intern (GZ, AZK)",
                    skill: ["uebertragung-intern-einschalten"]
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
                    skill: ["frontkamera-einschalten"]
                },
                frontkamera_ppt: {
                    id: "frontkamera_ppt",
                    title: "Frontkamera + PPT",
                    skill: ["frontkamera-einschalten", "songeamer-bedienen"]
                },
                multi_kamera: {
                    id: "multi_kamera",
                    title: "mehrere Kameras + ppt",
                    skill: ["frontkamera-einschalten", "vmix-bedienen", "propresenter-bedienen"]
                },
                vorproduziert: {
                    id: "vorproduziert",
                    title: "vorproduzierte Aufnahme",
                    skill: ["songbeamer-bedienen"]
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
                    skill: [
                        "gebetsanliegen-aufnehmen"
                    ]
                }
            }
        },
        licht: {
            title: "Welche Anforderung haben wir hinscht Licht",
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
                    skill: ["raumlicht einschalten", "sendebeleuchtung-einschalten", "sendebeleuchtung-steuern"]
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
    }
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
            <table border="1">
                <tr>
                    <td>
                        <p>
                            {
                                Object.keys(DB.bereich).map((key) => {
                                    const options = DB.bereich[key];
                                    return <Selection
                                        label={key}
                                        options={options}
                                        onChange={(v) => this.setSelection(key, v)}
                                        default={this.props.defaults[key] || 
                                            [options.id, Object.keys(options.fragen)[0]].join( ".")} />;
                                })
                            }
                        </p>
                    </td>
                    <td>
                        <Evaluator result={{choices:this.state.choices}} />
                    </td>
                </tr>
            </table>
        </div>
    }

    setSelection(key, value) {
        const choices = this.state.choices;
        const the_value = value;
        choices[key] = value;
        this.setState({ choices: choices});
    }

}

    function capabilities(choices){
        // alert(JSON.stringify(choices.keys));
        // debugger;
      var result = (Object.keys(choices)).map( (key) => {
        //   return key;
          return (DB.bereich[key].fragen[choices[key].split(".")[1]] || {skill: "not found"}).skill;
      })
      return (result);
    };

const Evaluator = (props) => {
    const choices = props.result.choices;
    const result = {
        choices: choices,
        capabailities: capabilities(choices),
    };
    return <pre> {JSON.stringify(result, null, 2)} </pre>;
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
            <p>Auswahl: {this.props.options.title}: </p>
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
        <Techniker defaults={{ }} />
    </div>,
    document.getElementById('root')
);
