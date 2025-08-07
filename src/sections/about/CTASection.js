

import { motion } from "framer-motion";
import Button from "@/componets/ui/Button";
import { fadeIn } from "@/lib/animation";
import Link from "next/link";


export function CTASection (){

    return (
        <motion.section
        {...fadeIn}
        className="text-center bg-surface rounded-xl p-12 border border-gray-700"
      >
        <h3 className="text-2xl font-bold text-primary mb-4">
          Ready to Transform Your Skills?
        </h3>
        <p className="text-secondary mb-8 max-w-2xl mx-auto">
          Join our next hackathon or workshop and get real industry experience.
        </p>
        <Link href="/events">
          <Button size="lg" className="px-8 py-4">
            View Upcoming Events
          </Button>
        </Link>

      </motion.section>


    )
}