
function Products () {
    return (
        <div className="container bg-white text-black mx-auto px-8 lg:px-12 pb-16" id="pr">
            <h1 className="text-5xl font-semibold text-center pt-10">Our Products</h1>
            <div>
                <div className="lg:flex justify-between pt-10 space-y-14 lg:space-y-0">
                <div className="lg:w-[22%] shadow-2xl p-3 rounded-lg border-2">
                    <img className="rounded-xl" src="./public/assets/p1.png" alt="" />
                    <h1 className="text-center font-semibold text-xl py-3">Bore Cap</h1>
                </div>
                <div className="lg:w-[22%] shadow-2xl p-3 rounded-lg border-2">
                    <img className="rounded-xl" src="../public/assets/p2.jpg" alt="" />
                    <h1 className="text-center font-semibold text-xl py-3">Bore Clamp</h1>
                </div>
                <div className="lg:w-[22%] shadow-2xl p-3 rounded-lg border-2">
                    <img className="rounded-xl" src="../src/assets/p3.png" alt="" />
                    <h1 className="text-center font-semibold text-xl py-3">Clamp</h1>
                </div>
                <div className="lg:w-[22%] shadow-2xl p-3 rounded-lg border-2">
                    <img className="rounded-xl" src="../src/assets/p4.png" alt="" />
                    <h1 className="text-center font-semibold text-xl py-3">Gate</h1>
                </div>
            </div>
            <div className="lg:flex justify-between pt-14 space-y-14 lg:space-y-0">
            <div className="lg:w-[22%] shadow-2xl p-3 rounded-lg border-2">
                    <img className="rounded-xl" src="../src/assets/p5.png" alt="" />
                    <h1 className="text-center font-semibold text-xl py-3">Step Clamp</h1>
                </div>
                <div className="lg:w-[22%] shadow-2xl p-3 rounded-lg border-2">
                    <img className="rounded-xl" src="../src/assets/p6.png" alt="" />
                    <h1 className="text-center font-semibold text-xl py-3">Apartment Clamp</h1>
                </div>
                <div className="lg:w-[22%] shadow-2xl p-3 rounded-lg border-2">
                    <img className="rounded-xl" src="../src/assets/p7.png" alt="" />
                    <h1 className="text-center font-semibold text-xl py-3">Pipe Clamp</h1>
                </div>
                <div className="lg:w-[22%] shadow-2xl p-3 rounded-lg border-2">
                    <img className="rounded-xl" src="../src/assets/p8.png" alt="" />
                    <h1 className="text-center font-semibold text-xl py-3">All Grill Works</h1>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Products;