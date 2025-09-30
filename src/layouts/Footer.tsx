import { FaFacebookSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareInstagram, FaLocationDot } from "react-icons/fa6";
import { MdOutlineMail } from "react-icons/md";

const Footer = () => {
    return (
        <>
            <div className="w-full grid grid-cols-1 lg:grid-cols-[40%_30%_30%] p-24 gap-12 bg-[#0F1824] mt-20 text-white">
                <div className="w-full space-y-4">
                    <img src="../assets/logo_nobg.png" alt="logo_footer" className="w-[120px] scale-130" />
                    <p className="text-justify">Alguna frase con la que nos identifiquemos o alguna descripcion muy corta sobre lo que somos, quienes somos y todo ese rollo. Alguna frase con la que nos identifiquemos o alguna descripcion muy corta sobre lo que somos, quienes somos y todo ese rollo.</p>
                    <div className="flex gap-2">
                        <FaFacebookSquare className="text-2xl hover:text-white/80 transition-all duration-300 cursor-pointer" />
                        <FaSquareInstagram className="text-2xl hover:text-white/80 transition-all duration-300 cursor-pointer" />
                        <FaLinkedin className="text-2xl hover:text-white/80 transition-all duration-300 cursor-pointer" />
                    </div>
                    <p className="font-semibold">@2025 Xyntra. Todos los derechos reservados.</p>
                </div>
                <div className="w-full space-y-6">
                    <h2 className="font-bold">Navega por la pagina</h2>
                    <ul className="space-y-4">
                        <li className="hover:text-white/70 cursor-pointer transition-all duration-300"><a href="">Inicio</a></li>
                        <li className="hover:text-white/70 cursor-pointer transition-all duration-300"><a href="">Sobre nosotros</a></li>
                        <li className="hover:text-white/70 cursor-pointer transition-all duration-300"><a href="">Servicios</a></li>
                        <li className="hover:text-white/70 cursor-pointer transition-all duration-300"><a href="">Proyectos</a></li>
                        <li className="hover:text-white/70 cursor-pointer transition-all duration-300"><a href="">Referencias</a></li>
                        <li className="hover:text-white/70 cursor-pointer transition-all duration-300"><a href="">Contacto</a></li>
                    </ul>
                </div>
                <div className="w-full space-y-6">
                    <h2 className="font-bold">Contacto</h2>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-2">
                            <FaLocationDot className="text-xl" />
                            <a href="">
                                <p className="hover:text-white/70 cursor-pointer transition-all duration-300">Aguascalientes, Ags.</p>
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <FaWhatsapp className="text-xl" />
                            <a href="">
                                <p className="hover:text-white/70 cursor-pointer transition-all duration-300">+52 449-454-45-54</p>
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <MdOutlineMail className="text-xl" />
                            <a href="">
                                <p className="hover:text-white/70 cursor-pointer transition-all duration-300">devxyntra@gmail.com</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Footer;