import React,{useState} from 'react'

const ImageWidget =({widget, updateWidget, deleteWidget})=>{
    const [itemCache, setItemCache] = useState(widget)
    const [editing,setEditing]=useState(false)
    const DEFAULT_IMAGE="https://image.tmdb.org/t/p/w500/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
    const [src,setSrc]=useState(()=>widget.src!==null?widget.src:DEFAULT_IMAGE)
    const [width,setWidth]=useState(widget.width)
    const [height,setHeight]=useState(widget.height)

    return(
        <div>
            <ul className="list-group">
                <li className="list-group-item">
                    <i className="fas fa-cog float-right"
                       onClick={()=>{
                           setItemCache(widget)
                           setEditing(true)
                       }}></i>
                    <img width={width} height={height} src={src}/>

                </li>

                {
                    editing &&
                    <li className="list-group-item">

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
                        <br/>
                        type
                        <select className="form-control"
                                onChange={(e) => setItemCache({...itemCache, type: e.target.value})}
                                value={itemCache.type}>
                            <option value="HEADING">Heading</option>
                            <option value="PARAGRAPH">Paragraph</option>
                            <option value="PARAGRAPH">Video</option>
                            <option value="PARAGRAPH">Image</option>
                            <option value="PARAGRAPH">Link</option>
                            <option value="PARAGRAPH">List</option>
                            <option value="PARAGRAPH">HTML</option>
                        </select>

                        <br/>
                        Image URL
                        <input value={src}
                               className="form-control"
                               onChange={(e)=>{
                                   setSrc(e.target.value)
                                   setItemCache({...itemCache, src: e.target.value})
                               }}/>
                        Image width
                        <input value={width}
                               className="form-control"
                               onChange={(e)=>{
                                   setWidth(e.target.value)
                                   setItemCache({...itemCache, width: e.target.value})
                               }}/>
                        Image height
                        <input value={height}
                               className="form-control"
                               onChange={(e)=>{
                                   setHeight(e.target.value)
                                   setItemCache({...itemCache, height: e.target.value})
                               }}/>

                    </li>
                }
            </ul>
        </div>
    )
}

export default ImageWidget