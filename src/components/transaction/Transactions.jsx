import { TransactionItem } from './TransactionItem';
import css from './Transactions.module.css'

export const Transactions = ({ items }) => {
    return (
        <div>
            <h2>Transactions</h2>
            <table className={css.transaction}>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Amount</th>
                        <th>Currency</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map(item => {
                        return <tr key={item.id}>
                            <TransactionItem item={item} />
                        </tr>
                    })}


                </tbody>
            </table>
        </div>);
}
