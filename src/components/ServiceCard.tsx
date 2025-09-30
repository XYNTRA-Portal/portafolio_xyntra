import ServiceModal from "./ServiceModal";
import { useState } from "react";

interface Service {
    logo: React.ReactNode,
    name: string;
    info: object[];
}

interface Props {
    service: Service;
}

const ServiceCard = ({ service }: Props) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleOpenModal = () => {
        setIsModalVisible(true)
    }

    const handleCloseModal = () => {
        setIsModalVisible(false)
    }

    return (
        <>
            <div className="w-[300px] h-[372px] rounded-[24px] bg-[#002D40] col-span-1 grid grid-cols-1 place-items-center my-4 shadow-lg">
                <div className="w-[100%] h-[100%] flex flex-col justify-center place-items-center space-y-4 p-2">
                    <div className="w-[150px] h-[150px] rounded-full bg-[#0097B2] flex place-items-center justify-center">
                        {service.logo}
                    </div>
                    <h3 className="text-2xl text-center text-white font-semibold">{service.name}</h3>
                    <button className="bg-[#026874] w-[170px] h-[40px] rounded-[20px] text-xl text-white font-semibold hover:bg-[#0097B2] cursor-pointer transition-all duration-300"
                        onClick={() => handleOpenModal()}>Ver más</button>
                </div>
            </div>
            {isModalVisible &&(
                <ServiceModal data={service.info} isVisible={isModalVisible} onClose={handleCloseModal}/>
            )}
        </>
    )
}

export default ServiceCard;