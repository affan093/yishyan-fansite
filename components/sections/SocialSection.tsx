import { profileDetails } from "@/lib/data";

export default function SocialSection() {
  const links = [
    {
      name: "Instagram",
      label: profileDetails.social.instagram.label,
      href: profileDetails.social.instagram.href,
      className:
        "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700",
      icon: "📷",
    },
    {
      name: "X / Twitter",
      label: profileDetails.social.twitter.label,
      href: profileDetails.social.twitter.href,
      className: "bg-black hover:bg-gray-900",
      icon: "𝕏",
    },
    {
      name: "TikTok",
      label: profileDetails.social.tiktok.label,
      href: profileDetails.social.tiktok.href,
      className: "bg-gradient-to-r from-gray-900 to-slate-700 hover:from-black hover:to-slate-800",
      icon: "♪",
    },
  ];

  return (
    <section id="follow" className="section-container pb-10">
      <div className="content-card p-5 md:p-6">
        <h2 className="mb-5 text-xl font-bold text-[#1e3a8a]">Follow Yishyan</h2>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex flex-1 items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-white transition sm:min-w-[200px] ${link.className}`}
            >
              <span aria-hidden>{link.icon}</span>
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
