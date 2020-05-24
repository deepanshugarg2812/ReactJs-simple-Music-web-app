import React from 'react';
import Navbar from './Navbar';

class UserComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            songObj : null,
            inputState : ''
        }

        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
        fetch('http://localhost:8000/songs').then((result) => result.json()).then((response) => this.setState({songObj : response}))

    }

    handleChange = (event) => {
        this.setState({
            inputState : event.target.value
        })
        this.renderSong();
    }

    renderSong = () => {
        let val = this.state.songObj;
        if(val===null){
            return <div></div>
        }
        
        var songsArr = []
        for(let song in val.songs){
            if(this.state.inputState==null || val.songs[song].name.includes(this.state.inputState)){
            songsArr.push(
                <div key={val.songs[song].name} className="container my-5 p-3" style={{border:'1px solid',borderRadius:4,backgroundColor:'lightgray'}}>
                    <div className="row m-1 p-1">
                            <div className="col-6 col-md-4">
                                <h4>{val.songs[song].name}</h4>
                            </div>
                            <audio controls className="col-6 col-md-7 offset-md-1">
                                <source src={val.songs[song].url} type="audio/mpeg"/>
                            </audio>
                    </div>
                </div>
            )}
        }

        return <div>{songsArr}</div>
    }

    render(){
        return(
            <>
            <Navbar />

            {/* Create a search bar */}
            <div className="container my-4">
                <div className="row">
                    <div className="col-12">
                        <input type="text" className="col-lg-12 form-control" style={{height : '70px' , fontSize:'20px'}} placeholder="Enter the song name" value={this.state.inputState} onChange={this.handleChange}/>
                    </div>
                </div>
            </div>

            {/* Component items */}
            {this.renderSong()}
            </>
        );
    }
}

export default UserComponent;