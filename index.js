

marked.setOptions({
    breaks: true,
    "linksInNewTab" : true
})

const renderer = new marked.Renderer();
function App() {

    const [text, setText] = React.useState(placeholder);
    return( 
    <div className="text-center px-4">
        <h1 className="p-4">My Markdown Previewer
          
        </h1>
        <textarea 
            name="text" 
            id="text" 
            rows="10"
            cols="100"
            value={text}
            onChange={(e)=>setText(e.target.value)}
            >
        </textarea>
    <h3 className="mt-3">Output</h3>
    <Preview markdown={text} />
    </div>

    )
}

function Preview({markdown}){
    return (
        <div dangerouslySetInnerHTML={{
            __html: marked(markdown, { renderer: renderer}),
        }}
        id="preview"
        >
            
        </div>
    )
}


const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://gidonleh.github.io), and
> Block Quotes!

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. Do whatever you feel like!


## if your name is Chenky, you should go to LinkedIn RIGHT NOW and press "like" and comment on every [post](https://www.linkedin.com/in/gadileh/) of Gadi's`;


ReactDOM.render(<App />, document.getElementById("root"));