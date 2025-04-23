export default function Map() {
  return (
    <div className="mt-[50px] mb-[50px]">
      <div className="w-full h-[500px] rounded-[10px]">
        <iframe
          className="w-full h-full border-0"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3650.798756052042!2d90.3909258149822!3d23.789913184570555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c7b27ff2f4f3%3A0xb5c96b9c3ff9d32e!2sAmerican%20International%20University-Bangladesh!5e0!3m2!1sen!2sbd!4v1713878671012!5m2!1sen!2sbd"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
