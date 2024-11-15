// eslint-disable-next-line no-unused-vars
import React from 'react'
import Banner from '../../assets/website/footer-pattern.jpg'
import imgShopsy from '../../assets/logo.png'
import { FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from 'react-icons/fa'


const imgBanner ={
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
}
const FooterLinks = [
    {
        id:1,
      title: "Home",
      link: "/#",
    },
    {
        id:2,
      title: "About",
      link: "/#about",
    },
    {
        id:3,
      title: "Contact",
      link: "/#contact",
    },
    {
        id:4,
      title: "Blog",
      link: "/#blog",
    },
  ];
const Footer = () => {
  return (
    <div style={imgBanner} className='text-white'>
        <div className='container grid md:grid-cols-3 pb-44 pt-5'>
            <div className='py-8 px-4'>
                <div className='flex items-center gap-4 pb-4 '>
                    <img src={imgShopsy} className='w-14' alt="imgShopsy" />
                    <h2 className='font-bold text-3xl'>Shopsy</h2>
                </div>
                <div>
                    <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum in beatae ea recusandae blanditiis veritatis.</p>
                </div>
            </div>
            <div className='grid md:grid-cols-4 col-span-2 py-8 px-4 '>

                <div className='flex  justify-center items-start'>
                    <ul className='flex flex-col  gap-4'>
                        <li className='font-bold text-xl'>Important Links</li>
                        {
                            FooterLinks.map((data)=>(
                                <li key={data.id} >
                                    <a href={data.link}className='hover:text-primary hover:translate-x-1 duration-300'> {data.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className='flex  justify-center items-start'>
                    <ul className='flex flex-col gap-4'>
                        <li className='font-bold text-xl '>Links</li>
                        {
                            FooterLinks.map((data)=>(
                                <li key={data.id} >
                                    <a href={data.link}className='cursor hover:text-primary hover:translate-x-1 duration-300'> {data.title} </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                
                <div className='col-span-2 flex  justify-center items-start'>
                    <div >
                    <div className='flex gap-3 text-3xl'>
                        <FaFacebook/>
                        <FaInstagram/>
                        <FaLinkedin/>
                    </div>
                    <div className='flex items-center gap-2 pt-8 text-lg'>
                        <FaLocationArrow/>
                        <span>Egypt,Cairo</span>
                    </div>
                    <div className='flex items-center gap-2 pt-4 text-lg'>
                        <FaMobileAlt/>
                        <span>+201002265274</span>
                    </div>
                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
