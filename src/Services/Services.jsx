import React from 'react'


const Services = (props) => {
    const {staticData, name} = props
    const gridSpacing = staticData.length
    console.log("services called");
  return (
    <div className={`bg-[#002665] mx-[120px] rounded-[10px] px-[36px] py-[24px] ${gridSpacing < 7 ? 'mt-[40px]' : 'mt-[20px]' }`}>
        <h2 className='text-[#FF6D00] font-open-sans text-[32px] font-bold leading-none'>{name}</h2>
        <div className={`grid ${gridSpacing < 7 ? 'grid-cols-4' : 'grid-cols-7' }`}>
            {
                staticData.map((data) => {
                    return (
                        <div className='flex flex-col justify-center items-center mr-[4px] mt-[28px] h-[109px]'>
                            <img className={data.imageStyling} src={data.imageUrl} alt={data.name} />
                            <p className={`text-center text-[#FFF] font-open-sans text-[14px] font-semibold leading-none ${data.name === 'Fast Tag' ? 'mt-[30px]' : 'mt-[4px]'}`}>{data.name}</p>
                        </div>
                    )
                })
            }
        </div>

    </div>
  )
}

export default Services