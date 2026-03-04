import { MapPin, Phone } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-16 bg-gradient-to-br from-[oklch(0.25_0.08_85)] via-[oklch(0.2_0.06_75)] to-[oklch(0.18_0.05_70)]">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold mb-2 text-elite-gold">
            Contact Us Today
          </h2>
          <p className="text-lg text-gray-300 mb-3">
            N. Ajay Kumar, Elite President
          </p>
          <p className="text-gray-400 mb-8">
            Reach out to us for the best deals, site visits, and personalized
            plot selection assistance.
          </p>

          {/* Phone buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a
              href="tel:9848525246"
              data-ocid="contact.primary_button"
              className="inline-flex items-center justify-center gap-3 bg-green-600 hover:bg-green-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-green-500/25"
            >
              <Phone className="h-6 w-6" />
              Call: 9848525246
            </a>
            <a
              href="tel:7013138131"
              data-ocid="contact.secondary_button"
              className="inline-flex items-center justify-center gap-3 bg-green-700 hover:bg-green-600 text-white font-bold text-lg px-8 py-4 rounded-xl transition-colors shadow-lg hover:shadow-green-500/25"
            >
              <Phone className="h-6 w-6" />
              Call: 7013138131
            </a>
          </div>

          {/* Address */}
          <div className="flex items-start justify-center gap-2 text-gray-400">
            <MapPin className="h-5 w-5 text-elite-gold mt-0.5 flex-shrink-0" />
            <address className="not-italic text-sm text-center">
              Sri Sri Nagar Colony, Mallareddy Complex,
              <br />
              Turkayamjal, Hyderabad
            </address>
          </div>
        </div>
      </div>
    </section>
  );
}
