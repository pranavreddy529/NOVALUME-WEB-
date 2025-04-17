export default function Footer(){
    return (
        <footer className="bg-white py-12 border-t border-gray-300 relative z-10">
            <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
                <div>
                    <h3 className="text-lg font-semibold mb-3">Company</h3>
                    <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">About Us</a></li>
                    <li><a href="#" className="hover:underline">Careers</a></li>
                    <li><a href="#" className="hover:underline">Press</a></li>
                    <li><a href="#" className="hover:underline">Privacy</a></li>
                    <li><a href="#" className="hover:underline">Legal</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">Support</h3>
                    <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Mobile App</a></li>
                    <li><a href="#" className="hover:underline">Web App</a></li>
                    <li><a href="#" className="hover:underline">Contact Us</a></li>
                    <li><a href="#" className="hover:underline">Sense Pro</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-lg font-semibold mb-3">Resources</h3>
                    <ul className="space-y-2">
                    <li><a href="#" className="hover:underline">Blog</a></li>
                    <li><a href="#" className="hover:underline">Community</a></li>
                    <li><a href="#" className="hover:underline">Sense Saves</a></li>
                    </ul>
                </div>
            </div>
            <div className="border-t border-gray-300 mt-6 pt-6 text-center text-gray-600 text-sm">
            <p>© {new Date().getFullYear()} Novalume. All rights reserved.</p>
        </div>
      </footer>
    )
}