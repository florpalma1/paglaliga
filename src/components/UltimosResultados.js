import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/ultimosresultados.css';


export const UltimosResultados = () => {
    const matches = [
        {
            date: "PLAYOFF, JULY 21",
            team1: { score: 1, name: "REAL M." },
            team2: { score: 3, name: "HEMILTON H." },
            summaryLink: "blog-details.html",
            videoLink: "https://www.youtube.com/watch?v=G4t6TqG5LM8"
        },
        {
            date: "PLAYOFF, JULY 22",
            team1: { score: 2, name: "BARCELONA" },
            team2: { score: 1, name: "JUVENTUS" },
            summaryLink: "blog-details.html",
            videoLink: "https://www.youtube.com/watch?v=G4t6TqG5LM8"
        },
        {
            date: "PLAYOFF, JULY 23",
            team1: { score: 0, name: "PSG" },
            team2: { score: 2, name: "BAYERN" },
            summaryLink: "blog-details.html",
            videoLink: "https://www.youtube.com/watch?v=G4t6TqG5LM8"
        },
        {
            date: "PLAYOFF, JULY 24",
            team1: { score: 3, name: "CHELSEA" },
            team2: { score: 2, name: "AC MILAN" },
            summaryLink: "blog-details.html",
            videoLink: "https://www.youtube.com/watch?v=G4t6TqG5LM8"
        },
        {
            date: "PLAYOFF, JULY 25",
            team1: { score: 4, name: "INTER" },
            team2: { score: 3, name: "LIVERPOOL" },
            summaryLink: "blog-details.html",
            videoLink: "https://www.youtube.com/watch?v=G4t6TqG5LM8"
        }
    ];

    return (
        <div className="container rts-match-result-section">
            <div id="matchCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {matches.map((match, index) => (
                        <div
                            key={index}
                            className={`carousel-item ${index === 0 ? 'active' : ''}`}
                        >
                            <div className="row">
                                {[...Array(4)].map((_, i) => {
                                    const matchIndex = index * 3 + i;
                                    if (matchIndex >= matches.length) return null;

                                    const matchData = matches[matchIndex];

                                    return (
                                        <div className="col-2 d-flex justify-content-center" key={matchIndex}>
                                            <div className="match-single ">
                                                <span className="match-date">{matchData.date}</span>
                                                <div className="match-scores">
                                                    <div className="club">
                                                        <h2 className="score-number">{matchData.team1.score}</h2>
                                                        <span className="club-name">{matchData.team1.name}</span>
                                                    </div>
                                                    <div className="colon">:</div>
                                                    <div className="club">
                                                        <h2 className="score-number">{matchData.team2.score}</h2>
                                                        <span className="club-name">{matchData.team2.name}</span>
                                                    </div>
                                                </div>
                                                <div className="match-review">
                                                    <a href={matchData.summaryLink} className="review-link smry">SUMMARY</a>
                                                    <div className="play-btn play-video">
                                                        <a href={matchData.videoLink} className="review-link vdo">VIDEO</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#matchCarousel"
                    data-bs-slide="prev"
                >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#matchCarousel"
                    data-bs-slide="next"
                >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default UltimosResultados;
