import React, { Component } from 'react'

export default class AboutContent extends Component {
    callPhone = (phone) => {
        window.open("tel:" + phone);
    }
    sendMail = (mail) => {
        window.open("mailto:" + mail);
    }


    render() {
       let information = { nameSurname: 'Emirhan ERTÜRK', phoneNumber: '+90 553 882 6018', mailAddress: 'info@emirhanerturk.com.tr', aboutText: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum" };
        return (
            <div className='container mx-auto'>

                <div className="w-full mt-10">
                    <h1 className='text-4xl font-bold'>{information.nameSurname}</h1>
                    <p className='text-xl mt-5 antialiased text-justify'>{information.aboutText}</p>
                    <span className='mt-10 block'>Detaylı Bilgi İçin : <strong className='cursor-pointer' onClick={() => this.sendMail(information.mailAddress)}>{information.mailAddress}</strong> veya <strong className='cursor-pointer' onClick={() => this.callPhone(information.phoneNumber)}>{information.phoneNumber}</strong></span>
                </div>

            </div>
        )
    }
}
