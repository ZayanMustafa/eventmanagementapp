

import { motion } from "framer-motion";
import Milestone from "@/componets/About/MileStone";
import { ABOUT_DATA } from "@/constant/AboutData";
import { staggerContainer } from "@/lib/animation";

export function MileStone (){
    return (
        <motion.section
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <Milestone value={ABOUT_DATA.milestones.events} label="Events Held" />
        <Milestone
          value={ABOUT_DATA.milestones.participants}
          label="Participants"
          isNumber={false}
        />
        <Milestone
          value={ABOUT_DATA.milestones.partnerships}
          label="Industry Partners"
        />
      </motion.section>


    )
}