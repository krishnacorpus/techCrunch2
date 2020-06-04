
import React,{Component} from 'react';
import styles from './SearchBox.module.css';
class SearchBox extends Component{

    constructor(props){
        super(props)
        this.state = {
            suggestions: [],
            text: '',
            refere: ''
        }
    }

    onTextChange = (e) => {
        const value = e.target.value;
        const names= this.props.names.map(item =>{
            return item['name']
        })

        let suggestions = [];
        if(value.length > 0){
            const regex = new RegExp(`^${value}`, 'i');
            suggestions = names.sort().filter(v => regex.test(v))
        }

        this.setState(() => ({
            suggestions,
            text: value
        }))
    }


    selectedText(value) {
        console.log("input box searched[][]");
        this.setState(() => ({
            text: value,
            refere:value,
            suggestions: [],
        }))

        this.props.selectedName(value);
    }

    renderSuggestions = () => {
        let { suggestions } = this.state;
        if(suggestions.length === 0){
            // console.log("Null Sugg");
            return null;
        }
    
        return (
            <ul >

                {
                    suggestions.map((item, index) => (<li key={index} onClick={() => this.selectedText(item)}>{item}</li>))
                }   
                
            </ul>)
                
    }
    
    render() {
        const { text ,refere} = this.state;
        const r1= (refere)?(<h1>List is rendered for <span className ={styles.primary}>{refere}</span></h1>):null

        return(

            <div className={styles.box}>

                <div className={styles.container}>
                    <div className ={styles.query}>
                        <input id="query" type="text" onChange={this.onTextChange} value={text}/>
                        <h2>
                            {this.renderSuggestions()}
                        </h2>
                    </div>
                        <button
                        onClick={() =>this.selectedText(text)}
                        >Search</button>
                </div>
                   
                   {r1}
            </div>
        );
    }
}

export default SearchBox;
