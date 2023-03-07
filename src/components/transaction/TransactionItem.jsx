import PropTypes from "prop-types";
export const TransactionItem = ({ item }) => {
    return (
        <>
            <td>{item.type}</td>
            <td>{item.amount}</td>
            <td>{item.currency}</td>
        </>
    )
}
TransactionItem.propTypes = {
    item: PropTypes.objectOf(PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
    ]))

}