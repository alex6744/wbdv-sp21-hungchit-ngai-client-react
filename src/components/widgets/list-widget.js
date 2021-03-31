import React,{useState} from 'react'

const ListWidget =({widget, updateWidget, deleteWidget})=> {
    const [itemCache, setItemCache] = useState(widget)
    const [editing, setEditing] = useState(false)
    const [text1, setText1] = useState(widget.text===null?"":widget.text)
    const [ordered, setOrdered] = useState(widget.widgetOrder)


    return (
        <div>

            <ul className="list-group">

                <li className="list-group-item">
                    <i className="fas fa-cog float-right cog-position"
                       onClick={() => {
                           setItemCache(widget)
                           setEditing(true)
                       }}></i>
                    {
                        //!editing &&
                        <>
                            {
                                ordered === 1 &&
                                <ol>

                                    {

                                        text1.split("\n").map(item => {
                                            return (
                                                <li>{item}</li>
                                            )
                                        })
                                    }
                                </ol>
                            }
                            {
                                ordered === 0 &&
                                <ul>

                                    {
                                        text1.split("\n").map(item => {
                                            return (
                                                <li>{item}</li>
                                            )
                                        })
                                    }
                                </ul>
                            }
                        </>
                    }


                </li>

                {
                    editing &&
                    <li className="list-group-item">

                        <div>


                            <>

                                <input type="checkbox"
                                       checked={ordered}
                                       onChange={(e) => {
                                           console.log(e.target.checked)
                                           setOrdered(e.target.checked  ? 1 : 0)
                                           return setItemCache({...itemCache, widgetOrder: e.target.checked  ? 1 : 0})
                                       }}/> Ordered
                                <i className="fas fa-check float-right"
                                   onClick={() => {
                                       setEditing(false)
                                       updateWidget(itemCache)
                                   }}></i>
                                <i className="fas fa-trash float-right"
                                   onClick={() => {
                                       console.log(itemCache)
                                       setEditing(false)
                                       return deleteWidget(itemCache)
                                   }}></i>
                            </>


                            <select className="form-control"
                                    onChange={(e) => setItemCache({...itemCache, type: e.target.value})}
                                    value={itemCache.type}>
                                <option value="HEADING">Heading</option>
                                <option value="PARAGRAPH">Paragraph</option>
                                <option value="PARAGRAPH">Video</option>
                                <option value="IMAGE">Image</option>
                                <option value="PARAGRAPH">Link</option>
                                <option value="LIST">List</option>
                                <option value="PARAGRAPH">HTML</option>
                            </select>

                            <br/>
                            <textarea value={itemCache.text}
                                      rows={10}
                                      className="form-control"
                                      onChange={(e) => {
                                          setText1(e.target.value)
                                          setItemCache({...itemCache, text: e.target.value})
                                      }}></textarea>
                        </div>


                    </li>
                }
            </ul>
        </div>
    )
}

export default ListWidget