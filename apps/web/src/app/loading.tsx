export default function Loading() {
  return (
    <div className="fixed inset-0 bg-light flex items-center justify-center z-[100]">
      <div className="flex flex-col items-center">
        <div className="w-16 h-16 border-4 border-teal/20 border-t-accent rounded-full animate-spin"></div>
        <div className="mt-4 font-display font-bold text-dark tracking-widest text-sm animate-pulse">
          YÜKLENİYOR...
        </div>
      </div>
    </div>
  );
}