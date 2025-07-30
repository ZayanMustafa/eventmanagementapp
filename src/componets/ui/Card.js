




import { hoverScale } from "@/lib/animation";

export default function Card({ title, description, image, date }) {
  return (
    <div className={`bg-white rounded-xl shadow-md overflow-hidden hover:scale-105 transition-transform ${hoverScale}`}>
      {/* Image */}
      <div className="h-48 bg-dark-100 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <span className="text-4xl text-dark-500">📚</span>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-2 text-slate-800">{title}</h3>
        <p className="text-lg text-slate-600 mb-4">{description}</p>
        <div className="flex justify-between items-center">
          <span className="text-dark-600 font-medium">{date}</span>
          <button className="bg-dark-100 text-dark-700 px-4 py-2 rounded-lg font-semibold hover:bg-dark-200 transition-colors">
            Enroll
          </button>
        </div>
      </div>
    </div>
  );
}