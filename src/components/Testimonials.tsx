import { Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Ben Van Tonder provided great service in updating and improving my website. He identified all areas that needed immediate attention, got them functioning properly, and implemented many enhancements throughout our collaboration. His technical skills, attention to detail, and dedication to providing high-quality workmanship make him an ideal candidate for any web development project.",
    client: "Steller Industries",
    business: "Steller Industries",
    rating: 5,
  },
  {
    quote:
      "It is with great pleasure that we recommend Ben van Tonder for his exceptional professionalism, technical expertise, and dedication. His ability to understand our operational requirements and translate them into practical, user-friendly systems has greatly improved our online presence and administrative efficiency. His reliable support and innovative approach have made him a trusted technology partner.",
    client: "Ruan Heyns",
    business: "CERT-SA",
    rating: 5,
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-5 h-5 fill-emerald-400 text-emerald-400" />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              What Clients Say
            </h2>
            <div className="w-20 h-1 bg-emerald-500 mx-auto mb-6"></div>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real feedback from real clients I've worked with.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-lg transition-shadow duration-300"
              >
                <Stars count={t.rating} />
                <blockquote className="text-slate-700 leading-relaxed text-lg mt-4 mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-slate-200 pt-4">
                  <p className="font-bold text-slate-900">{t.client}</p>
                  <p className="text-sm text-emerald-600 font-medium">
                    {t.business}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
