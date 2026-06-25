import { merchCategories } from "@/lib/data";

export default function MerchSection() {
  return (
    <section className="section-container space-y-8 py-6 pb-10">
      <div>
        <h2 className="flex items-center gap-2 text-xl font-bold text-[#1e3a8a]">
          <span aria-hidden>🛍️</span> Merchandise
        </h2>
        <div className="mt-2 h-0.5 w-full bg-[#2563eb]/30" />
      </div>

      {merchCategories.map((category) => (
        <div key={category.id}>
          <h3 className="mb-3 text-lg font-bold text-[#2563eb]">{category.title}</h3>
          <ul className="space-y-2">
            {category.items.map((item) => (
              <li key={item.id}>
                <article className="content-card px-4 py-3">
                  <h4 className="font-semibold text-slate-900">{item.name}</h4>
                </article>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
