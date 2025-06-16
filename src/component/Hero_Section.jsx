import reactLogo from '../assets/chetan.jpg'
export default function Hero_Section(){
    return(
        <section className="text-center py-24 bg-white animate-fade-in">
        <img
          src={reactLogo}
          alt="Chetan Bist"
          className="w-48 h-48 mx-auto rounded-full border-4 border-gray-200 shadow mb-6 animate-fade-in"
        />
        <h2 className="text-5xl font-bold mb-2 animate-slide-in">Hi, I'm Chetan Bist</h2>
        <p className="text-[#5d5a58] text-lg animate-slide-in delay-100">BCA Student | Web Designer & Developer</p>
      </section>
    )
}