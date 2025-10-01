interface SelectedService {
    data: object[];      // es dependiendo lo que sea, por ahora no se entonces por eso es any[] si fueran string seria string[]
    isVisible: boolean;
    onClose: () => void;
}

const ServiceModal = ({ data, isVisible, onClose }: SelectedService) => {
    if (!isVisible) return null;
    console.log(data)

    return (
        <div className="fixed inset-0 bg-[#002D40]/50 flex justify-center items-center z-50 transition-all p-4 duration-300">
            <button
                className="absolute font-bold text-4xl top-2 right-4 text-white hover:cursor-pointer"
                onClick={onClose}
            >
                &times;
            </button>
            <div className="bg-white rounded-2xl grid place-items-center lg:w-[730px] md:w-[650px] w-[410px] h-[640px] relative">
                <p>ola</p>
            </div>
        </div>
    );
};

export default ServiceModal;