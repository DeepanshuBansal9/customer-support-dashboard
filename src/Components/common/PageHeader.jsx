function PageHeader({ title, description }) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900">
        {title}
      </h1>

      <p className="mt-1 text-sm text-gray-500">
        {description}
      </p>
    </div>
  );
}

export default PageHeader;