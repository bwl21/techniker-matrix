import React from 'react';
import ReactDOM from 'react-dom';
import Form from "@rjsf/core";
import './index.css';

const DB = {
    bereich: {
        ort: {
            title: "fragen zu Ort der Veranstaltung",
            fragen: {
                gr_forum: {
                    id: 'gr_forum',
                    title: "Großes Forum"
                },
                gr_saal: {
                    title: "Großer Saal"
                },
                open_air: {
                    title: "Freiluftveranstaltung"
                }
            }
        },
        anwesend: {
            title: "fragen zu Art der Veranstaltung",
            fragen: {
                praesenz: {
                    title: "Präsenzveranstaltung"
                },
                uebertragung: {
                    title: "Übertragung"
                }
            }
        },
        teilnemer_praesenz: {
            title: "Wie viele Teilnehmer werden erwartet",
            fragen: {
                gt_200: { title: "über 200" },
                gt_100: {
                    title: "über 100"
                },
                gt_0: {
                    title: "über 0"
                },
                eq_0: {
                    title: "keine"
                }
            }
        },
        teilnemer_uebertragung: {
            title: "Wie vile Teilnehmer sind in der Übertragung",
            fragen: {
                gt_200: { title: "über 200" },
                gt_100: {
                    title: "über 100"
                },
                gt_0: {
                    title: "über 0"
                },
                eq_0: {
                    title: "keine"
                }
            }
        },
        anzahl_beamer: {
            title: "Wie viele Beamer sollen bespielt werden",
            fragen: {

                kein: {
                    title: "kein"
                },
                ein: {
                    title: "ein Beamer"
                },
                mehr: {
                    title: "mehrere Beamer"
                }
            }
        },
        uebertragungsziel: {
            title: "Wohin soll übertragen werden",
            fragen: {
                kein: {
                    title: "keine Übetragung"
                },
                zoom: {
                    title: "übertragung nach Zoom"
                },
                livestream: {
                    title: "Übertragung nach Twitch Livestream auf BG-Homepage"
                },
                intern: {
                    title: "Übertragung intern (GZ, AZK)"
                }
            }
        },
        uebertragungsumfang: {
            title: "in welchem Umfang soll übertragen werden",
            fragen: {
                kein: {
                    title: "keine Übetragung"
                },
                frontkamera: {
                    title: "Frontkamera mit fester Einstellung"
                },
                frontkamera_ppt: {
                    title: "Frontkamera + PPT"
                },
                multi_kamera: {
                    title: "mehrere Kameras + ppt"
                },
                vorproduziert: {
                    title: "vorproduzierte Aufnahme"
                }
            }
        },
        zoom: {
            title: "fragen zu Ort der Veranstaltung",
            fragen: {
                kein: {
                    title: "kein Zoom"
                },
                livestream_in_zoom: {
                    title: "Livestream zusätzlich in Zoom"
                },
                nur_zoom: {
                    title: "Veranstaltung nur in Zoom"
                },
                zoom_danach: {
                    title: "Nachveranstaltung in zoom"
                }
            }
        },
        feedback: {
            title: "Wie sollen Rückmeldungen verarbeitet werden",
            fragen: {
                kein: {
                    title: "keine Rückmeldungen"
                },
                web: {
                    title: "Feedback über webformular",
                    requiire: [
                        "/bereich/uebertragungsziel/livesteram"
                    ]
                }
            }
        },
        licht: {
            title: "Welche Anforderung haben wir hinscht Licht",
            fragen: {
                basis: {
                    title: "Nur Raumlicht"
                },
                weiss: {
                    title: "Sendebeleuchtung weiß",
                    descr: null
                },
                deko: {
                    title: "Sendebeleuchtung dekoration"
                },
                variabel: {
                    title: "variable beletuchtung (Fokus, Band, Redner)"
                }
            }
        },
        remote_beitraege: {
            title: "Welche Programmbeiträge kommen",
            fragen: {
                kein: {
                    title: "Programmbeiträge nur vor Ort"
                },
                ein: {
                    title: "Ein Programmbeitrag remote"
                },
                mehr: {
                    title: "mehrere Programmbeiträger remote"
                }
            }
        }
    }
}


class Techniker extends React.Component {
    constructor(props) {
        super(props);
        this.state = { choices: {} };
    }

    render() {
        return <div>
            <Evaluator choices={this.state.choices} />
            <p>
                {
                    Object.keys(DB.bereich).map((key) => {
                        const options = DB.bereich[key];
                        return <Selection 
                            label={key} 
                            options={options} 
                            onChange={(v) => this.setSelection(key, v)} 
                            default={this.props.defaults[key] || Object.keys(options.fragen)[0]} />;
                    })
                }
            </p></div>
    }

    setSelection(key, value) {
        const choices = this.state.choices;
        choices[key] = value;
        this.setState({ choices: choices });
    }

}

const Evaluator = (props) => {
    return <pre> { JSON.stringify(props)} </pre>;
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

        return <div>
            { this.props.highlight && "highlight" }
            <p>Auswahl: {this.props.options.title}: </p>
            <select onChange={(evt) => { this.props.onChange(evt.target.value) }} defaultValue={this.props.default}> {
                Object.keys(options).map((v) => <option key={v} value={v}>{options[v].title}</option>) 
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
        <h1>das ist die Überschrift</h1>
        <Techniker defaults={{"ort": "gr_saal", "anwesend": "uebertragung"}} />
    </div>,
    document.getElementById('root')
);
