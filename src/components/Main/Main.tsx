import { Button } from '../Button/Button';
import { Card } from '../Card/Card';
import './style.css';

export function Main() {
    return (
        <section>
            <div className="content__button">
                <Button>Agregar</Button>
                <Button>Postear</Button>
            </div>
            <Card />
        </section>
    );
}
