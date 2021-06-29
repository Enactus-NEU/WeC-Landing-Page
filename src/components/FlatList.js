export default function FlatList(props) {
    return(
        <div className="List">
            {props.data.map((item, index) => {
                return(
                    props.render(item, index, props.level)
                )
            })}
        </div>
    )
}
