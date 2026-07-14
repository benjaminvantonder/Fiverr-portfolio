import { motion } from "framer-motion";
import { Star } from "lucide-react";
import StarfieldBackground from "./StarfieldBackground";

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.55, ease: [0.25, 0.1, 0.25, 1] },
  },
};

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
        <Star
          key={i}
          className="w-5 h-5 fill-emerald-400 text-emerald-400"
        />
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-28 bg-surface" id="testimonials">
      <StarfieldBackground count={600} color="#34d399" speed={0.02} opacity={0.3} />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
            },
          }}
        >
          <span className="text-xs tracking-[0.2em] uppercase text-foreground-muted mb-4 block font-medium">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-4 leading-tight">
            What clients say
          </h2>
          <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
            Real feedback from real people I've worked with.
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              className="group relative"
            >
              <div className="absolute -inset-[1px] bg-gradient-to-b from-emerald-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-surface-card rounded-2xl p-8 border border-boundary card-hover hover:shadow-2xl hover:shadow-emerald-500/5">
                <Stars count={t.rating} />
                <blockquote className="text-foreground leading-relaxed text-lg mt-4 mb-6 italic text-foreground-muted">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="border-t border-boundary pt-4">
                  <p className="font-bold text-foreground">{t.client}</p>
                  <p className="text-sm text-accent font-medium">{t.business}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
