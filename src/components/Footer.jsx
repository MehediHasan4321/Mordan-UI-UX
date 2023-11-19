import styles from "../style";
import { logo } from '../assets'
import { footerLinks,socialMedia } from '../constants'



const Footer = () => {
    return (
        <footer className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
            <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
                <div className="flex-1 flex flex-col justify-start mr-10">
                    <img src={logo} alt="logo" className="w-[266px] h-[72px] object-contain" />
                    <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>A new way to make payments easy, reliable and secure.</p>
                </div>
                <div className="flex-[1.5] w-full  flex flex-row justify-between flex-wrap md:mt-0 mt-10">
                    {
                        footerLinks.map(footerLink => <div key={footerLink.title} className="flex flex-col ss:my-4 min-w-[150px]">
                            <h4 className="text-[18px] leading-[27px] font-poppins font-medium text-white mb-5">{footerLink.title}</h4>
                            <ul className="flex flex-col gap-2">
                                {
                                    footerLink.links.map(link => <li key={link.link} className="font-poppins text-dimWhite font-normal text-[16px] leading-[24px] hover:text-secondary cursor-pointer">{link.name}</li>)
                                }
                            </ul>
                        </div>)
                    }
                </div>
            </div>
            <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-[#3f3e45]">
                <p className="text-[18px] leading-[27px] font-poppins font-normal text-white mb-5">2023 HooBank. All Rights Reserved.</p>
                <div className='flex flex-row md:mt-0 mt-6'>
                    {
                        socialMedia.map(item=><div key={item.id} className="flex  justify-between items-center w-full px-4">
                            <img src={item.icon} alt="icon" className="cursor-pointer"/>
                        </div>)
                    }
                </div>
            </div>
        </footer>
    );
};

export default Footer;