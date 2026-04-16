// components/SkeletonKPI.tsx
export function SkeletonKPI() {
  return (
    <div className="kpi-card animate-pulse">
      <div className="h-4 bg-gray-300 rounded w-1/2 mb-2"></div>
      <div className="h-6 bg-gray-300 rounded w-1/3"></div>
    </div>
  );
}
