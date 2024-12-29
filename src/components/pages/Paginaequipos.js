import React, { useState } from "react";
import '../../pages.css';
import { CardPaginaEquipos } from '../CardPaginaEquipos';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import auchi from '../../assets/img/AUCHI.png'
import teamtopo from '../../assets/img/teamtopo.png'
import cadelpa from '../../assets/img/CADELPA.png'
import diecisietevoley from '../../assets/img/diecisietevoley.png'
import ACQUARELLA from '../../assets/img/ACQUARELLA.png'
import triplec from '../../assets/img/TRIPLEC.png'
import defedemoreno from '../../assets/img/DEFE DE MORENO.png'
import sportivohaedo from '../../assets/img/2da/SPORTIVO HAEDO.png'
import alacecho from '../../assets/img/2da/Al acecho.png'



const teamsData = [
  { name: "AUCHI", imgUrl: auchi, category: "1era", type: "Femenino", points: 10 },
  { name: "TEAM TOPO", imgUrl: teamtopo, category: "1era", type: "Masculino", points: 8 },
  { name: "CADELPA ", imgUrl: cadelpa, category: "1era", type: "Masculino", points: 5 },
  { name: "17 VOLEY", imgUrl: diecisietevoley, category: "2da", type: "Femenino", points: 12 },
  { name: "ACQUARELLA", imgUrl: ACQUARELLA, category: "1era", type: "Masculino", points: 7 },
  { name: "TRIPLE C", imgUrl: triplec, category: "1era", type: "Femenino", points: 9 },
  { name: "C.A.D.M", imgUrl: defedemoreno, category: "1era", type: "Femenino", points: 6 },
  { name: "SPORTIVO HAEDO", imgUrl: sportivohaedo, category: "Sub 19", type: "Competitivo", points: 11 },
  { name: "AL ACECHO", imgUrl: alacecho, category: "1era", type: "Femenino", points: 13 },
  { name: "Equipo 10", imgUrl: auchi, category: "2da", type: "Competitivo", points: 10 },
  { name: "Equipo 11", imgUrl: auchi, category: "Mixto", type: "Masculino", points: 4 },
  { name: "Equipo 12", imgUrl: auchi, category: "Sub 19", type: "Recreativo", points: 8 },
];

export const PaginaEquipos = () => {
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedType, setSelectedType] = useState("Todos");

  // Filtrar equipos según la categoría y el tipo seleccionados
  const filteredTeams = teamsData.filter((team) => {
    const matchesCategory =
      selectedCategory === "Todos" || team.category === selectedCategory;
    const matchesType = selectedType === "Todos" || team.type === selectedType;
    return matchesCategory && matchesType;
  });

  // Ordenar equipos por puntos
  const sortedTeams = filteredTeams.sort((a, b) => b.points - a.points);

  // Verificar si se debe mostrar la tabla (ningún filtro debe estar en "Todos")
  const shouldShowTable = selectedCategory !== "Todos" && selectedType !== "Todos";

  return (
    <div className="App">
      {/* Banner */}
      <div className="bannerPages">
        <p>Home / equipos</p>
        <h1>EQUIPOS</h1>
      </div>

      {/* Sección de filtros y cards */}
      <Container className="py-4 px-3">
        {/* Filtros */}
        <Row className="mb-4">
          {/* Columna del filtro por categoría */}
          <Col xs={12} md={6}>
            <div className="filter">
              <label htmlFor="category-select" className="form-label">Categoría:</label>
              <select
                id="category-select"
                className="form-select"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                <option value="Todos">Todos</option>
                <option value="1era">1era</option>
                <option value="2da">2da</option>
                <option value="Mixto">Mixto</option>
                <option value="Sub 19">Sub 19</option>
              </select>
            </div>
          </Col>

          {/* Columna del filtro por tipo */}
          <Col xs={12} md={6}>
            <div className="filter">
              <label htmlFor="type-select" className="form-label">Tipo:</label>
              <select
                id="type-select"
                className="form-select"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                <option value="Todos">Todos</option>
                <option value="Femenino">Femenino</option>
                <option value="Masculino">Masculino</option>
                <option value="Recreativo">Recreativo</option>
                <option value="Competitivo">Competitivo</option>
              </select>
            </div>
          </Col>
        </Row>

        {/* Grilla de cards */}
        <Row xs={1} sm={2} md={3} lg={6} className="g-4">
          {filteredTeams.map((team, index) => (
            <Col key={index}>
                 <CardPaginaEquipos 
              key={index}
              title={team.name}
              imgUrl={team.imgUrl}
              category={team.category}
              type={team.type}
              points={team.points}
            />
            </Col>
          ))}
        </Row>

        {/* Tabla de posiciones */}
        {shouldShowTable && filteredTeams.length > 0 && (
          <div className="mt-5">
            <h3>Tabla de Posiciones</h3>
            <table className="table">
              <thead>
                <tr>
                  <th>Posición</th>
                  <th>Equipo</th>
                  <th>Puntos</th>
                  <th>Categoría</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                {sortedTeams.map((team, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{team.name}</td>
                    <td>{team.points}</td>
                    <td>{team.category}</td>
                    <td>{team.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Container>
    </div>
  );
};
