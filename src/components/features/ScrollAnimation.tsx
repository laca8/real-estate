import { useInView } from 'react-intersection-observer';
import { ReactNode } from 'react';

type AnimationType = 'fade-up' | 'fade-left' | 'scale';

interface ScrollAnimationProps {
    children: ReactNode;
    animation?: AnimationType;
}

export function ScrollAnimation({
    children,
    animation = 'fade-up'
}: ScrollAnimationProps) {
    const { ref, inView } = useInView({
        threshold: 0.2,
        triggerOnce: true
    });

    const animations: Record<AnimationType, string> = {
        'fade-up': `transition-all duration-700 transform
     ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`,
        'fade-left': `transition-all duration-700 transform
     ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'}`,
        'scale': `transition-all duration-700 transform
     ${inView ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`
    };

    return (
        <div ref={ref} className={animations[animation]}>
            {children}
        </div>
    );
}