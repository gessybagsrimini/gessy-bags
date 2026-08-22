const PageHero = ({ eyebrow, title, description }) => {
  return (
    <section className="bg-ink px-6 pb-20 pt-40 text-surface sm:px-8 sm:pb-24 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <p className="mb-6 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
          {eyebrow}
        </p>
        <div className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <h1 className="font-serif text-5xl font-normal leading-tight sm:text-7xl lg:col-span-8">
            {title}
          </h1>
          <p className="max-w-xl border-l border-sand/40 pl-6 text-lg leading-8 text-sand lg:col-span-4">
            {description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default PageHero
