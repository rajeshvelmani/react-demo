import React, { memo } from "react"

/*export default class TodoList extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = { items: props.items }
    }

    render() {
        console.log(this.props);

        console.log(this.state.items);
        return (
            <div>
                {this.props.items.map((item) => <p key={item.id}>{item.text}</p>)}
            </div>
        );
    }
}*/

function TodoList(props) {
    console.log("TodoList loading");
    return (
        <div>
            {props.items.map((item) => <p key={item.id}>{item.text}</p>)}
        </div>
    );

}

export default memo(TodoList);
