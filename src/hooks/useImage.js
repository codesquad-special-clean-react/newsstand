const useImage = (imageRef, altImageURL = 'https://file.mk.co.kr/meet/neds/2021/05/image_readtop_2021_468708_16209907304645857.jpg') => {
    const handleImageLoadFail = (error) => {
        console.error(error);
        imageRef.current.src = altImageURL;
    };

    return { handleImageLoadFail };
};

export default useImage;