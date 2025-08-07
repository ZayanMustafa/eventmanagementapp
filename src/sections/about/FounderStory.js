


import Image from "next/image";
import Button from "@/componets/ui/Button";
import { ABOUT_DATA } from "@/constant/AboutData";
import { fadeIn } from "@/lib/animation";
import { motion } from "framer-motion";
import Link from "next/link";

export function FounderStory() {
  return (
    <motion.section
      className="flex flex-col md:flex-row gap-12 items-center mb-20"
      initial="initial"
      animate="animate"
      variants={fadeIn} 
    >
      <div className="md:w-1/3">
        <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-accent mx-auto">
          <Image
            src={ABOUT_DATA.owner.avatar}
            alt={ABOUT_DATA.owner.name}
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="md:w-2/3">
        <h2 className="text-3xl font-bold text-primary mb-4">
          Meet {ABOUT_DATA.owner.name}
        </h2>
        <p className="text-lg text-secondary mb-4">{ABOUT_DATA.owner.role}</p>
        <p className="text-secondary mb-6">{ABOUT_DATA.owner.bio}</p>
        <Link href="/contact">
          <Button variant="outline">
            Connect With Me
          </Button>
        </Link>
      </div>
    </motion.section>
  );
}