import React from "react";
import Header from "../common/Header";
import ServiceCard from "../cards/ServiceCard";

function ServiceSection() {
  const serviceData = [
    {
      id: 0,
      iconUrl: "/images/game-development.jpg",
      title: "Game Development",
      description:
        "Questivox labs specializes in creating interactive and immersive games across various platforms, including mobile, console, and PC. We offer a wide range of services, such as game design, coding,  modeling, animation, and sound design.",
    },
    {
      id: 1,
      iconUrl: "/images/App-development.jpg",
      title: "App Development",
      description:
        "Questivox labs specializes in designing and building custom mobile and web applications for businesses and individuals. We offer end-to-end services, including UI/UX design, front-end and back-end development, testing, and app deployment.",
    },
    {
      id: 2,
      iconUrl: "/images/Web-development.jpg",
      title: "Web Development",
      description:
        "Questivox labs specializes in creating and maintaining websites, web applications, and online platforms for businesses and individuals. We offer a range of services, including front-end and back-end development, web design, e-commerce solutions, and content management systems (CMS) integration. ",
    },
  ];
  return (
    <section>
      <Header title="service" subtitle="Our Vison & Our Goal" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-[3.56rem] justify-around mt-8 md:mt-[6.75rem]">
        {serviceData.map((service) => (
          <ServiceCard
            key={service.id}
            title={service.title}
            description={service.description}
            iconUrl={service.iconUrl}
          />
        ))}
      </div>
    </section>
  );
}

export default ServiceSection;
