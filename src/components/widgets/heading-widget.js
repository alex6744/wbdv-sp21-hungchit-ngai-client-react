import React from 'react'

const HeadingWidget=({widget, setWidget, editing})=>
    <div>
        <ul className="list-group">
            <li className="list-group-item">Heading</li>
            <li className="list-group-item">
                <div>
                    <select  className="form-control">
                        <option value={1}>Heading</option>
                        <option value={2}>Paragraph</option>
                        <option value={3}>Video</option>
                        <option value={4}>Image</option>
                        <option value={5}>Link</option>
                        <option value={6}>List</option>
                        <option value={6}>HTML</option>
                    </select>
                    <input className="form-control"/>
                    <select  className="form-control">
                        <option value={1}>Heading 1</option>
                        <option value={2}>Heading 2</option>
                        <option value={3}>Heading 3</option>
                        <option value={4}>Heading 4</option>
                        <option value={5}>Heading 5</option>
                        <option value={6}>Heading 6</option>
                    </select>
                </div>
            </li>
        </ul>
    </div>

export default HeadingWidget