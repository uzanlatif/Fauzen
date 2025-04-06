'use client';
import TiltedCard from '../ui/tilt-card';

export function Hero() {
  return (
    <section className="bg-[url('https://as2.ftcdn.net/jpg/02/88/73/13/1000_F_288731353_jGzS7O6ftT5Wi33UcVMmn6B1AbSGs1OR.jpg')] bg-cover bg-center backdrop-blur-sm mt-16 pt-24 pb-56 px-0">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 relative">
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <div className="w-72 h-72 bg-primary rounded-full blur-3xl"></div>
          </div>
          <div className="justify-items-center">
            <TiltedCard
              imageSrc="https://cdn.pixabay.com/photo/2014/04/02/16/27/shield-307324_640.png"
              altText="LOGO"
              captionText="LOGO BCA"
              containerHeight="350px"
              containerWidth="350px"
              imageHeight="350px"
              imageWidth="350px"
              rotateAmplitude={12}
              scaleOnHover={1.2}
              showMobileWarning={false}
              showTooltip={true}
              displayOverlayContent={true}
            />
          </div>

          <p
           className='drop-shadow-md break-words mt-16'
            style={{
              fontWeight: 700,
              fontSize: '72px',
              WebkitTextFillColor: 'white',
            }}
          >
            {"Crafting Digital ".toUpperCase()}
          </p>
        </div>
      </div>
    </section>
  );
}
