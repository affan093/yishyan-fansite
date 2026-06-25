import { profileDetails } from "@/lib/data";

export default function ProfileSection() {
  const detailItems = [
    { label: "Birthday", value: profileDetails.birthday },
    { label: "Birthplace", value: profileDetails.birthplace },
    { label: "Height", value: profileDetails.height },
    { label: "Zodiac Sign", value: `♋ ${profileDetails.zodiac}` },
    { label: "Position", value: profileDetails.position },
  ];

  return (
    <section id="profile-detail" className="section-container pb-6">
      <div className="content-card overflow-hidden">
        <div className="bg-[#2563eb] px-6 py-5 md:px-8">
          <h2 className="text-2xl font-bold text-white md:text-3xl">
            {profileDetails.fullName}
          </h2>
          <p className="mt-1 text-blue-100">{profileDetails.title}</p>
        </div>

        <div className="grid gap-10 p-6 md:grid-cols-2 md:p-8">
          <div className="space-y-5">
            {detailItems.map((item) => (
              <div key={item.label} className="flex gap-3">
                <div className="mt-1 h-full w-1 shrink-0 rounded-full bg-[#2563eb]" />
                <div>
                  <p className="text-sm text-slate-500">{item.label}</p>
                  <p className="text-lg font-bold text-slate-900">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="space-y-8">
            <div>
              <p className="mb-3 text-sm text-slate-500">Hobbies</p>
              <div className="flex flex-wrap gap-2">
                {profileDetails.hobbies.map((hobby) => (
                  <span
                    key={hobby}
                    className="pill-tag bg-blue-100 text-[#2563eb]"
                  >
                    {hobby}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm text-slate-500">Special Skills</p>
              <div className="flex flex-wrap gap-2">
                {profileDetails.specialSkills.map((skill) => (
                  <span
                    key={skill}
                    className="pill-tag bg-[#2563eb] text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-3 text-sm text-slate-500">Charm Points</p>
              <div className="flex flex-wrap gap-2">
                {profileDetails.charmPoints.map((point) => (
                  <span
                    key={point}
                    className="pill-tag border-2 border-[#2563eb] bg-white text-[#2563eb]"
                  >
                    ✨ {point}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
