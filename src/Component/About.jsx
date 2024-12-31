import image1 from '/src/assets/test.jpg';

function About(){
    return(
        <div className="container mx-auto px-8 lg:px-12" id="ab">
            <div className="lg:flex justify-between">
                <div className="lg:w-[40%] py-16 flex flex-col justify-center lg:ms-16">
                    <h4 className="text-[#FFD54F] text-4xl">Welcome to</h4>
                    <h2 className="text-4xl font-semibold pb-10">SSS Engineering Works</h2>
                    <p className="text-lg text-justify">
                    SSS Engineering Works, established in 2016, is a trusted manufacturer of high-quality engineering products. Driven by precision, innovation, and a commitment to excellence, we specialize in delivering reliable solutions tailored to meet the diverse needs of our clients. Utilizing advanced technology and adhering to stringent quality standards, we ensure every product reflects superior craftsmanship and durability. At SSS Engineering Works, we are dedicated to fostering progress and building lasting relationships through unmatched quality and service.
                    </p>
                </div>
                <div className="lg:w-[50%] flex justify-center items-center pb-16"><img className="h-[80%] rounded-3xl" src={image1} alt="" /></div>
            </div>
        </div>
    );
}

export default About;