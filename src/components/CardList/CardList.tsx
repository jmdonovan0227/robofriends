import Card from '../Card/Card';
import { IRobot } from '../MainPage/MainPage';

interface CardListProps {
    robots: Array<IRobot>
}

const CardList : React.FC<CardListProps> = ({ robots } : CardListProps) => {
    return (
        <div>
            {
                // <h1>Hello</h1>
                robots.map((_, i) => {
                    return (<Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email} 
                        />
                    );
                }) 
            }
        </div>
    );
};

export default CardList;