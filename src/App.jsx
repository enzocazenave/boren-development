import { About } from './components/About';
import { BackgroundParticles } from './components/BackgroundParticles';
import { Header } from './components/Header';
import { Services } from './components/Services';
import { Clients } from './components/Clients';
import { Contact } from './components/Contact';

export const App = () => {
    return (
        <>
            <Header />
            <About />
            <Services/>
            <Clients />
            <Contact />
            <BackgroundParticles />
        </>
    )
}