function Badge({ children, variant = "default" }) {
  const variants = {
    default: "bg-gray-100 text-gray-700",

    high: "bg-red-100 text-red-700",
    medium: "bg-yellow-100 text-yellow-700",
    low: "bg-green-100 text-green-700",

    open: "bg-blue-100 text-blue-700",
    "in-progress": "bg-orange-100 text-orange-700",
    resolved: "bg-emerald-100 text-emerald-700",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-medium ${variants[variant]}`}
    >
      {children}
    </span>
  );
}

export default Badge;