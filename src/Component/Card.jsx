

function Card () {
    return(
        <div className="lg:w-[28%] border-[0.1px] rounded-lg border-gray-400 bg-white flex flex-col justify-center items-center px-7 py-10  shadow-2xl">
              <div><img className="w-20 h-20" src="./public/assets/vision.png" alt="" /></div>
              <p className="pt-8 text-justify ">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi itaque eligendi molestiae culpa distinctio unde atque quidem mollitia eveniet odio!</p>
        </div>
    );
}

export default Card;