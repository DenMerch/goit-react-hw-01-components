import PropTypes from "prop-types";
export const Item = ({ data }) => {

    return data.map(item => {
        const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
        return (
            <li key={item.id} style={{ backgroundColor: randomColor }}>
                <span className="label">{item.label}</span>
                <span className="percentage">{item.percentage}%</span>
            </li>
        )
    })

}
Item.propTypes = {
    data: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ])))

}