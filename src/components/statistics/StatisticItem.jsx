import PropTypes from "prop-types";
export const Item = ({ item }) => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return (
        <div style={{ backgroundColor: randomColor, display: "flex", flexDirection: "column" }}>
            <span className="label">{item.label}</span>
            <span className="percentage">{item.percentage}%</span>
        </div>
    )
}
Item.propTypes = {
    item: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]))

}