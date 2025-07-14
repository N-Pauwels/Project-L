import React, { useCallback, useEffect, useRef, useState } from 'react'

const GlowCard = ({card , children, index}) => {
    const cardRef = useRef(null);
  const mousePosRef = useRef({ x: 0, y: 0 });
  const animationFrameRef = useRef(null);
  const rectRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  const updateGlow = useCallback(() => {
    if (!cardRef.current || !rectRef.current) return;

    const rect = rectRef.current;
    const mouseX = mousePosRef.current.x - rect.left - rect.width / 2;
    const mouseY = mousePosRef.current.y - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    cardRef.current.style.setProperty('--start', angle + 60);
  }, []);

  const handleMouseMove = useCallback((e) => {
    mousePosRef.current = { x: e.clientX, y: e.clientY };
    if (!animationFrameRef.current) {
      animationFrameRef.current = requestAnimationFrame(() => {
        updateGlow();
        animationFrameRef.current = null;
      });
    }
  }, [updateGlow]);

  const updateRect = useCallback(() => {
    if (cardRef.current) {
      rectRef.current = cardRef.current.getBoundingClientRect();
      updateGlow();
    }
  }, [updateGlow]);

  // Intersection observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (entry.isIntersecting) updateRect(); // capture bounding box once visible
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) observer.observe(cardRef.current);

    return () => observer.disconnect();
  }, [updateRect]);

  // Conditionally attach mouse + scroll listeners
  useEffect(() => {
    if (!isVisible) return;

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', updateRect);
    window.addEventListener('resize', updateRect);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', updateRect);
      window.removeEventListener('resize', updateRect);
    };
  }, [isVisible, handleMouseMove, updateRect]);

  return (
    <div
        ref={cardRef}
        className="card card-border timeline-card rounded-xl p-10"
    >
        <div className="glow"/>
        {/* <div className="flex items-center gap-1 mb-5">
            {Array.from({length:5}, (_,i) =>(
                <img src="/images/star.png" key={i} alt="star"/>
            ))}
        </div> */}
        <div className="mb-5">
            <p className="text-white-50 text-lg">{card.explanation}</p>
        </div>
        {children}
    </div>
  )
}

export default GlowCard