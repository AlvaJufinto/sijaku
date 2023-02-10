import { useRouter } from "next/router";
import Image from "next/image";
import { useState, useEffect } from "react";

import GlobalContainer from "@/components/templates/GlobalContainer";
import Text, { TextType } from "@/components/atoms/Text";
import LinkComponent from "@/components/molecules/Link";
import Button from "@/components/molecules/Button";

// import CloseIcon from "@/assets/icon/close-icon.svg"
import sijakuLogo from "@/assets/logo/sijaku-logo.svg"

// const MobileNavbar = ({ setIsShowNav, isShowNav }: any) => {
//     const router = useRouter();

//     const toLink = (link: string) => {
//         setIsShowNav(false);
//         setTimeout(() => {
//             router.push(`/#${link}`)
//         }, 500)
//     }

//     return (
//         <div className={`${isShowNav ? "translate-x-[0vw]" : "translate-x-[100vw] " } transition-all duration-300 top-0 left-0 fixed h-[100vh] w-[100vw] bg-grey p-[20px] z-50`}>
//             <div className="flex flex-col justify-between h-[100%]">
//                 <Image src={CloseIcon} alt="CloseIcon" onClick={() => setIsShowNav(false)} />
//                 <div className="flex flex-col gap-[20px]">
//                     {/* {links.map(link => (
//                         <div key={`${link}-link`} onClick={() => toLink(link)}>
//                             <Text textType={TextType.SubTitle} addClassName="text-black text-right font-regular">{link}</Text>
//                         </div>    
//                     ))}  */}
//                     <div onClick={() => toLink("ContactUs")} className="bg-purple text-white w-[150px] text-center py-[10px] rounded-[6px] self-end	">
//                         <Text textType={TextType.SubTitle}>Contact Us</Text>
//                     </div>
//                 </div>
//                 <Text textType={TextType.SubTitle} addClassName="font-bold">Labra <span className="purple">V.22</span></Text>
//             </div>
//         </div>
//     )
// }

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState<number>(0);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isShowNav, setIsShowNav] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScrollPosition(window.pageYOffset);
        })
    }, []); 

    useEffect(() => {
        if(scrollPosition >= 300) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    }, [scrollPosition]);

    return (
        <>
            {/* <MobileNavbar setIsShowNav={setIsShowNav} isShowNav={isShowNav} /> */}
            <nav className="bg-white flex fixed mt-0 h-[70px] shadow-md transition duration-300 ease-in-out">
                <GlobalContainer addClassName="flex justify-between items-center">
                    <div className="flex items-center gap-[70px]">
                        <div className="flex gap-[15px] items-center select-none">
                            <Image src={sijakuLogo} alt="SIJA.KU Logo" />
                            <Text textType={TextType.Regular} addClassName="text-darkBlue font-extrabold">SIJA.KU</Text>
                        </div>
                        <div className="flex gap-[25px]">
                            <LinkComponent>Home</LinkComponent>
                            <LinkComponent href="">About</LinkComponent>
                            <LinkComponent href="">People</LinkComponent>
                            <LinkComponent href="">Job</LinkComponent>
                        </div>
                    </div>
                    <LinkComponent href="/login"><Button>Login</Button></LinkComponent>
                    {/* {
                        !isShowNav && 
                        <div className="hidden sm:flex flex-col gap-[5px] w-[30px]" onClick={() => setIsShowNav(!isShowNav)}>
                            <div className={`h-[2px] w-[100%] ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
                            <div className={`h-[2px] w-[100%] ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
                            <div className={`h-[2px] w-[100%] ${isScrolled ? 'bg-black' : 'bg-white'}`}></div>
                        </div>
                    } */}
                </GlobalContainer>
            </nav>
        </>
    )
}

export default Navbar;