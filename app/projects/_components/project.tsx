type ProjectProps = {
  title: string;
  role: string;
  year: string;
  description: string[];
};

export default function Project({
  title,
  role,
  year,
  description,
}: ProjectProps) {
  return (
    <div className="flex flex-col gap-2 py-6 border-t border-gray-200">
      <div className="flex justify-between items-start">
        <div className="flex flex-col">
          <h3 className="font-[family-name:var(--font-montserrat)] text-lg font-medium">
            {title}
          </h3>
          <span className="text-gray-600 text-sm mt-1">{role}</span>
        </div>
        <span className="text-gray-500 text-sm">{year}</span>
      </div>
      <ul className="list-disc ml-4 text-gray-200 space-y-1 mt-2">
        {description.map((item, index) => (
          <li key={index} className="text-sm">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
