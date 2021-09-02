class Quote extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            content:"content",
            author:"author"
        }
        this.fetchQuote = this.fetchQuote.bind();
    }
    componentDidMount(){
        //make fetch request
        let request = fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            this.setState(data)
        })
    }
    fetchQuote = () => {
        let request = fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            // console.log(data)
            this.setState(data)
        })
    }

    render(){
        return(
            <>
                <Text content={this.state.content} author={this.state.author}/>
                <button id="new-quote" className="button" onClick={this.fetchQuote}>New Quote</button>
                <TwitterButton content={this.state.content} author={this.state.author}/>
            </>
        )
    }
}

const Text = (props) =>{
    // the text of the quote
    return(
        <div id="text">
            <p>{props.content}</p>
            <span id="author">{"- " + props.author}</span>
        </div>
    )
}

const TwitterButton = (props) => {
    const createURL = () =>{
        let text = `${props.content} - ${props.author}`
        return (
            `https://twitter.com/intent/tweet?text=${text}&hashtags=quotes`
        )
    }
    return (
        <a href={`${createURL()}`} id="tweet-quote" className="button" title="Tweet this quote!" target="_blank">Tweet Quote</a>
    )
}

ReactDOM.render(<Quote/>, document.querySelector("#quote-box"))