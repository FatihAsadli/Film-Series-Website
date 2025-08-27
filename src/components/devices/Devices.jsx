const Devices = ({ svg, title }) => {
  return (
    <div className="devices-card-card">
      <div className="devices-card-head">
        <div className="device-layer">{svg}</div>
        <h4>{title}</h4>
      </div>
      <p className="paragraph">
        StreamVibe is optimized for both Android and iOS smartphones. Download
        our app from the Google Play Store or the Apple App Store
      </p>
    </div>
  );
};

export default Devices;
