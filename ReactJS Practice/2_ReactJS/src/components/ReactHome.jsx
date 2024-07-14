import React from 'react'

const ReactHome = () => {
    return (
        <div>

            <ul>
                {[
                    "React is a <b><i>JavaScript library</i></b> for building user interfaces.",
                    "React is a JavaScript library <b><i>created by Facebook</i></b>.",
                    "React is a tool for <b><i>building UI components</i></b>.",
                    "React is used to <b><i>build single-page applications</i></b>.",
                    "React <b><i>creates a VIRTUAL DOM</i></b> in memory.",
                    "React <b><i>only changes what needs to be changed!</i></b>."
                ].map((value, index) => {
                    return (
                        <li key={index} dangerouslySetInnerHTML={{ __html: value }}></li>
                    );
                })}
            </ul>

            {/* ---------------------------------------------------------------------------------------------------------------------------- */}

                                    {/* old way of writing code  */}


            {/* <ul>
                <li></li>
                <li>Facebook Software Engineer, <b><i>Jordan Walke</i></b>, created it in 2013.</li>
                <li>React is a JavaScript library <b><i>created by Facebook</i></b>.</li>
                <li>React is a tool for <b><i>building UI components</i></b>.</li>
                <li>React is used to <b><i>build single-page applications</i></b>.</li>
                <li>React <b><i>creates a VIRTUAL DOM</i></b> in memory.</li>
                <li>React <b><i>only changes what needs to be changed!</i></b>.</li>
            </ul> */}
        </div>
    )
}

export default ReactHome
