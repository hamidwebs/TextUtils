import React from 'react'

export default function About() {
    return (
        <>
            <div className="container">
                <h1 className='my-4'>About us</h1>
                <div
                    className="accordion"
                    id="accordionExample"
                >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                aria-controls="collapseOne"
                                aria-expanded="true"
                                className="accordion-button"
                                data-bs-target="#collapseOne"
                                data-bs-toggle="collapse"
                                type="button"
                            >
                                Accordion Item #1
                            </button>
                        </h2>
                        <div
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                            id="collapseOne"
                        >
                            <div className="accordion-body">
                                <strong>
                                    This is the first item's accordion body.
                                </strong>
                                {' '}It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                                <code>
                                    .accordion-body
                                </code>
                                , though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                aria-controls="collapseTwo"
                                aria-expanded="false"
                                className="accordion-button collapsed"
                                data-bs-target="#collapseTwo"
                                data-bs-toggle="collapse"
                                type="button"
                            >
                                Accordion Item #2
                            </button>
                        </h2>
                        <div
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                            id="collapseTwo"
                        >
                            <div className="accordion-body">
                                <strong>
                                    This is the second item's accordion body.
                                </strong>
                                {' '}It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                                <code>
                                    .accordion-body
                                </code>
                                , though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                aria-controls="collapseThree"
                                aria-expanded="false"
                                className="accordion-button collapsed"
                                data-bs-target="#collapseThree"
                                data-bs-toggle="collapse"
                                type="button"
                            >
                                Accordion Item #3
                            </button>
                        </h2>
                        <div
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                            id="collapseThree"
                        >
                            <div className="accordion-body">
                                <strong>
                                    This is the third item's accordion body.
                                </strong>
                                {' '}It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the{' '}
                                <code>
                                    .accordion-body
                                </code>
                                , though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
                <button type="button" class="btn btn-dark my-3" data-bs-toggle="button">Dark Mode</button>
            </div>
        </>
    )
}
