import { FaChalkboardTeacher } from "react-icons/fa";
import ServiceCard from "../components/ServiceCard";
import { RiComputerLine } from "react-icons/ri";
import { MdOutlineMouse } from "react-icons/md";
import { BsDatabase } from "react-icons/bs";
import { IoMdCloud } from "react-icons/io";
import { ImMobile2 } from "react-icons/im";

const services = [
    {
        logo: <ImMobile2 className="text-8xl text-white font-bold"/>,
        name: "Desarrollo de aplicaciones moviles",
        info: [
            {
                title: "algo"
            },
                        {
                title: "algo"
            },
                        {
                title: "algo"
            }
        ]
    },
    {
        logo: <RiComputerLine className="text-8xl text-white"/>,
        name: "Desarrollo y diseño web",
        info: [
            {
                title: "algo"
            },
                        {
                title: "algo"
            },
                        {
                title: "algo"
            }
        ]
    },
    {
        logo: <IoMdCloud className="text-8xl text-white font-extrabold"/>,
        name: "Soluciones en la nube",
        info: [
            {
                title: "algo"
            },
                        {
                title: "algo"
            },
                        {
                title: "algo"
            }
        ]
    },
    {
        logo: <MdOutlineMouse className="text-8xl text-white"/>,
        name: "Soporte y mantenimiento",
        info: [
            {
                title: "algo"
            },
                        {
                title: "algo"
            },
                        {
                title: "algo"
            }
        ]
    },
    {
        logo: <FaChalkboardTeacher className="text-8xl text-white"/>,
        name: "Consultoria digital y asesoria",
        info: [
            {
                title: "algo"
            },
                        {
                title: "algo"
            },
                        {
                title: "algo"
            }
        ]
    },
    {
        logo: <BsDatabase className="text-8xl text-white font-bold"/>,
        name: "Implementación de BD",
        info: [
            {
                title: "algo"
            },
                        {
                title: "algo"
            },
                        {
                title: "algo"
            }
        ]
    },
]

const Services = () => {

    return (
        <>
            <div className="my-12 grid place-items-center">
                <h2 className="text-4xl text-[#026874] font-bold mb-12">Servicios</h2>
                <div className="grid lg:grid-cols-3 place-items-center lg:gap-8">
                    {services.map((service) => (
                        <ServiceCard service={service}/>
                    ))}
                </div>
            </div>  
        </>
    )
}

export default Services;