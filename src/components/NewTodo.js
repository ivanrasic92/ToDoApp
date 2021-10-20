import React from "react";

class NewTodo extends React.Component{

    state = {
        msg:"",
        done : false
    }

    setNewMsg = (e) => {
        this.setState({msg : e.target.value})

    }

    addTodo = () => {
        this.props.addIntoTodo(this.state)
        this.setState({msg : ""})
    }

    render(){
        return(
            <div className="container">
                <div className="row m-5">
                    <div className="col-8 offset-2">
                        <div className="input-group">
                            <input onChange={this.setNewMsg} type="text" value={this.state.msg} placeholder="msg" className="form-control" />
                        </div>
                        <div className="input-group-append">
                            <button onClick={this.addTodo} className="btn btn-primary">Add</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewTodo;