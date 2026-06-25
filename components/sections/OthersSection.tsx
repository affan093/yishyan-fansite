import {
  specialAppearances,
  dramas,
  soloProjects,
  funFacts,
  songParticipation,
  klp48Info,
} from "@/lib/data";

export default function OthersSection() {
  return (
    <section className="section-container space-y-8 py-6 pb-10">

      <div>
        <h2 className="text-2xl font-bold text-[#1e3a8a]">
          💜 More About Yishyan
        </h2>

        <p className="mt-2 text-slate-600">
          Special activities, projects, achievements and fun facts about
          Yishyan.
        </p>

        <div className="mt-3 h-0.5 w-full bg-[#2563eb]/30" />
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Special Appearances */}
        <InfoCard title="🎯 Special Appearances">
          {specialAppearances.map((item) => (
            <li key={item.title}>
              ✨ {item.title}
            </li>
          ))}
        </InfoCard>

        {/* Drama */}
        <InfoCard title="🎬 Drama Involved">
          {dramas.map((item) => (
            <li key={item.title}>
              🎭 {item.title} — {item.role}
            </li>
          ))}
        </InfoCard>

        {/* Solo Projects */}
        <InfoCard title="💫 Solo Projects">
          {soloProjects.map((item) => (
            <li key={item.title}>🌟 {item.title}</li>
          ))}
        </InfoCard>

        {/* KLP48 Info */}
        <InfoCard title="🌟 KLP48 Information">
          {klp48Info.map((item) => (
            <li key={item}>📍 {item}</li>
          ))}
        </InfoCard>
      </div>

      {/* Fun Facts */}
      <InfoCard title="🎤 Fun Facts">
        {funFacts.map((fact) => (
          <li key={fact}>✨ {fact}</li>
        ))}
      </InfoCard>

      {/* Songs */}
      <InfoCard title="🎵 Song Participation">
        {songParticipation.map((song) => (
          <li key={song}>🎶 {song}</li>
        ))}
      </InfoCard>

      {/* Footer */}
      <div className="rounded-2xl border border-purple-200 bg-purple-50 p-6 text-center">
        <p className="text-lg font-bold text-purple-700">
          💜 Thank you for supporting Yishyan and KLP48! 💜
        </p>

        <p className="mt-2 text-sm text-slate-600">
          Every event, performance and achievement is made possible by the
          continuous support of fans.
        </p>
      </div>

    </section>
  );
}

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-lg font-bold text-[#1e3a8a]">
        {title}
      </h3>

      <ul className="space-y-2 text-slate-700">
        {children}
      </ul>
    </div>
  );
}