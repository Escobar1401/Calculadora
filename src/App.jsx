function App() {

  return (
    <>
      <div className="flex flex-col justify-center w-screen h-screen bg-[url('/src/assets/fondo.jpg')] bg-cover bg-center bg-no-repeat items-center">
        <div className="bg-white/60 backdrop-blur-sm w-80 h-140 rounded-2xl p-6 shadow-[0_0_10px_0_rgba(0,0,0,0.8)]">
          <div className="h-[35%] flex items-center justify-end text-3xl font-bold text-gray-600">
            <p>=3,1416</p>
          </div>
          <div className="h-[65%] grid grid-cols-4 gap-2">
            <button className="text-lg cursor-pointer hover:bg-white/60 hover:text-cyan-800 transition-all duration-300 bg-white/40 text-cyan-800 font-bold rounded-2xl">AC</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 hover:text-cyan-800 transition-all duration-300 bg-white/40 text-cyan-800 font-bold rounded-2xl">DEL</button>
            <button className="text-lg cursor-pointer hover:bg-blue-400/60 hover:text-white transition-all duration-300 bg-blue-400/40 text-white font-bold rounded-2xl">/</button>
            <button className="text-lg cursor-pointer hover:bg-blue-400/60 hover:text-white transition-all duration-300 bg-blue-400/40 text-white font-bold rounded-2xl">*</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 hover:text-cyan-800 transition-all duration-300 bg-white/40 text-cyan-800 font-bold rounded-2xl">7</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 hover:text-cyan-800 transition-all duration-300 bg-white/40 text-cyan-800 font-bold rounded-2xl">8</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 hover:text-cyan-800 transition-all duration-300 bg-white/40 text-cyan-800 font-bold rounded-2xl">9</button>
            <button className="text-lg cursor-pointer hover:bg-blue-400/60 hover:text-white transition-all duration-300 bg-blue-400/40 text-white font-bold rounded-2xl">-</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 hover:text-cyan-800 transition-all duration-300 bg-white/40 text-cyan-800 font-bold rounded-2xl">4</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 hover:text-cyan-800 transition-all duration-300 bg-white/40 text-cyan-800 font-bold rounded-2xl">5</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 hover:text-cyan-800 transition-all duration-300 bg-white/40 text-cyan-800 font-bold rounded-2xl">6</button>
            <button className="row-span-2 text-lg cursor-pointer hover:bg-blue-400/60 hover:text-white transition-all duration-300 bg-blue-400/40 text-white font-bold rounded-2xl">+</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 hover:text-cyan-800 transition-all duration-300 bg-white/40 text-cyan-800 font-bold rounded-2xl">1</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 hover:text-cyan-800 transition-all duration-300 bg-white/40 text-cyan-800 font-bold rounded-2xl">2</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 hover:text-cyan-800 transition-all duration-300 bg-white/40 text-cyan-800 font-bold rounded-2xl">3</button>
            <button className="col-span-2 text-lg cursor-pointer hover:bg-white/60 hover:text-cyan-800 transition-all duration-300 bg-white/40 text-cyan-800 font-bold rounded-2xl">0</button>
            <button className="text-lg cursor-pointer hover:bg-white/60 hover:text-cyan-800 transition-all duration-300 bg-white/40 text-cyan-800 font-bold rounded-2xl">.</button>
            <button className="text-lg cursor-pointer hover:bg-cyan-800/60 hover:text-white transition-all duration-300 bg-cyan-800/80 text-white font-bold rounded-2xl">=</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
