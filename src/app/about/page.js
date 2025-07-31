"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animation";
import Milestone from "@/componets/About/MileStone";
import Button from "@/componets/ui/Button";
import { ABOUT_DATA } from "@/constant/AboutData";
import VisionCard from "@/componets/About/VisionCard";
import TeamMember from "@/componets/About/TeamMember";
import EventRequestForm from "@/componets/Events/EventRequestForm";

export default function AboutPage() {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      className="container py-12"
    >
      {/* Hero Section */}
      <motion.section {...staggerContainer} className="text-center mb-16">
        <motion.h1
          {...fadeIn}
          className="text-4xl md:text-6xl font-bold text-primary mb-6"
        >
          About SkillSphere
        </motion.h1>
        <motion.p
          {...fadeIn}
          className="text-xl text-secondary max-w-3xl mx-auto"
        >
          Bridging the gap between classroom learning and real-world tech
          challenges
        </motion.p>
      </motion.section>

      {/* Founder Story */}
      <motion.section
        className="flex flex-col md:flex-row gap-12 items-center mb-20"
        {...fadeIn}
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
          <Button variant="outline" asLink href="/contact">
            Connect With Me
          </Button>
        </div>
      </motion.section>

      {/* Vision */}
      <motion.section className="mb-20">
        <VisionCard {...ABOUT_DATA.vision} />
      </motion.section>

      {/* Milestones */}
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

      {/* Team Section */}
      <motion.section className="mb-20">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ABOUT_DATA.team.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeIn}
              custom={i * 0.1}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              <TeamMember member={member} />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Event Request Section */}
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

      {/* CTA */}
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
        <Button size="lg" asLink href="/events">
          Browse Upcoming Events
        </Button>
      </motion.section>
    </motion.main>
  );
}
