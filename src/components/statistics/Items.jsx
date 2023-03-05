import css from './Items.module.css'
export const Items = ({ data }) => {


    return data.map(item => {

        return (
            <li className={css.items} key={item.id}>
                <span className="label">{item.label}</span>
                <span className="percentage">{item.percentage}%</span>
            </li>
        )
    })

}