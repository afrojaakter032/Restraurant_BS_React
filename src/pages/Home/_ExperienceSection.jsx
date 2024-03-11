import React from 'react';

function ExperienceSection() {
    const sections = [
        {
            id: 'YearsOfExperience',
            title: 'Years Experience',
            description: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.'
        },
        {
            id: 'HoursOfCooking',
            title: 'Hours of Cooking',
            description: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.'
        },
        {
            id: 'HappyClients',
            title: 'Happy Clients',
            description: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.'
        },
        {
            id: 'SkilledChefs',
            title: 'Skilled Chefs',
            description: 'Quisque volutpat mattis eros. Nullam malesuada erat ut turpis.'
        }
    ];

    return (
        <section className="experience-section mt-150 p-5">
            <div className="container">
                <div className="row">
                    {sections.map(section => (
                        <div className="col-md-3 text-center" key={section.id}>
                            <div className="fs-2 counter" id={section.id}></div>
                            <h5 className="fst-italic">{section.title}</h5>
                            <p>{section.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default ExperienceSection;
