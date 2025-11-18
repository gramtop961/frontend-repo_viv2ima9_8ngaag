function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-[#091325] to-black">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-20 sm:py-28">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 md:order-1">
            <div className="absolute -inset-8 bg-gradient-to-tr from-[#7a0d17]/20 via-transparent to-transparent blur-2xl"/>
            <div className="rounded-2xl overflow-hidden ring-1 ring-blue-300/10 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&w=1600&auto=format&fit=crop" alt="Atelier" className="w-full h-full object-cover"/>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-3xl sm:text-4xl font-serif text-blue-100">Our Story</h2>
            <p className="mt-4 text-blue-200/80">
              Founded with a love for detail, we craft jewelry that feels intimate and personal. Each piece is designed to be light, comfortable, and beautifully understated.
            </p>
            <p className="mt-4 text-blue-200/80">
              We use high quality materials with ethical sourcing, and our small-batch approach means every item receives careful attention from start to finish.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
