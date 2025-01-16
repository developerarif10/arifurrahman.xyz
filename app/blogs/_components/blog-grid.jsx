export default function BlogGrid({ title, views }) {
  //   console.log(title);
  return (
    <div className="mb-4">
      <h3 className="text-lg font-medium bg-slate-900 p-2 cursor-pointer">
        {title}
      </h3>
      <p className="text-gray-500 text-sm">{views.toLocaleString()} views</p>
    </div>
  );
}
