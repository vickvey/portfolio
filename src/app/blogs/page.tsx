"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

const demoBlogs = [
  {
    title: "The Illusion of Free Will",
    topic: "Philosophy",
    excerpt:
      "Can we truly make choices, or are they all determined by prior causes?",
  },
  {
    title: "Quantum Entanglement Explained Simply",
    topic: "Science",
    excerpt:
      "A look at how two particles can remain connected across vast distances.",
  },
  {
    title: "Understanding AI Consciousness",
    topic: "AI",
    excerpt:
      "Is artificial intelligence capable of true awareness — or just imitation?",
  },
  {
    title: "The Beauty of Euler’s Formula",
    topic: "Maths",
    excerpt:
      "Why e^(iπ) + 1 = 0 is called the most beautiful equation in mathematics.",
  },
  {
    title: "The Future of Edge Computing",
    topic: "Tech",
    excerpt:
      "How decentralization is reshaping data processing and performance.",
  },
];

export default function BlogHomePage() {
  const [search, setSearch] = useState("");

  const filteredBlogs = demoBlogs.filter(
    (blog) =>
      blog.title.toLowerCase().includes(search.toLowerCase()) ||
      blog.topic.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="w-full px-6 py-10 space-y-10">
      {/* Header */}
      <header className="space-y-3">
        <h1 className="text-5xl font-secondary font-bold tracking-tight">
          Thoughts, Ideas & Reflections
        </h1>
        <p className="text-muted-foreground max-w-2xl font-primary">
          Exploring the intersections of philosophy, science, technology, and
          the human condition.
        </p>
      </header>

      {/* Search Bar */}
      <div className="max-w-md">
        <Input
          type="text"
          placeholder="Search topics or titles..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full"
        />
      </div>

      {/* Blog List */}
      <div className="grid gap-8 md:grid-cols-2">
        {filteredBlogs.length > 0 ? (
          filteredBlogs.map((blog, index) => (
            <Card
              key={index}
              className="transition-all hover:shadow-md border-border bg-card text-card-foreground"
            >
              <CardHeader>
                <CardTitle className="font-secondary">{blog.title}</CardTitle>
                <CardDescription className="font-primary text-muted-foreground">
                  {blog.excerpt}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Badge variant="secondary" className="font-sans">
                  {blog.topic}
                </Badge>
              </CardContent>
            </Card>
          ))
        ) : (
          <p className="text-muted-foreground font-primary">No blogs found.</p>
        )}
      </div>
    </div>
  );
}
