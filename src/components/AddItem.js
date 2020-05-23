import React from 'react';
import NewItem from './NewItem';

export default class AddItem extends React.Component{
    constructor(props){
        super(props);

        this.input = React.createRef();
        this.handleClick = this.handleClick.bind(this);
        this.deleteItem = this.deleteItem.bind(this);

        //Storing the values in the array
        this.state = {
            list : []
        }
    }

    handleClick = (event) => {
        let val = this.input.current.value;
        
        if(val === ""){
            alert("Please enter the text first");
            event.preventDefault();
            return;
        }
        
        const newItem = {
            text : val,
            key : new Date()
        }

        var newList = this.state.list;
        newList.unshift(newItem);

        this.setState((prevState) => {
            return { 
              list: newList
            };
        });

        this.input.current.value = '';
        event.preventDefault();
    }

    deleteItem(key){
        var filteredItems = this.state.list.filter((val) => {
            return val.key!==key;
        })

        this.setState({
            list : filteredItems
        });
    }

    render(){
        return(
            <>
            <div className="container">
                <div className="row mx-1">
                    <label htmlFor="addTask">Add task</label>
                </div>
                <div className="row">
                    <div className="col-12 col-md-8 mx-1">
                        <input type="text" className="form-control" id="addTask" placeholder="Enter your task to be done" ref={this.input} />
                    </div>

                    <div className="col-12 col-md-3">
                        <button className="btn btn-primary" onClick={this.handleClick}>Add Task</button>
                    </div>
                </div>
            </div>

            <div className="container">
                <NewItem items={this.state.list} onDelete={this.deleteItem}/>
            </div>
            </>
        );
    }
}