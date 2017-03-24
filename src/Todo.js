/**
 * Created by agam on 23/3/17.
 */
import React, {Component} from 'react';
import Head from './Head'
import Display from './Display'
import Form from './Form'
import arr from './User'


class Todo extends Component {

    constructor(props) {
        super(props);

        var index = arr.findIndex(user => user.name === this.props.name)


        this.state = {
            list: arr[index].todolist || [],
            showw: false,
            userinfo: {}
        };
        this.getdata = this.getdata.bind(this);
        this.stchange = this.stchange.bind(this);
        this.trash = this.trash.bind(this);

        this.showform = this.showform.bind(this);

    }

    getdata(task, date) {

        let {list} = this.state;
        let obj = {
            task: task,
            date: date,
            status: 'pending',
        };
        list.push(obj);
        this.setState({list});
        this.setState({showw: false})

    }


    stchange(i) {
        let temp = this.state.list;
        let l = Object.assign([], temp, {[i]: (Object.assign({}, temp[i], {status: "done"}))});
        this.setState({list: l})
    }

    trash(i) {
        let {list} = this.state;
        list.splice(i, 1);
        this.setState({list})
    }

    /*editt(i,item) {
     var temp=this.state.list;
     let obj={
     task:"agahh",
     date:"5/10/2012",
     status:'pending'
     };
     var ll=(Object.assign([],temp,{[i]: obj}));
     this.setState({
     showw:true,
     list:ll,

     });

     /!*let a = prompt("enter task again");
     var temp=this.state.list;
     let l = Object.assign([], temp, {[i]: (Object.assign({}, temp[i], {task: a}))})
     this.setState({list: l})*!/

     }
     */
    showform() {
        this.setState({
            showw: true
        })
    }


    render() {
        return (
            <div>
                <h1 className="welcome"><b> Welcome {this.props.name}</b></h1>
                <Head showform={this.showform}/>

                {
                    this.state.showw ?
                        <Form getdata={this.getdata}/> : <span/>
                }

                <Display
                    list={this.state.list}
                    userinfo={this.state.userinfo}
                    stchange={this.stchange}
                    trash={this.trash}
                />
            </div>
        );
    }

}

export default Todo;
