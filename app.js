const heading = React.createElement("h1", {}, "Hello from react");

const root = ReactDOM.createRoot(document.getElementById("root"));


const container=React.createElement("div",{id:"parent"},[
    React.createElement("div",{id:"child"},
        React.createElement("h1",{},"Iam a heading tag")
    ),
    React.createElement("div",{id:"child2"},
        React.createElement("h1",{},"Iam a Another heading tag")
    )
    ]
)
console.log(container)

root.render(container);

