export default function Navbar(){
    return(
        <header className="bg-white text-[#151412] p-6 flex justify-between items-center border-b border-gray-200 animate-fade-in">
        <h1 className="text-3xl font-bold tracking-tight animate-slide-in">Chetan Bist</h1>
        <nav className="space-x-6 text-sm animate-slide-in delay-100">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#resources" className="hover:underline">Resources</a>
          <a href="#contact" className="hover:underline">Contact</a>
        </nav>
      </header>
    )   
}