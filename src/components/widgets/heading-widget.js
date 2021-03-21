import React,{useState} from 'react'

const HeadingWidget=({widget,updateWidget,deleteWidget})=> {
    const [itemCache, setItemCache] = useState(widget)
    const [editing,setEditing]=useState(false)
    return(
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <h1>Heading {widget.type}</h1>
                    <i className="fas fa-cog float-right"
                        onClick={()=>setEditing(true)}></i>
                </li>

                {
                    editing &&
                    <li className="list-group-item">

                        <div>


                            <>
                                <i className="fas fa-check float-right"
                                    onClick={()=>{
                                        setEditing(false)
                                        updateWidget(itemCache)
                                    }}></i>
                                <i className="fas fa-trash float-right"
                                    onClick={()=>{}}></i>
                            </>


                            <select className="form-control"
                                    onChange={(e) =>setItemCache({...itemCache, type: e.target.value})}>
                                <option value="HEADING">Heading</option>
                                <option value="PARAGRAPH">Paragraph</option>
                                <option value="VIDEO">Video</option>
                                <option value="Image">Image</option>
                                <option value="LINK">Link</option>
                                <option value="LIST">List</option>
                                <option value="HTML">HTML</option>
                            </select>
                            <input className="form-control"/>
                            <select className="form-control">
                                <option value={1}>Heading 1</option>
                                <option value={2}>Heading 2</option>
                                <option value={3}>Heading 3</option>
                                <option value={4}>Heading 4</option>
                                <option value={5}>Heading 5</option>
                                <option value={6}>Heading 6</option>
                            </select>

                        </div>


                    </li>
                }
            </ul>
        </div>
    )
}

export default HeadingWidget