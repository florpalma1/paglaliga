import { useEffect, useState } from "react";
import axios from "axios";

 export const TablaPosiciones = () => {
  const [tournaments, setTournaments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTournaments = async () => {
      try {
        const response = await axios.get("https://api.torneomax.com/api/tournaments", {
          headers: {
            Origin: "https://laliga.torneomax.com"
          }
        });
        setTournaments(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTournaments();
  }, []);

  if (loading) return <p className="text-center">Cargando torneos...</p>;
  if (error) return <p className="text-center text-danger">Error: {error}</p>;

  return (
    <div className="container mt-4">
      <div className="row">
        {tournaments.map((tournament) => (
          <div key={tournament.id} className="col-md-4 mb-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h5 className="card-title">{tournament.name}</h5>
                <p className="card-text">ID: {tournament.id}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};


