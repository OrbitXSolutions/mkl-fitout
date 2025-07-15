'use client'

import { Logo } from '@/components/atomic/atoms/Logo'
import { TextAnimate } from '@/components/magicui/text-animate'
import { TypingAnimation } from '@/components/magicui/typing-animation'
import { SparklesText } from '@/components/magicui/sparkles-text'
import { cn } from '@/lib/utils'

function AppLoading() {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-background to-muted/30 backdrop-blur-sm">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Floating Geometric Shapes */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-primary/5 animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute top-3/4 right-1/4 w-24 h-24 rounded-lg bg-secondary/5 animate-bounce" style={{ animationDuration: '3s' }} />
                <div className="absolute bottom-1/4 left-1/3 w-16 h-16 rounded-full bg-accent/10 animate-ping" style={{ animationDuration: '2s' }} />

                {/* Animated Circles */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="w-96 h-96 rounded-full border border-primary/10 animate-spin-slow" />
                    <div className="absolute top-4 left-4 w-88 h-88 rounded-full border-2 border-dashed border-secondary/10 animate-spin-reverse" />
                    <div className="absolute top-8 left-8 w-80 h-80 rounded-full border border-accent/10 animate-spin-slower" />
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center space-y-8 px-4">
                {/* Logo with Scale Animation */}
                <div className="relative">
                    <div className={cn(
                        "flex items-center justify-center p-6 rounded-2xl",
                        "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md",
                        "shadow-2xl border border-white/20",
                        "animate-[pulse_2s_ease-in-out_infinite]"
                    )}>
                        <Logo className="w-20 h-20 md:w-24 md:h-24 animate-[bounce_3s_ease-in-out_infinite]" />
                    </div>

                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer pointer-events-none" />
                </div>

                {/* Company Name with Text Animation */}
                <div className="text-center space-y-4">
                    <TextAnimate
                        className="text-4xl md:text-6xl font-bold text-foreground"
                        segmentClassName="font-serif"
                        animation="slideUp"
                        duration={0.8}
                        delay={0.5}
                    >
                        MKL-Fitout
                    </TextAnimate>

                    {/* Sparkles Text for Tagline */}
                    <SparklesText
                        className="text-lg md:text-xl text-muted-foreground font-medium"
                        colors={{ first: "#8B5CF6", second: "#06B6D4" }}
                        sparklesCount={6}
                    >
                        Interiors & Wood Works
                    </SparklesText>
                </div>

                {/* Loading Message with Typing Animation */}
                <div className="text-center">
                    <TypingAnimation
                        className="text-base md:text-lg text-muted-foreground"
                        duration={50}
                        delay={2000}
                    >
                        Crafting exceptional spaces...
                    </TypingAnimation>
                </div>

                {/* Loading Dots Animation */}
                <div className="flex space-x-2">
                    {[0, 1, 2].map((i) => (
                        <div
                            key={i}
                            className={cn(
                                "w-3 h-3 bg-primary rounded-full",
                                "animate-bounce"
                            )}
                            style={{
                                animationDelay: `${i * 0.2}s`,
                                animationDuration: '1.4s'
                            }}
                        />
                    ))}
                </div>

                {/* Progress Bar */}
                <div className="w-64 h-1 bg-muted rounded-full overflow-hidden">
                    <div className="h-full bg-gradient-to-r from-primary via-secondary to-accent animate-loading-bar w-full" />
                </div>

                {/* Percentage Counter (Optional) */}
                <div className="text-sm text-muted-foreground animate-pulse">
                    <span className="font-mono">Loading...</span>
                </div>
            </div>

            {/* Custom Styles */}
            <style jsx global>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes loading-bar {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s ease-in-out infinite;
        }
        
        .animate-loading-bar {
          animation: loading-bar 2s ease-in-out infinite;
        }
        
        .animate-spin-slow {
          animation: spin 20s linear infinite;
        }
        
        .animate-spin-slower {
          animation: spin 25s linear infinite;
        }
        
        .animate-spin-reverse {
          animation: spin 15s linear infinite reverse;
        }
      `}</style>
        </div>
    )
}

export default { AppLoading };