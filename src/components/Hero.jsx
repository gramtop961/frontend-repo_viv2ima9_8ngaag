function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0b1a33] via-[#0a1530] to-black" />
      <div className="absolute inset-0 opacity-[0.07]" style={{backgroundImage:'radial-gradient(circle at 30% 20%, #1b2a55 0, transparent 40%), radial-gradient(circle at 70% 80%, #1b2a55 0, transparent 45%)'}}/>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif tracking-tight text-blue-100">
              Feminine, delicate jewelry with timeless allure
            </h1>
            <p className="mt-6 text-blue-200/80 max-w-xl">
              Handcrafted pieces in precious metals and stones. Designed to feel elegant, modern, and effortlessly you.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a href="#collections" className="px-5 py-3 rounded-full bg-[#7a0d17] text-rose-100 hover:bg-[#8e0f1b] transition-colors">Shop Collections</a>
              <a href="#about" className="px-5 py-3 rounded-full border border-blue-300/20 text-blue-100 hover:bg-white/5 transition">Learn More</a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-10 bg-gradient-to-tr from-[#7a0d17]/30 via-transparent to-transparent blur-2xl"/>
            <div className="aspect-[4/5] rounded-2xl overflow-hidden ring-1 ring-blue-300/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?q=80&w=1600&auto=format&fit=crop" alt="Jewelry" className="w-full h-full object-cover"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
