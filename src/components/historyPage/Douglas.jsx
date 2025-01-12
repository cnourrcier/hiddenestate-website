import './Douglas.css';

const Douglas = () => {
    const videoSrc = `https://res.cloudinary.com/${
        import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV
      }/video/upload/v1735404700/Hidden%20Gable%20Estate/history%20page/DouglasFamily2003-2015_jp36oq.mp4`;


    return (
        <div className="douglas">
                <div className='douglas__flex-container'>
                    <div className="douglas__video-container">
                        <video
                            controls
                        >
                            <source src={ videoSrc } type="video/mp4" />
                        </video>
                    </div>
                    <div className='douglas__content-container'>
                        <div className='douglas__logo-container'>
                                <img src={`https://res.cloudinary.com/${import.meta.env.VITE_CLOUDINARY_PRODUCT_ENV}/image/upload/v1736385319/Hidden%20Gable%20Estate/history%20page/Screenshot_2025-01-08_at_8.14.08_PM_sdkx6o.png`} alt="" />
                        </div>
                        <div className='douglas__text-container'>
                            <div className='douglas__text-title'>
                                <p><b>Joel Douglas, Son of Kirk Douglas </b></p>
                                <p><b>November 2, 2014 </b></p>
                            </div>
                            <p>
                                “My wife thought I was absolutely crazy undertaking a place that was probably going to be tremendous to try and get into shape,” he adds. “But I just loved it. And then, of course, I found out after I came here that it was Carole Lombard and Clark Gable’s last residence. And Sammy Davis rented it at one time, [so] it has quite an illustrious past all the way back to 1925. It’s part of a very strong heritage of what this village was,” says Douglas.
                            </p>
                            <p>
                                Joel Douglas has worked on such films as “One Flew Over the Cuckoo’s Nest” (1975), “Romancing the Stone” (1984) and “It Runs in the Family” (2003), which starred his father (Kirk Douglas) and brother (Michael Douglas).
                            </p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Douglas;