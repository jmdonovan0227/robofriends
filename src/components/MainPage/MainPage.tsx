import { useEffect } from 'react';
import CardList from '../CardList/CardList';
import SearchBox from '../SearchBox/SearchBox';
import Scroll from '../Scroll/Scroll';
import { useAppDispatch, useAppSelector } from '../../store/hooks/hooks';
import { setSearchField } from '../../store/slices/searchSlice';
import { fetchRobots } from '../../store/slices/robotsSlice';

export interface IRobot {
    name: string,
    id: number,
    email: string
};


const MainPage: React.FC = () => {
    const dispatch = useAppDispatch();
    const robotsState = useAppSelector(state => state.robots);
    const searchState = useAppSelector(state => state.search);

    useEffect(() => {
        dispatch(fetchRobots());
    }, [])

    const onSearchChange = (event : React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSearchField(event.currentTarget.value));
    };

    const filteredRobots = (robots : Array<IRobot>) => {
        return robots.filter(robot => robot.name.toLowerCase().includes(searchState.searchField.toLowerCase()));
    };

    return (
        <div className='tc'>
            <SearchBox onSearchChange={onSearchChange} />
            <Scroll>
                {
                    robotsState.isPending ? <h1>Loading</h1> : (
                        <CardList robots={filteredRobots(robotsState.contents)} />
                    )
                }
            </Scroll>
        </div>
    );
}

export default MainPage;