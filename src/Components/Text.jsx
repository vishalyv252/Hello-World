import React from 'react'

const Text = () => {
    return (
        <div>

            {/* The text is displayed only on 4K Size */}
            <div className='hidden 4K:block Laptop_Small:hidden Tablet:hidden Mobile_Large:hidden Mobile_Medium:hidden Mobile_Small:hidden'>
                <h1 className='font-Pixelify_Sans text-[200px] text-white'>Hello World!</h1>
            </div>

            {/* The text is displayed only on Desktop Large Size */}
            <div className='block 4K:hidden Laptop_Small:hidden Tablet:hidden Mobile_Large:hidden Mobile_Medium:hidden Mobile_Small:hidden'>
                <h1 className='font-Pixelify_Sans text-9xl text-white'>Hello World!</h1>
            </div>

            {/* The text is displayed only on Desktop Small Size */}
            <div className='hidden 4K:hidden Laptop_Small:block Tablet:hidden Mobile_Large:hidden Mobile_Medium:hidden Mobile_Small:hidden'>
                <h1 className='font-Pixelify_Sans text-9xl text-white'>Hello World!</h1>
            </div>

            {/* The text is displayed only on Tablet Size */}
            <div className='hidden 4K:hidden Laptop_Small:hidden Tablet:block Mobile_Large:hidden Mobile_Medium:hidden Mobile_Small:hidden'>
                <h1 className='font-Pixelify_Sans text-6xl text-white sm:text-7xl'>Hello World!</h1>
            </div>

            {/* The text is displayed only on Mobile Large Size */}
            <div className='hidden 4K:hidden Laptop_Small:hidden Tablet:hidden Mobile_Large:block Mobile_Medium:hidden Mobile_Small:hidden'>
                <h1 className='font-Pixelify_Sans text-6xl text-white'>Hello World!</h1>
            </div>

            {/* The text is displayed only on Mobile Medium Size */}
            <div className='hidden 4K:hidden Laptop_Small:hidden Tablet:hidden Mobile_Large:hidden Mobile_Medium:block Mobile_Small:hidden'>
                <h1 className='font-Pixelify_Sans text-5xl text-white'>Hello World!</h1>
            </div>

            {/* The text is displayed only on Mobile Small Size */}
            <div className='hidden 4K:hidden Laptop_Small:hidden Tablet:hidden Mobile_Large:hidden Mobile_Medium:hidden Mobile_Small:block'>
                <h1 className='font-Pixelify_Sans text-4xl text-white'>Hello World!</h1>
            </div>

        </div>
    )
}

export default Text;