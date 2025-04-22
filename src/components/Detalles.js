import React, { useState, useEffect } from 'react';
import '../Detalles.css';
import tdvlogo from '../assets/img/TDVLOGO.jpeg'

export const Detalles = () => {
    // Estado para los valores del countdown
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // Fecha objetivo del countdown
        const targetDate = new Date("2026-01-15T00:00:00").getTime();

        // Función para calcular el tiempo restante
        const updateCountdown = () => {
            const now = new Date().getTime();
            const distance = targetDate - now;

            if (distance > 0) {
                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor(
                    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
                );
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                setTimeLeft({ days, hours, minutes, seconds });
            } else {
                setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            }
        };

        // Actualiza el countdown cada segundo
        const interval = setInterval(updateCountdown, 1000);

        // Limpia el intervalo al desmontar el componente
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="rts-latest-match">
            <div className="container">
                <div className="latest-match-inner">
                    <div className="club-area">
                        <div className="club-logo">
                            <img src={tdvlogo} alt="Club Logo" />
                        </div>
                        <div className="content">
                            <h3 className="club-text">TORNEO DE <br />
                                VERANO
                            </h3>
                        </div>
                        <span className="match-type">EDICION 2026</span>
                    </div>
                    <div className="match-countdown-area">
                        <div className="countdown">
                            <div className="countdown-el days-c">
                                <span className="value" id="days">{timeLeft.days}</span>
                            </div>
                            <span className="letter ms-2">D</span>
                           <div className="countdown-el hours-c">
                                <span className="value" id="hours">{timeLeft.hours}</span>
                            </div>
                            <span className="letter">H</span>
                            <div className="countdown-el mins-c">
                                <span className="value" id="mins">{timeLeft.minutes}</span>
                            </div>
                            <span className="letter ms-2">M</span>
                            <div className="countdown-el seconds-c">
                                <span className="value" id="seconds">{timeLeft.seconds}</span>
                            </div>
                            <span className="letter ms-2">S</span>
                        </div>
                    </div>
                    <a href="contact.html" className="ticket-btn">VER MAS</a>
                </div>
            </div>
        </div>
    );
};


