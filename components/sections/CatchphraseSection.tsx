import { profileDetails } from "@/lib/data";

export default function CatchphraseSection() {
  return (
    <section className="section-container pb-6">
      <div className="rounded-2xl border border-[#93c5fd] bg-blue-50/80 p-5 md:p-6">
        <h2 className="mb-4 text-xl font-bold text-[#1e3a8a]">Catchphrase</h2>
        <div className="rounded-xl border border-[#bfdbfe] bg-white p-6 text-center">
          <p className="font-serif text-lg italic text-slate-800 md:text-xl">
            &ldquo;{profileDetails.catchphrase}&rdquo;
          </p>
          <p className="mt-3 font-serif text-sm italic text-slate-500">
            {profileDetails.catchphraseTranslation}
          </p>
        </div>
      </div>
    </section>
  );
}
