import React from 'react'

export default function NewsItem(props) {
    return (
        <div className="card col-md-4" style={{margin: "55px 100px"}}>
            <img src= {props.url} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">Details</a>
            </div>
        </div>
    )
}
