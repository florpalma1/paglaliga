import React from 'react';
import { TablaPosiciones } from './TablaPosiciones'; // Asegúrate de importar correctamente

const Tablas = () => {
  // Datos de ejemplo (asegúrate de que esta estructura esté bien definida)
  const tablas = [
    {
      categoria: "Primera División",
      datos: [
        { position: 1, clubName: "Sportius F.C.", match: 39, win: 30, draw: 2, lose: 1, due: 3, pts: 60 },
        { position: 2, clubName: "Romada Football Club", match: 27, win: 10, draw: 2, lose: 1, due: 3, pts: 56 },
        { position: 3, clubName: "Holonso F.C.", match: 24, win: 35, draw: 2, lose: 1, due: 3, pts: 46 },
        { position: 4, clubName: "Atlético Nacional", match: 22, win: 18, draw: 4, lose: 3, due: 3, pts: 42 },
        { position: 5, clubName: "Boca Juniors", match: 21, win: 16, draw: 4, lose: 5, due: 2, pts: 39 }
      ]
    },
    {
      categoria: "Segunda División",
      datos: [
        { position: 1, clubName: "Barcelona F.C.", match: 30, win: 20, draw: 4, lose: 2, due: 2, pts: 64 },
        { position: 2, clubName: "Real Madrid", match: 28, win: 18, draw: 5, lose: 3, due: 2, pts: 59 },
        { position: 3, clubName: "Chelsea", match: 32, win: 17, draw: 3, lose: 4, due: 1, pts: 54 },
        { position: 4, clubName: "Liverpool", match: 29, win: 14, draw: 5, lose: 10, due: 2, pts: 47 },
        { position: 5, clubName: "Arsenal", match: 30, win: 12, draw: 7, lose: 11, due: 0, pts: 43 }
      ]
    },
  ];

  return (
    <div>
      <h1>Bienvenido al Portal de Fútbol</h1>
      {/* Aquí pasamos las tablas como props al componente TablaPosiciones */}
      <TablaPosiciones tablas={tablas} />
    </div>
  );
};

export default Tablas;
