import { About } from './components/About';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Header } from './components/Header';
import { Services } from './components/Services';
import { Clients } from './components/Clients';

export const App = () => {
    return (
        <>
            <Header />
            <About />
            <Services/>
            <Clients />
            <BackgroundParticles />
        </>
    )
}