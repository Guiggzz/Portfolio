"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Download, FileDown, Navigation2, GraduationCap, Code, Users, Briefcase, Heart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import ProjectCard from "@/components/project-card"
import MobileMenu from "@/components/mobile-menu"
import projects from "../components/dataProjets"

export default function Home() {
  const [activeSection, setActiveSection] = useState("home")
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Update active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])


  const handleDownloadCV = () => {
    const link = document.createElement("a")
    link.href = "/CV_Guillaume_Breon.pdf"
    link.download = "CV_Guillaume_Breon.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(rgba(50,50,50,0.3)_1px,transparent_1px)] bg-[length:30px_30px] opacity-30" />

      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-primary"
          >
            Guillaume<span className="text-white"> Breon</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {["home", "about", "projects", "contact"].map((section) => (
              <Link
                key={section}
                href={`#${section}`}
                className={`relative text-sm uppercase tracking-wider transition-colors ${activeSection === section ? "text-primary" : "text-gray-400 hover:text-white"
                  }`}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(section)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {section}
                {activeSection === section && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && <MobileMenu setMobileMenuOpen={setMobileMenuOpen} activeSection={activeSection} />}
      </AnimatePresence>

      <main>
        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center relative pt-16 bg-gradient-to-br from-gray-900 to-black">
          <div className="container mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="space-y-8"
              >
                <h1 className="text-6xl md:text-8xl font-bold leading-none">
                  Guillaume <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">Breon</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-md leading-relaxed">
                  Développeur logiciel, étudiant en BTS SIO et Bachelor à l'EPSI Toulouse.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button
                    className="group bg-primary hover:bg-primary/90 text-white"
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Voir mes projets
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    variant="outline"
                    onClick={handleDownloadCV}
                    className="group border-primary text-primary hover:bg-primary/10"
                  >
                    Télécharger mon CV
                    <FileDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                  </Button>
                </div>
                <div className="flex space-x-5 pt-4">
                  <Link href="https://github.com/Guiggzz" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800 hover:text-primary">
                      <Github className="h-6 w-6" />
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/guillaume-breon-aa193b295/" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="icon" className="rounded-full hover:bg-gray-800 hover:text-primary">
                      <Linkedin className="h-6 w-6" />
                    </Button>
                  </Link>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="relative w-full h-[450px] md:h-[550px] rounded-xl overflow-hidden">
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-primary to-purple-500 rounded-xl blur-sm opacity-70"></div>
                  <div className="relative w-full h-full rounded-xl overflow-hidden border border-gray-700">
                    <Image
                      src="/1000034275.jpg?height=1000&width=800"
                      alt="Guillaume Breon"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
                  </div>
                  <div className="absolute -bottom-16 -right-16 w-64 h-64 bg-primary/30 rounded-full blur-3xl" />
                  <div className="absolute -top-16 -left-16 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl" />
                </div>
              </motion.div>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full border border-gray-700 hover:border-primary/50 hover:bg-gray-800/50"
              onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
            >
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
                className="h-5 w-5 text-primary"
              >
                ↓
              </motion.div>
            </Button>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                À propos <span className="text-primary">de moi</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 relative">
              {/* Decorative element */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="absolute -z-10 top-10 right-10 lg:right-40 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
              />

              {/* Main content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="lg:col-span-12 space-y-8"
              >
                <div className="bg-black/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-primary/20 shadow-lg">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Étudiant en <span className="text-primary">développement logiciel</span>
                  </h3>
                  <p className="text-gray-300 md:text-lg">
                    Actuellement en deuxième année de Bachelor en développement logiciel et de BTS SIO à l'EPSI Toulouse,
                    j'y étudie les fondamentaux du développement web et applicatif, ainsi que le droit, l'économie, le
                    management, le marketing et la communication.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Formation column */}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-black/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-primary/20 shadow-lg h-full"
                  >
                    <h4 className="font-bold text-xl md:text-2xl mb-6 flex items-center">
                      <GraduationCap className="mr-3 h-6 w-6 text-primary" />
                      Formation
                    </h4>
                    <div className="space-y-6">
                      <div className="relative pl-6 border-l-2 border-primary/30 pb-6">
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary" />
                        <h5 className="font-medium text-lg">Bachelor développement logiciel</h5>
                        <p className="text-sm text-gray-400">EPSI Toulouse</p>
                        <span className="text-sm font-medium text-primary mt-1 block">En cours - 2026</span>
                      </div>

                      <div className="relative pl-6 border-l-2 border-primary/30 pb-6">
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary" />
                        <h5 className="font-medium text-lg">BTS SIO SLAM</h5>
                        <p className="text-sm text-gray-400">Solutions Logicielles et Applications Métiers</p>
                        <span className="text-sm font-medium text-primary mt-1 block">En cours - 2025</span>
                      </div>

                      <div className="relative pl-6">
                        <div className="absolute -left-2 top-0 h-4 w-4 rounded-full bg-primary" />
                        <h5 className="font-medium text-lg">Baccalauréat Général</h5>
                        <span className="text-sm font-medium text-primary mt-1 block">2022</span>
                      </div>
                    </div>
                  </motion.div>

                  {/* Skills column */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="bg-black/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-primary/20 shadow-lg h-full flex flex-col"
                  >
                    <div className="space-y-6 flex-grow">
                      <div>
                        <h4 className="font-bold text-xl md:text-2xl mb-4 flex items-center">
                          <Code className="mr-3 h-6 w-6 text-primary" />
                          Compétences techniques
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {["React", "Python", "PHP", "JavaScript", "MySQL", "React Native", "RedwoodJS", "git"].map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1.5 text-sm rounded-full bg-primary/15 text-primary border border-primary/20 hover:bg-primary/25 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-xl md:text-2xl mb-4 flex items-center">
                          <Users className="mr-3 h-6 w-6 text-primary" />
                          Soft skills
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {["Esprit d'équipe", "Sérieux", "Polyvalent", "Adaptabilité"].map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1.5 text-sm rounded-full bg-primary/15 text-primary border border-primary/20 hover:bg-primary/25 transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-bold text-xl md:text-2xl mb-4 flex items-center">
                          <Heart className="mr-3 h-6 w-6 text-primary" />
                          Loisirs
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {["Scoutisme (8 ans)", "Maroquinerie (fabrication de sac à main en cuir)", "Hockey sur glace (7 ans)"].map((hobby) => (
                            <span
                              key={hobby}
                              className="px-3 py-1.5 text-sm rounded-full bg-primary/15 text-primary border border-primary/20 hover:bg-primary/25 transition-colors"
                            >
                              {hobby}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <Button className="group mt-8 w-full sm:w-auto flex items-center justify-center" onClick={handleDownloadCV}>
                      Télécharger mon CV complet
                      <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                    </Button>
                  </motion.div>
                </div>

                {/* Experience Section */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className="mt-12"
                >
                  <h3 className="text-2xl md:text-3xl font-bold mb-8 flex items-center">
                    <Briefcase className="mr-3 h-6 w-6 text-primary" />
                    Expériences <span className="text-primary ml-2">professionnelles</span>
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-black/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-primary/20 shadow-lg hover:border-primary/40 transition-colors">
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl font-bold">Stage développeur applications web</h4>
                          <p className="text-primary font-medium">E-konik</p>
                        </div>
                        <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full mt-2 sm:mt-0">
                          Janvier à Mars 2025
                        </span>
                      </div>
                      <p className="text-gray-300">
                        Mon stage consistait à créer un poc d'un application web dans la seconde main.
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-sm text-gray-400 font-medium">Technologies utilisées :</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {["RedwoodJS", "React", "Prisma", "GraphQL", "NodeJS"].map((tech) => (
                            <span key={tech} className="px-2 py-1 text-xs bg-black/40 rounded-md border border-gray-700">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="bg-black/30 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-primary/20 shadow-lg hover:border-primary/40 transition-colors">
                      <div className="flex flex-col sm:flex-row justify-between items-start mb-4">
                        <div>
                          <h4 className="text-xl font-bold">Stage développeur web</h4>
                          <p className="text-primary font-medium">Agence Gerbail et Audirac</p>
                        </div>
                        <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full mt-2 sm:mt-0">
                          Avril à Juin 2024
                        </span>
                      </div>
                      <p className="text-gray-300">
                        Mon stage consistait à créer un site web pour présenter l'entreprise et ses différents projets.
                      </p>
                      <div className="mt-4 pt-4 border-t border-gray-700">
                        <p className="text-sm text-gray-400 font-medium">Technologies utilisées :</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {["HTML", "CSS", "PHP"].map((tech) => (
                            <span key={tech} className="px-2 py-1 text-xs bg-black/40 rounded-md border border-gray-700">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="min-h-screen py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Mes <span className="text-primary">Projets</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto" />
              <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                Une sélection de mes projets récents démontrant mes compétences en développement.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="min-h-screen py-20 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(var(--primary-rgb),0.15),transparent_70%)]" />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-4">
                Me <span className="text-primary">Contacter</span>
              </h2>
              <div className="w-20 h-1 bg-primary mx-auto" />
              <p className="text-gray-400 max-w-2xl mx-auto mt-4">
                Vous avez un projet en tête ou souhaitez collaborer ? N'hésitez pas à me contacter !
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold">Travaillons ensemble</h3>
                <p className="text-gray-400">
                  Je suis actuellement disponible pour des stages et des projets intéressants. Si vous avez un projet
                  qui nécessite des compétences en développement, n'hésitez pas à me contacter.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                  </div>
                  <div className="flex items-center space-x-4">
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Navigation2 className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-medium">Localisation</h4>
                      <p className="text-gray-400">Toulouse (31000)</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <h4 className="font-medium mb-2">Me suivre</h4>
                  <div className="flex space-x-3">
                    <Link href="https://github.com/Guiggzz" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Github className="h-5 w-5" />
                      </Button>
                    </Link>
                    <Link href="https://www.linkedin.com/in/guillaume-breon-aa193b295/" target="_blank" rel="noopener noreferrer">
                      <Button variant="outline" size="icon" className="rounded-full">
                        <Linkedin className="h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 border border-primary/20"
              >
                <form
                  className="space-y-6"
                  action="https://formspree.io/f/movevpjg"
                  method="POST"
                >
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Nom
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full px-4 py-3 rounded-lg bg-black/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        placeholder="Votre email"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm font-medium">
                      Sujet
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Sujet"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-black/50 border border-primary/20 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                      placeholder="Votre message"
                      required
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/80 transition"
                  >
                    Envoyer
                  </button>
                </form>

              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-primary/20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© {new Date().getFullYear()} Guillaume Breon. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}
