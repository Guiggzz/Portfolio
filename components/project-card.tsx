"use client"

import { useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Plus, Code, ArrowRight, Info, Box, Zap, Wrench } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  image: string;
  tags: string[];
  link: string;
  github?: string;
  features?: string[];
  technologies?: string[];
  challenges?: string[];
  outcomes?: string[];
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleCardClick = () => {
    setIsOpen(true);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        viewport={{ once: true }}
        whileHover={{ y: -5 }}
        className="group relative overflow-hidden rounded-xl border border-primary/20 bg-black/50 backdrop-blur-sm cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="relative h-48 overflow-hidden flex items-center justify-center">
          <div className="relative w-full h-full">
            <Image
              src={project.image || "/placeholder.svg"}
              alt={project.title}
              fill
              className="object-contain p-2 transition-transform duration-500 group-hover:scale-110"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none" />
        </div>
        <div className="p-6 space-y-4">
          <h3 className="text-xl font-bold">{project.title}</h3>
          <p className="text-gray-400 text-sm">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
              >
                {tag}
              </span>
            ))}
          </div>

          <Button
            onClick={(e) => {
              e.stopPropagation(); // Empêche le clic du bouton de déclencher le clic de la carte
              setIsOpen(true);
            }}
            variant="secondary"
            className="w-full relative z-10"
          >
            Voir détails
            <Plus className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[850px] max-h-[85vh] overflow-y-auto p-0">
          <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-md p-6 pb-2 border-b">
            <DialogHeader>
              <DialogTitle className="text-2xl font-bold">{project.title}</DialogTitle>
            </DialogHeader>
          </div>

          <div className="p-6 pt-4">
            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <div className="md:w-2/5">
                <div className="relative w-full h-52 rounded-lg overflow-hidden border border-gray-800 flex items-center justify-center bg-gray-900/50">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.slice(0, 6).map((tag) => (
                    <Badge key={tag} variant="outline" className="bg-primary/10">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 mt-4">
                  {project.link && (
                    <Link href={project.link} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="default" size="sm" className="w-full">
                        Demo <ExternalLink className="ml-2 h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  )}

                  {project.github && (
                    <Link href={project.github} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button variant="outline" size="sm" className="w-full">
                        Code <Code className="ml-2 h-3.5 w-3.5" />
                      </Button>
                    </Link>
                  )}
                </div>
              </div>

              <div className="md:w-3/5">

                <Tabs defaultValue="overview" className="w-full">
                  <TabsList className="grid grid-cols-4 mb-4">
                    <TabsTrigger value="overview" className="text-xs sm:text-sm">
                      Aperçu
                    </TabsTrigger>
                    <TabsTrigger value="features" className="text-xs sm:text-sm">
                      Fonctionnalités
                    </TabsTrigger>
                    <TabsTrigger value="tech" className="text-xs sm:text-sm">
                      Technologies
                    </TabsTrigger>
                    <TabsTrigger value="outcomes" className="text-xs sm:text-sm">
                      Résultats
                    </TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="space-y-4">
                    <div className="rounded-lg bg-gray-900/50 border border-gray-800 p-4">
                      <h3 className="text-lg font-medium mb-2">Description du projet</h3>
                      <p className="text-gray-300 text-sm">
                        {project.longDescription || "Description détaillée du projet non disponible."}
                      </p>
                    </div>

                    {project.challenges && project.challenges.length > 0 && (
                      <div className="rounded-lg bg-gray-900/50 border border-gray-800 p-4">
                        <h3 className="text-lg font-medium mb-2">Défis relevés</h3>
                        <ul className="space-y-1 text-sm">
                          {project.challenges.map((challenge, i) => (
                            <li key={i} className="flex items-start">
                              <ArrowRight className="h-4 w-4 mr-2 mt-0.5 text-primary" />
                              <span className="text-gray-300">{challenge}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </TabsContent>

                  <TabsContent value="features" className="space-y-2">
                    {project.features && project.features.length > 0 ? (
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <li key={i} className="flex items-start bg-gray-900/50 rounded-lg border border-gray-800 p-3">
                            <Zap className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                            <span className="text-gray-200">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 italic">Aucune fonctionnalité listée pour ce projet.</p>
                    )}
                  </TabsContent>

                  <TabsContent value="tech" className="space-y-4">
                    <div className="rounded-lg bg-gray-900/50 border border-gray-800 p-4">
                      <h3 className="text-lg font-medium mb-3">Stack technique</h3>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies && project.technologies.length > 0 ? (
                          project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1.5 rounded-lg bg-primary/20 text-primary border border-primary/30 text-sm"
                            >
                              {tech}
                            </span>
                          ))
                        ) : (
                          <p className="text-gray-400 italic">Aucune technologie listée pour ce projet.</p>
                        )}
                      </div>
                    </div>
                  </TabsContent>

                  <TabsContent value="outcomes" className="space-y-2">
                    {project.outcomes && project.outcomes.length > 0 ? (
                      <ul className="space-y-2">
                        {project.outcomes.map((outcome, i) => (
                          <li key={i} className="flex items-start bg-gray-900/50 rounded-lg border border-gray-800 p-3">
                            <Box className="h-5 w-5 mr-3 mt-0.5 text-primary" />
                            <span className="text-gray-200">{outcome}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-400 italic">Aucun résultat listé pour ce projet.</p>
                    )}
                  </TabsContent>
                </Tabs>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}