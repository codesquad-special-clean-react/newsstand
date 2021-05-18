const GridItem = (props) => {
    return (
        <div { ...props }>
            { props.children }
        </div>
    );
};

export default GridItem;