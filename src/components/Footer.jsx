import logo from './../assets/logo.png';
import Forms from './Forms';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#189D90] to-[#23564E] text-white p-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between border-b-[1px] pb-4">
        <div className="mb-8 md:mb-0">
          <img src={logo} alt="Tridala Logo" className="w-32 mb-4 bg-white m-2 px-6 py-2 rounded-full" />
          <address className="not-italic mb-4">
            Tridala Pharmaceuticals Pvt. Ltd. <br />
            Sakura Complex, 3rd Floor No. 2M-317, NGEF Layout East <br />
            Kasturi Nagar Main Road, Bengaluru - 560 043, Karnataka.
          </address>
          <a href="mailto:info@tridalapharma.com" className="block mb-2">info@tridalapharma.com</a>
          <a href="tel:+91808813599">+91 80881 13599</a>
        </div>
        <div className="flex flex-col md:flex-row space-x-0 md:space-x-16">
          <div className="mb-8 md:mb-0">
            <h2 className="font-semibold mb-4">Company</h2>
            <ul>
              <li><a href="/about" className="hover:underline">About Us</a></li>
              <li><a href="/team" className="hover:underline">Team</a></li>
              <li><a href="/journey" className="hover:underline">Journey</a></li>
              <li><a href="/purpose" className="hover:underline">Purpose</a></li>
            </ul>
          </div>
          <div>
            <h2 className="font-semibold mb-4">Resources</h2>
            <ul>
              <li><a href="/products" className="hover:underline">Products</a></li>
              <li><a href="/newsletter" className="hover:underline">Newsletter</a></li>
              <li><a href="/health" className="hover:underline">Health</a></li>
              <li><a href="/tips" className="hover:underline">Tips</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:w-1/3 ">
          <h2 className="font-semibold mb-4">Contact Us</h2>
          <Forms />
        </div>
      </div>
      <div className="flex justify-center md:justify-end space-x-8 mt-5 md:mt-8 md:mx-28 xl:mx-40">
        <a href="https://twitter.com" className="text-white hover:text-gray-200"><i className="fab fa-x-twitter"></i></a>
        <a href="https://instagram.com" className="text-white hover:text-gray-200"><i className="fab fa-instagram"></i></a>
        <a href="https://facebook.com" className="text-white hover:text-gray-200"><i className="fab fa-facebook"></i></a>
        <a href="https://linkedin.com" className="text-white hover:text-gray-200"><i className="fab fa-linkedin"></i></a>
      </div>
    </footer>
  );
}

export default Footer;
