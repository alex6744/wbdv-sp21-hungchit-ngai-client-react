import React, {useState, useEffect} from 'react'

const ParagraphWidget=({widget,updateWidget,deleteWidget})=> {
    const [itemCache,setItemCache]=useState(widget);
    const [editing,setEditing]=useState(false);
    const [para,setPara]=useState(widget.text)
    return(
        <div>
           <ul className="list-group">
               <li className="list-group-item">
                   <i className="fas fa-cog float-right"
                      onClick={()=>{
                          setItemCache(widget)
                          setEditing(true)
                      }}></i>
                   <p>{para}</p>

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
                       <textarea value={itemCache.text}
                                 className="form-control"
                                 onChange={(e)=> {
                                     setPara(e.target.value)
                                     setItemCache({...itemCache, text: e.target.value})
                                 }}></textarea>
                   </li>
               }
           </ul>
        </div>
    )
}
export default ParagraphWidget