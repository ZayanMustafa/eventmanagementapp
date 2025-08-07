import EventRequestForm from "@/componets/Events/EventRequestForm";
import { ABOUT_DATA } from "@/constant/AboutData";
import { fadeIn } from "@/lib/animation";
import { motion } from "framer-motion";


export function EventRequest (){


    return (

        <motion.section
        {...fadeIn}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
      >
        <div>
          <h2 className="text-3xl font-bold text-primary mb-4">Host With Us</h2>
          <p className="text-secondary mb-6">
            Want to organize a hackathon, seminar, or workshop? We partner with
            universities and companies to create impactful tech events.
          </p>
          <div className="space-y-4">
            {ABOUT_DATA.eventTypes.map((type, i) => (
              <div key={i} className="flex items-start gap-4">
                <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400 mt-1">
                  {type.icon}
                </div>
                <div>
                  <h4 className="font-medium text-primary">{type.name}</h4>
                  <p className="text-secondary text-sm">{type.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <EventRequestForm />
      </motion.section>


    )
}