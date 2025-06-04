"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, Shield, Eye, Lock, FileText, Users, Globe, Clock, AlertTriangle, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

export default function PrivacyPolicy() {
    const fadeInUp = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    }

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    }

    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header avec navigation */}
            <header className="sticky top-0 z-40 bg-black/80 backdrop-blur-md border-b border-primary/20">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
                            <ArrowLeft className="h-5 w-5" />
                            <span>Retour au portfolio</span>
                        </Link>
                        <div className="text-xl font-bold">
                            Guillaume<span className="text-primary"> Breon</span>
                        </div>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                        <Shield className="h-8 w-8 text-primary" />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Politique de <span className="text-primary">Confidentialité</span>
                    </h1>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Transparence totale sur la collecte et l'utilisation de vos données personnelles
                    </p>
                    <div className="mt-6 text-sm text-gray-500">
                        Dernière mise à jour : 4 juin 2025
                    </div>
                </motion.div>

                {/* Table des matières */}
                <motion.div
                    {...fadeInUp}
                    className="bg-gray-900/50 rounded-lg p-6 mb-12 border border-gray-800"
                >
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                        <FileText className="h-5 w-5 mr-2 text-primary" />
                        Table des matières
                    </h2>
                    <div className="grid md:grid-cols-2 gap-2">
                        {[
                            "Introduction", "Responsable du traitement", "Données collectées", "Finalités du traitement",
                            "Partage des données", "Durée de conservation", "Vos droits (RGPD)", "Sécurité des données",
                            "Transferts internationaux", "Cookies", "Contact et réclamations"
                        ].map((item, index) => (
                            <a
                                key={index}
                                href={`#section-${index + 1}`}
                                className="text-gray-400 hover:text-primary transition-colors text-sm py-1"
                            >
                                {index + 1}. {item}
                            </a>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    animate="animate"
                    className="space-y-12"
                >
                    {/* Section 1: Introduction */}
                    <motion.section variants={fadeInUp} id="section-1" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                                <span className="text-primary font-bold">1</span>
                            </div>
                            Introduction
                        </h2>
                        <div className="prose prose-invert max-w-none">
                            <p className="text-gray-300 leading-relaxed mb-4">
                                La présente Politique de Confidentialité décrit la façon dont Guillaume Breon collecte, utilise,
                                partage et protège vos informations personnelles lorsque vous visitez ce site portfolio.
                            </p>
                            <p className="text-gray-300 leading-relaxed">
                                Nous nous engageons à protéger votre vie privée et à traiter vos données personnelles de manière
                                transparente, conformément au <strong className="text-white">Règlement Général sur la Protection des Données (RGPD)</strong>
                                et aux lois françaises applicables.
                            </p>
                        </div>
                    </motion.section>

                    <Separator className="bg-gray-800" />

                    {/* Section 2: Responsable du traitement */}
                    <motion.section variants={fadeInUp} id="section-2" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                                <span className="text-primary font-bold">2</span>
                            </div>
                            Responsable du traitement
                        </h2>
                        <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h3 className="font-semibold text-white mb-2">Guillaume Breon</h3>
                                    <p className="text-gray-400 text-sm mb-1">Étudiant en développement logiciel</p>
                                    <p className="text-gray-400 text-sm">Toulouse, France</p>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white mb-2">Contact</h3>
                                    <p className="text-gray-400 text-sm">Via le formulaire de contact du site</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    <Separator className="bg-gray-800" />

                    {/* Section 3: Données collectées */}
                    <motion.section variants={fadeInUp} id="section-3" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                                <span className="text-primary font-bold">3</span>
                            </div>
                            <Eye className="h-6 w-6 mr-2" />
                            Données collectées
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                                <h3 className="text-lg font-semibold mb-4 text-primary">
                                    3.1 Formulaire de contact
                                </h3>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {[
                                        { label: "Nom", purpose: "Personnaliser notre réponse" },
                                        { label: "Adresse e-mail", purpose: "Vous répondre" },
                                        { label: "Sujet", purpose: "Comprendre votre demande" },
                                        { label: "Message", purpose: "Contenu de votre communication" }
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                                            <div>
                                                <span className="text-white font-medium">{item.label}</span>
                                                <p className="text-gray-400 text-sm">{item.purpose}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                                <h3 className="text-lg font-semibold mb-4 text-primary">
                                    3.2 Données automatiques
                                </h3>
                                <div className="grid md:grid-cols-3 gap-4">
                                    {[
                                        { icon: Globe, label: "Navigation", desc: "Pages visitées, durée" },
                                        { icon: Phone, label: "Technique", desc: "IP, navigateur, OS" },
                                        { icon: Eye, label: "Localisation", desc: "Pays/région (IP)" }
                                    ].map((item, index) => (
                                        <div key={index} className="text-center">
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-3">
                                                <item.icon className="h-6 w-6 text-primary" />
                                            </div>
                                            <h4 className="font-medium text-white mb-1">{item.label}</h4>
                                            <p className="text-gray-400 text-sm">{item.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    <Separator className="bg-gray-800" />

                    {/* Section 4: Finalités */}
                    <motion.section variants={fadeInUp} id="section-4" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                                <span className="text-primary font-bold">4</span>
                            </div>
                            Finalités du traitement
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                {
                                    title: "Contact professionnel",
                                    base: "Intérêt légitime",
                                    purpose: "Répondre à vos demandes et établir un contact professionnel",
                                    icon: Users
                                },
                                {
                                    title: "Amélioration du site",
                                    base: "Intérêt légitime",
                                    purpose: "Analyser l'utilisation pour améliorer l'expérience utilisateur",
                                    icon: Globe
                                },
                                {
                                    title: "Conformité légale",
                                    base: "Obligation légale",
                                    purpose: "Respecter nos obligations légales et réglementaires",
                                    icon: Shield
                                }
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                                        <item.icon className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-white mb-2">{item.title}</h3>
                                    <div className="mb-3">
                                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                                            {item.base}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm">{item.purpose}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    <Separator className="bg-gray-800" />

                    {/* Section 5: Partage des données */}
                    <motion.section variants={fadeInUp} id="section-5" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                                <span className="text-primary font-bold">5</span>
                            </div>
                            Partage des données
                        </h2>

                        <div className="space-y-6">
                            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                                <h3 className="text-lg font-semibold mb-4 text-primary">Services tiers utilisés</h3>
                                <div className="space-y-4">
                                    <div className="border-l-2 border-primary/30 pl-4">
                                        <h4 className="font-medium text-white">Formspree (Traitement des formulaires)</h4>
                                        <ul className="text-gray-400 text-sm mt-2 space-y-1">
                                            <li>• Localisation : États-Unis</li>
                                            <li>• Certification : Clauses contractuelles types</li>
                                            <li>• Données : Nom, e-mail, sujet, message</li>
                                        </ul>
                                    </div>
                                    <div className="border-l-2 border-primary/30 pl-4">
                                        <h4 className="font-medium text-white">Hébergement web</h4>
                                        <ul className="text-gray-400 text-sm mt-2 space-y-1">
                                            <li>• Serveurs sécurisés</li>
                                            <li>• Localisation : Union Européenne (priorité)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className="bg-green-900/20 border border-green-800 rounded-lg p-6">
                                <div className="flex items-center mb-2">
                                    <Shield className="h-5 w-5 text-green-400 mr-2" />
                                    <h3 className="font-semibold text-green-400">Engagement de protection</h3>
                                </div>
                                <p className="text-gray-300 text-sm">
                                    Nous ne vendons, ne louons, ni ne partageons vos données personnelles à des fins commerciales ou publicitaires.
                                </p>
                            </div>
                        </div>
                    </motion.section>

                    <Separator className="bg-gray-800" />

                    {/* Section 6: Durée de conservation */}
                    <motion.section variants={fadeInUp} id="section-6" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                                <span className="text-primary font-bold">6</span>
                            </div>
                            <Clock className="h-6 w-6 mr-2" />
                            Durée de conservation
                        </h2>

                        <div className="grid md:grid-cols-3 gap-6">
                            {[
                                { type: "Messages de contact", duration: "3 ans maximum", desc: "Après le dernier échange" },
                                { type: "Données de navigation", duration: "13 mois maximum", desc: "Données anonymisées" },
                                { type: "Logs Vercel", duration: "30 jours maximum", desc: "Logs de serveur et performance" }
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-900/30 rounded-lg p-6 border border-gray-800 text-center">
                                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                                        <Clock className="h-6 w-6 text-primary" />
                                    </div>
                                    <h3 className="font-semibold text-white mb-2">{item.type}</h3>
                                    <div className="text-primary font-medium mb-2">{item.duration}</div>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    <Separator className="bg-gray-800" />

                    {/* Section 7: Vos droits RGPD */}
                    <motion.section variants={fadeInUp} id="section-7" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                                <span className="text-primary font-bold">7</span>
                            </div>
                            <Users className="h-6 w-6 mr-2" />
                            Vos droits (RGPD)
                        </h2>

                        <div className="bg-blue-900/20 border border-blue-800 rounded-lg p-6 mb-6">
                            <p className="text-blue-100">
                                Conformément au RGPD, vous disposez des droits suivants sur vos données personnelles :
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-4">
                            {[
                                { right: "Droit d'accès", article: "Art. 15", desc: "Obtenir une copie de vos données" },
                                { right: "Droit de rectification", article: "Art. 16", desc: "Corriger des données inexactes" },
                                { right: "Droit à l'effacement", article: "Art. 17", desc: "Demander la suppression" },
                                { right: "Droit à la limitation", article: "Art. 18", desc: "Restreindre le traitement" },
                                { right: "Droit à la portabilité", article: "Art. 20", desc: "Transférer vos données" },
                                { right: "Droit d'opposition", article: "Art. 21", desc: "S'opposer au traitement" }
                            ].map((item, index) => (
                                <div key={index} className="bg-gray-900/30 rounded-lg p-4 border border-gray-800">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className="font-semibold text-white">{item.right}</h3>
                                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                                            {item.article}
                                        </span>
                                    </div>
                                    <p className="text-gray-400 text-sm">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                            <h3 className="font-semibold text-white mb-2">Comment exercer vos droits ?</h3>
                            <p className="text-gray-400 text-sm mb-4">
                                Contactez-nous via le formulaire de contact en précisant votre demande.
                                Nous répondrons dans un délai de <strong className="text-white">30 jours maximum</strong>.
                            </p>
                            <Button asChild className="bg-primary hover:bg-primary/90">
                                <Link href="/#contact">
                                    Nous contacter
                                </Link>
                            </Button>
                        </div>
                    </motion.section>

                    <Separator className="bg-gray-800" />

                    {/* Section 8: Sécurité */}
                    <motion.section variants={fadeInUp} id="section-8" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                                <span className="text-primary font-bold">8</span>
                            </div>
                            <Lock className="h-6 w-6 mr-2" />
                            Sécurité des données
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                                <h3 className="text-lg font-semibold mb-4 text-primary">Mesures techniques</h3>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                                        Chiffrement HTTPS pour toutes les communications
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                                        Protection contre les attaques CSRF et XSS
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                                        Mise à jour régulière des dépendances
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-green-400 mr-3"></div>
                                        Validation et sanitisation des données
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                                <h3 className="text-lg font-semibold mb-4 text-primary">Mesures organisationnelles</h3>
                                <ul className="space-y-2 text-gray-300 text-sm">
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                                        Accès aux données limité au strict nécessaire
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                                        Sensibilisation aux bonnes pratiques
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                                        Procédures de gestion des incidents
                                    </li>
                                    <li className="flex items-center">
                                        <div className="w-2 h-2 rounded-full bg-blue-400 mr-3"></div>
                                        Notification en cas de violation (72h)
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </motion.section>

                    <Separator className="bg-gray-800" />

                    {/* Section 9: Transferts internationaux */}
                    <motion.section variants={fadeInUp} id="section-9" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                                <span className="text-primary font-bold">9</span>
                            </div>
                            <Globe className="h-6 w-6 mr-2" />
                            Transferts internationaux
                        </h2>

                        <div className="bg-orange-900/20 border border-orange-800 rounded-lg p-6">
                            <div className="flex items-start">
                                <AlertTriangle className="h-5 w-5 text-orange-400 mr-3 mt-0.5 flex-shrink-0" />
                                <div>
                                    <h3 className="font-semibold text-orange-400 mb-2">Protection des transferts</h3>
                                    <p className="text-gray-300 text-sm mb-3">
                                        Certains services (comme Formspree et Vercel) peuvent être situés hors UE. Nous garantissons :
                                    </p>
                                    <ul className="text-gray-300 text-sm space-y-1">
                                        <li>• Clauses contractuelles types approuvées par la Commission Européenne</li>
                                        <li>• Vérification du niveau de protection du pays de destination</li>
                                        <li>• Garanties appropriées pour la protection de vos données</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    <Separator className="bg-gray-800" />

                    {/* Section 10: Cookies */}
                    <motion.section variants={fadeInUp} id="section-10" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                                <span className="text-primary font-bold">10</span>
                            </div>
                            Politique de cookies
                        </h2>

                        <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                            <h3 className="font-semibold text-white mb-4">Types de cookies utilisés</h3>
                            <div className="space-y-4">
                                <div className="border-l-2 border-green-500/30 pl-4">
                                    <h4 className="font-medium text-green-400">Cookies strictement nécessaires</h4>
                                    <p className="text-gray-400 text-sm mt-1">
                                        Cookies de session et préférences d'interface pour le fonctionnement du site
                                    </p>
                                </div>
                                <div className="border-l-2 border-blue-500/30 pl-4">
                                    <h4 className="font-medium text-blue-400">Cookies de performance (optionnels)</h4>
                                    <p className="text-gray-400 text-sm mt-1">
                                        Analyse d'utilisation anonymisée pour améliorer l'expérience (si activés)
                                    </p>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-gray-800/50 rounded text-sm text-gray-400">
                                <strong className="text-white">Note :</strong> Vous pouvez désactiver les cookies dans votre navigateur.
                                La désactivation des cookies nécessaires peut affecter le fonctionnement du site.
                            </div>
                        </div>
                    </motion.section>

                    <Separator className="bg-gray-800" />

                    {/* Section 11: Contact et réclamations */}
                    <motion.section variants={fadeInUp} id="section-11" className="scroll-mt-24">
                        <h2 className="text-2xl font-bold mb-6 flex items-center">
                            <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                                <span className="text-primary font-bold">11</span>
                            </div>
                            Contact et réclamations
                        </h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                                <h3 className="font-semibold text-white mb-4">Nous contacter</h3>
                                <p className="text-gray-400 text-sm mb-4">
                                    Pour toute question concernant cette politique ou vos données :
                                </p>
                                <Button asChild className="w-full">
                                    <Link href="/#contact">
                                        Formulaire de contact
                                    </Link>
                                </Button>
                                <p className="text-gray-500 text-xs mt-2">
                                    Précisez "Protection des données" dans le sujet
                                </p>
                            </div>

                            <div className="bg-gray-900/30 rounded-lg p-6 border border-gray-800">
                                <h3 className="font-semibold text-white mb-4">Autorité de contrôle</h3>
                                <p className="text-gray-400 text-sm mb-3">
                                    Si vos droits ne sont pas respectés, vous pouvez saisir la CNIL :
                                </p>
                                <div className="text-sm text-gray-300 space-y-1">
                                    <div>Commission Nationale de l'Informatique et des Libertés</div>
                                    <div className="text-gray-400">3 Place de Fontenoy, TSA 80715</div>
                                    <div className="text-gray-400">75334 PARIS CEDEX 07</div>
                                    <div className="text-primary">www.cnil.fr</div>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </motion.div>

                {/* Footer de la page */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mt-16 pt-8 border-t border-gray-800 text-center"
                >
                    <p className="text-gray-500 text-sm">
                        Cette politique de confidentialité est rédigée en français et soumise au droit français.
                    </p>
                    <p className="text-gray-600 text-xs mt-2">
                        Politique effective à compter du 4 juin 2025
                    </p>
                </motion.div>
            </main>
        </div>
    )
}