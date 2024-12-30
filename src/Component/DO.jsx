import Card from "./Card";


function Do() {
    return(
        <div className="container mx-auto px-8 lg:px-12 bg-[#481A54] pb-12 ">
            <div className="py-10 text-white">
                <h1 className="text-4xl font-semibold pb-5">What We Do</h1>
                <p className="lg:w-2/3 text-lg text-justify">At SSS Engineering Works, we specialize in manufacturing high-quality engineering products, including bore clamps, bore lids, motor clamps, and a wide range of pipe clamps, designed to meet the specific needs of various industries.</p>
            </div>
            <div className="lg:flex justify-between space-y-14 lg:space-y-0">
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    );
}

export default Do;