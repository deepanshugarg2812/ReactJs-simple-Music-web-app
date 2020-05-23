import React from 'react';

export default class NewItem extends React.Component{
    render(){
        const ListItems = this.props.items.map((item) => 
            <li onClick={() => this.props.onDelete(item.key)} className="list-group-item" key={item.key}>{item.text}</li>
        )
        return(
            <div className="container my-2">
                <div className="row">
                    <div className="col-12">
                        <ul className="list-group">
                            {ListItems}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}