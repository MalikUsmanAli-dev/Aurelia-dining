import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative bg-obsidian border-t border-gold/10 pt-20 pb-10 px-6 md:px-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div>
          <div className="font-display text-2xl tracking-widest2 mb-4">AURELIA</div>
          <p className="text-ivory/50 text-sm leading-relaxed font-accent italic">
            Culinary art. Timeless atmosphere.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-4">Navigate</div>
          <ul className="space-y-2 text-sm text-ivory/60">
            <li><Link to="/menu" className="hover:text-gold">Menu</Link></li>
            <li><Link to="/experiences" className="hover:text-gold">Experiences</Link></li>
            <li><Link to="/gallery" className="hover:text-gold">Gallery</Link></li>
            <li><Link to="/reservations" className="hover:text-gold">Reservations</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Visit</div>
          <ul className="space-y-2 text-sm text-ivory/60">
            <li>18 Marbrook Lane, Uptown District</li>
            <li>Dinner — 6:00 PM to 11:30 PM</li>
            <li>Closed Mondays</li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-4">Connect</div>
          <ul className="space-y-2 text-sm text-ivory/60">
            <li>+1 (212) 555-0148</li>
            <li>reservations@aureliadining.com</li>
            <li>Instagram — @aurelia.dining</li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-6 border-t border-gold/10 flex flex-col md:flex-row justify-between text-xs text-ivory/30 gap-2">
        <span>© {new Date().getFullYear()} Aurelia Dining. All rights reserved.</span>
        <span>Design by Aurelia Studio</span>
      </div>
    </footer>
  );
}
