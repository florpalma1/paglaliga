import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/Tablaposiciones.css';

export const TablaPosiciones = () => {
    const categorias = [
        '1RA MASCULINO',
        '1RA FEMENINO',
        '2DA MASCULINO',
        '2DA FEMENINO',
        'SUB 18 MASCULINO',
        'SUB 18 FEMENINO',
    ];

    const renderTable = () => (
        <table className="table table-bordered">
            <thead className="thead-dark">
                <tr className="head-tr">
                    <th scope="col">POSITION</th>
                    <th scope="col">CLUB NAME</th>
                    <th scope="col">MATCH</th>
                    <th scope="col">WIN</th>
                    <th scope="col">DRAW</th>
                    <th scope="col">LOSE</th>
                    <th scope="col">DUE</th>
                    <th scope="col">PTS</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><span className="position-number">01</span></td>
                    <td><h4 className="player-name">Sportius F.C.</h4></td>
                    <td>39</td>
                    <td>30</td>
                    <td>02</td>
                    <td>01</td>
                    <td>03</td>
                    <td>60</td>
                </tr>
                <tr>
                    <td><span className="position-number">02</span></td>
                    <td><h4 className="player-name">Romada Football Club</h4></td>
                    <td>27</td>
                    <td>10</td>
                    <td>02</td>
                    <td>01</td>
                    <td>03</td>
                    <td>56</td>
                </tr>
                <tr>
                    <td><span className="position-number">03</span></td>
                    <td><h4 className="player-name">Holonso F.C.</h4></td>
                    <td>24</td>
                    <td>35</td>
                    <td>02</td>
                    <td>01</td>
                    <td>03</td>
                    <td>46</td>
                </tr>
                <tr>
                    <td><span className="position-number">04</span></td>
                    <td><h4 className="player-name">Real Madrid</h4></td>
                    <td>25</td>
                    <td>19</td>
                    <td>02</td>
                    <td>01</td>
                    <td>03</td>
                    <td>58</td>
                </tr>
                <tr>
                    <td><span className="position-number">05</span></td>
                    <td><h4 className="player-name">Barcelona F.C.</h4></td>
                    <td>19</td>
                    <td>25</td>
                    <td>02</td>
                    <td>01</td>
                    <td>03</td>
                    <td>47</td>
                </tr>
                <tr>
                    <td><span className="position-number">06</span></td>
                    <td><h4 className="player-name">Chelsea</h4></td>
                    <td>10</td>
                    <td>23</td>
                    <td>02</td>
                    <td>01</td>
                    <td>03</td>
                    <td>-10</td>
                </tr>
            </tbody>
        </table>
    );

    return (
        <div className="rts-point-table-section section-gap">
            <div className="container">
                <div className="section-title-area section-title-area1 text-center mb-5">
                    <h1 className="section-title">
                        <span className="pretitle">PUNTOS</span> TABLA DE POSICIONES
                    </h1>
                    <p>
                        It is one of the most popular football clubs that offer training programs
                        for the youth, as well as summer camps
                    </p>
                </div>

                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        {categorias.map((_, index) => (
                            <button
                                key={index}
                                type="button"
                                data-bs-target="#carouselExampleIndicators"
                                data-bs-slide-to={index}
                                className={index === 0 ? 'active' : ''}
                                aria-current={index === 0 ? 'true' : undefined}
                                aria-label={`Slide ${index + 1}`}
                            ></button>
                        ))}
                    </div>

                    <div className="carousel-inner">
                        {categorias.map((categoria, index) => (
                            <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                                <h3 className="categoria-titulo text-center mb-4">{categoria}</h3>
                                <div className="table-area table-full">
                                    {renderTable()}
                                </div>
                            </div>
                        ))}
                    </div>

                    <button
                        className="carousel-control-prev"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button
                        className="carousel-control-next"
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>

                <div className="button-area mt-4">
                    <a href="score.html" className="btn btn-primary full-table-btn">VIEW FULL TABLE</a>
                </div>
            </div>
        </div>
    );
};


