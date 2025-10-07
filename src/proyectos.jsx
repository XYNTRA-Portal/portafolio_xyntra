import { useRef } from "react";

const projects = [
  { id: 1, title: "InnovaBank", description: "Descripción 1", image: "https://images.unsplash.com/photo-1607082349566-187342175e2e?auto=format&fit=crop&w=800&q=80", link: "#" },
  { id: 2, title: "SafeGirl", description: "Descripción 2", image: "https://images.unsplash.com/photo-1607082349566-187342175e2e?auto=format&fit=crop&w=800&q=80", link: "#" },
  { id: 3, title: "RePlay", description: "Descripción 3", image: "https://images.unsplash.com/photo-1607082349566-187342175e2e?auto=format&fit=crop&w=800&q=80", link: "#" },
  { id: 4, title: "Proyecto 4", description: "Descripción 4", image: "https://images.unsplash.com/photo-1607082349566-187342175e2e?auto=format&fit=crop&w=800&q=80", link: "#" },
  { id: 5, title: "Proyecto 5", description: "Descripción 5", image: "https://images.unsplash.com/photo-1607082349566-187342175e2e?auto=format&fit=crop&w=800&q=80", link: "#" },
  { id: 6, title: "Proyecto 6", description: "Descripción 6", image: "https://images.unsplash.com/photo-1607082349566-187342175e2e?auto=format&fit=crop&w=800&q=80", link: "#" },
];

export default function Proyectos() {
  const carouselRef = useRef(null);

  const scroll = (direction) => {
    if (carouselRef.current) {
      const cardWidth = carouselRef.current.firstChild.offsetWidth + 16; // 16 = margen
      carouselRef.current.scrollBy({ left: direction === "left" ? -cardWidth : cardWidth, behavior: "smooth" });
    }
  };

  return (
    <section className="py-16 bg-[#f2f8f9]">
      <div className="text-center mb-12 px-6">
        <h2 className="text-3xl font-bold text-[#002D40]">Proyectos</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mt-2">
          Una descripcion maravillosa sobre lo que somos a que nos dedicamos y todo ese tipo de cosas, ahora como todavia no lo copio.
        </p>
      </div>

      <div className="relative">
        {/* Botones */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#002D40] text-white p-2 rounded-full shadow-lg z-10 hover:bg-[#128081] transition"
        >
          &#8592;
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#002D40] text-white p-2 rounded-full shadow-lg z-10 hover:bg-[#128081] transition"
        >
          &#8594;
        </button>

        {/* Carrusel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory scrollbar-hide px-6"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex-shrink-0 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] snap-center relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer mx-3"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-5">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-200 text-sm mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#002D40] text-white px-4 py-2 rounded-xl text-sm hover:bg-[#128081] transition"
                >
                  Ver más
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
