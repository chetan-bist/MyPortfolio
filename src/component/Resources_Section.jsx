export default function Resources_Section(){
    return(
        <section id="resources" className="px-8 py-16 bg-white animate-fade-in">
        <h3 className="text-3xl font-semibold mb-6">Learning Resources</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="border rounded-xl p-6 shadow-md bg-[#f3f1ee] hover:scale-105 transition">
            <img
              src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1325.jpg?w=740"
              alt="CSS Course Thumbnail"
              className="mb-4 rounded-xl w-full h-48 object-cover"
            />
            <h4 className="text-xl font-bold mb-2">CSS Course in Nepali</h4>
            <p className="text-sm text-[#5d5a58] mb-4">Yo video CSS programming language ko full course ho, Nepali ma sikna chahane haru ko lagi helpful xa.</p>
            <a
              href="https://www.youtube.com/watch?v=ESnrn1kAD4E"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-[#151412] text-white px-4 py-2 rounded hover:bg-[#3b3a38]"
            >
              Watch on YouTube
            </a>
          </div>
        </div>
      </section>
    )
}