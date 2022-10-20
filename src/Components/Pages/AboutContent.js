import React, { Component } from 'react'

export default class AboutContent extends Component {
    callPhone = (phone)=>{
        window.open("tel:"+phone);
    }
    sendMail = (mail)=>{
        window.open("mailto:"+mail);
    }
    render() {
        return (
            <div className='container mx-auto'>

                <div className="w-full mt-10">
                    <h1 className='text-4xl font-bold'>{this.props.info.nameSurname}</h1>
                    <p className='text-xl mt-5 antialiased text-justify'>{this.props.info.aboutText}</p>
                    <span className='mt-10 block'>Detaylı Bilgi İçin : <strong className='cursor-pointer' onClick={()=>this.sendMail(this.props.info.mailAddress)}>{this.props.info.mailAddress}</strong> veya <strong className='cursor-pointer' onClick={()=>this.callPhone(this.props.info.phoneNumber)}>{this.props.info.phoneNumber}</strong></span>
                </div>

            </div>
        )
    }
}
