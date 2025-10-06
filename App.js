// const h1=React.createElement('h1',{id:"header"},"Namaste React");

// import React from "react";

// const root=ReactDOM.createRoot(document.getElementById('root'));

// root.render(h1);
{/* <div>
    <div className="parent1">
        <div className="child1">
            <h1>hello1</h1>
            <h1>hello2</h1>
        </div>
    </div>

    <div className="parent2">
        <div className="child2">
            <h1>hello1</h1>
            <h1>hello2</h1>
        </div>
    </div>
</div> */}

const h1=React.createElement('div',{id:'headparent'},[
    React.createElement('div',{id:'parnt1'},
    React.createElement('div',{id:'child1'},[
        React.createElement('h1',{id:"heading1"},"Hello1"),
        React.createElement('h1',{id:'heading2'},"Hello2")
    ])
),
    React.createElement('div',{id:"parent2"},
        React.createElement('div',{id:'child2'},
           [
             React.createElement('h1',{},'Hello3'),
             React.createElement('h1',{},"hello4")
           ]
        )
    )

])


const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(h1);