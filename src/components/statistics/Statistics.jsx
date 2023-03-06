import { Item } from "./StatisticItem"
import css from './Statistic.module.css'
import PropTypes from "prop-types";

export const Statistics = ({ title = '', data }) => {

    return (
        <section className={css.statistics}>
            {title ? <h2 className="title">{title}</h2> : null}
            <ul className={css.statList}>
                <Item data={data} />
            </ul>
        </section>
    )
}
Statistics.propTypes = {
    title: PropTypes.string

}