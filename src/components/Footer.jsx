function Footer() {
  return (
    <footer className="bg-black border-t border-blue-300/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-blue-200/60 text-sm">© {new Date().getFullYear()} Éclat Bijoux. All rights reserved.</p>
        <div className="flex items-center gap-6 text-blue-200/70 text-sm">
          <a href="#" className="hover:text-blue-100">Instagram</a>
          <a href="#" className="hover:text-blue-100">Pinterest</a>
          <a href="#contact" className="hover:text-blue-100">Contact</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
