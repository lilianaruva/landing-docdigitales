import React, { useState } from 'react';

const Code = () => {
    const language = [
        {
            id: '1',
            line1: 'public static void Main ( string[] args ) {',
            line2: 'string message = " ";',
            line3: 'if ( args.Length < 1 ) {',
            line4: 'message = "Bienvenido a DocDigitales"',
            line5: '} }'
        },
        {
            id: '2',
            line1: 'public class Hello {',
            line2: 'public static void main ( String[] args ) {',
            line3: 'System.out.println ( "Bienvenido a DocDigitales" );',
            line4: '} }',
            line5: ''
        },
        {
            id: '3',
            line1: '<html>',
            line2: '<body>',
            line3: '<p ?php eco "<p> Bienvenido a DocDigitales </p>"; ?>',
            line4: '</body>',
            line5: '</html>'
        },
        {
            id: '4',
            line1: 'C:/NewClient > ruby -v',
            line2: 'ruby 3.1.0',
            line3: 'C:/NewClient > irb',
            line4: 'irb ( main ):0010> puts "Bienvenido a DocDigitales"',
            line5: 'Bienvenido a DocDigitales'
        }
    ];

    const [index, setIndex] = useState(0);

    const IndividualComment = (c) => {
        return <div className="consoleContainer codeList">
            <ul>
                <li>{c.line1}</li>
                <li>{c.line2}</li>
                <li>{c.line3}</li>
                <li>{c.line4}</li>
                <li>{c.line5}</li>
            </ul>
        </div>
    }

    return (
        <>
            <div className="main-Container" style={{ backgroundColor: '#F1F0FD' }}>
                <div className="description-left" >
                    <div className="simple-description">
                        <div className="title"><b>Ideal para:</b></div>
                        <div className="description sistemList">
                            <ul>
                                <li>Sistemas ERP</li>
                                <li>Sistemas Contables</li>
                                <li>Sistemas de Punto de Venta</li>
                                <li>Sistemas Administrativos</li>
                                <li>Sistemas de Facturación</li>
                                <li>Sistemas a la Medida</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="description-right">
                    <div className="descriptionSelect">
                        <button onClick={() => setIndex(0)} className={`${index === 0 ? "SelectActive" : ""}`}>C#</button>
                        <button onClick={() => setIndex(1)} className={`${index === 1 ? "SelectActive" : ""}`}>Java</button>
                        <button onClick={() => setIndex(2)} className={`${index === 2 ? "SelectActive" : ""}`}>PHP</button>
                        <button onClick={() => setIndex(3)} className={`${index === 3 ? "SelectActive" : ""}`}>Ruby</button>
                    </div>
                    {
                        IndividualComment(language[index])
                    }
                </div>
            </div>
        </>
    )
}

export default Code;