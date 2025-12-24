"use client"

export function AnimatedBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Floating and moving dots - slow, subtle star-like movement */}
      <div className="absolute top-[15%] left-[8%] w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-float shadow-[0_0_12px_rgba(59,130,246,0.6)]"
           style={{ animationDuration: "12s" }} />
      <div className="absolute top-[22%] left-[18%] w-2.5 h-2.5 bg-violet-500 dark:bg-violet-400 rounded-full animate-float-alt shadow-[0_0_15px_rgba(139,92,246,0.6)]"
           style={{ animationDelay: "2s", animationDuration: "14s" }} />
      <div className="absolute top-[12%] left-[25%] w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full animate-float-wide shadow-[0_0_10px_rgba(59,130,246,0.5)]"
           style={{ animationDelay: "4s", animationDuration: "13s" }} />

      <div className="absolute top-[18%] right-[12%] w-2 h-2 bg-violet-500 dark:bg-violet-400 rounded-full animate-float-wide shadow-[0_0_12px_rgba(139,92,246,0.6)]"
           style={{ animationDelay: "3s", animationDuration: "15s" }} />
      <div className="absolute top-[10%] right-[20%] w-2.5 h-2.5 bg-blue-500 dark:bg-blue-400 rounded-full animate-float shadow-[0_0_15px_rgba(59,130,246,0.6)]"
           style={{ animationDelay: "1s", animationDuration: "16s" }} />
      <div className="absolute top-[25%] right-[8%] w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-float-alt shadow-[0_0_10px_rgba(16,185,129,0.5)]"
           style={{ animationDelay: "5s", animationDuration: "12s" }} />

      <div className="absolute top-[35%] left-[15%] w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-float-alt shadow-[0_0_12px_rgba(16,185,129,0.6)]"
           style={{ animationDelay: "3s", animationDuration: "14s" }} />
      <div className="absolute top-[40%] left-[5%] w-2.5 h-2.5 bg-violet-500 dark:bg-violet-400 rounded-full animate-float-wide shadow-[0_0_15px_rgba(139,92,246,0.6)]"
           style={{ animationDelay: "6s", animationDuration: "17s" }} />

      <div className="absolute top-[38%] right-[18%] w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-float shadow-[0_0_12px_rgba(59,130,246,0.6)]"
           style={{ animationDelay: "4s", animationDuration: "13s" }} />
      <div className="absolute top-[32%] right-[6%] w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-float-wide shadow-[0_0_10px_rgba(16,185,129,0.5)]"
           style={{ animationDelay: "2s", animationDuration: "15s" }} />

      <div className="absolute bottom-[35%] left-[12%] w-2 h-2 bg-blue-500 dark:bg-blue-400 rounded-full animate-float-alt shadow-[0_0_12px_rgba(59,130,246,0.6)]"
           style={{ animationDelay: "5s", animationDuration: "14s" }} />
      <div className="absolute bottom-[28%] left-[22%] w-2.5 h-2.5 bg-violet-500 dark:bg-violet-400 rounded-full animate-float shadow-[0_0_15px_rgba(139,92,246,0.6)]"
           style={{ animationDelay: "1s", animationDuration: "16s" }} />

      <div className="absolute bottom-[32%] right-[15%] w-2 h-2 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-float-wide shadow-[0_0_12px_rgba(16,185,129,0.6)]"
           style={{ animationDelay: "3s", animationDuration: "13s" }} />
      <div className="absolute bottom-[25%] right-[8%] w-1.5 h-1.5 bg-blue-500 dark:bg-blue-400 rounded-full animate-float-alt shadow-[0_0_10px_rgba(59,130,246,0.5)]"
           style={{ animationDelay: "6s", animationDuration: "15s" }} />
    </div>
  )
}
