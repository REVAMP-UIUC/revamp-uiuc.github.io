export default function Placeholder({ title, description }: { title: string; description?: string }) {
  return (
    <section className="py-24">
      <div className="container max-w-4xl text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{title}</h1>
        {description ? (
          <p className="text-muted-foreground">{description}</p>
        ) : (
          <p className="text-muted-foreground">This page will be built next. Tell me what content and structure you want here.</p>
        )}
      </div>
    </section>
  );
}
