import React from 'react'

export default function About(props) {
    // title
    document.title = 'TextUtils - About';
    return (
        <>
            <div className="container">
                <h1 className={`my-4 text-${props.mode === 'dark' ? 'light' : 'dark'}`}>About us</h1>
                <div
                    className={`accordion`}
                    id="accordionExample"
                >
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                aria-controls="collapseOne"
                                aria-expanded="true"
                                className={`accordion-button bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`}
                                data-bs-target="#collapseOne"
                                data-bs-toggle="collapse"
                                type="button"
                            >
                                Features
                            </button>
                        </h2>
                        <div
                            className="accordion-collapse collapse show"
                            data-bs-parent="#accordionExample"
                            id="collapseOne"
                        >
                            <div className={`accordion-body bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                                TextUtils is a versatile web application designed to enhance your text editing experience. With TextUtils, you can easily format your text by applying bold, italic, and color changes. Not only that, but you can also conveniently copy the customized text to your clipboard for seamless sharing across various platforms. In addition to its formatting capabilities, TextUtils provides valuable insights into your text, including word count, sentence count, space count, character count, and estimated reading time. Whether you're crafting a professional document, composing an email, or writing a blog post, TextUtils empowers you to customize and analyze your text effortlessly.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                aria-controls="collapseTwo"
                                aria-expanded="false"
                                className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`}
                                data-bs-target="#collapseTwo"
                                data-bs-toggle="collapse"
                                type="button"
                            >
                                About
                            </button>
                        </h2>
                        <div
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                            id="collapseTwo"
                        >
                            <div className={`accordion-body bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                                TextUtils is the brainchild of a team of passionate developers dedicated to simplifying text editing and analysis. Our mission is to provide users with a user-friendly platform that streamlines the process of formatting and understanding text. We understand the importance of clear communication and efficient text editing in today's digital age, which is why we have meticulously designed TextUtils to meet the diverse needs of our users. Whether you're a student, a professional, or a content creator, TextUtils is your go-to tool for enhancing your textual content with ease.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button
                                aria-controls="collapseThree"
                                aria-expanded="false"
                                className={`accordion-button collapsed bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`}
                                data-bs-target="#collapseThree"
                                data-bs-toggle="collapse"
                                type="button"
                            >
                                Contact Us
                            </button>
                        </h2>
                        <div
                            className="accordion-collapse collapse"
                            data-bs-parent="#accordionExample"
                            id="collapseThree"
                        >
                            <div className={`accordion-body bg-${props.mode} text-${props.mode === 'dark' ? 'light' : 'dark'}`}>
                                Are you interested in building an engaging and functional website like TextUtils? Do you have unique ideas for enhancing text editing and analysis tools? Contact us at itmughal2023@gmail.com to discuss your project requirements and collaborate with our team of experienced developers. Let's work together to create an innovative website that meets your needs and exceeds your expectations.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
