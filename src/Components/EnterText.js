import React from 'react'

export default function enterText() {
    return (
        <div className="mb-3">
            <label className="form-label" htmlFor="input-box"></label>
            <textarea className="form-control" id="input-box" rows="3" />
        </div>
    )
}