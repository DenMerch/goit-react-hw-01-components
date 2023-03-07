import { Item } from "./StatisticItem"
import css from './Statistic.module.css'
import PropTypes from "prop-types";

export const Statistics = ({ title = '', data }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className="title">{title}</h2>}
            <ul className={css.statList}>
                {data.map((item) => {
                    return (
                        <li key={item.id}>
                            <Item item={item} />
                        </li>
                    )

                })}

            </ul>
        </section>
    )
}
Statistics.propTypes = {
    title: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object)

}