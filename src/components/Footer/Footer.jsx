import React from 'react'
import s from './Footer.module.css'
import instagram from './media/instagram.png'
import whatsapp from './media/whatsapp.png'

export default function Footer() {
    return (
        <section className='wrapper'>
            <h2>Contact</h2>
            <div className={s.contact_container}>
                <div>
                    <p>Phone</p>
                    <h3 className={s.text_info}>+49 999 999 99 99</h3>
                </div>
                <div>
                    <p>Socials</p>
                    <p className={s.icons}>
                        <a href="https://www.instagram.com/startainstitute/"><img src={instagram} alt='instagram_icon' /></a>
                        <a href="https://whatsapp.com/"><img src={whatsapp} alt='whatsapp_icon' /></a>
                    </p>

                </div>
                <div>
                    <p>Adress</p>
                    <h3 className={s.text_info}>Linkstraße 2, 8 OG, 10 785, Berlin, Deutschland</h3>
                </div>
                <div>
                    <p>Working Hours</p>
                    <h3 className={s.text_info}>24 hours a day</h3>
                </div>
            </div>
            <div className={s.map}>
                <iframe 
                // width="1360" 
                height="350" 
                frameBorder="0" 
                scrolling="no" 
                marginHeight="0" 
                marginWidth="0" 
                src="https://maps.google.com/maps?width=1440&amp;height=350&amp;hl=en&amp;q=Linkstra%C3%9Fe%202,%208%20OG,%2010%E2%80%AF785,%20Berlin,%20Deutschland+(Telran)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                    <a href="https://www.maps.ie/population/">Find Population on Map</a>
                </iframe>
            </div>
        </section>
    )
}

