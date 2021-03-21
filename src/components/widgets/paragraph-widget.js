import React, {useState, useEffect} from 'react'

const ParagraphWidget=({widget,updateWidget,deleteWidget})=> {
    const [item,setItem]=useState(widget);
    const [editing,setEditing]=useState(false);
    return(
        <div>
           <ul className="list-group">
               <li className="list-group-item">
                   <i className="fas fa-cog float-right"
                      onClick={()=>setEditing(true)}></i>
                   <p>paragraph {widget.text}</p>

               </li>

               {
                   editing &&
                   <li className="list-group-item">

                       <i className="fas fa-check float-right"></i>
                       <i className="fas fa-trash float-right"></i>
                       <br/>
                       <select className="form-control">
                           <option value="HEADING">Heading</option>
                           <option value="PARAGRAPH">Paragraph</option>
                           <option value="VIDEO">Video</option>
                           <option value="I">Image</option>
                           <option value={5}>Link</option>
                           <option value={6}>List</option>
                           <option value={6}>HTML</option>
                       </select>

                       <br/>
                       <textarea className="form-control"></textarea>
                   </li>
               }
           </ul>
        </div>
    )
}
export default ParagraphWidget