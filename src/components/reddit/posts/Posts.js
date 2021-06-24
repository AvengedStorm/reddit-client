import React from 'react';

export default (props) => {
    return (
        <div>
            <ul>
                {props.posts.map(el => 
                    <li className="postItem" key={el}>
                        <a href={el.data.url}>
                            {el.data.title}
                        </a>
                        {el.data.thumbnail != "self" ? (<img className="postPhoto" src={el.data.thumbnail} />):<></>}
                    </li>)}
            </ul>
        </div>
    )
}