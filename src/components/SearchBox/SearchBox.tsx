const SearchBox = ( { onSearchChange } : { onSearchChange: any } ) => {
    return (
        <div className='pa2'>
            <input
                className='pa3 ba b-- green bg-lightest-blue' 
                type='search' 
                placeholder='search robots'
                role='robot-search'
                onChange={onSearchChange}
            />
        </div>
    );
};

export default SearchBox;