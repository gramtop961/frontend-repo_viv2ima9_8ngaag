function Collections() {
  const items = [
    { id: 1, name: 'Nocturne Necklace', price: '$180', img: 'https://images.unsplash.com/photo-1520962918287-7448c2878f65?q=80&w=1600&auto=format&fit=crop' },
    { id: 2, name: 'Étoile Earrings', price: '$120', img: 'https://images.unsplash.com/photo-1599643477877-530eb83abc8e?q=80&w=1600&auto=format&fit=crop' },
    { id: 3, name: 'Velours Ring', price: '$140', img: 'https://images.unsplash.com/photo-1543294001-f7cd5d7fb516?q=80&w=1600&auto=format&fit=crop' },
    { id: 4, name: 'Marine Bracelet', price: '$160', img: 'https://images.unsplash.com/photo-1599643477724-9db8a43a69a8?q=80&w=1600&auto=format&fit=crop' },
  ]

  return (
    <section id="collections" className="relative bg-[#091325]">
      <div className="absolute inset-0 opacity-[0.06]" style={{backgroundImage:'radial-gradient(circle at 20% 10%, #7a0d17 0, transparent 35%), radial-gradient(circle at 80% 80%, #7a0d17 0, transparent 45%)'}}/>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="flex items-end justify-between">
          <h2 className="text-3xl sm:text-4xl font-serif text-blue-100">Featured Collections</h2>
          <a href="#" className="text-[#c63b45] hover:text-[#e04d58]">View all</a>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(item => (
            <div key={item.id} className="group bg-slate-900/40 rounded-xl overflow-hidden border border-blue-300/10 hover:border-blue-300/20 transition shadow-lg">
              <div className="aspect-square overflow-hidden">
                <img src={item.img} alt={item.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"/>
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-blue-100 font-medium">{item.name}</h3>
                  <span className="text-blue-200/70">{item.price}</span>
                </div>
                <button className="mt-4 w-full px-4 py-2 rounded-lg bg-[#7a0d17] text-rose-100 hover:bg-[#8e0f1b] transition">Add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Collections
