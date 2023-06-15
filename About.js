import { Link } from "react-router-dom";
import React from 'react'

function About() {
    return (
        <div>
            <main>
                <h1>This is the about page</h1>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </div>
    )
}

export default About;