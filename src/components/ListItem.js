export default function ListItem(props) {
    return <li className={props.done ? 'done' : ''}>
        <label>{props.text}</label>
        <span>
            <input type='checkbox' defaultChecked={props.done} />
            {props.done ? null : <button className='x'>X</button>}
        </span>
    </li>
}
