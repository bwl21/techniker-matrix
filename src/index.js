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
            fragen: {

                kein: {
                    id: 'kein',
                    title: "kein"
                },
                ein: {
                    id: 'ein',
                    title: "ein Beamer"
                },
                mehr: {
                    id: 'mehr',
                    title: "mehrere Beamer"
                }
            }
        },
        uebertragungsziel: {
            title: "Wohin soll übertragen werden",
            fragen: {
                kein: {
                    id: 'kein',
                    title: "keine Übetragung"
                },
                zoom: {
                    id: "zoom",
                    title: "übertragung nach Zoom"
                },
                livestream: {
                    id: "livesteam",
                    title: "Übertragung nach Twitch Livestream auf BG-Homepage"
                },
                intern: {
                    id: "intern",
                    title: "Übertragung intern (GZ, AZK)"
                }
            }
        },
        uebertragungsumfang: {
            title: "in welchem Umfang soll übertragen werden",
            fragen: {
                kein: {
                    id: "kein",
                    title: "keine Übetragung"
                },
                frontkamera: {
                    id: "frontkamera",
                    title: "Frontkamera mit fester Einstellung"
                },
                frontkamera_ppt: {
                    id: "frontkamera_ppt",
                    title: "Frontkamera + PPT"
                },
                multi_kamera: {
                    id: "multi_kamera",
                    title: "mehrere Kameras + ppt"
                },
                vorproduziert: {
                    id: "vorproduziert",
                    title: "vorproduzierte Aufnahme"
                }
            }
        },
        zoom: {
            title: "fragen zu Ort der Veranstaltung",
            fragen: {
                kein: {
                    id: "kein",
                    title: "kein Zoom"
                },
                livestream_in_zoom: {
                    id: "livestream_in_zoom",
                    title: "Livestream zusätzlich in Zoom"
                },
                nur_zoom: {
                    id: "nur_zoom",
                    title: "Veranstaltung nur in Zoom"
                },
                zoom_danach: {
                    id: "zoom_danach",
                    title: "Nachveranstaltung in zoom"
                }
            }
        },
        feedback: {
            title: "Wie sollen Rückmeldungen verarbeitet werden",
            fragen: {
                kein: {
                    id: "kein",
                    title: "keine Rückmeldungen"
                },
                web: {
                    id: "web",
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
                    id: "basis",
                    title: "Nur Raumlicht"
                },
                weiss: {
                    id: "weiss",
                    title: "Sendebeleuchtung weiß",
                    descr: null
                },
                deko: {
                    id: "deko",
                    title: "Sendebeleuchtung dekoration"
                },
                variabel: {
                    id: "variabel",
                    title: "variable beletuchtung (Fokus, Band, Redner)"
                }
            }
        },
        remote_beitraege: {
            title: "Welche Programmbeiträge kommen",
            fragen: {
                kein: {
                    id: "kein",
                    title: "Programmbeiträge nur vor Ort"
                },
                ein: {
                    id: "ein",
                    title: "Ein Programmbeitrag remote"
                },
                mehr: {
                    id: "mehr",
                    title: "mehrere Programmbeiträger remote"
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
            capabilities: {
            },
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
                                        default={this.props.defaults[key] || Object.keys(options.fragen)[0]} />;
                                })
                            }
                        </p>
                    </td>
                    <td>
                        <Evaluator choices={this.state.choices} />
                    </td>
                </tr>
            </table>
        </div>
    }

    setSelection(key, value) {
        const choices = this.state.choices;
        choices[key] = value;
        this.setState({ choices: choices });
    }

}

const Evaluator = (props) => {
    return <pre> {JSON.stringify(props, null, 2)} </pre>;
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
            {this.props.highlight && "highlight"}
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
        <h1>das ist die Überschriftss</h1>
        <Techniker defaults={{ "ort": "gr_saal", "anwesend": "uebertragung" }} />
    </div>,
    document.getElementById('root')
);
