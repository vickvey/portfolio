export default function Footer() {
  return (
    <footer className="bg-gray-900 dark:bg-gray-400 py-10 px-6 text-muted-foreground rounded-t-4xl text-sm md:text-base">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
          <p>&copy; 2025 Vivek Kumar</p>
          <a
            href="https://storyset.com/work"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-primary"
          >
            Work illustrations by Storyset
          </a>
        </div>
        <div className="text-xs opacity-80">
          <p>Built with ❤️ using Next.js & Tailwind CSS</p>
        </div>
      </div>
    </footer>
  );
}
