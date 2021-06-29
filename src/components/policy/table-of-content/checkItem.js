import FlatList from "../../FlatList"
export default function checkItem(arrItem, index, level) {
    return ( 
        <div className={`wrap-heading wrap-heading${level}`} key={`heading${level}-${index}`}>
            <div className={`heading heading${level} heading-${arrItem.active ? "active" : "not-active"}` }>{arrItem.name}</div>
                { 
                    (arrItem.item && arrItem.item.length > 0) && (
                        <div className={`child child-${arrItem.active ? "active" : "not-active"}`} >
                            <FlatList data={arrItem.item} level={level += 1} render={(arrItem, index) => checkItem(arrItem, index, level)} /> 
                        </div>
                    ) 
                }
        </div>
    )   
}