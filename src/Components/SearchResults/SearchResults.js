import React, {Component} from 'react'
import axios from 'axios'

export default class SearchResults extends Component{
    constructor(){
        super()

        this.state = {
            products: []
        }
    }

    componentDidMount = () => {
        //axios request to get all products and store them on state
        
        axios.get("/api/products")
        .then(res => {
            console.log(res.data)
            this.setState({
                products: res.data
            })
        })
        .catch(err => console.log(err))
    }

    componentDidUpdate = (prevProps) => {
        
        if(prevProps !== this.props){
            if(this.props.urlInput === ''){
            axios.get("/api/products")
        .then(res => {
            console.log(res.data)
            this.setState({
                products: res.data
            })
        })
        .catch(err => console.log(err))} else{
            this.setState({
                products: this.state.products.filter((e,i) => {
                    // return e.url === this.props.urlInput
                    return e.url.includes(this.props.urlInput)
            })

            })
        }
            
            console.log(this.state.products)
        }
    }


    render(){

        return(
            <>
                {this.state.products.map((e,i) => {
                    return(
                        <div className="search-result" style={{backgroundImage: `url(${e.img_url})`}}></div>
                    )
                })}
            </>
        )
    }
}
