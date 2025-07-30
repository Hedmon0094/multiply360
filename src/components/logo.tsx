export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 text-foreground ${className}`}>
      <svg
        className="h-10 w-10 text-primary shrink-0"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 7C10.6554 7.4938 10.9631 7.93172 11.3881 8.26189C11.8131 8.59206 12.3333 8.8001 12.87 8.86C14.71 9.08 15.5 10.59 15.5 10.59C15.5 10.59 16.5 10.03 17.5 10.5C18.5 10.97 18.5 12.5 18.5 12.5C18.5 12.5 18.5 15.5 15 17C11.5 18.5 7.5 16.5 7.5 12.5C7.5 8.5 10.5 7 10.5 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M10.5 7C10.5 7 9.5 5.5 8 5.5C6.5 5.5 6 7 6 7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <div>
        <span className="text-xl font-bold">Multiply360</span>
        <p className="text-xs text-muted-foreground -mt-1">A Life Ministry Kenya App</p>
      </div>
    </div>
  );
}