import { notFound } from "next/navigation";

const validPrograms = [
  "applied-research",
  "prototype-development",
  "policy-drafts",
  "patent-filing",
  "apprenticeships",
  "psychometric-profiling",
] as const;

type ProgramName = (typeof validPrograms)[number];

const programTitles: Record<ProgramName, string> = {
  "applied-research": "Applied Research",
  "prototype-development": "Prototype Development",
  "policy-drafts": "Policy Drafts",
  "patent-filing": "Patent Filing",
  apprenticeships: "Apprenticeships",
  "psychometric-profiling": "Psychometric Profiling",
};

export function generateStaticParams() {
  return validPrograms.map((name) => ({ name }));
}

export default async function ProgramPage({
  params,
}: {
  params: Promise<{ name: string }>;
}) {
  const { name } = await params;

  if (!validPrograms.includes(name as ProgramName)) {
    notFound();
  }

  const title = programTitles[name as ProgramName];

  return (
    <main className="">
      <section className="w-full bg-[#F6EBD4] py-20 sm:py-28 border-b border-[#4A4333]/10">
        <h1>{title}</h1>
      </section>
    </main>
  );
}
