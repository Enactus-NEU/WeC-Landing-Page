import { useState } from 'react';

//method
import checkItem from './checkItem';
import FlatList from '../../FlatList';

//css
import "../../styles/TableOfContent.css"

export default function TableOfContent() {
    const [ heading ] = useState([
        { 
            name: "Điều khoản sử dụng", 
            item: [
                { name: "What is Lorem Ipsum?", active: true, item: [{ name: "1. What is Lorem Ipsum?"}, { name: "2. What is Lorem Ipsum?"}, { name: "3. What is Lorem Ipsum?"}]},
                { name: "What is Lorem Ipsum 2?", active: true, item: [{ name: "1. What is Lorem Ipsum?"}, { name: "2. What is Lorem Ipsum?"}, { name: "3. What is Lorem Ipsum?"}]}
            ],
            active: true
    },
        { name: "Chính sách bảo mật", item: []}
    ])

    return(
        <div className="TableOfContent">
            <FlatList 
                data={heading}
                level={1}
                render={
                    (arrItem, index, level) => checkItem(arrItem, index, level)
                } 
            />
        </div>
    )
}