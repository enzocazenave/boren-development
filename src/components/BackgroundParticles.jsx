import Particles from 'react-particles';
import { useCallback } from 'react';
import { loadFull } from 'tsparticles';
import { particles } from '../data/particles/particles';

export const BackgroundParticles = () => {

    const particlesInit = useCallback(async engine => {
        await loadFull(engine);
    });

    const particlesLoaded = useCallback(async container => {
        await console.log('Particles: Loaded');
    }, []);

    return (
        <Particles
            className="particles-change"
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={ particles }
        />
    )
}
