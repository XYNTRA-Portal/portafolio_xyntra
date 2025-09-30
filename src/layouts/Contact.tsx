import { FaChevronCircleRight, FaFacebookSquare, FaWhatsapp, FaLinkedin } from "react-icons/fa";
import { FaSquareInstagram, FaLocationDot } from "react-icons/fa6";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { MdOutlineMail } from "react-icons/md";

const Contact = () => {
    return (
        <>
            <div className="w-[80%] grid grid-cols-1 lg:grid-cols-[44%_56%] my-12">
                <div className="px-3">
                    <h2 className="text-4xl text-[#026874] font-bold flex items-center space-x-4"><p>Contactanos</p><BiSolidMessageRoundedDots /></h2>
                    <p className="my-6 w-[90%] text-justify text-lg">Alguna frase generica que genere confianza para que nos manden un correo desde el formulario o nos marquen y decir que nos visiten en redes sociales.</p>
                    <ul className="list-none text-lg">
                        <li className="flex place-items-center gap-2 my-3"><FaChevronCircleRight className="text-[#026874]" /> Atencion personalizada</li>
                        <li className="flex place-items-center gap-2 my-3"><FaChevronCircleRight className="text-[#026874]" /> Atencion inmediata</li>
                        <li className="flex place-items-center gap-2 my-3"><FaChevronCircleRight className="text-[#026874]" /> Consultoria</li>
                    </ul>
                    <div className=" flex gap-3 my-8">
                        <FaFacebookSquare className="text-5xl text-[#026874] hover:text-[#026874]/70 cursor-pointer transition-all duration-300" />
                        <FaSquareInstagram className="text-5xl text-[#026874] hover:text-[#026874]/70 cursor-pointer transition-all duration-300" />
                        <FaLinkedin className="text-5xl text-[#026874] hover:text-[#026874]/70 cursor-pointer transition-all duration-300" />
                    </div>
                </div>
                <div>
                    <div className="bg-white w-[100%%] lg:h-[410px] rounded-3xl shadow-lg p-12">
                        <form action="https://formsubmit.co/devxyntra@gmail.com" method="POST">
                            <div className="lg:flex gap-2 justify-center items-center lg:space-x-4">
                                <input type="text" name="name" id="name" placeholder="Nombre" className="lg:w-[245px] h-[50px] w-full bg-gray-200 rounded-2xl placeholder-gray-500 px-3 my-4" />
                                <input type="email" name="email_address" id="email_address" placeholder="Email" className="lg:w-[245px] h-[50px] w-full bg-gray-200 rounded-2xl placeholder-gray-500 px-3 my-4" />
                            </div>
                            <textarea name="message" id="message" placeholder="Asunto" className="w-[100%] h-[120px] bg-gray-200 my-6 rounded-2xl placeholder-gray-500 px-3 py-4 resize-none"></textarea>
                            <div className="w-full flex place-items-center justify-center">
                                <button type="submit" className="w-[180px] h-[40px] bg-[#026874] rounded-2xl text-white font-semibold hover:bg-[#0097B2] cursor-pointer transition-all duration-300">Enviar</button>
                            </div>
                            <input type="hidden" name="_captcha" value="false"></input>
                        </form>
                    </div>
                </div>
            </div>
            <div className="w-[82%] grid lg:grid-cols-3 place-items-center mb-12">
                <a href="mailto:tucorreo@gmail.com?subject=Consulta%20de%20servicios&body=Hola,%20quiero%20más%20información.%20[Edita tu propio mensaje]" className="hover:bg-[#0097B2] hover:scale-101 transition-all duration-400 cursor-pointer lg:w-[310px] w-[70%] h-[170px] bg-[#026874] rounded-2xl flex flex-col justify-center px-10 text-white my-6 mx-2 shadow-lg">
                    <MdOutlineMail className="text-5xl"/>
                    <div className="my-2 pl-1">
                        <h4 className="text-lg font-semibold">Email</h4>
                        <p>devxyntra@gmail.com</p>
                    </div>
                </a>
                <a href="https://wa.me/4495768209" className="hover:bg-[#0097B2] hover:scale-101 transition-all duration-400 cursor-pointer lg:w-[310px] w-[70%] h-[170px] bg-[#026874] rounded-2xl flex flex-col justify-center px-10 text-white my-6 mx-2 shadow-lg">
                    {/* <FaPhoneAlt className="text-3xl"/> */}
                    <FaWhatsapp className="text-4xl"/>
                    <div className="my-2">
                        <h4 className="text-lg font-semibold">Whatsapp</h4>
                        <p>+52 449-454-45-54</p>
                    </div>
                </a>
                <a href="https://share.google/6EOxKfNO1UtCsIkp8" className="hover:bg-[#0097B2] hover:scale-101 transition-all duration-400 cursor-pointer lg:w-[310px] w-[70%] h-[170px] bg-[#026874] rounded-2xl flex flex-col justify-center px-10 text-white my-6 mx-2 shadow-lg">
                    <FaLocationDot className="text-3xl"/>
                    <div className="my-2">
                        <h4 className="text-lg font-semibold">Ubicacion</h4>
                        <p>Aguascalientes, Ags.</p>
                    </div>
                </a>
            </div>
        </>
    )
}

export default Contact;