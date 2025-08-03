function FillerSection({ className }: { className?: string }) {
  return (
    <section
      className={`flex flex-col space-y-8 min-h-screen ${className}`.trim()}
    >
      <h2 className="text-3xl font-bold">Filler Section</h2>
      <div className="space-y-6 text-lg">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
          commodi quibusdam, ut odio culpa quas vitae porro voluptas beatae
          perspiciatis sit mollitia accusamus corporis sapiente tempore ratione
          tenetur dolorem nihil!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
          perferendis minus facilis quasi, eos saepe, sed cumque ullam
          voluptatum voluptate blanditiis, atque ipsa soluta officiis. Totam
          amet magni aspernatur quos.
        </p>
      </div>
    </section>
  );
}
