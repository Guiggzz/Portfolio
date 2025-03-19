import { useRouter } from "next/router";
import projects from "../components/dataProjets"; // Adapte le chemin selon l'emplacement de ton fichier de données

export default function ProjectDetails() {
    const router = useRouter();
    const { id } = router.query;

    // Trouver le projet correspondant
    const project = projects.find((p) => p.id === parseInt(Array.isArray(id) ? id[0] : id || '0'));

    if (!project) {
        return <p>Projet introuvable</p>;
    }

    return (
        <div className="container mx-auto p-8">
            <h1 className="text-3xl font-bold">{project.title}</h1>
            <img src={project.image} alt={project.title} className="w-full max-w-md my-4" />
            <p className="text-lg">{project.description}</p>
            <ul className="flex gap-2 mt-4">
                {project.tags.map((tag, index) => (
                    <li key={index} className="px-3 py-1 bg-gray-200 rounded-full">{tag}</li>
                ))}
            </ul>
            {project.link && (
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block mt-4 text-blue-600 underline"
                >
                    Voir le projet
                </a>
            )}
        </div>
    );
}
