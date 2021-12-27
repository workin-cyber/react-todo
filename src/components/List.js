import ListItem from "./ListItem";

export default function List(props) {
    const list = props.list
    return <ul>
        {list.map(t =>
            <ListItem
                key={t.id}
                text={t.text}
                done={t.done}
            />
        )}
    </ul>
}
