export const Avatar = ({ size, image }) => {
    const AvatarSizes = {
        small: {
            outer: "w-16 h-16",
            inner: "w-[60px] h-[60px]",
            image: "w-[56px] h-[56px]",
        },
        medium: {
            outer: "w-[74px] h-[74px]",
            inner: "w-[70px] h-[70px]",
            image: "w-[66px] h-[66px]",
        },
        large: {
            outer: "w-[100px] h-[100px]",
            inner: "w-[95px] h-[95px]",
            image: "w-[90px] h-[90px]",
        },
    }
    return (
        <div className={`avatar rounded-full ${AvatarSizes[size].outer} shrink-0 bg-insta-new-gradient flex items-center justify-center`}>
            <div className={`overflow-hidden rounded-full ${AvatarSizes[size].inner} shrink-0 bg-white flex items-center justify-center`}>
                <div className={`image-wrapper overflow-hidden ${AvatarSizes[size].image} shrink-0 rounded-full object-cover`}>
                    <img src={image} alt="profile of Michael Amponsah" />
                </div>
            </div>
        </div>

    )
}