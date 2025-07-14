import React from 'react'

const TitleHeader = ({title, sub, className}) => {
  return (
    <div className="relative flex flex-col items-center gap-5">
      <div
        className="absolute w-full h-full bg-black opacity-50 z-10"
      />
        <div className="hero-badge z-20">
            <p>{sub}</p>
        </div>
        <div className="font-semibold md:text-5xl text-3xl text-center z-20">
            {title}
        </div>
    </div>
  )
}

export default TitleHeader