export default function FillerArticle({ className }: { className?: string }) {
  return (
    <section className="py-32">
      <article className={`${className}`.trim()}>
        <div className="flex flex-col space-y-8">
          <h1 className="text-6xl font-secondary">
            Minimalism is the true way of living life.
          </h1>
          <p className="text-primary">
            Life is very small, ipsum dolor sit amet consectetur adipisicing
            elit. Omnis eum ad corporis saepe in a. Aut sed quod voluptas
            aliquid deleniti, ipsam similique beatae magnam impedit, laboriosam
            explicabo id repellat! Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. <br />
            Quasi alias adipisci doloribus id consectetur tempora ullam dicta?
            Facilis laborum accusamus pariatur odio molestias quis nulla
            incidunt soluta quas a. Provident. Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Deleniti ipsa expedita, blanditiis non
            et beatae voluptatibus, sed eius enim neque perferendis voluptates
            facilis debitis veniam! Tenetur ipsam harum obcaecati eligendi!
          </p>
        </div>
      </article>
    </section>
  );
}
