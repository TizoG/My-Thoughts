import './style.css';

export function Navbar() {
    return (
        <div className="navbar">
            <h1>My Thoughts</h1>
            <div className="content__button">
                <a href="">
                    <button>Login</button>
                </a>
                <a href="">
                    <button>Registrarte</button>
                </a>
            </div>
        </div>
    );
}
