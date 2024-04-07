import React, { useState } from 'react'

export default function EnterText(props) {
    // Functions
    const upperCasing = () => {
        updatedText(oldText.toUpperCase())
    }
    const onChanging = (e) => {
        updatedText(e.target.value);
    }
    const writing = () => {
        let spaces = 0;
        let sentences = 0;
        if (oldText !== "") {
            for (let i = 0; i < oldText.length; i++) {
                if (oldText.charAt(i) === " ") {
                    spaces++;
                }
                if (oldText.charAt(i) === '.') {
                    sentences++;
                }
            }
        }
        if (oldText.length === 0) {
            wordNumbersUpdating(0);
        } else {
            wordNumbersUpdating(oldText.split(" ").length);
        }
        spaceNumbersUpdating(spaces);
        sentenceNumberUpdating(sentences);
    }
    const lowerCasing = () => {
        updatedText(oldText.toLowerCase());
    }
    const clearing = () => {
        updatedText("");
        wordNumbersUpdating(0);
    }
    const handleBoldClick = () => {
        setIsBold(true);
    };
    const handleItalicClick = () => {
        setItalic(true);
    }
    const changingColor = (e) => {
        setColor(e.target.value);
        console.log(prevColor);
    }
    // States
    const [isItalic, setItalic] = useState(false);
    const [prevColor, setColor] = useState('#000000');
    const [isBold, setIsBold] = useState(false);
    const [oldText, updatedText] = useState('');
    const [wordNumber, wordNumbersUpdating] = useState(0);
    const [spaceNumbers, spaceNumbersUpdating] = useState(0);
    const [sentenceNumber, sentenceNumberUpdating] = useState(0);
    // Return Module
    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <label className="form-label" htmlFor="input-box">
                        <h1>{props.heading}</h1>
                        Enter Your Text Below :
                    </label>
                    <textarea className="form-control" onKeyUp={writing} onChange={onChanging} value={oldText} id="input-box" rows="10" />
                </div>
                <h5>Functions : </h5>
                <div className='text-center'>
                    <button className="btn btn-success m-3 px-5" onClick={lowerCasing}>To lower case</button>
                    <button className="btn btn-info m-3 px-5" onClick={upperCasing}>To UPPER CASE</button>
                    <button className="btn btn-primary m-3 px-5" onClick={handleBoldClick}>To <b>Bold</b></button>
                    <button className="btn btn-secondary m-3 px-5" onClick={handleItalicClick}>To <i>Italic</i></button>
                    <button className="btn btn-danger m-3 px-5" onClick={clearing}>Clear Text</button>
                    <label className="form-label" htmlFor="colorPicker">
                        Select Color for Text :
                        <input onChange={changingColor} className="form-control form-control-color w-100" defaultValue={prevColor} id="colorPicker" title="Choose your color" type="color" />
                    </label>
                </div>
            </div>
            <div className="container m-3">
                <h2>Your Text Summary : </h2>
                <ol className="list-group list-group-numbered">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Words</div>
                            i.e. TextUtils a word.
                        </div>
                        <span className="badge text-bg-primary rounded-pill">{wordNumber}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Characters</div>
                            i.e. 'A', 'a', etc.
                        </div>
                        <span className="badge text-bg-primary rounded-pill">{oldText.length}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Sentences</div>
                            i.e. TextUtils, A Best Utility for Analyzing Text.
                        </div>
                        <span className="badge text-bg-primary rounded-pill">{sentenceNumber}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Spaces</div>
                            i.e. In 'Text Utils', No. of Space is 1.
                        </div>
                        <span className="badge text-bg-primary rounded-pill">{spaceNumbers}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Time to Read</div>
                            i.e. It takes about 0.48 Second to read one word.
                        </div>
                        <span className="badge text-bg-primary rounded-pill">{oldText.length === 0 ? 0 : (0.48 * oldText.split(" ").length)} Seconds</span>
                    </li>
                </ol>
            </div>
            <div className="container m-3">
                <h2>Preview : </h2>
                <p className="lead p-3 bg-light" style={{
                    fontWeight: isBold ? 'bold' : 'normal',
                    fontStyle: isItalic ? 'italic' : 'normal',
                    color: prevColor
                }}>
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{oldText}
                </p>
            </div>
        </>
    )
}