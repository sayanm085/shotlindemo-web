import React from "react";
import { motion } from "framer-motion";
// Replace the import path below with wherever your shadcn/ui components live.
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

export default function ContactForm() {
  return (
    <section className=" w-4/5 container mx-auto px-4 py-40">
      {/* 
        Outer container split into two columns on larger screens.
        On small screens, it becomes a single column. 
      */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left side: contact info & heading */}
        <motion.div
          // Fade-in + slight upward motion
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-10"
        >
         <h1 className="text-4xl  sora-regular text-white" style={{lineHeight: '5rem'}}>Get in  <span className='instrument-serif-regular-italic text-white'>touch.</span></h1>
         <p className="py-6 text-lg text-[#c4c4c4]">
         Ready to scale your brand to new heights? Book a call and let’s discuss how we can bring your vision to life.       </p>

          <div className="space-y-1">
            <p className="font-medium text-xl">Shotlin</p>
            <p className="font-medium">379/N,BANIPUR PALPARA WARD 13,BANIPUR PALPARA,S.N. DEY ROAD  </p>
            <p className="text-sm text-muted-foreground">
            North 24 Parganas,West Bengal 743287, India
            </p>
          </div>
          <div>
            <p className="font-medium">+91 9382214304</p>
            <p className="font-medium">support@shotlin.in</p>
          </div>
        </motion.div>

        {/* Right side: the actual form */}
        <motion.form
          // Stagger the appearance of the fields
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: {
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1,
              },
            },
          }}
          onSubmit={(e) => {
            e.preventDefault();
            // Handle form submission logic here
          }}
          className="space-y-10"
        >
          {/* First & Last Name in two columns on md+ */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col space-y-1"
            >
              <Label htmlFor="firstName">First name</Label>
              <Input id="firstName" placeholder="John" type="text" required />
            </motion.div>
            <motion.div
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
              className="flex flex-col space-y-1"
            >
              <Label htmlFor="lastName">Last name</Label>
              <Input id="lastName" placeholder="Doe" type="text" required />
            </motion.div>
          </div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col space-y-1"
          >
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="john.doe@example.com"
              required
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col space-y-1"
          >
            <Label htmlFor="phoneNumber">Phone number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="+1 (555) 234-5678"
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
            className="flex flex-col space-y-1"
          >
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              rows={4}
              required
            />
          </motion.div>

          <motion.div
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Button type="submit" className="w-full md:w-auto">
              Send message
            </Button>
          </motion.div>
        </motion.form>
      </div>
    </section>
  );
}
