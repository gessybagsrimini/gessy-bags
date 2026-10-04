const PageHero = ({ title, description }) => {
  return (
    <section className="border-b border-sand">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-8 sm:py-14">
        <h1 className="text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/80">
          {description}
        </p>
      </div>
    </section>
  )
}

export default PageHero
