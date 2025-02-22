"use client";
import { motion } from "framer-motion";
import { Clock, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogGrid({ article }) {
  console.log(article?.thumbnail_url);
  return (
    <div className="mx-auto max-w-4xl px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <div className="space-y-8">
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Link
              href={`/blogs/${article?.slug}`}
              className="group relative flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white/50 p-6 transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/20 dark:border-slate-800 dark:bg-slate-900/50 dark:hover:bg-slate-900 dark:hover:shadow-slate-900/20 sm:flex-row sm:items-center sm:gap-6"
            >
              <div className="aspect-video w-full overflow-hidden rounded-lg sm:w-48 lg:w-64">
                <Image
                  src={`/blogs${article?.thumbnail_url}`}
                  alt={article?.title}
                  width={256}
                  height={144}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex-1 space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 sm:text-2xl">
                    {article?.title}
                  </h3>
                  <p className="mt-2 text-slate-600 dark:text-slate-400">
                    {article?.sub_title}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-slate-600 dark:text-slate-400">
                  <span>{article?.creation_time.slice(0, 10)}</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {article?.read_time}
                  </span>
                  <span className="flex items-center gap-1">
                    <Eye className="h-4 w-4" />
                    {article?.views} views
                  </span>
                </div>
              </div>
            </Link>
          </motion.article>
        </div>
      </motion.div>
    </div>
  );
}
