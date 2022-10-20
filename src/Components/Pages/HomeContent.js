// import axios from 'axios'
import React, { Component } from 'react'
export default class Content extends Component {

    state = {
        items: [],
        currentPage: ''
    }
    componentDidMount() {
        this.getBlogs()
    }
    getBlogs = () => {
        fetch('http://localhost:8080/api/v1/all-blogs')
            .then(res => res.json())
            .then(data => {
                this.setState({ items: data.results })
            })
    }

    render() {

        return (
            <div className="w-100 justify-between blogContent container mx-auto">
                <div className='md:columns-3 sm:columns-1 mt-10'>
                    {

                        this.state.items.map(item => (
                            <div className='h-[200px] blogItem mb-5 p-5' key={item.id}>
                                <strong className='text-white'>{item.Title}</strong>
                                <p className="text-white">{item.Text}</p>
                                <a href={item.Link} className="text-white underline cursor-pointer">Devamını Oku</a>
                            </div>
                        ))

                    }
                </div>


            </div>
        )
    }
}
