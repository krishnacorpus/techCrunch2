import React, { Component } from 'react';
import classes from './App.module.css';
import axios from 'axios';
// import Dropdown from './components/Dropdown/Dropdown';

import App2 from './components/App2/App2';
import SearchBox from './components/SearchBox';


let trim = false;
let Types=[];
let show=true;

let toggleSort =false;
class App extends Component {

  state ={
    nameList :[],
    custom_data:[],
    trimmed_data:[],
    // filtered_data:[]
  }

  componentDidMount(){
    console.log("[App] compDid Mount");
    axios.get(' https://develop.techcrunch.com/wp-json/tc/v1/investors-data/all ')
    .then( res =>{
      const names=[]
      let data=res.data.investors;
      let custom_data=[];
      for(var i = 0; i <res.data.investors.length; i++){
      let present = false;
      let p= {name:res.data.investors[i].meta.firstName};
      names.forEach(value=>{
        if(p['name'] === value['name']){
          present=true;
        }
      })
      if(present ==false){
        names.push(p)
      }
        let x={
          id:data[i].id,
          roundTypes:data[i].meta.roundTypes,
          firstName:data[i].meta.firstName,
          lastName:data[i].meta.lastName,
          firmName:data[i].meta.firmName,
        }
        custom_data.push(x)
      }
      this.setState({custom_data:custom_data});
      this.setState({nameList:names});
    })
  }

  // shouldComponentUpdate(p,s){
  //   if(toggleSort){

  //   }
  // }

hasSubArray(master, sub) {

  // for (let i in sub){
  //   if (master.includes(i)){
  //     console.log(master.includes(i))
  //   }else{
  //     return false
  //   }
  // }
  // return true
  return sub.every((i => v => i = master.indexOf(v, i) + 1)(0));
}

// for dropdown
  filterListHandler =(target, values) => {
    
      Types=values.value;
      // console.log(Types);
    };

//for sort
    sortData=()=>{

      console.log("[]Sort Data");
      console.log(toggleSort);
      
      let data=[];
      if (trim){
        data=[...this.state.trimmed_data];
      }else{
        data=[...this.state.custom_data];
      }
      if (toggleSort){
          
        console.log("[]Sort  reverse");
        let y = [...data].reverse();
        this.setState({ trimmed_data: y });
      }else{
        const obj = data.sort((a, b) => {
          return a.lastName.localeCompare(b.lastName);
        });
        trim=true;
        toggleSort=true;
        // console.log(toggleSort);
        this.setState({ trimmed_data: obj });
      }
    }

    // for Filter button
    filterListHandler2 =() =>{
      let data=[];
      if (trim){

         data=[...this.state.trimmed_data];
      }else{
         data=[...this.state.custom_data];

      }
      let myfilter=[];
      for (var i = 0; i < data.length; i++){
      let check =this.hasSubArray(data[i].roundTypes,Types)
        if(check){
          myfilter.push(data[i])
        }
        
        // if (myfilter.length ==0){
        //   let x={
        //     firstName:"No Data Found",
        //   }
        //   myfilter.push(x)
        // }
      console.log("show",show,"from filter but");
      // console.log("trim",trim,"from filter but");
        trim=true;
        this.setState({trimmed_data:myfilter});
        }
    }
  
    // for searchbar
  fetchListHandler =(name)=>{
    // Types=[];
    toggleSort=false;
    if(name === ''){
      trim=false
      // return
      this.renderListHandler();
    }else{
      trim = true;
    }
      let data=[...this.state.custom_data];
      let trimmed_data=[]
      for (var i = 0; i <data.length; i++){
            if(data[i].firstName === name){
              let x={
                id:data[i].id,
                roundTypes:data[i].roundTypes,
                firstName:data[i].firstName,
                lastName:data[i].lastName,
                firmName:data[i].firmName,
              }
              trimmed_data.push(x)
            }
          }
      this.setState({trimmed_data:trimmed_data});
  }

  renderListHandler(){

   
    console.log('renderList[][][]');
    let checkList=[]
    if (trim){
      checkList=this.state.trimmed_data;
    }else{
      checkList=this.state.custom_data;
    }
    if (checkList.length){
      show=true;
      return(
        <div>
        {checkList.map(item =>{
              return(
                <div
                key={item.id}
                className={classes.item}>
                  <h1>{item.firstName}-<span>{item.lastName}</span></h1>
                  <span>
                    {item.roundTypes.map(i =>{
                      return (<h2 key={i} style={{display:'inline'}}>{i} |</h2>)
                    })}
                  </span>
                  <p>{item.id}</p>
              </div>
              )
            })}
    </div>  
      )
    }
    else{
      show=false;
      return(<h2>No Data</h2>)
    }
  }

  render(){
    const sortnote = toggleSort ?(<h2>Note: Sorted based on Last-Name</h2>):null;
    // show = this.state.trimmed_data.length >0
    return (
      <div className={classes.App}>
        <h1>Tech CruncH</h1>
        <SearchBox 
        selectedName ={this.fetchListHandler} 
        names={this.state.nameList}
        />
        <span>
        <App2 
        show={show} 
        dropdownOnChange={this.filterListHandler}
        filterListHandler2={this.filterListHandler2}
        />
        </span>
        <button onClick={this.sortData} className={classes.sort}>Sort</button>
        {sortnote}
        
        {this.renderListHandler()}
      </div>
    );
  }
}

export default App;
