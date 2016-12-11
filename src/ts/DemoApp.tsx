import * as React from "react";
import * as ReactDOM from "react-dom";
import * as pnp from "sp-pnp-js"; 

export interface AppProps { Message:string  }
export interface AppState { Clicks?:number, WebName?:string }
export class DemoApp extends React.Component<AppProps, AppState> {
    
    constructor()
    {
        super(); // Call parent class constructor (React.Component)
        this.state = { Clicks:0, WebName:"" }; // Init state  
    }

    clickHandler() 
    {        
        this.setState({Clicks: this.state.Clicks + 1}); 
    }

    getWebName()
    {
        var site = pnp.sp.web.select("Title").get().then( (result:any) => { 
            this.setState({WebName:result.Title});            
        });   
    }

    // Render function is called every time props or state is updated. 
    render() {
        return (
            <div>
                <h1>{ this.props.Message }</h1>
                <div><input type="button" onClick={this.clickHandler.bind(this)} value="Click me" /> Clicked: {this.state.Clicks} times.</div>
                <div><input type="button" onClick={this.getWebName.bind(this)} value="Get current web name" /> {this.state.WebName}</div>                
            </div>); 
    }
}


if(document.getElementById("appDiv"))
{
    ReactDOM.render(
        <DemoApp Message="Hello world" />,
        document.getElementById("appDiv")
    );
}