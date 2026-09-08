import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen bg-surface text-foreground flex items-center justify-center px-6 pt-24">
      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-7xl md:text-8xl font-bold text-accent mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold mb-3">Page not found</h1>
        <p className="text-foreground-muted mb-8">
          The page you're looking for doesn't exist or has moved.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent text-slate-900 dark:text-white font-semibold btn-shimmer shadow-lg shadow-accent/20"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </motion.div>
    </div>
  );
}