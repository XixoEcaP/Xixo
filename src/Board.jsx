import React from 'react';
import './Board.css'; // Import the CSS file for styling

const Board = ({ goBack }) => {
    return (
        <div className="board-container">
            <h1>Education</h1>
            <p><strong>Full-Time Full-Stack Programming Bootcamp @ Code for All</strong></p>
            <p>January 2024 - April 2024</p>
            <p>A 14-Week Intensive && Immersive Full Stack Programming Bootcamp</p>

            <p><strong>Bachelor's Degree in Management @ ISEG</strong></p>
            <p>September 2015 – June 2019</p>
            <p>Emphasis on Business Communication, Excel, Finance, and Statistics competencies.</p>

            <p><strong>Bachelor's Degree in Law (frequency) @ University of Lisbon</strong></p>
            <p>September 2013 – June 2014</p>
            <p>First year of law studies: Economics, Constitutional Law, and Roman Law.</p>

            <p><strong>Secondary Education @ Escola Secundária do Restelo</strong></p>
            <p>September 2010 - June 2013</p>
            <p>Mathematics National Exam: 17.8</p>

            <h1>Experience</h1>
            <p><strong>Back Office Gatekeeper && One-Man Call Centre @ Academia de Código</strong></p>
            <p>October 2019 - January 2024</p>
            <p>Responsible for managing the application process for clients seeking enrollment at Academia de Código.</p>

            <p><strong>Summer Intern @ Engaging Consulting</strong></p>
            <p>July 2017 - August 2017</p>
            <p>Assisted in the production and development of journalistic content aimed at promoting credibility and increasing public exposure for Engaging's clients across various media outlets.</p>

            <p><strong>Bassist @ Veenho</strong></p>
            <p>December 2015 - Present</p>
            <p>Bassist for Veenho, a Lisbon-based rock band. The band is represented by Hatzise and Xita Records, two indie labels in the Portuguese music scene.</p>

            <h1>Skills</h1>
            <p>Programming: Java, JavaScript, SQL, HTML, CSS</p>
            <p>Frameworks: Bootstrap, Spring MVC, Spring Boot, Hibernate, JUnit, Mockito</p>
            <p>Libraries: React, JQuery, SimpleGraphicsGFX</p>
            <p>Others: IntelliJ, GIT, VIM, Apache Tomcat, Apache Ant, Scrum</p>
            <button onClick={goBack} className="back-button">Exit</button>
        </div>
    );
};

export default Board;