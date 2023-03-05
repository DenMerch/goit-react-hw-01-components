import { Items } from "./Items"
import css from './Statistic.module.css'
import PropTypes from "prop-types";

export const Statistics = ({ title = '', data }) => {

    return (
        <section className={css.statistics}>
            <h2 className="title">{title}</h2>

            <ul className={css.statList}>
                <Items data={data} />
            </ul>
        </section>
    )
}
Statistics.propTypes = {
    title: PropTypes.string

}