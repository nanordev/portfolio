import React from 'react'

export const Testimonials = () => {
    const length = [1, 2, 4, 5, 6]
    const image = "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"

    return (
            <div className='flex items-center justify-between overflow-hidden p-4 flex-wrap'>
                {/* <Avatar image={image} />
                <Avatar image={image} />
                <Avatar image={image} />
                <Avatar image={image} />
                <Avatar image={image} />
                <Avatar image={image} />
                <Avatar image={image} />
                <Avatar image={image} />
                <Avatar image={image} />
            <Avatar image={image} /> */}

                {/* {length.map(() => (
                    // <Avatar image={image} />
                ))} */}

            </div>
    )
}



// export const Avatar = ({ image }) => {
//     return (
//         <div className="avatar rounded-full w-16 h-16 shrink-0 bg-insta-new-gradient flex items-center justify-center cursor-pointer">
//             <div className="overflow-hidden rounded-full white-circle shrink-0 bg-white flex items-center justify-center">
//                 <div className="image-wrapper overflow-hidden w-14 h-14 w rounded-full object-cover">
//                     <img src={image} alt="profile of Michael Amponsah" />
//                 </div>
//             </div>
//         </div>
//     )
// }