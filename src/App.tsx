import { Navbar } from './components/Navbar/Navbar';
import { Main } from './components/Main/Main';
function App() {
    return (
        <>
            <Navbar />
            <div className="content__main">
                <Main />
            </div>
        </>
    );
}

export default App;
