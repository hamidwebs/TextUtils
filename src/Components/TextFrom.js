import React, { useState } from 'react'

export default function EnterText(props) {
    const upperCasing = () => {
        updatedText(oldText.toUpperCase())
    }
    const onChanging = (e) => {
        updatedText(e.target.value);
    }
    const writing = (e) => {
        let spaces = 0;
        if (oldText !== "") {
            for (let i = 0; i < oldText.length; i++) {
                if (oldText.charAt(i) === " ") {
                    spaces++;
                }
            }
        }
        spaceNumbersUpdating(spaces);
    }
    const lowerCasing = () => {
        updatedText(oldText.toLowerCase());
    }
    const clearing = () => {
        updatedText("");
    }
    // States
    const [oldText, updatedText] = useState('');
    const [spaceNumbers, spaceNumbersUpdating] = useState(0);

    return (
        <>
            <div className='container'>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <label className="form-label" htmlFor="input-box">Enter Your Text Below : </label>
                    <textarea className="form-control" onKeyUp={writing} onChange={onChanging} value={oldText} id="input-box" rows="10" />
                </div>
                <h5>Functions : </h5>
                <button className="btn btn-outline-success m-3" onClick={lowerCasing}>To Lower Case</button>
                <button className="btn btn-outline-info m-3" onClick={upperCasing}>To Upper Case</button>
                <button className="btn btn-outline-danger m-3" onClick={clearing}>Clear Text</button>
            </div>
            <div className="container m-3">
                <h2>Your Text Summary : </h2>
                <ol className="list-group list-group-numbered">
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Words</div>
                            i.e., TextUtils a word.
                        </div>
                        <span className="badge text-bg-primary rounded-pill">{oldText.split(" ").length}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Characters</div>
                            i.e., 'A', 'a', etc.
                        </div>
                        <span className="badge text-bg-primary rounded-pill">{oldText.length}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Spaces</div>
                            i.e., In 'Text Utils', No. of Space is 1.
                        </div>
                        <span className="badge text-bg-primary rounded-pill">{spaceNumbers}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                            <div className="fw-bold">Time to Read</div>
                            i.e., It takes about 0.008 minute to read one word.
                        </div>
                        <span className="badge text-bg-primary rounded-pill">{0.008 * oldText.split(" ").length} Minutes</span>
                    </li>
                </ol>
            </div>
            <div className="container m-3">
                <h2>Preview : </h2>
                <p className="lead">
                    &ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;&ensp;{oldText}
                </p>
            </div>
        </>
    )
}