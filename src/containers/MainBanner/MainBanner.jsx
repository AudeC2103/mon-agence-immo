import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSlides } from './../../hooks/useSlides';
import s from './style.module.scss';

const MainBanner = ({ categorie }) => {
    console.log("Categorie passed to MainBanner:", categorie);

    const { slides, loading, error } = useSlides(categorie);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        console.log("Slides in MainBanner:", slides);

        if (slides.length > 0) {
            const interval = setInterval(() => {
                setActiveIndex(prevIndex => (prevIndex + 1) % slides.length);
            }, 5000);
            return () => clearInterval(interval);
        }
    }, [slides]);

    if (loading) {
        return <div>Chargement en cours...</div>;
    }

    if (error) {
        return <div>Erreur : {error.message}</div>;
    }

    if (slides.length === 0) {
        return <div>Aucune slide disponible pour cette catégorie.</div>;
    }

    return (
        <div className={s.mainBanner} aria-live="polite">
            {slides.map((slide, index) => (
                <div 
                    key={index} 
                    className={`${s.slide} ${index === activeIndex ? s.active : ''}`}
                    style={{ backgroundImage: `url(${slide.image})` }}
                    role="img"
                    aria-label={`${slide.title} - ${slide.subtitle}`}
                >
                    <div className={s.content}>
                        <h1>{slide.title}</h1>
                        <p>{slide.subtitle}</p>
                        <a href={slide.link} className={s.link} aria-label={`En savoir plus sur ${slide.title}`}>
                            En savoir plus
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

MainBanner.propTypes = {
    categorie: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.arrayOf(PropTypes.string)
    ]).isRequired,
};

export default MainBanner;
