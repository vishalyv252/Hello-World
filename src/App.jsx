import React from 'react'
import Text from './Components/Text';

const App = () => {
    return (
        <div>


            {/* This is for 4K Size */}
            <div className='hidden 4K:block Laptop_Small:hidden Tablet:hidden Mobile_Large:hidden Mobile_Medium:hidden Mobile_Small:hidden'>
                <div className='flex justify-center items-center h-screen w-full'>
                    <div className='flex justify-center items-center h-screen w-full bg-black'>
                        <div className='flex justify-center items-center h-full w-auto'>
                            {/*I added the text component from Text.jsx file.*/}
                            <Text />
                        </div>
                    </div>
                </div>
            </div>

            {/* This is for Desktop large Size */}
            <div className='block 4K:hidden Laptop_Small:hidden Tablet:hidden Mobile_Large:hidden Mobile_Medium:hidden Mobile_Small:hidden'>
                <div className='flex justify-center items-center h-screen w-full'>
                    <div className='flex justify-center items-center h-screen w-full bg-black'>
                        <div className='flex justify-center items-center h-full w-auto'>
                            {/*I added the text component from Text.jsx file.*/}
                            <Text />
                        </div>
                    </div>
                </div>
            </div>

            {/* This is for Desktop small Size */}
            <div className='hidden 4K:hidden Laptop_Small:block Tablet:hidden Mobile_Large:hidden Mobile_Medium:hidden Mobile_Small:hidden'>
                <div className='flex justify-center items-center h-screen w-full'>
                    <div className='flex justify-center items-center h-screen w-full bg-black'>
                        <div className='flex justify-center items-center h-full w-auto'>
                            {/*I added the text component from Text.jsx file.*/}
                            <Text />
                        </div>
                    </div>
                </div>
            </div>
            
            {/* This is for Tablet Size */}
            <div className='hidden 4K:hidden Laptop_Small:hidden Tablet:block Mobile_Large:hidden Mobile_Medium:hidden Mobile_Small:hidden'>
                <div className='flex justify-center items-center h-screen w-full overflow-x-hidden overflow-y-auto Potrait:h-auto Potrait:overflow-y-hidden'>
                    <div className='flex justify-center items-center h-screen w-full bg-black'>
                        <div className='flex justify-center items-center h-full w-auto'>
                            {/*I added the text component from Text.jsx file.*/}
                            <Text />
                        </div>
                    </div>
                </div>
            </div>

            {/* This is for Mobile Large Size */}
            <div className='hidden 4K:hidden Laptop_Small:hidden Tablet:hidden Mobile_Large:block Mobile_Medium:hidden Mobile_Small:hidden'>
                <div className='flex justify-center items-center h-screen w-full overflow-x-hidden overflow-y-auto Potrait:h-auto Potrait:overflow-y-hidden'>
                    <div className='flex justify-center items-center h-screen w-full bg-black'>
                        <div className='flex justify-center items-center h-full w-auto'>
                            {/*I added the text component from Text.jsx file.*/}
                            <Text />
                        </div>
                    </div>
                </div>
            </div>

            {/* This is for Mobile Medium Size */}
            <div className='hidden 4K:hidden Laptop_Small:hidden Tablet:hidden Mobile_Large:hidden Mobile_Medium:block Mobile_Small:hidden'>
                <div className='flex justify-center items-center h-screen w-full overflow-x-hidden overflow-y-auto Potrait:h-auto Potrait:overflow-y-hidden'>
                    <div className='flex justify-center items-center h-screen w-full bg-black'>
                        <div className='flex justify-center items-center h-full w-auto'>
                            {/*I added the text component from Text.jsx file.*/}
                            <Text />
                        </div>
                    </div>
                </div>
            </div>

            {/* This is for Mobile Small Size */}
            <div className='hidden 4K:hidden Laptop_Small:hidden Tablet:hidden Mobile_Large:hidden Mobile_Medium:hidden Mobile_Small:block'>
                <div className='flex justify-center items-center h-screen w-full overflow-x-hidden overflow-y-auto Potrait:h-auto Potrait:overflow-y-hidden'>
                    <div className='flex justify-center items-center h-screen w-full bg-black'>
                        <div className='flex justify-center items-center h-full w-auto'>
                            {/*I added the text component from Text.jsx file.*/}
                            <Text />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default App;