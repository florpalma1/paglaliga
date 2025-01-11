import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../css/Tablaposiciones.css';
import axios from 'axios'; // Importamos Axios

export const TablaPosiciones = () => {
    const [equipos, setEquipos] = useState([]); // Estado para los equipos
    const [categorias, setCategorias] = useState([
        '1RA MASCULINO ZONA A',
        '1RA MASCULINO ZONA B',
        '1RA FEMENINO ZONA A',
        '1RA FEMENINO ZONA B',
        '2DA MASCULINO ZONA A',
        '2DA MASCULINO ZONA B',
        '2DA MASCULINO ZONA C',
        '2DA MASCULINO ZONA D',
        '2DA FEMENINO ZONA A',
        '2DA FEMENINO ZONA B',
        '2DA FEMENINO ZONA C',
        '2DA FEMENINO ZONA D',
        'SUB 18 MASCULINO ZONA A',
        'SUB 18 MASCULINO ZONA B',
        'SUB 18 FEMENINO ZONA A',
        'SUB 18 FEMENINO ZONA B',
    ]);

    // Función para obtener los equipos desde el backend
    useEffect(() => {
        const fetchEquipos = async () => {
            try {
                const response = await axios.get('http://localhost:5000/torneoVoley/equipos');
                setEquipos(response.data); // Guardamos los equipos en el estado
            } catch (error) {
                console.error('Error al obtener los equipos:', error);
            }
        };

        fetchEquipos(); // Llamamos a la función para cargar los equipos
    }, []);

    const renderTable = (categoria) => {
        // Filtramos los equipos por categoría
        const equiposPorCategoria = equipos.filter(equipo => equipo.category === categoria);
        
        return (
            <table className="table table-bordered">
                <thead className="thead-dark">
                    <tr className="head-tr">
                        <th scope="col">POSICION</th>
                        <th scope="col">EQUIPO</th>
                        <th scope="col">PUNTOS</th>
                        <th scope="col">PJ</th>
                        <th scope="col">PG</th>
                        <th scope="col">PP</th>                     
                    </tr>
                </thead>
                <tbody>
                    {equiposPorCategoria.map((equipo, index) => (
                        <tr key={equipo._id}>
                            <td><span className="position-number">{index + 1}</span></td>
                            <td><h4 className="player-name">{equipo.title}</h4></td> {/* Mostramos el nombre del equipo */}
                            <td>0</td> {/* Aquí puedes agregar más estadísticas según tu modelo */}
                            <td>0</td>
                            <td>0</td>
                            <td>0</td>
                                       {/* Aquí también */}
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

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
                                    {renderTable(categoria)} {/* Renderizamos la tabla por categoría */}
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
                    {/*pedir a lau link de las tablas completas*/}
                    <a href="score.html" className="btn btn-primary full-table-btn">VER TABLAS COMPLETAS</a>
                </div>
            </div>
        </div>
    );
};
