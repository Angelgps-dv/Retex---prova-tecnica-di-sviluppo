import "./ImageInformative.css";

export const ImageInformative = ({
  className,
  isBannerStyle,
  badgeText,
  title,
  avatarName,
  avatarDate,
  ArrowIcon,
  avatarImg,
  backgroundImg,
  isHorizontalBannerStyle,
}) => {
  return (
    <div
      className={`img-wrapper ${className || ""}`}
      style={{
        backgroundImage: `url(${backgroundImg})`,
      }}
    >
      <div
        className={`img-content ${isBannerStyle ? "img-content-banner" : ""}`}
      >
        <div
          className={`img-content-contain ${
            isBannerStyle ? "img-content-contain-banner" : ""
          }`}
        >
          <div className="badge">{badgeText}</div>
          <div className="title-container">
            <div
              className={`title ${isBannerStyle ? "title-banner" : ""} ${
                isHorizontalBannerStyle ? "title-banner-horizontal" : ""
              }`}
            >
              {title}
            </div>
            {!isHorizontalBannerStyle && (
              <div className="arrow">{ArrowIcon}</div>
            )}
          </div>
          <div className="avatar-container">
            <div className="avatar-img">{avatarImg}</div>
            <div className="avatar-title">
              <div className="avatar-name">{avatarName}</div>
              <div className="avatar-date">{avatarDate}</div>
            </div>
          </div>
        </div>
        {isHorizontalBannerStyle && <div className="arrow">{ArrowIcon}</div>}
      </div>
    </div>
  );
};
