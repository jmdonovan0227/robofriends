interface CardStatelessProps {
    name: string,
    email: string,
    id: number
};

// Remember with React, we only return one component!
const Card : React.FC<CardStatelessProps> = ({ name, email, id } : CardStatelessProps) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt='robots' src={`https://robohash.org/${id}?200x200`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
};

export default Card;