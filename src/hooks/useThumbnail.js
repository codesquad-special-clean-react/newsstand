const useThumbnail = (thumbnailRef) => {
    const handleImageLoadFail = (error) => {
        const alternativeImageUrl = 'https://file.mk.co.kr/meet/neds/2021/05/image_readtop_2021_468708_16209907304645857.jpg';
        thumbnailRef.current.src = alternativeImageUrl;
    };

    return { handleImageLoadFail };
};

export default useThumbnail;