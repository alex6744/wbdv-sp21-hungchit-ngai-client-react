import React,{useState} from 'react'

const HeadingWidget=({widget,updateWidget,deleteWidget,isEdit,setIsEdit})=> {
    const [itemCache, setItemCache] = useState(widget)
    const [editing,setEditing]=useState(isEdit)
    const [title,setTitle]=useState(widget.name)
    const [fontSize,setFontSize]=useState(widget.size)
    const Heading="h"+fontSize;




    return(
        <div>

            <ul className="list-group">

                <li className="list-group-item">
                    <i className="fas fa-cog float-right cog-position"
                       onClick={()=>{
                           setItemCache(widget)
                           setEditing(true)
                       }}></i>
                     <Heading>{title}</Heading>


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
                                    onClick={()=> { console.log(itemCache)
                                        setEditing(false)
                                        return deleteWidget(itemCache)
                                    }}></i>
                            </>


                            <select className="form-control"
                                    onChange={(e) =>setItemCache({...itemCache, type: e.target.value})}>
                                <option value="HEADING">Heading</option>
                                <option value="PARAGRAPH">Paragraph</option>
                                <option value="PARAGRAPH">Video</option>
                                <option value="PARAGRAPH">Image</option>
                                <option value="PARAGRAPH">Link</option>
                                <option value="PARAGRAPH">List</option>
                                <option value="PARAGRAPH">HTML</option>
                            </select>
                            <input className="form-control"
                                    value={itemCache.name}
                                    onChange={(e)=>{

                                        setTitle(e.target.value)
                                        setItemCache({...itemCache, name: e.target.value})
                                    }}/>
                            <select className="form-control"
                                    value={itemCache.size}
                                    onChange={(e) =>{
                                        setFontSize(e.target.value)
                                        setItemCache({...itemCache, size: e.target.value})
                                    }}
                                    >

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