import PropTypes from 'prop-types';

function List(props) {
    const items = props.items;
    
    // const FilterItems = items.map((item) => <li>{item > 100}</li>);
    
    // Sort the items decreasing
    // items.sort((a,b) => b.calories - a.calories );

    // Sort the items increasing
    // items.sort((a,b) => a.calories - b.calories );

    // Sort by names in alphabetic order
    // items.sort((a,b) => a.name.localeCompare(b.name));

    // Sort by names in desending order
    // items.sort((a,b) => b.name.localeCompare(a.name));

    // const filteredItems = items.filter(item => item.calories < 100)

    const listItems = items.map(item => <li key={item.id}> 
                                            {item.name}  &nbsp;
                                            <b>{item.calories}</b>
                                        </li>)
    return(
        <>  
            <h2>{props.context}</h2>
            <ol>{listItems}</ol>
        </>
    )
}

List.defaultProps = {
    context: "Context",
    items: []
}

List.propTypes = {
    context: PropTypes.number,
    items: PropTypes.array
}

export default List;