import React from "react";
import UserContext from "../utils/UserContext";

//this is equavalent to User.js functional component
class UserClass extends React.Component {
    //class based components contains a render methoid which returns some piece of jsx

    //this is how we get props in class based components
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            count2: 2,
            userInfo: {
                name: "silpa",
                location: "kochi",
                avatar_url: "silpa-avatr",
            },
        };
        // console.log("props in class components is ", props);
        console.log(this.props.name + "constructor");
    }

    // componentDidMount() {
    //     // console.log(this.props.name + "child componentDidMount");

    //     //api call

    // }

    //you can make componentDidMount as async and do api call
    async componentDidMount() {
        console.log(this.props.name + "componentDidMount");

        //api call
        const data = await fetch("https://api.github.com/users/akshaymarch7");
        const json = await data.json();
        //console.log("data is ", json);

        this.setState({
            userInfo: json,
        });

        this.timer = setInterval(() => {
            console.log("print set interval");
        }, 3000);
    }

    //old nomenclature
    // componentDidUpdate(prevProps, prevState) {
    //     if(this.state.count!==prevState.count || this.state.count2!==prevState.count2){
    //         //do something like this
    //     }
    // }

    // componentDidUpdate(prevProps, prevState) {
    //     if (this.state.count !== prevState.count) {
    //         //do something when count changes
    //     }

    //     if (this.state.count !== prevState.count2) {
    //         //do something else when count2 changes
    //     }
    // }

    //the above code is similar to count, count2 of useState
    // useEffect(()=>{

    // },[count, count2])

    componentDidUpdate() {
        console.log(this.props.name + "componentDidUpdate ");
    }

    componentWillUnmount() {
        clearInterval(this.timer);
        console.log(this.props.name + "componentWillUnmount ");
    }
    render() {
        console.log(this.props.name + " render");
        // const { name, location } = this.props;
        // const { count, count2, userInfo } = this.state;

        const { name, location, avatar_url } = this.state.userInfo;
        //debugger;
        return (
            <div className="user-card">
                {/* <h1>Count = {count}</h1>
                <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                            count2: this.state.count2 + 1,
                        });
                    }}
                >
                    Count Increase
                </button> */}

                <h2>Name : {name}</h2>
                <h3>Location: {location}</h3>
                <img src={avatar_url} />

                {/* <h2>Name : {this.props.name}</h2> */}

                <div className="flex">
                    Logged in user name:
                    <UserContext.Consumer>
                        {/* {(data) => console.log("context data in class based component is ", data)} */}

                        {({ loggedInUser }) => (
                            <h1 className="text-xl font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
            </div>
        );
    }
}

export default UserClass;
