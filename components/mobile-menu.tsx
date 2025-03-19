"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  setMobileMenuOpen: (open: boolean) => void
  activeSection: string
}

export default function MobileMenu({ setMobileMenuOpen, activeSection }: MobileMenuProps) {
  const menuVariants = {
    hidden: { opacity: 0, x: "100%" },
    visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.3 } },
  }

  const menuItemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1, duration: 0.3 },
    }),
  }

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={menuVariants}
      className="fixed inset-0 z-30 bg-black/95 backdrop-blur-md flex flex-col p-6 pt-20"
    >
      <nav className="flex flex-col space-y-6 mt-8">
        {sections.map((section, i) => (
          <motion.div key={section.id} custom={i} initial="hidden" animate="visible" variants={menuItemVariants}>
            <Link
              href={`#${section.id}`}
              className={`text-2xl font-medium ${activeSection === section.id ? "text-primary" : "text-gray-400"}`}
              onClick={(e) => {
                e.preventDefault()
                document.getElementById(section.id)?.scrollIntoView({ behavior: "smooth" })
                setMobileMenuOpen(false)
              }}
            >
              {section.label}
            </Link>
          </motion.div>
        ))}
      </nav>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="mt-auto">
        <p className="text-gray-400 mb-4">Let's connect</p>
        <div className="flex space-x-3">
          <Link href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full">
              <Github className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="icon" className="rounded-full">
              <Linkedin className="h-5 w-5" />
            </Button>
          </Link>
          <Link href="mailto:contact@example.com">
            <Button variant="outline" size="icon" className="rounded-full">
              <Mail className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </motion.div>
    </motion.div>
  )
}

