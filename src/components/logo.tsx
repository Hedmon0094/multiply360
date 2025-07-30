export function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 text-foreground ${className}`}>
      <svg
        className="h-7 w-7 text-primary"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.5 9.5C15.5 8.42011 15.0786 7.38571 14.3284 6.63553C13.5782 5.88536 12.5438 5.46429 11.5 5.46429C9.5 5.46429 8.5 6.96429 8.5 6.96429M8.5 6.96429V9.5M8.5 6.96429H10"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M8.5 14.5C8.5 15.5799 8.92143 16.6143 9.67157 17.3645C10.4217 18.1146 11.4561 18.5357 12.5 18.5357C14.5 18.5357 15.5 17.0357 15.5 17.0357M15.5 17.0357V14.5M15.5 17.0357H14"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 12H12.5"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <span className="text-xl font-bold">Multiply360</span>
    </div>
  );
}
