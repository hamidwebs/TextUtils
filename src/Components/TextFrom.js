import React, { useState } from 'react'

export default function EnterText(props) {
    // States
    const [copyBtnText, setCopyBtnText] = useState('Copy');
    const [isItalic, setItalic] = useState(false);
    const [prevColor, setColor] = useState('');
    const [isBold, setIsBold] = useState(false);
    const [oldText, updatedText] = useState('');
    const [wordNumber, wordNumbersUpdating] = useState(0);
    const [spaceNumbers, spaceNumbersUpdating] = useState(0);
    const [sentenceNumber, sentenceNumberUpdating] = useState(0);
    // title
    document.title = 'TextUtils - Home';
    // Functions
    const upperCasing = () => {
        updatedText(oldText.toUpperCase());
        setCopyBtnText('Copy');
        props.showAlert('Successfully Converted to Upper Case', 'success');
    }
    const onChanging = (e) => {
        updatedText(e.target.value);
        setCopyBtnText('Copy');
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
        wordNumbersUpdating(oldText.split(" ").filter((char) => { return char.length !== 0 }).length)
        spaceNumbersUpdating(spaces);
        sentenceNumberUpdating(sentences);
    }
    const lowerCasing = () => {
        updatedText(oldText.toLowerCase());
        setCopyBtnText('Copy');
        props.showAlert('Successfully Converted to Lower Case', 'success');
    }
    const clearing = () => {
        updatedText("");
        wordNumbersUpdating(0);
        setCopyBtnText('Copy');
        navigator.clipboard.writeText('');
        props.showAlert('Successfully Cleared', 'danger');
    }
    const handleBoldClick = () => {
        setIsBold(!isBold);
        setCopyBtnText('Copy');
        props.showAlert('Successfully Bolded the Text', 'success');
    };
    const handleItalicClick = () => {
        setItalic(!isItalic);
        setCopyBtnText('Copy');
        props.showAlert('Successfully Italicized the Text', 'success');
    }
    const changingColor = (e) => {
        setColor(e.target.value);
        setCopyBtnText('Copy');
        props.showAlert('Successfully Changed the Text Color', 'success');
    }
    const copyBtn = () => {
        setCopyBtnText('Copied!');
        document.querySelector('#btn-copy').classList.add('active');
        navigator.clipboard.writeText(oldText);
        props.showAlert('Successfully Copied to Clipboard', 'success');
    }
    // Return Module
    return (
        <>
            <div className={`container text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                <div className="mb-3">
                    <label htmlFor="input-box">
                        <h1>{props.heading}</h1>
                        Enter Your Text Below :
                    </label>
                    <textarea className={`form-control bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`} onKeyUp={writing} onChange={onChanging} value={oldText} id="input-box" rows="10" />
                </div>
                <h5>Functions : </h5>
                <div className='text-center'>
                    <button className={`btn ${props.mode === 'light' ? 'btn-outline-success' : 'btn-success'} m-3 px-5`} onClick={lowerCasing}>To lower case</button>
                    <button className={`btn ${props.mode === 'light' ? 'btn-outline-info' : 'btn-info'} m-3 px-5`} onClick={upperCasing}>To UPPER CASE</button>
                    <button className={`btn ${props.mode === 'light' ? 'btn-outline-primary' : 'btn-primary'} m-3 px-5`} onClick={handleBoldClick}>To <b>Bold</b></button>
                    <button className={`btn ${props.mode === 'light' ? 'btn-outline-secondary' : 'btn-secondary'} m-3 px-5`} onClick={handleItalicClick}>To <i>Italic</i></button>
                    <button className={`btn ${props.mode === 'light' ? 'btn-outline-danger' : 'btn-danger'} m-3 px-5`} onClick={clearing}>Clear Text</button>
                    <label className="form-label" htmlFor="colorPicker">
                        Select Color for Text :
                        <input onChange={changingColor} className='form-control form-control-color w-100 colorPicker' defaultValue={prevColor} id="colorPicker" title="Choose your color" type="color" />
                    </label>
                </div>
            </div>
            <div className={`container m-3`}>
                <h2 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Your Text Summary : </h2>
                <ol className={`list-group list-group-numbered`}>
                    <li className={`list-group-item d-flex justify-content-between align-items-start text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode}`}>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Words</div>
                            i.e. TextUtils a word.
                        </div>
                        <span className="badge text-bg-primary rounded-pill">{wordNumber}</span>
                    </li>
                    <li className={`list-group-item d-flex justify-content-between align-items-start text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode}`}>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Characters</div>
                            i.e. 'A', 'a', etc.
                        </div>
                        <span className="badge text-bg-primary rounded-pill">{oldText.length}</span>
                    </li>
                    <li className={`list-group-item d-flex justify-content-between align-items-start text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode}`}>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Sentences</div>
                            i.e. TextUtils, A Best Utility for Analyzing Text.
                        </div>
                        <span className="badge text-bg-primary rounded-pill">{sentenceNumber}</span>
                    </li>
                    <li className={`list-group-item d-flex justify-content-between align-items-start text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode}`}>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Spaces</div>
                            i.e. In 'Text Utils', No. of Space is 1.
                        </div>
                        <span className="badge text-bg-primary rounded-pill">{spaceNumbers}</span>
                    </li>
                    <li className={`list-group-item d-flex justify-content-between align-items-start text-${props.mode === 'dark' ? 'light' : 'dark'} bg-${props.mode}`}>
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Time to Read</div>
                            i.e. It takes about 0.48 Second to read one word.
                        </div>
                        <span className="badge text-bg-primary rounded-pill">{oldText.length === 0 ? 0 : (0.48 * oldText.split(" ").length)} Seconds</span>
                    </li>
                </ol>
            </div>
            <div className="container m-3">
                <h2 className={`text-${props.mode === 'dark' ? 'light' : 'dark'}`}>Preview : </h2>
                <p className={`lead p-3 bg-${props.mode}`} style={{
                    fontWeight: isBold ? 'bold' : 'normal',
                    fontStyle: isItalic ? 'italic' : 'normal',
                    color: prevColor
                }}>
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{oldText === '' ? 'Enter Text to Preview...' : oldText}
                </p>
                <button aria-pressed="true" id='btn-copy' className={`btn ${props.mode === 'light' ? 'btn-outline-primary' : 'btn-primary'}`} onClick={copyBtn}>{copyBtnText}</button>
            </div>
        </>
    )
}