import { useState } from 'react'

function Contact() {
  const [status, setStatus] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    setStatus('Thank you — we will get back to you soon!')
  }

  return (
    <section id="contact" className="relative bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="bg-slate-900/40 border border-blue-300/10 rounded-2xl p-8 sm:p-10">
          <h3 className="text-2xl font-serif text-blue-100">Contact us</h3>
          <p className="mt-2 text-blue-200/70">Questions about sizing, materials, or custom pieces? Send a note.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-blue-200/70 text-sm mb-2">Name</label>
              <input required className="w-full px-4 py-3 rounded-lg bg-slate-950/60 border border-blue-300/10 text-blue-100 placeholder:text-blue-300/40 outline-none focus:ring-2 focus:ring-[#7a0d17]/50" placeholder="Your name"/>
            </div>
            <div>
              <label className="block text-blue-200/70 text-sm mb-2">Email</label>
              <input type="email" required className="w-full px-4 py-3 rounded-lg bg-slate-950/60 border border-blue-300/10 text-blue-100 placeholder:text-blue-300/40 outline-none focus:ring-2 focus:ring-[#7a0d17]/50" placeholder="you@example.com"/>
            </div>
            <div className="sm:col-span-2">
              <label className="block text-blue-200/70 text-sm mb-2">Message</label>
              <textarea required rows="4" className="w-full px-4 py-3 rounded-lg bg-slate-950/60 border border-blue-300/10 text-blue-100 placeholder:text-blue-300/40 outline-none focus:ring-2 focus:ring-[#7a0d17]/50" placeholder="Tell us a bit more..."/>
            </div>
            <div className="sm:col-span-2 flex items-center justify-between">
              <button className="px-5 py-3 rounded-full bg-[#7a0d17] text-rose-100 hover:bg-[#8e0f1b] transition">Send message</button>
              <span className="text-sm text-blue-200/60">We typically reply within 24 hours</span>
            </div>
          </form>

          {status && <p className="mt-6 text-green-300/80">{status}</p>}
        </div>
      </div>
    </section>
  )
}

export default Contact
